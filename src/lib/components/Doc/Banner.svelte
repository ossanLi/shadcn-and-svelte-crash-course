<script lang="ts">
	import type { BannerProps } from '$lib/types.ts';
	import { cn } from '$lib/utils.js';

	let {
		class: className,
		children,
		label,
		description,
		banner = '/media/placeholder-banner.jpg',
		h1 = false,
		...restProps
	}: BannerProps = $props();
</script>

<div
	class={cn(
		`flex justify-end flex-col w-full h-50 rounded-xl bg-no-repeat bg-center bg-cover bg-[url(${banner})]`,
		className
	)}
	{...restProps}
>
	{#if label && description}
		{@html `<${h1 ? 'h1' : 'h2'} class="font-bold text-2xl">${label}</${h1 ? 'h1' : 'h2'}>`}

		<p class="font-normal text-base">{@html description}</p>
	{/if}

	{@render children?.()}
</div>
