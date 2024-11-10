<script>
	import Colors from '$lib/colors';
	import Icon from './+icon.svelte';
	import Text from './+text.svelte';

	export let variant,
		fullSizeButtons,
		onClick,
		pressed = false;

	let buttonText = '',
		buttonIcon = '';
	if (fullSizeButtons) {
		switch (variant) {
			case 'Home':
				buttonText = 'About Me';
				break;
			case 'Journey':
				buttonText = 'My Journey';
				break;
			case 'Profile':
				buttonText = 'My Profile';
				break;
			case 'Blogs':
				buttonText = 'My Blogs';
				break;
			case 'Projects':
				buttonText = 'My Projects';
				break;
			default:
				buttonIcon = variant;
				break;
		}
	} else {
		buttonIcon = variant;
	}

	let textColor = Colors.Light;
	let fontStyle = 'Doto';
	let backgroundColor = Colors.Dark;

	$: if (pressed) {
		textColor = Colors.Dark;
		fontStyle = 'Inter';
		backgroundColor = Colors.Light;
	} else {
		textColor = Colors.Light;
		fontStyle = 'Doto';
		backgroundColor = Colors.Dark;
	}
</script>

<button
	class="button"
	on:mouseenter={() => {
		if (!pressed) {
			textColor = Colors.Dark;
			fontStyle = 'Inter';
			backgroundColor = Colors.Light;
		}
	}}
	on:mouseleave={() => {
		if (!pressed) {
			textColor = Colors.Light;
			fontStyle = 'Doto';
			backgroundColor = Colors.Dark;
		}
	}}
	on:click={onClick}
	style="background-color: {backgroundColor};"
>
	{#if buttonText}
		<Text color={textColor} font={fontStyle}>{buttonText}</Text>
	{:else}
		<Icon color={textColor} size={24} name={buttonIcon} />
	{/if}
</button>

<style>
	.button {
		display: flex;
		flex-direction: row;
		gap: 10px;
		padding: 10px 20px;
		background-color: #222222;
		color: #eeeeee;
		width: fit-content;
		border-radius: 50px;
		transition: all 300ms ease-in-out;
		cursor: pointer;
		box-shadow: none;
		border: none;
	}
</style>
