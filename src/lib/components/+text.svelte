<script>
	import Colors from '$lib/colors';

	export let font = 'Inter',
		size = 20,
		weight = 500,
		color = Colors.Light;
</script>

<div class="text-container">
	<p class="text-pseudo" style="font-size: {size + 'px'}; font-weight: {weight};">
		<slot />
	</p>
	<p
		class="text"
		style="font-size: {size +
			'px'}; font-weight: {weight}; color: {color}; font-family: '{font}', serif;"
	>
		<slot />
	</p>
</div>

<style>
	.text-container {
		position: relative;
	}
	.text-pseudo {
		font-family: 'Doto', serif;
		line-height: 30px;
		margin: 0;
		opacity: 0;
	}
	.text {
		position: absolute;
		top: 0;
		left: 0;
		font-family: 'Inter', serif;
		line-height: 30px;
		margin: 0;
	}
</style>
