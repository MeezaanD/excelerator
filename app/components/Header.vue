<template>
	<header
		class="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-xl shadow-sm border border-white/20 p-4 mb-4">
		<div class="flex flex-col sm:flex-row justify-between items-center gap-3">
			<div class="flex items-center space-x-2">
				<h1 class="text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
					Excelerator
				</h1>
			</div>

			<div class="flex flex-wrap gap-2 justify-center">
				<button @click="$emit('new-sheet')"
					class="px-4 py-2 bg-linear-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow hover:shadow-md transform hover:scale-105 flex items-center space-x-1 text-sm font-medium">
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
					</svg>
					<span>New</span>
				</button>

				<div class="flex gap-1">
					<button @click="$emit('download', 'csv')"
						class="px-3 py-2 bg-linear-to-r from-emerald-500 to-green-600 text-white rounded-lg hover:from-emerald-600 hover:to-green-700 transition-all duration-200 shadow hover:shadow-md transform hover:scale-105 flex items-center space-x-1 text-sm font-medium">
						<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
							</path>
						</svg>
						<span>CSV</span>
					</button>
					<button @click="$emit('download', 'xlsx')"
						class="px-3 py-2 bg-linear-to-r from-purple-500 to-indigo-600 text-white rounded-lg hover:from-purple-600 hover:to-indigo-700 transition-all duration-200 shadow hover:shadow-md transform hover:scale-105 flex items-center space-x-1 text-sm font-medium">
						<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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