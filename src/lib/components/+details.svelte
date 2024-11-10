<script>
	import Color from '$lib/colors';

	let pageHeight = 0;
	let pageWidth = 0;
	if (typeof window !== 'undefined') {
		pageHeight = window.innerHeight - 140;
		pageWidth = window.innerWidth - 100;
	}

	let isPC = false,
		isTablet = false,
		isMobile = false;

	if (pageWidth >= 1024) {
		isPC = true;
	} else if (pageWidth > 700) {
		isTablet = true;
	} else {
		isMobile = true;
	}

	let contentWidth = pageWidth;
	if (isPC) contentWidth = pageWidth - 306;
	if (isTablet) contentWidth = pageWidth - 194;

	let contentHeight = pageHeight;
	if (isMobile) contentHeight = pageHeight - 154;
</script>

<body
	class="details"
	style="height: {contentHeight + 'px'}; width: {contentWidth +
		'px'}; background-color: {Color.Dark};"
>
	<slot />
</body>

<style>
	.details {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
        gap: 20px;
        padding: 40px;
		border-radius: 50px;
		box-shadow: 6px 6px 10px 0px rgba(0, 0, 0, 0.25);
	}
</style>
