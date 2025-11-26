<template>
  <div
    class="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-xl shadow-lg border border-white/20 overflow-hidden">
    <div class="p-4">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-semibold text-slate-800 dark:text-slate-200 flex items-center space-x-2">
          <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2">
            </path>
          </svg>
          <span>Data Table</span>
        </h2>
        <div class="text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-md">
          {{ sheetData.length }} rows
        </div>
      </div>

      <!-- Scrollable table container -->
      <div class="border border-slate-200 dark:border-slate-600 rounded-lg overflow-hidden">
        <div class="overflow-auto max-h-96"> <!-- Fixed height with vertical scroll -->
          <table class="min-w-full bg-white dark:bg-slate-800">
            <thead class="bg-slate-50 dark:bg-slate-700 sticky top-0 z-10">
              <tr>
                <th v-for="(value, key, index) in sheetData[0]" :key="key"
                  class="px-3 py-3 text-left text-xs font-medium text-slate-600 dark:text-slate-300 uppercase tracking-wider border-b border-slate-200 dark:border-slate-500 bg-slate-50 dark:bg-slate-700"
                  :style="getColumnWidth(index)">
                  <div class="flex items-center justify-between">
                    <span class="truncate" :title="key">{{ formatHeader(key) }}</span>
                    <button class="text-slate-400 hover:text-slate-600 transition-colors ml-1 flex-shrink-0">
                      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path>
                      </svg>
                    </button>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-600">
              <tr v-for="(row, rowIndex) in visibleData" :key="rowIndex"
                class="hover:bg-blue-50/30 dark:hover:bg-slate-700/50 transition-colors duration-150">
                <td v-for="(value, key, colIndex) in row" :key="key"
                  class="px-3 py-2 text-sm text-slate-700 dark:text-slate-300 border-r border-slate-100 dark:border-slate-600 last:border-r-0"
                  :style="getColumnWidth(colIndex)">
                  <input :value="value" @input="updateCell(rowIndex, key, $event.target.value)"
                    class="w-full bg-transparent border-none focus:ring-1 focus:ring-blue-500 focus:outline-none px-1 py-0.5 rounded text-sm truncate"
                    :title="value" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Pagination Controls -->
      <div v-if="sheetData.length > pageSize" class="flex items-center justify-between mt-4 px-2">
        <div class="text-sm text-slate-500 dark:text-slate-400">
          Showing {{ Math.min(currentPage * pageSize, sheetData.length) }} of {{ sheetData.length }} rows
        </div>
        <div class="flex items-center space-x-2">
          <button @click="previousPage" :disabled="currentPage === 1"
            class="px-3 py-1 text-sm bg-slate-100 dark:bg-slate-700 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
            Previous
          </button>
          <span class="text-sm text-slate-600 dark:text-slate-300 px-2">
            Page {{ currentPage }} of {{ totalPages }}
          </span>
          <button @click="nextPage" :disabled="currentPage === totalPages"
            class="px-3 py-1 text-sm bg-slate-100 dark:bg-slate-700 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
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
const pageSize = ref(50) // Increased since we have scroll now

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