<script>
    import { cn } from "$lib/utils.js";
    
    let {
        ref = $bindable(null),
        class: className,
        children,
        ...restProps
    } = $props();
</script>

<div
    bind:this={ref}
    data-slot="content-section"
    class={cn("text-white", className)}
    {...restProps}
>
    {@render children?.()}
</div>
