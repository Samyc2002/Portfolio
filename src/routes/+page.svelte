<script>
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { derived } from 'svelte/store';
	import { elasticInOut } from 'svelte/easing';
	import { interpolateRgb } from 'd3-interpolate';
	import Color from '$lib/colors';
	import Sidebar from '$lib/components/+sidebar.svelte';
	import Details from '$lib/components/+details.svelte';
	import Button from '$lib/components/+button.svelte';

	const hideScroll = true;

	// Starting and ending colors
	const startColor = Color.Cyan;
	const endColor = Color.Purple;

	const colorInterpolator = interpolateRgb(startColor, endColor);

	/**
	 * @type {HTMLElement | null}
	 */
	let background = null;
	let scrollY = tweened(0, { duration: 200, easing: elasticInOut });
	let scrollTop = 0;
	let pageHeight = 0;
	let pageWidth = 0;
	let scale = 1;
	if (typeof window !== 'undefined') {
		pageHeight = window.innerHeight;
		pageWidth = window.innerWidth;
		scrollY.set(window.scrollY || 0);
		scrollTop = window.scrollY || 0;
	}

	let isPC = false,
		isTablet = false,
		isMobile = false;

	if (pageWidth >= 1024) {
		isPC = true;
	} else if (pageWidth >= 700) {
		isTablet = true;
	} else {
		isMobile = true;
	}

	if (isMobile) {
		scale = pageWidth / pageHeight;
		scrollTop = scale * scrollTop;
	}

	let currentElement = 'Home';
	const updateeCurrentElement = () => {
		if (typeof window !== 'undefined') {
			let section = window.scrollY / (pageHeight * 0.9);
			if (section >= 0 && section < 1) currentElement = 'Home';
			if (section >= 1 && section < 2) currentElement = 'Journey';
			if (section >= 2 && section < 3) currentElement = 'Profile';
			if (section >= 3 && section < 4) currentElement = 'Blogs';
			if (section >= 4 && section < 5) currentElement = 'Projects';
		}
	};

	updateeCurrentElement();

	const bgColor = derived(scrollY, ($scrollY) => {
		if (typeof window !== 'undefined') {
			let maxScroll = 4 * pageHeight;

			let scrollRatio = Math.min($scrollY / maxScroll, 1);
			return colorInterpolator(scrollRatio);
		}
	});

	const handleScroll = () => {
		if (typeof window !== 'undefined') {
			scrollY.set(window.scrollY || 0);
			scrollTop = (scale * (window.scrollY || 0)) / (5 * 0.92);
			updateeCurrentElement();
		}
	};

	const sections = ['Home', 'Journey', 'Profile', 'Blogs', 'Projects'];

	/**
	 * Function to move between sections
	 * @param {number} direction
	 */
	const move = (direction) => {
		if (typeof window !== 'undefined') {
			let currentIndex = sections.indexOf(currentElement);
			if (currentIndex > -1) {
				let newIndex = currentIndex + direction;
				window.scrollTo(0, pageHeight * 0.93 * newIndex);
			}
		}
	};

	let flexDirection = '';
	if (isMobile) flexDirection = 'column';
	else flexDirection = 'row';

	let fullSizeButtons = false;
	if (isPC) fullSizeButtons = true;

	let sidebarWidth = pageWidth;
	if (isPC) sidebarWidth = 296;
	if (isTablet) sidebarWidth = 184;

	let sidebarHeight = pageHeight;
	if (isMobile) sidebarHeight = 144;

	onMount(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', handleScroll);
			return () => window.removeEventListener('scroll', handleScroll);
		}
	});
</script>

<body class:hideScroll id="background" style="background-color: {$bgColor};" bind:this={background}>
	<div
		class="background"
		style={`background-image: linear-gradient(to ${isMobile ? "bottom" : "right"}, ${Color.Black}, ${$bgColor});`}
	/>
	<div class="container" style="flex-direction: {flexDirection};">
		<div
			class={`scrollbar-${isMobile ? 'top' : 'left'}`}
			style="background-color: {'color-mix(in srgb, ' + $bgColor + ' 40%, black)'};"
		>
			<div class="scrollbar-track">
				<div
					class={`scrollbar-thumb-${isMobile ? 'top' : 'left'}`}
					style={`${isMobile ? 'left' : 'top'}: ${scrollTop}px; ${isMobile ? 'width' : 'height'}: ${pageWidth / 5}px; background-color: ${$bgColor}`}
				></div>
			</div>
		</div>
		<div
			class={`sidebar-${isMobile ? 'top' : 'left'}`}
			style="width: {sidebarWidth + 'px'}; height: {sidebarHeight + 'px'};"
		>
			<Sidebar>
				{#if !isMobile}
					<Button
						variant={'Up'}
						{fullSizeButtons}
						onClick={() => {
							move(-1);
						}}
					/>
				{/if}
				{#each sections as section, i}
					<Button
						variant={section}
						{fullSizeButtons}
						onClick={() => {
							if (typeof window !== 'undefined') {
								window.scrollTo(0, pageHeight * 0.93 * i);
							}
						}}
						pressed={currentElement === section}
					/>
				{/each}
				{#if !isMobile}
					<Button
						variant={'Down'}
						{fullSizeButtons}
						onClick={() => {
							move(1);
						}}
					/>
				{/if}
			</Sidebar>
		</div>
		<div class="details" style={`margin-top: ${isMobile ? "94px" : "0"};`}>
			<Details>Home Details</Details>
			<Details>Journey Details</Details>
			<Details>Profile Details</Details>
			<Details>Blogs Details</Details>
			<Details>Projects Details</Details>
		</div>
	</div>
</body>

<style>
	.hideScroll::-webkit-scrollbar {
		display: none;
	}
	.background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 0;
		transition: all 1s ease-in-out;
	}
	.container {
		position: relative;
		display: flex;
		justify-content: flex-end;
	}
	.scrollbar-left {
		position: fixed;
		left: 0;
		width: 10px;
		height: 100vh;
		z-index: 2;
	}
	.scrollbar-top {
		position: fixed;
		top: 0;
		height: 10px;
		width: 100vh;
		z-index: 2;
	}
	.scrollbar-track {
		position: relative;
		height: 100%;
		width: 100%;
	}
	.scrollbar-thumb-left {
		position: absolute;
		left: 0;
		width: 100%;
		transition: all 500ms ease-in-out;
	}
	.scrollbar-thumb-top {
		position: absolute;
		left: 0;
		height: 100%;
		transition: all 500ms ease-in-out;
	}
	.sidebar-left {
		position: fixed;
		display: flex;
		flex-direction: column;
		left: 10px;
		z-index: 1;
	}
	.sidebar-top {
		position: fixed;
		display: flex;
		flex-direction: row;
		top: 10px;
		z-index: 1;
	}
	.details {
		display: flex;
		flex-direction: column;
		gap: 60px;
		padding: 50px;
		z-index: 0;
	}
</style>
