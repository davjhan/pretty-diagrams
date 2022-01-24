import { drawArrow } from './arrows'
import { ArrowModel, BlockModel, ModelDocument } from './schema'
import { DOMRect, Svg } from '@svgdotjs/svg.js'

function render(document: Document, element: string): Element {
	return document.createRange().createContextualFragment(element).firstElementChild
}

function createBlock(document: Document, block: BlockModel): Element {
	let cardStyles, nameStyles = ''
	if (block.children.length > 0) {
		cardStyles = 'area outlined border-ink bg-shade-primary b'
		nameStyles = 'label text-ink-shade mb-4'
	} else {
		cardStyles = 'card bg-primary  border-b-3 py-2 px-3'
	}
	const view = render(document, `
		<div 
			id='${ block.name }'
		 	class='select-none gap-0 ${ cardStyles } cursor-pointer hover:ring ring-accent'
		>
    		<h4 class=' ${ nameStyles }'>${ block.name }</h4>
		</div>
		`)
	block.children?.forEach(it => view.appendChild(createBlock(document, it)))
	return view
}

export function planBlocks(document: Document, schema: ModelDocument): DocumentFragment {
	const flexDir = schema.dir == 'hor' ? 'flex-row' : 'flex-col'
	const documentFragment = document.createDocumentFragment()
	const rootDiv = render(document, `
		<div class='gap-4 ${ flexDir }'></div>
	`)
	schema.blocks?.forEach((it, i, arr) => {
		const next = (i < arr.length - 1) ? arr[i + 1] : undefined
		rootDiv.append(createBlock(document, it))
		if (next) {
			const adjacentArrows = schema.arrows.filter(arrow =>
				(arrow.from == it.name && arrow.to == next.name) ||
				(arrow.from == next.name && arrow.to == it.name)
			)
			if (adjacentArrows[0]) {
				const arrow = adjacentArrows[0]
				rootDiv.append(render(document, `<span class='label '>${arrow.text}</span>`))
			}
		}
	})
	documentFragment.append(rootDiv)
	return documentFragment
}

export function drawArrows(context: RenderContext) {
	context.schema.arrows?.forEach(it => drawArrow(context, it))
}

export type RenderContext = {
	svg: Svg
	schema: ModelDocument
	domLayer: Element
	rootBounds: DOMRect
}