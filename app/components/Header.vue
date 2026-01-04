<template>
	<header
		class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
		<div class="flex flex-col sm:flex-row justify-center items-center gap-3">

			<div class="flex flex-wrap gap-2 justify-center">
				<button @click="$emit('new-sheet')"
					class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-all duration-200 shadow-sm hover:shadow flex items-center space-x-1 text-sm font-medium">
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
					</svg>
					<span>New</span>
				</button>

				<div class="flex gap-1">
					<button @click="$emit('download', 'csv')"
						class="px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-all duration-200 shadow-sm hover:shadow flex items-center space-x-1 text-sm font-medium">
						<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
							</path>
						</svg>
						<span>CSV</span>
					</button>
					<button @click="$emit('download', 'xlsx')"
						class="px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-all duration-200 shadow-sm hover:shadow flex items-center space-x-1 text-sm font-medium">
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

<script lang="ts">
</script>