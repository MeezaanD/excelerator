<template>
	<div class="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl overflow-hidden">
		<div class="p-6">
			<!-- Header -->
			<div class="flex justify-between items-center mb-6">
				<div class="flex items-center space-x-3">
					<div class="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center">
						<svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z">
							</path>
						</svg>
					</div>
					<div>
						<h2 class="text-xl font-bold text-white">Data Table</h2>
						<p class="text-sm text-gray-400">Double-click any cell to copy</p>
					</div>
				</div>
				<div class="flex items-center space-x-2">
					<span class="px-4 py-2 bg-green-500/10 text-green-400 border border-green-500/20 rounded-xl text-sm font-semibold">
						{{ sheetData.length }} rows
					</span>
				</div>
			</div>

			<!-- Copy notification -->
			<transition name="fade">
				<div v-if="showCopyNotification"
					class="mb-4 px-5 py-3 bg-green-500/10 border-2 border-green-500/30 text-green-400 rounded-xl text-sm flex items-center space-x-3">
					<div class="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center shrink-0">
						<svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
						</svg>
					</div>
					<span class="font-medium">Cell content copied to clipboard!</span>
				</div>
			</transition>

			<!-- Scrollable table container -->
			<div class="border-2 border-gray-700 rounded-xl overflow-hidden">
				<div class="overflow-auto max-h-96 dark-scrollbar">
					<table class="min-w-full">
						<thead class="bg-linear-to-r from-green-600 to-green-500 sticky top-0 z-10">
							<tr>
								<th v-for="(value, key, index) in sheetData[0]" :key="key"
									class="px-4 py-4 text-left text-xs font-bold text-white uppercase tracking-wider border-r border-green-400/50 last:border-r-0"
									:style="getColumnWidth(index)">
									<div class="flex items-center justify-between">
										<span class="truncate" :title="key">{{ formatHeader(key) }}</span>
										<button class="text-green-300 hover:text-white ml-2 shrink-0 hover:scale-110 duration-200">
											<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
													d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path>
											</svg>
										</button>
									</div>
								</th>
							</tr>
						</thead>
						<tbody class="divide-y divide-gray-800">
							<tr v-for="(row, rowIndex) in visibleData" :key="rowIndex"
								class="hover:bg-gray-800/50 transition-all duration-200 group">
								<td v-for="(value, key, colIndex) in row" :key="key"
									class="px-4 py-3 text-sm text-gray-300 border-r border-gray-800 last:border-r-0 cursor-text"
									:style="getColumnWidth(colIndex)" @dblclick="copyToClipboard(value)">
									<input :value="value" @input="updateCell(rowIndex, key, $event.target.value)"
										class="w-full bg-gray-900/30 border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-500/30 focus:outline-none px-3 py-2 rounded-lg text-sm text-white transition-all duration-200 hover:border-gray-600"
										:title="value" />
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<!-- Pagination Controls -->
			<div v-if="sheetData.length > pageSize" class="flex items-center justify-between mt-6 px-2">
				<div class="text-sm text-gray-400 font-medium">
					Showing <span class="text-green-400 font-bold">{{ Math.min(currentPage * pageSize, sheetData.length) }}</span> of <span class="text-green-400 font-bold">{{ sheetData.length }}</span> rows
				</div>
				<div class="flex items-center space-x-3">
					<button @click="previousPage" :disabled="currentPage === 1"
						class="px-4 py-2 text-sm bg-gray-800/50 border border-gray-700 text-gray-300 rounded-xl disabled:opacity-40 disabled:cursor-not-allowed hover:border-green-500 hover:text-green-400 hover:bg-gray-800 transition-all duration-300 font-semibold hover:-translate-y-0.5 disabled:hover:translate-y-0">
						Previous
					</button>
					<span class="text-sm text-gray-300 px-3 py-2 bg-gray-800/50 rounded-xl font-semibold border border-gray-700">
						Page {{ currentPage }} of {{ totalPages }}
					</span>
					<button @click="nextPage" :disabled="currentPage === totalPages"
						class="px-4 py-2 text-sm bg-gray-800/50 border border-gray-700 text-gray-300 rounded-xl disabled:opacity-40 disabled:cursor-not-allowed hover:border-green-500 hover:text-green-400 hover:bg-gray-800 transition-all duration-300 font-semibold hover:-translate-y-0.5 disabled:hover:translate-y-0">
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

const currentPage = ref(1)
const pageSize = ref(50)
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

watch(() => props.sheetData, () => {
	currentPage.value = 1
})

async function copyToClipboard(value) {
	try {
		await navigator.clipboard.writeText(value)
		showCopyNotification.value = true
		setTimeout(() => {
			showCopyNotification.value = false
		}, 2000)
	} catch (err) {
		console.error('Failed to copy:', err)
	}
}

function getColumnWidth(index) {
	const totalColumns = props.sheetData[0] ? Object.keys(props.sheetData[0]).length : 0
	if (totalColumns === 0) return ''

	if (totalColumns > 8) {
		return `width: ${Math.max(120, 600 / totalColumns)}px; min-width: 120px;`
	}

	return `min-width: 150px;`
}

function formatHeader(key) {
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

.dark-scrollbar {
	scrollbar-width: thin;
	scrollbar-color: #10b981 #1f2937;
}

.dark-scrollbar::-webkit-scrollbar {
	width: 12px;
	height: 12px;
}

.dark-scrollbar::-webkit-scrollbar-track {
	background: #1f2937;
	border-radius: 6px;
	border: 1px solid #374151;
}

.dark-scrollbar::-webkit-scrollbar-thumb {
	background: linear-gradient(to bottom, #10b981, #059669);
	border-radius: 6px;
	border: 2px solid #1f2937;
	transition: background 0.2s ease;
}

.dark-scrollbar::-webkit-scrollbar-thumb:hover {
	background: linear-gradient(to bottom, #059669, #047857);
}

.dark-scrollbar::-webkit-scrollbar-corner {
	background: #1f2937;
}
</style>