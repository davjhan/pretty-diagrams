import { drawArrow } from './arrows'
import { Arrow, BlockSchema, SchemaDocument } from './schema'
import { DOMRect, Svg } from '@svgdotjs/svg.js'

function render(document: Document, element: string): Element {
	return document.createRange().createContextualFragment(element).firstElementChild
}

function createBlock(document: Document, schema: BlockSchema): Element {
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

function createLabel(document: Document, schema: BlockSchema): Element {
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

export function planBlocks(document: Document, schema: SchemaDocument): DocumentFragment {
	const flexDir = schema.dir == 'hor' ? 'flex-row' : 'flex-col'
	const documentFragment = document.createDocumentFragment()
	const rootDiv = render(document, `
		<div class='gap-8 ${ flexDir }'></div>
	`)
	schema.blocks?.forEach(it => rootDiv.append(createBlock(document, it)))
	documentFragment.append(rootDiv)
	return documentFragment
}

export function drawArrows(context:RenderContext) {
	context.schema.arrows?.forEach(it => drawArrow(context, it))
}

export type RenderContext = {
	svg:Svg
	schema:SchemaDocument
	domLayer:Element
	rootBounds:DOMRect
}