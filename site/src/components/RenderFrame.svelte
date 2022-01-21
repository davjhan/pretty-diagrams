<script>

    import { onMount } from 'svelte'
    import Block from './Block.svelte'
    import { block2 } from './Block2.ts'

    const block = Block
    let root
    onMount(()=>{
        console.log(`document.createElement(block2)`, document.createElement(block2))
        root.addElement(document.createElement(block2))
    })
</script>

<div class="area outlined border-ink" bind:this={root}>
    Hi whats up

</div>