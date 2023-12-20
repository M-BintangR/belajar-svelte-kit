<script>
    import { page } from '$app/stores';

    const slugArr = $page.params.slug.split("/");
</script>

<h1>Docs home page</h1>

{#if slugArr.length == 1}
    <h2>Viewing docs for features {slugArr[0]}</h2>
{:else if slugArr.length == 2}
    <h2>Viewing docs for feature {slugArr[0]} and concept {slugArr[1]}</h2>
{/if}