<script>
	import {goto, beforeNavigate, afterNavigate} from "$app/navigation";
	
	const handleClick = () => {
		goto('/product');
	}

	beforeNavigate(navigate => {
		console.log({before: navigate});
	});

	afterNavigate(navigate => {
		console.log({after: navigate});
	});

</script>
<main>
	<h1>Welcome to SvelteKit</h1>
	<a href="/blog">Blog</a>
	<a href="/product">Product</a>

	<button on:click={handleClick}>Place order</button>
</main>
