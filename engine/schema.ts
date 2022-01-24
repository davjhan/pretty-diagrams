import Joi from 'joi'

export type ModelDocument = {
	dir?: 'hor' | 'vert'
	blocks:BlockModel[]
	arrows:ArrowModel[]
}

export type BlockModel = {
	name: string
	dir?: 'hor' | 'vert'
	children?: BlockModel[]
}

export type ArrowModel = {
	text?: string
	from:string
	to:string
}

const blockRef = Joi.ref('/blocks', {
	in: true,
	adjust: (nodes) => nodes.map(node => node.name)
});

export const BlockSchema = Joi.object({
	name: Joi.string().required(),
	dir: Joi.string().valid('hor','vert').default('hor'),
	children: Joi.array().items(Joi.link('#block')).default([]),
}).id('block')

export const ArrowSchema = Joi.object({
	text: Joi.string(),
	from: Joi.any().valid(blockRef),
	to: Joi.any().valid(blockRef),
	children: Joi.array().items(Joi.link('#block')).default([]),
}).id('arrow')

export const ModelDocumentSchema = Joi.object({
	dir: Joi.string().valid('hor','vert').default('hor'),
	blocks: Joi.array().items(BlockSchema).default([]),
	arrows: Joi.array().items(ArrowSchema).default([]),
})