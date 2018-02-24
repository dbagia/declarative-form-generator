import curry from 'crocks/helpers/curry'
import schema from './schema.json'
import List from 'crocks/List'

import when from 'crocks/logic/when'
import propOr from 'crocks/helpers/propOr'

import { listToReact, textToReact } from './transformers'

// defaultProp:: String -> (String -> String)
const defaultProp = propOr('string')

// isSchemaItemOfType:: String -> a -> Boolean
const isSchemaItemOfType =
  curry((type, schemaItem) =>
    defaultProp('type', schemaItem) === type)

// textInputs:: (Pred -> ())
const textInputs =
  when(isSchemaItemOfType('string'), textToReact)

// lists:: (Pred -> ())
const lists =
  when(isSchemaItemOfType('list'), listToReact)

const Example =
  List
  .fromArray(schema)
  .map(textInputs)
  .map(lists)

export default Example
