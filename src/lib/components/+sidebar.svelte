<body class="sidebar">
	<slot />
</body>

<style>
	.sidebar {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		gap: 20px;
		height: 100%;
		padding: 50px 60px;
	}
</style>
