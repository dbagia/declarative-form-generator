import schema from './schema.json'
import List from 'crocks/List'
import when from 'crocks/logic/when'
import {isSchemaItemOfType} from './generator/helpers'
import { listToReact, textToReact } from './transformers'

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
