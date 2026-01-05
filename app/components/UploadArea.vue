<template>
	<div class="relative group">
		<div class="border-2 border-dashed border-gray-700 bg-gray-900/30 rounded-2xl p-12 text-center cursor-pointer transition-all duration-500 hover:border-green-500 hover:bg-gray-900/50 hover:shadow-2xl group-hover:scale-[1.02] backdrop-blur-xl"
			@drop.prevent="handleDrop" @dragover.prevent @click="triggerUpload">
			<input type="file" ref="fileInput" class="hidden" @change="handleFile" accept=".csv,.xlsx,.xls" />

			<div class="flex flex-col items-center justify-center space-y-4">
				<div
					class="w-20 h-20 bg-linear-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:rotate-3">
					<svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12">
						</path>
					</svg>
				</div>

				<div class="space-y-2">
					<p class="text-2xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
						Upload Your Spreadsheet
					</p>
					<p class="text-base text-gray-400">
						Drag & drop your file here or click to browse
					</p>
					<p class="text-sm text-gray-500">
						Supports Excel (.xlsx, .xls) and CSV files
					</p>
				</div>

				<div class="flex gap-2 mt-4">
					<span class="px-3 py-1 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-xs font-semibold">
						.xlsx
					</span>
					<span class="px-3 py-1 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-xs font-semibold">
						.xls
					</span>
					<span class="px-3 py-1 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-xs font-semibold">
						.csv
					</span>
				</div>
			</div>
		</div>

		<!-- Decorative corner accents -->
		<div class="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-green-500/50 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
		<div class="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-green-500/50 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
		<div class="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-green-500/50 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
		<div class="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-green-500/50 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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