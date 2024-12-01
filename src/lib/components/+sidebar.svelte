<script>
	let pageWidth = 0;
	if (typeof window !== 'undefined') {
		pageWidth = window.innerWidth;
	}

	let isMobile = false;

	if (pageWidth < 700) {
		isMobile = true;
	}
</script>

<body class={`sidebar-${isMobile ? 'top' : 'left'}`}>
	<slot />
</body>

<style>
	.sidebar-left {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		gap: 20px;
		width: 100%;
		height: 100%;
		padding: 50px 60px;
	}
	.sidebar-top {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		justify-content: center;
		gap: 20px;
		width: 100%;
		height: 100%;
		padding: 50px 60px;
	}
</style>
