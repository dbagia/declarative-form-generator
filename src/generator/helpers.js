import R from 'ramda'
import Maybe from 'folktale/maybe'

export const schemaItemHas = (props, schemaItem) => {
  const hasProp = R.has(R.__, schemaItem)

  return R.contains(false, props.map(prop => hasProp(prop))) ? Maybe.Nothing() : Maybe.Just(schemaItem)
}
