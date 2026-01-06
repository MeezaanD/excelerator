<template>
	<div class="min-h-screen bg-gray-950">
		<!-- Navbar -->
		<nav :class="[
			'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
			scrolled ? 'py-4' : 'py-6',
		]">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div
					class="relative backdrop-blur-xl bg-gray-900/80 border border-gray-800 rounded-2xl transition-all duration-500">
					<div class="px-6 lg:px-8">
						<div class="flex items-center justify-between h-16">
							<!-- Logo -->
							<div class="shrink-0">
								<a href="/" class="flex items-center space-x-2">
									<div class="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center">
										<svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor"
											viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
												d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
										</svg>
									</div>
									<span class="text-xl font-bold text-white">Excelerator</span>
								</a>
							</div>

							<!-- Desktop Navigation -->
							<div class="hidden md:flex items-center space-x-1">
								<a href="#features"
									class="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 rounded-xl hover:bg-gray-800/50">
									Features
								</a>
								<a href="#tech"
									class="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 rounded-xl hover:bg-gray-800/50">
									Tech Stack
								</a>
								<a href="#demo"
									class="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 rounded-xl hover:bg-gray-800/50">
									Demo
								</a>
							</div>

							<!-- Desktop CTA -->
							<a href="/app"
								class="hidden md:inline-block px-5 py-2.5 text-sm font-medium bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all duration-300">
								Try Now
							</a>

							<!-- Mobile Menu Button -->
							<button class="md:hidden p-2.5 rounded-xl hover:bg-gray-800/50 transition-all duration-200"
								@click="mobileMenuOpen = !mobileMenuOpen">
								<svg v-if="!mobileMenuOpen" class="h-5 w-5 text-gray-300" fill="none"
									stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
										d="M4 6h16M4 12h16M4 18h16" />
								</svg>
								<svg v-else class="h-5 w-5 text-gray-300" fill="none" stroke="currentColor"
									viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
										d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
						</div>
					</div>

					<!-- Mobile Menu -->
					<div v-if="mobileMenuOpen" class="md:hidden border-t border-gray-800">
						<div class="px-6 py-4 space-y-2">
							<a href="#features"
								class="block px-4 py-3 text-sm font-medium text-gray-300 rounded-xl hover:bg-gray-800/50 transition-all duration-200"
								@click="mobileMenuOpen = false">
								Features
							</a>
							<a href="#tech"
								class="block px-4 py-3 text-sm font-medium text-gray-300 rounded-xl hover:bg-gray-800/50 transition-all duration-200"
								@click="mobileMenuOpen = false">
								Tech Stack
							</a>
							<a href="#demo"
								class="block px-4 py-3 text-sm font-medium text-gray-300 rounded-xl hover:bg-gray-800/50 transition-all duration-200"
								@click="mobileMenuOpen = false">
								Demo
							</a>
							<a href="/app"
								class="block mt-2 px-4 py-3 text-sm font-medium bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all duration-300 text-center"
								@click="mobileMenuOpen = false">
								Try Now
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>

		<!-- Hero Section -->
		<section
			class="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 lg:pt-32 pb-12 lg:pb-20 px-4 sm:px-6 lg:px-8">
			<!-- Animated gradient background -->
			<div class="absolute inset-0 bg-gray-950">
				<div class="absolute inset-0 opacity-20">
					<div
						class="absolute top-1/4 left-1/4 w-96 h-96 bg-green-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob">
					</div>
					<div
						class="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000">
					</div>
					<div
						class="absolute bottom-1/4 left-1/3 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000">
					</div>
				</div>
			</div>

			<div class="relative max-w-7xl mx-auto w-full">
				<!-- Badge -->
				<div class="text-center mb-8">
					<span
						class="inline-flex items-center gap-2 px-4 py-2 bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:scale-105">
						<span class="relative flex h-2 w-2">
							<span
								class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
							<span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
						</span>
						No Excel? No Problem.
					</span>
				</div>

				<div class="flex justify-center items-center mb-8 lg:mb-12">
					<div class="space-y-4 lg:space-y-6 text-center mx-auto">
						<div class="space-y-3 lg:space-y-4">
							<h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
								<span class="block text-white">Edit Spreadsheets</span>
								<span class="block text-green-500">In Your Browser</span>
							</h1>

							<p class="text-base lg:text-lg xl:text-xl text-gray-400 leading-relaxed max-w-xl mx-auto">
								Fast, lightweight spreadsheet editor for Excel and CSV files. No
								desktop software required.
							</p>
						</div>

						<div class="flex flex-wrap gap-3 lg:gap-4 justify-center">
							<a href="/app"
								class="group px-6 py-3 lg:px-8 lg:py-4 text-sm lg:text-base font-semibold bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all duration-300">
								Learn More
							</a>
						</div>
					</div>
				</div>


				<!-- Steps -->
				<div class="relative">
					<div class="grid md:grid-cols-3 gap-4 lg:gap-6 xl:gap-8">
						<div v-for="step in steps" :key="step.step" class="group relative">
							<div
								class="relative bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-xl lg:rounded-2xl xl:rounded-3xl p-4 lg:p-6 xl:p-8 hover:bg-gray-900/70 transition-all duration-500 hover:scale-105">
								<div class="flex flex-col items-center text-center space-y-2 lg:space-y-3">
									<div :class="[
										'inline-flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded-xl lg:rounded-2xl group-hover:scale-110 transition-transform duration-300',
										step.color,
									]">
										<!-- Inline SVG icons -->
										<svg v-if="step.icon === 'UploadIcon'" :class="step.iconColor" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
										</svg>
										<svg v-else-if="step.icon === 'EditIcon'" :class="step.iconColor" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
										</svg>
										<svg v-else-if="step.icon === 'DownloadIcon'" :class="step.iconColor" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
										</svg>
									</div>
									<div>
										<h3 class="text-base lg:text-lg xl:text-xl font-bold text-white mb-1 lg:mb-2">
											{{ step.title }}
										</h3>
										<p class="text-xs lg:text-sm xl:text-base text-gray-400">
											{{ step.description }}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Scroll indicator -->
				<div class="text-center mt-8 lg:mt-12 xl:mt-16">
					<div class="inline-flex flex-col items-center text-gray-500 animate-bounce">
						<span class="text-xs lg:text-sm mb-2">Scroll to explore</span>
						<svg class="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M19 14l-7 7m0 0l-7-7m7 7V3" />
						</svg>
					</div>
				</div>
			</div>
		</section>

		<!-- Features Section -->
		<section id="features" class="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-950">
			<div class="relative max-w-7xl mx-auto">
				<div class="text-center mb-20">
					<span
						class="inline-block px-4 py-2 bg-green-500/10 text-green-400 border border-green-500/20 rounded-full text-sm font-medium mb-4">
						Features
					</span>
					<h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
						Everything You Need
					</h2>
					<p class="text-xl text-gray-400 max-w-2xl mx-auto">
						Powerful spreadsheet editing without the overhead of desktop software
					</p>
				</div>

				<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					<div v-for="(feature, i) in features" :key="i"
						class="group relative bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 hover:bg-gray-900/70 transition-all duration-500 hover:-translate-y-2">
						<div class="flex flex-col items-center text-center space-y-4">
							<div
								class="inline-flex p-4 rounded-2xl bg-green-500/10 text-green-400 group-hover:scale-110 transition-transform duration-300">
								<!-- Feature icons -->
								<svg v-if="feature.icon === 'FileIcon'" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
								</svg>
								<svg v-else-if="feature.icon === 'EditIcon'" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
								</svg>
								<svg v-else-if="feature.icon === 'LayersIcon'" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
								</svg>
								<svg v-else-if="feature.icon === 'CopyIcon'" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
								</svg>
								<svg v-else-if="feature.icon === 'DownloadIcon'" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
								</svg>
								<svg v-else-if="feature.icon === 'ZapIcon'" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
								</svg>
							</div>
							<div>
								<h3 class="text-xl font-bold text-white mb-3">
									{{ feature.title }}
								</h3>
								<p class="text-gray-400 leading-relaxed">
									{{ feature.desc }}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Demo Section -->
		<section id="demo" class="relative py-32 px-4 sm:px-6 lg:px-8 bg-gray-950">
			<div class="max-w-7xl mx-auto">
				<div class="text-center mb-24">
					<span
						class="inline-block px-4 py-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-sm font-medium mb-4">
						See It in Action
					</span>
					<h2 class="text-4xl md:text-6xl font-bold text-white">
						Simple & Powerful
					</h2>
				</div>

				<div class="space-y-32">
					<div v-for="(item, i) in demoSections" :key="i" :class="[
						'grid lg:grid-cols-2 gap-16 items-center',
						i % 2 === 1 ? 'lg:flex-row-reverse' : '',
					]">
						<div :class="i % 2 === 1 ? 'lg:order-2' : ''">
							<h3 class="text-3xl md:text-4xl font-bold text-white mb-4">
								{{ item.title }}
							</h3>
							<p class="text-xl text-gray-400">{{ item.desc }}</p>
						</div>
						<div :class="i % 2 === 1 ? 'lg:order-1' : ''">
							<div
								class="w-full bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-4 lg:p-6 xl:p-8 shadow-lg hover:shadow-xl transition-all duration-500">
								<img :src="item.image" alt="Demo Image"
									class="w-full h-auto" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Tech Stack Section -->
		<section id="tech" class="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-950">
			<div class="relative max-w-5xl mx-auto">
				<div class="text-center mb-20">
					<h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
						Built With Modern Tech
					</h2>
				</div>

				<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
					<div v-for="(tech, i) in techStack" :key="i"
						class="group relative bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 hover:bg-gray-900/70 transition-all duration-500 hover:-translate-y-2">
						<div class="flex flex-col items-center text-center space-y-4">
							<div class="text-green-400 group-hover:scale-110 transition-transform duration-300">
								<!-- Tech icons -->
								<svg v-if="tech.icon === 'NuxtIcon'" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
								</svg>
								<svg v-else-if="tech.icon === 'PaletteIcon'" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
								</svg>
								<svg v-else-if="tech.icon === 'FileSpreadsheetIcon'" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
								</svg>
								<svg v-else-if="tech.icon === 'ComponentIcon'" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
								</svg>
							</div>
							<div>
								<h3 class="text-xl font-bold text-white mb-2">
									{{ tech.name }}
								</h3>
								<p class="text-gray-400">{{ tech.desc }}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Footer -->
		<footer class="relative py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800 bg-gray-950">
			<div class="max-w-7xl mx-auto text-center space-y-4">
				<p class="text-gray-400">© 2025 Excelerator by Meezaan Davids</p>
				<p class="text-sm text-gray-500">
					Built with Nuxt 4, Vue 3 & Tailwind CSS
				</p>
			</div>
		</footer>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import app from '@/assets/images/app.png'
