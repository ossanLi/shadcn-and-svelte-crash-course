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
    data-slot="content"
    class={cn("h-screen bg-black", className)}
    {...restProps}
>
    {@render children?.()}
</div>