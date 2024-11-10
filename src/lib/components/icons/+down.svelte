<script>
	import Colors from '$lib/colors';

	export let size = 20,
		color = Colors.Light;
</script>

<svg
	width={size}
	height={size}
	viewBox={`0 0 ${size} ${size}`}
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M13 4H11L11 16H9V18H11V20H13V18H15V16H13L13 4ZM17 14V16H15V14H17ZM17 14V12H19V14H17ZM7 14V16L9 16V14L7 14ZM7 14L7 12H5L5 14H7Z"
		fill={color}
	/>
</svg>
