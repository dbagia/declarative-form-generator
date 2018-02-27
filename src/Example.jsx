import schema from './schema.json'
import List from 'crocks/List'
import when from 'crocks/logic/when'
import compose from 'crocks/helpers/compose'
import {isSchemaItemOfType} from './generator/helpers'
import { listToReact, textToReact, addChangeListener } from './transformers'

// textInputs:: (Pred -> ())
const textInputs =
  when(isSchemaItemOfType('text'), textToReact)

// lists:: (Pred -> ())
const lists =
  when(isSchemaItemOfType('list'), listToReact)

// transform:: a -> JSX
const transform =
  compose(lists, textInputs, addChangeListener({}))

const Example =
  List
  .fromArray(schema)
  .map(transform)

export default Example
