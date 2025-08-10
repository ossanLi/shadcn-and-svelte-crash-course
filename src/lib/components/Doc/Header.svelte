<script lang="ts">
	import type { BaseProps } from '$lib/types.ts';
	import { cn } from '$lib/utils.js';

	let { class: className, children, ...resetProps }: BaseProps = $props();
</script>

<h2 class={cn('text-lg font-medium', className)} {...resetProps}>
	{@render children?.()}
</h2>
