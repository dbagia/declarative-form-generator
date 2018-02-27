import {fromPromise} from 'crocks/Async'
import axios from 'axios'
import curry from 'crocks/helpers/curry'
import IO from 'crocks/IO'
import propOr from 'crocks/helpers/propOr'

// defaultProp:: String -> (String -> String)
const defaultProp = propOr('text')

export const asyncAxiosGet =
  fromPromise(axios.get)

// getData:: String -> Async
export const getData =
  url => asyncAxiosGet(url)

// toOptions:: [a] -> jsx
export const toOptions = options =>
  options
  .map((option, i) =>
    <option key={i} value={option.id}>{option.name}</option>
  )

export const $ = selector =>
  IO.of(document.querySelectorAll(selector))

// isSchemaItemOfType:: String -> a -> Boolean
export const isSchemaItemOfType =
  curry((type, schemaItem) =>
    defaultProp('type', schemaItem) === type)

// unsafe log:: a -> a
export const log = o => {
  console.log(o)
  return o
}
