<script lang='ts'>
	import type { SchemaDocument } from '$engine/schema'
	import RenderFrame from '../components/RenderFrame.svelte'

	const exampleData: SchemaDocument = {
		dir: 'hor',
		blocks: [{
			name: 'Grocery Store',
			children: [{
				name: 'Carrots',
			}, {
				name: 'Potatoes',
			}, {
				name: 'Beef',
			}, {
				name: 'Tomato Sauce',
			}]
		}, {
			name: 'Kitchen',
			children: [{
				name: 'Bowl',
			}, {
				name: 'Pot',
			}, {
				name: 'Knife',
			},
			]
		}],
        arrows: [{
			text: 'This is a long label',
			from: 'Carrots',
            to: 'Bowl',
        }]
	}
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