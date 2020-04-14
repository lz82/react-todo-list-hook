import React from 'react'
import { Iterable } from 'immutable'

export const ToJS = WrapperComponent => WrapperComponentProps => {
  const KEY = 0
  const VALUE = 1
  const propsJS = Object.entries(WrapperComponentProps)
  .reduce((newProps, WrapperComponentProps) => {
    newProps[WrapperComponentProps[KEY]] = Iterable.isIterable(
      WrapperComponentProps[VALUE])
        ? WrapperComponentProps[VALUE].toJS()
        : WrapperComponentProps[VALUE]
    return newProps
  }, {})

  return <WrapperComponent {...propsJS} />
}