import schema from './schema.json'
import List from 'crocks/List'
import when from 'crocks/logic/when'
import compose from 'crocks/helpers/compose'
import {isSchemaItemOfType} from './generator/helpers'
import { listToReact, textToReact } from './transformers'

// textInputs:: (Pred -> ())
const textInputs =
  when(isSchemaItemOfType('text'), textToReact)

// lists:: (Pred -> ())
const lists =
  when(isSchemaItemOfType('list'), listToReact)

const generator = compose(lists, textInputs)

const Example =
  List
  .fromArray(schema)
  .map(generator)

export default Example
