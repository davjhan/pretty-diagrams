<script lang='ts'>
	import type { Schema } from '$engine/renderer'
	import RenderFrame from '../components/RenderFrame.svelte'

	const exampleData: Schema = {
		name: 'root',
		dir: 'hor',
		children: [{
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
		}]
	}
</script>
<main class='flex flex-col mt-32'>
    <div class='gap-4'>

        <div class='flex-grow'>

            <RenderFrame data={exampleData} />
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