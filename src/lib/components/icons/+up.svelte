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
		d="M11 20H13V8H15V6H13V4H11V6H9V8H11V20ZM7 10V8H9V10H7ZM7 10V12H5V10H7ZM17 10V8H15V10H17ZM17 10V12H19V10H17Z"
		fill={color}
	/>
</svg>
