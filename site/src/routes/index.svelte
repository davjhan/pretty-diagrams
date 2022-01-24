<script lang='ts'>
	import { modelToYaml } from '$engine/modelProcessor'
	import type { ModelDocument } from '$engine/schema'
	import { overlap, simple } from '$engine/examples'
	import { def } from '$engine/yamlExamples'
	import CodeEditor from '../components/CodeEditor.svelte'
	import RenderFrame from '../components/RenderFrame.svelte'

	let modelInput= def
    let validModel
    function onUserModelUpdate(e){
	    validModel = e.detail
    }
    function onComputedModelUpdate(e){
	    console.log(`computed`, e.detail)
	    modelInput = modelToYaml(e.detail)
    }
</script>
<main class='flex flex-col mt-12'>
    <div class='gap-4'>

        <div class='flex-grow' >
            {#key validModel}
                <RenderFrame model={validModel} on:computedModelUpdate={onComputedModelUpdate}/>
            {/key}
        </div>
        {#key modelInput}
            <CodeEditor modelInput={modelInput} on:userModelUpdate={onUserModelUpdate}/>
        {/key}
    </div>
</main>