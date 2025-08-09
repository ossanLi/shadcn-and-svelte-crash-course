<script>
	import * as Content from '$lib/components/Content/index.js';
</script>

<Content.Root>
	<Content.Header label="meow" description="kitty" />

	<Content.Section></Content.Section>
</Content.Root>

<!-- 

what is cn in tailwind-merge?
cn is used to make sure tailwind utils are 
predictable e.g. you want to pass a class
via a prop to a comp but that comp already
has that same class or has a class like
bg-red-500 but you pass bg-blue-500, then 
it isn't predictable on which is going to 
override who so we use class={cn()}

conditionals with cn and {#if} for props

...resetProps for $props lets us add additional props
even if they aren't defined in the actual component

@render children, to render children of that 
comp/sec

barral exports

compound components with svelte
-->
