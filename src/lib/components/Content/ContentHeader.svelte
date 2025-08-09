<script lang="ts">
	import { cn } from '$lib/utils.js';

	interface Props {
		class?: string;
		children?: any;
		label?: string;
		description?: string;
		banner: string;
	}

	let { class: className, children, label, description, banner, ...restProps }: Props = $props();
</script>

<div
	class={cn(
		'w-full h-50 rounded-xl bg-no-repeat bg-center bg-cover',
		banner ? `bg-[url(${banner})]` : 'bg-[url(/media/placeholder-banner.jpg)]',
		className
	)}
	{...restProps}
>
	{#if label && description}
		<h1>{label}</h1>
		<p>{description}</p>
	{/if}

	{@render children?.()}
</div>
