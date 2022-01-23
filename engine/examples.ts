import { SchemaDocument } from './schema'

export const simple: SchemaDocument = {
	dir: 'hor',
	blocks: [{
		name: 'A',
	}, {
		name: 'B',
	},{
		name: 'C',
	}],
	arrows: [{
		text: 'This is a long label',
		from: 'A',
		to: 'B',
	}]
}

export const overlap: SchemaDocument = {
	dir: 'hor',
	blocks: [{
		name: 'A',
	}, {
		name: 'B',
	},{
		name: 'C',
	}],
	arrows: [{
		text: 'This is a long label',
		from: 'A',
		to: 'C',
	}]
}

export const intermediate: SchemaDocument = {
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