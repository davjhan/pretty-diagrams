<script>
    import { onMount } from 'svelte'
    import { create } from '$engine/renderer'

    export let data
    let root
    onMount(() => {
        const blocks = create(document, data)
        root.appendChild(blocks)
        const sizes = blocks.querySelector('#Bowl').getBoundingClientRect()
        console.log(`bowl`, sizes)
    })
</script>

<div class='card'>
    <div class='card-header label'>Output</div>
    <div class='p-8' bind:this={root}>

    </div>
</div>