<script>
    import { processModel } from '$engine/modelProcessor'
    import { createEventDispatcher, onMount } from 'svelte'

    const dispatch = createEventDispatcher()
    export let model
    let processingException
    let parsedModel
    $: process(model)
    onMount(()=> {
        if(parsedModel)  dispatch('modelUpdate', parsedModel)
    })
    function process(input){
        try {
            parsedModel = processModel(input)
            processingException = undefined
            dispatch('modelUpdate', parsedModel)
        } catch (e) {
            processingException = e
            parsedModel = undefined
        }
    }

</script>
<div class='flex-row gap-2'>
    <div class='card flex-grow bg-shade p-0 bg-shade-code  text-white '>
        <div class='card-header label m-0 border-ink-secondary'>Code</div>
        <pre class='p-4 cursor-text focus:outline-none flex-grow inline-block' contenteditable='plaintext-only'
             bind:innerHTML=
                     {model}>
    </pre>
        {#if processingException}

            <div class='card-footer  m-0 bg-shade-error text-ink-error'>
                {processingException}
            </div>
        {/if}
    </div>

    <div class='card flex-grow bg-shade p-0 '>
        {#if parsedModel}
            <div class='card-header label m-0'>Interpreted</div>
            <pre class='p-4'>

             {JSON.stringify(parsedModel, null, 2)}

        </pre>

        {/if}
    </div>
</div>