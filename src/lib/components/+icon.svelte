<script>
	import Home from './icons/+home.svelte';
	import Journey from './icons/+journey.svelte';
	import Profile from './icons/+profile.svelte';
	import Blogs from './icons/+blogs.svelte';
	import Projects from './icons/+projects.svelte';
	import Up from './icons/+up.svelte';
	import Down from './icons/+down.svelte';
	import Colors from '$lib/colors';

	export let name = 'Home',
		size = 24,
		color = Colors.Light;

	let Icon = null;
	switch (name) {
		case 'Home':
			Icon = Home;
			break;
		case 'Journey':
			Icon = Journey;
			break;
		case 'Profile':
			Icon = Profile;
			break;
		case 'Blogs':
			Icon = Blogs;
			break;
		case 'Projects':
			Icon = Projects;
			break;
		case 'Up':
			Icon = Up;
			break;
		case 'Down':
			Icon = Down;
			break;
	}
</script>

<svelte:component this={Icon} {size} {color} />
