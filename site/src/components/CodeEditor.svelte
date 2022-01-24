<script>
    import { processModel } from '$engine/modelProcessor'
    import { createEventDispatcher, onMount } from 'svelte'

    const dispatch = createEventDispatcher()
    export let modelInput
    let processingException
    let parsedModel
    $: process(modelInput)
    onMount(() => {
        if (parsedModel) dispatch('userModelUpdate', parsedModel)
    })

    function process(input) {
        try {
            parsedModel = processModel(input)
            processingException = undefined
            dispatch('userModelUpdate', parsedModel)
        } catch (e) {
            processingException = e
        }
    }

    function onKeyDown(e) {
        if (e.keyCode === 9) {
            // tab pressed
            e.preventDefault()
            document.execCommand('insertHTML', false, '  ')
        }
    }
</script>
<div class='flex-row gap-2'>
    <div class='card flex-grow bg-shade p-0 bg-shade-code text-white flex-1'>
        <div class='card-header label m-0 border-ink-secondary'>Code</div>
        <pre class='p-4 cursor-text focus:outline-none flex-grow inline-block whitespace-pre-wrap'
             on:keydown={onKeyDown}
             contenteditable='plaintext-only'
             bind:innerHTML= {modelInput}>
        </pre>
        {#if processingException}

            <div class='card-footer  m-0 bg-shade-error text-ink-error flex-wrap'>
                {processingException}
            </div>
        {/if}
    </div>

    <div class='card flex-grow bg-shade p-0 flex-1'>
        {#if parsedModel}
            <div class='card-header label m-0'>Interpreted
                {#if processingException}(Outdated){/if}
            </div>
            <pre class='p-4'>

             {JSON.stringify(parsedModel, null, 2)}

        </pre>

        {/if}
    </div>
</div>