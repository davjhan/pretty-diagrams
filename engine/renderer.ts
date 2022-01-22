function render(document: Document, element: string): Element {
	return document.createRange().createContextualFragment(element).firstElementChild
}

function createBlock(document: Document, schema: Schema): Element {
	let cardStyles, nameStyles = ''
	if (schema.children) {
		cardStyles = 'area outlined border-ink bg-shade-primary b'
		nameStyles = 'label text-ink-shade mb-4'
	} else {
		cardStyles = 'card bg-primary  border-b-3 py-2 px-3'
	}
	const view = render(document, `
		<div 
			id='${ schema.name }'
		 	class='select-none gap-2 ${ cardStyles } cursor-pointer hover:ring ring-accent'
		>
    		<h4 class=' ${ nameStyles }'>${ schema.name }</h4>
		</div>
		`)
	schema.children?.forEach(it => view.appendChild(createBlock(document, it)))
	return view
}

export function create(document: Document, data: Schema): Element {
	const flexDir = data.dir == 'hor' ? 'flex-row' : 'flex-col'
	const root = render(document, `
		<div class='gap-8 ${ flexDir }'></div>
	`)
	data.children?.forEach(it => root.appendChild(createBlock(document, it)))
	return root
}

export type Schema = {
	name: string
	dir?: 'hor' | 'vert'
	children?: Schema[]
}