import { colors } from './colors'
import { RenderContext } from './renderer'
import { Arrow, SchemaDocument } from './schema'
import { Marker, PathArray, PointArray, Svg } from '@svgdotjs/svg.js'

const ARROW_WIDTH = 2
const ARROW_STROKE = 6
const FONT_SIZE = 14
export function drawArrow(context: RenderContext, arrow: Arrow):DrawnArrow {
	const from = context.domLayer.querySelector(`#${ arrow.from }`).getBoundingClientRect()
	const to = context.domLayer.querySelector(`#${ arrow.to }`).getBoundingClientRect()

	let fromXSide: 'left' | 'right'
	let toXSide : 'left' | 'right'

	if (from.x < to.x) {
		fromXSide = 'right'
		toXSide = 'left'
	} else {
		fromXSide = 'left'
		toXSide = 'right'
	}
	const start = getPositionOnRect(from, `${fromXSide}-mid`)
	const end = getPositionOnRect(to, `${toXSide}-mid`)
	const path =  [start,end]
	context.svg.polyline(path)
		.stroke({ color: colors.ink, width: ARROW_STROKE, linecap: 'square' })
		.marker('end', 2, 2, (add: Marker) => {
			add.circle(2).fill(colors.ink)
		})
	context.svg.polyline(path)
		.stroke({ color: colors.white, width: ARROW_WIDTH, linecap: 'round' })
		.marker('end', 4, 4, (add: Marker) => {
			add.circle(4).fill(colors.white)
		})
	return {
		path
	}
}

const positions = ['top-left', 'top-mid', 'top-right'
	,'right-top', 'right-mid', 'right-bot'
	,'bot-left', 'bot-mid', 'bot-right'
	,'left-top', 'left-mid', 'left-bot']  as const

type Position = typeof positions[number]

const OFFSET = 4
const INSET = 1
function getPositionOnRect(rect:DOMRect, position:Position):[number,number]{
	switch (position){
		case 'top-left':
			return [rect.x + OFFSET, rect.y + INSET]
		case 'top-mid':
			return [rect.x + rect.width/2, rect.y + INSET]
		case 'top-right':
			return [rect.x + rect.width - OFFSET, rect.y + INSET]

		case 'right-top':
			return [rect.x + rect.width + INSET, rect.y + OFFSET]
		case 'right-mid':
			return [rect.x + rect.width + INSET, rect.y + rect.height/2]
		case 'right-bot':
			return [rect.x + rect.width + INSET, rect.y + rect.height - OFFSET]

		case 'bot-left':
			return [rect.x + OFFSET, rect.y + rect.height + INSET]
		case 'bot-mid':
			return [rect.x + rect.width/2, rect.y + rect.height + INSET]
		case 'bot-right':
			return [rect.x + rect.width - OFFSET, rect.y + rect.height + INSET]

		case 'left-top':
			return [rect.x + INSET, rect.y + OFFSET]
		case 'left-mid':
			return [rect.x + INSET, rect.y + rect.height/2]
		case 'left-bot':
			return [rect.x + INSET, rect.y + rect.height - OFFSET]
	}
}

export type DrawnArrow = {
	path: [number,number][]
}