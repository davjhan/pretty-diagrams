export type SchemaDocument = {
	dir?: 'hor' | 'vert'
	blocks:BlockSchema[]
	arrows:Arrow[]
}

export type BlockSchema = {
	name: string
	dir?: 'hor' | 'vert'
	children?: BlockSchema[]
}

export type Arrow = {
	text?: string
	from:string
	to:string
}