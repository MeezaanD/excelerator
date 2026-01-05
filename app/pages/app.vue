<template>
	<div class="min-h-screen bg-gray-950 overflow-hidden">
		<div class="container mx-auto px-4 py-8 max-w-7xl">
			<HeaderBar @new-sheet="newSheet" @download="downloadSheet" />
			<UploadArea @file-loaded="loadSheet" class="mb-8" />

			<div class="min-h-[500px]">
				<TableEditor v-if="sheetData.length" :sheet-data="sheetData" @update="updateData" class="h-full" />
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'

import HeaderBar from '~/components/Header.vue'
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
			XLSX.writeFile(wb, 'Excelerator.xlsx')
		} else {
			XLSX.writeFile(wb, 'Excelerator.csv', { bookType: 'csv' })
		}
	})
}
</script>