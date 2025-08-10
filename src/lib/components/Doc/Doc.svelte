<script lang="ts">
	import type { BaseProps } from '$lib/types.ts';
	import { cn } from '$lib/utils.js';

	let { class: className, children, ...restProps }: BaseProps = $props();
</script>

<div data-slot="content" class={cn('h-screen bg-black text-white', className)} {...restProps}>
	{@render children?.()}
</div>
