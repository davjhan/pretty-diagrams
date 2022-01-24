<script>
    import { onMount } from 'svelte'
    import { drawArrows, planBlocks } from '$engine/renderer'
    import { SVG } from '@svgdotjs/svg.js'
    export let model
    let domLayer
    console.log(`dschema`, model)
    onMount(() => {
        if(!model) return
        console.log(`schema`, model)
        const blocks = planBlocks(document, model)
        domLayer.appendChild(blocks)
        const documentSize = domLayer.getBoundingClientRect()
        const svg = SVG()

        svg.addTo("#front-svg-layer").size(documentSize.width,documentSize.height)
            .viewbox(documentSize.x,documentSize.y,documentSize.width,documentSize.height)
        drawArrows({svg, schema:model, domLayer:domLayer, rootBounds:documentSize})
    })
</script>

<div class='card' >
    <div class='card-header label'>Output</div>
    <div class='p-8 static' id='container'>
        <div id='blocks-layer' bind:this={domLayer}></div>
        <div id='front-svg-layer' class='absolute pointer-events-none'></div>
    </div>
</div>