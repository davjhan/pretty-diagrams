<script lang='ts'>
	import type { ModelDocument } from '$engine/schema'
	import { overlap, simple } from '$engine/examples'
	import { def } from '$engine/yamlExamples'
	import CodeEditor from '../components/CodeEditor.svelte'
	import RenderFrame from '../components/RenderFrame.svelte'

	const exampleYaml= def
    let validModel
    function onModelUpdate(e){
	    validModel = e.detail
    }
</script>
<main class='flex flex-col mt-12'>
    <div class='gap-4'>

        <div class='flex-grow' >
            {#key validModel}
                <RenderFrame model={validModel} />
            {/key}
        </div>
        <CodeEditor model={exampleYaml} on:modelUpdate={onModelUpdate}/>
    </div>
</main>