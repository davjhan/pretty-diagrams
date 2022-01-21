<script>
    import { onDestroy, onMount } from 'svelte'
    import Block from './Block.svelte'
    import { block2 } from './Block2.ts'

    const block = Block

    const model = {
        blocks:[
            'January',
            'February',
            'March',
        ]
    }

    onMount(async ()=>{

        const Reef = (await import ('reefjs')).default
        console.log(`c`, document)
        let child = new Reef('_',{template:block2})
        let app = new Reef('#root',{template: function (props) {
                return `<h1>${child.html()}${child.html()}${child.html()}${child.html()}</h1>`;
            }})
        app.render()
    })
</script>

<div class='area outlined border-ink' >
    Hi whats up
    <div id='root'>

    </div>
</div>