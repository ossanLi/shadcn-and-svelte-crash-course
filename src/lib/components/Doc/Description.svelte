<script lang="ts">
	import type { BaseProps } from '$lib/types.ts';
	import { cn } from '$lib/utils.js';

	let { class: className, children, ...resetProps }: BaseProps = $props();
</script>

<p class={cn('text-base font-normal', className)} {...resetProps}>
	{@render children?.()}
</p>
