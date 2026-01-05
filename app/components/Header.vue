<template>
	<header
		class="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 mb-6">
		<div class="flex flex-col sm:flex-row justify-between items-center gap-4">
			<!-- Logo/Title -->
			<div class="flex items-center space-x-3">
				<div class="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
					<svg class="w-7 h-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
						</path>
					</svg>
				</div>
				<div>
					<h1 class="text-xl font-bold text-white">Excelerator</h1>
					<p class="text-xs text-gray-400">Spreadsheet Editor</p>
				</div>
			</div>

			<!-- Action Buttons -->
			<div class="flex flex-wrap gap-3 justify-center">
				<button @click="$emit('new-sheet')"
					class="group px-5 py-2.5 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all duration-300 hover:shadow-lg flex items-center space-x-2 text-sm font-semibold hover:-translate-y-0.5 border border-green-500/30">
					<svg class="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
					</svg>
					<span>New Sheet</span>
				</button>

				<div class="flex gap-2">
					<button @click="$emit('download', 'csv')"
						class="group px-4 py-2.5 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-xl hover:border-green-500 hover:text-green-400 hover:bg-gray-800 transition-all duration-300 flex items-center space-x-2 text-sm font-semibold hover:-translate-y-0.5">
						<svg class="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
							</path>
						</svg>
						<span>CSV</span>
					</button>
					<button @click="$emit('download', 'xlsx')"
						class="group px-4 py-2.5 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all duration-300 hover:shadow-lg flex items-center space-x-2 text-sm font-semibold hover:-translate-y-0.5 border border-green-500/30">
						<svg class="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
							</path>
						</svg>
						<span>Excel</span>
					</button>
				</div>
			</div>
		</div>
	</header>
</template>

<script lang="ts">
</script>