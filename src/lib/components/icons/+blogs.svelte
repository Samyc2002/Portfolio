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
		d="M5.616 20C5.15533 20 4.771 19.846 4.463 19.538C4.155 19.23 4.00067 18.8453 4 18.384V5.616C4 5.15533 4.15433 4.771 4.463 4.463C4.77167 4.155 5.156 4.00067 5.616 4H18.385C18.845 4 19.2293 4.15433 19.538 4.463C19.8467 4.77167 20.0007 5.156 20 5.616V18.385C20 18.845 19.846 19.2293 19.538 19.538C19.23 19.8467 18.8453 20.0007 18.384 20H5.616ZM7.5 16.5H13.5V15.5H7.5V16.5ZM7.5 12.5H16.5V11.5H7.5V12.5ZM7.5 8.5H16.5V7.5H7.5V8.5Z"
		fill={color}
	/>
</svg>
