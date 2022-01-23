<script lang='ts'>
	import type { SchemaDocument } from '$engine/schema'
	import { overlap, simple } from '$engine/examples'
	import RenderFrame from '../components/RenderFrame.svelte'

	const exampleData: SchemaDocument = overlap
</script>
<main class='flex flex-col mt-32'>
    <div class='gap-4'>

        <div class='flex-grow'>

            <RenderFrame schema={exampleData} />
        </div>
        <div class='card flex-grow bg-shade '>
            <div class='card-header label'>Code</div>
            <pre>
                <code class=''>
                    {JSON.stringify(exampleData, undefined, 2)}
                </code>
            </pre>
        </div>
    </div>
</main>