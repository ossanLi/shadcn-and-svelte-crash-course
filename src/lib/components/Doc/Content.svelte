<script lang="ts">
	import type { BaseProps } from '$lib/types.ts';
	import { cn } from '$lib/utils.js';

	let { class: className, children, ...resetProps }: BaseProps = $props();
</script>

<article class={cn('text-white', className)} {...resetProps}>
	{@render children?.()}
</article>
