import Joi from 'joi'
import YAML from 'yaml'
import { ModelDocument, ModelDocumentSchema } from './schema'

/**
 * TODO validate input
 * @param input
 */
export function processModel(input:string):ModelDocument{

	console.log(`newcode`, input)
	const raw = YAML.parse(input) // May throw errors.
	return Joi.attempt(raw, ModelDocumentSchema)
}