import clipboard from '@/assets/images/clipboard.png'

// Remove the icon component definitions from here
const mobileMenuOpen = ref(false);
const scrolled = ref(false);

const steps = [
	{
		step: 1,
		title: 'Upload',
		description: 'Drop your Excel or CSV file',
		icon: 'UploadIcon',
		color: 'bg-green-500/10 text-green-400',
		iconColor: 'text-green-400',
	},
	{
		step: 2,
		title: 'Edit',
		description: 'Make changes in real-time',
		icon: 'EditIcon',
		color: 'bg-emerald-500/10 text-emerald-400',
		iconColor: 'text-emerald-400',
	},
	{
		step: 3,
		title: 'Export',
		description: 'Download as CSV or Excel',
		icon: 'DownloadIcon',
		color: 'bg-teal-500/10 text-teal-400',
		iconColor: 'text-teal-400',
	},
];

const features = [
	{
		icon: 'FileIcon',
		title: 'File Support',
		desc: 'Upload and edit Excel (.xlsx, .xls) and CSV files with ease',
	},
	{
		icon: 'EditIcon',
		title: 'Inline Editing',
		desc: 'Click any cell to edit with real-time validation and updates',
	},
	{
		icon: 'LayersIcon',
		title: 'Smart Pagination',
		desc: 'Handle large datasets with up to 50 rows per page',
	},
	{
		icon: 'CopyIcon',
		title: 'Quick Copy',
		desc: 'Copy cell values to clipboard with visual feedback',
	},
	{
		icon: 'DownloadIcon',
		title: 'Export Options',
		desc: 'Download edited data as CSV or Excel with all changes preserved',
	},
	{
		icon: 'ZapIcon',
		title: 'Lightning Fast',
		desc: 'No installation needed - edit spreadsheets instantly in your browser',
	},
];

const demoSections = [
	{
		title: 'Drag & Drop Upload',
		desc: 'Simply drag your spreadsheet files or click to browse and upload',
		image: app,
	},
	{
		title: 'Real-Time Editing',
		desc: 'Edit cells inline with instant validation and automatic formatting',
		image: clipboard,
	}
];

const techStack = [
	{
		name: 'Nuxt 4',
		desc: 'Vue 3 framework',
		icon: 'NuxtIcon',
	},
	{
		name: 'Tailwind CSS',
		desc: 'Modern styling',
		icon: 'PaletteIcon',
	},
	{
		name: 'XLSX',
		desc: 'Spreadsheet parsing',
		icon: 'FileSpreadsheetIcon',
	},
	{
		name: 'Nuxt UI',
		desc: 'UI components',
		icon: 'ComponentIcon',
	},
];

const handleScroll = () => {
	scrolled.value = window.scrollY > 20;
};

onMounted(() => {
	window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll);
});
</script>