<template>
	<div class="border-2 border-dashed border-blue-200 dark:border-slate-600 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 text-center cursor-pointer transition-all duration-300 hover:border-blue-400 hover:bg-blue-50/50 dark:hover:border-slate-400 dark:hover:bg-slate-700/50 hover:shadow-lg group"
		@drop.prevent="handleDrop" @dragover.prevent @click="triggerUpload">
		<input type="file" ref="fileInput" class="hidden" @change="handleFile" accept=".csv,.xlsx,.xls" />

		<div class="flex flex-col items-center justify-center space-y-3">
			<div
				class="w-12 h-12 bg-linear-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
				<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
						d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12">
					</path>
				</svg>
			</div>

			<div class="space-y-1">
				<p
					class="text-lg font-medium text-slate-700 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
					Upload Spreadsheet
				</p>
				<p class="text-sm text-slate-500 dark:text-slate-400">
					Drag & drop or click to browse
				</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import * as XLSX from 'xlsx'

const fileInput = ref(null)
const emit = defineEmits(['file-loaded'])

function triggerUpload() {
	fileInput.value.click()
}

function handleFile(event) {
	const file = event.target.files[0]
	readFile(file)
}

function handleDrop(event) {
	const file = event.dataTransfer.files[0]
	readFile(file)
}

function readFile(file) {
	const reader = new FileReader()
	reader.onload = (e) => {
		const data = new Uint8Array(e.target.result)
		const workbook = XLSX.read(data, { type: 'array' })
		const sheetName = workbook.SheetNames[0]
		const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { defval: '' })
		emit('file-loaded', sheetData)
	}
	reader.readAsArrayBuffer(file)
}
</script>
