<template>
  <div
    class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 overflow-hidden">
    <div class="container mx-auto px-4 py-6 max-w-7xl">
      <HeaderBar @new-sheet="newSheet" @download="downloadSheet" />
      <UploadArea @file-loaded="loadSheet" class="mb-6" />

      <!-- Table container with proper height management -->
      <div class="h-[calc(100vh-200px)] min-h-[400px]">
        <TableEditor v-if="sheetData.length" :sheet-data="sheetData" @update="updateData" class="h-full" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import HeaderBar from '~/components/HeaderBar.vue'
import UploadArea from '~/components/UploadArea.vue'
import TableEditor from '~/components/TableEditor.vue'

const sheetData = ref([])

function loadSheet(data) {
  sheetData.value = data
}

function updateData(data) {
  sheetData.value = data
}

function newSheet() {
  sheetData.value = []
}

function downloadSheet(format) {
  if (!sheetData.value || !Array.isArray(sheetData.value) || !sheetData.value.length) {
    alert("No data to download!")
    return
  }

  const dataArray = sheetData.value.map(row => ({ ...row }))

  import('xlsx').then(XLSX => {
    const ws = XLSX.utils.json_to_sheet(dataArray)
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1')

    if (format === 'xlsx') {
      XLSX.writeFile(wb, 'SheetEase.xlsx')
    } else {
      XLSX.writeFile(wb, 'SheetEase.csv', { bookType: 'csv' })
    }
  })
}
</script>