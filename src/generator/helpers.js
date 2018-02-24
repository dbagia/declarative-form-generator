import {fromPromise} from 'crocks/Async'
import axios from 'axios'

export const asyncAxiosGet =
  fromPromise(axios.get)
