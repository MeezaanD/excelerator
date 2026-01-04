<template>
	<div class="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
		<div class="p-4">
			<div class="flex justify-between items-center mb-4">
				<h2 class="text-lg font-semibold text-gray-800 flex items-center space-x-2">
					<span>Data Table</span>
				</h2>
				<div class="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
					{{ sheetData.length }} rows
				</div>
			</div>

			<!-- Copy notification -->
			<transition name="fade">
				<div v-if="showCopyNotification"
					class="mb-3 px-4 py-2 bg-green-100 border border-green-300 text-green-800 rounded-lg text-sm flex items-center space-x-2">
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
					</svg>
					<span>Cell content copied to clipboard!</span>
				</div>
			</transition>

			<!-- Scrollable table container -->
			<div class="border border-gray-300 rounded overflow-hidden">
				<div class="overflow-auto max-h-96 light-scrollbar"> <!-- Fixed height with vertical scroll -->
					<table class="min-w-full bg-white">
						<thead class="bg-green-600 sticky top-0 z-10">
							<tr>
								<th v-for="(value, key, index) in sheetData[0]" :key="key"
									class="px-3 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider border-r border-green-500 last:border-r-0 bg-green-600"
									:style="getColumnWidth(index)">
									<div class="flex items-center justify-between">
										<span class="truncate" :title="key">{{ formatHeader(key) }}</span>
										<button class="text-green-100 hover:text-white transition-colors ml-1 shrink-0">
											<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
													d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path>
											</svg>
										</button>
									</div>
								</th>
							</tr>
						</thead>
						<tbody class="divide-y divide-gray-200">
							<tr v-for="(row, rowIndex) in visibleData" :key="rowIndex"
								class="hover:bg-green-50 transition-colors duration-150">
								<td v-for="(value, key, colIndex) in row" :key="key"
									class="px-3 py-2 text-sm text-gray-700 border-r border-gray-200 last:border-r-0 cursor-text"
									:style="getColumnWidth(colIndex)" @dblclick="copyToClipboard(value)">
									<input :value="value" @input="updateCell(rowIndex, key, $event.target.value)"
										class="w-full bg-transparent border-none focus:ring-1 focus:ring-green-500 focus:outline-none px-1 py-0.5 rounded text-sm truncate"
										:title="value" />
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<!-- Pagination Controls -->
			<div v-if="sheetData.length > pageSize" class="flex items-center justify-between mt-4 px-2">
				<div class="text-sm text-gray-600">
					Showing {{ Math.min(currentPage * pageSize, sheetData.length) }} of {{ sheetData.length }} rows
				</div>
				<div class="flex items-center space-x-2">
					<button @click="previousPage" :disabled="currentPage === 1"
						class="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors">
						Previous
					</button>
					<span class="text-sm text-gray-700 px-2">
						Page {{ currentPage }} of {{ totalPages }}
					</span>
					<button @click="nextPage" :disabled="currentPage === totalPages"
						class="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors">
						Next
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
	sheetData: {
		type: Array,
		required: true
	}
})

const emit = defineEmits(['update'])

// Pagination
const currentPage = ref(1)
const pageSize = ref(50)

// Copy notification
const showCopyNotification = ref(false)

const totalPages = computed(() => Math.ceil(props.sheetData.length / pageSize.value))

const visibleData = computed(() => {
	const start = (currentPage.value - 1) * pageSize.value
	const end = start + pageSize.value
	return props.sheetData.slice(start, end)
})

function nextPage() {
	if (currentPage.value < totalPages.value) {
		currentPage.value++
	}
}

function previousPage() {
	if (currentPage.value > 1) {
		currentPage.value--
	}
}

// Reset to first page when data changes
watch(() => props.sheetData, () => {
	currentPage.value = 1
})

// Copy to clipboard function
async function copyToClipboard(value) {
	try {
		await navigator.clipboard.writeText(value)
		showCopyNotification.value = true

		// Hide notification after 2 seconds
		setTimeout(() => {
			showCopyNotification.value = false
		}, 2000)
	} catch (err) {
		console.error('Failed to copy:', err)
	}
}

// Column width management
function getColumnWidth(index) {
	const totalColumns = props.sheetData[0] ? Object.keys(props.sheetData[0]).length : 0
	if (totalColumns === 0) return ''

	// For tables with many columns, make them narrower
	if (totalColumns > 8) {
		return `width: ${Math.max(120, 600 / totalColumns)}px; min-width: 120px;`
	}

	// For normal number of columns, use flexible widths
	return `min-width: 150px;`
}

function formatHeader(key) {
	// Convert camelCase or snake_case to readable format
	return key
		.replace(/([A-Z])/g, ' $1')
		.replace(/_/g, ' ')
		.replace(/^./, str => str.toUpperCase())
		.trim()
}

function updateCell(rowIndex, key, value) {
	const actualIndex = (currentPage.value - 1) * pageSize.value + rowIndex
	const updatedData = [...props.sheetData]
	updatedData[actualIndex][key] = value
	emit('update', updatedData)
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

/* Light scrollbar for table area */
.light-scrollbar {
	scrollbar-width: thin;
	scrollbar-color: #cbd5e1 transparent;
	/* gray-300 */
}

/* WebKit browsers */
.light-scrollbar::-webkit-scrollbar {
	width: 8px;
	height: 8px;
}

.light-scrollbar::-webkit-scrollbar-track {
	background: transparent;
}

.light-scrollbar::-webkit-scrollbar-thumb {
	background-color: #cbd5e1;
	/* gray-300 */
	border-radius: 999px;
	transition: background-color 0.2s ease;
}

.light-scrollbar::-webkit-scrollbar-thumb:hover {
	background-color: #94a3b8;
	/* gray-400 */
}
</style>