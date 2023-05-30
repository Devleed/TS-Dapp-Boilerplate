// * Contains Business Logic and returns view component
import React, { FC } from 'react'

import { useActions, useAppSelector } from '@hooks/index'
import CounterView from '@components/Counter/view'

import './styles.scss'
import {
  useFetchOneQuery,
  useLazyFetchOneQuery,
} from '../../services/modules/users'

export interface CounterProps {
  title?: string
}

const Counter: FC<CounterProps> = ({ title = 'Counter Compo' }) => {
  const counterValue = useAppSelector(state => state.counter.value)
  const { data, isLoading, error } = useFetchOneQuery('9')

  console.log('data in counter ', data)

  const { updateCounterValue } = useActions()

  return (
    <CounterView
      title={title}
      counterValue={counterValue}
      onIncrementPress={() => {
        updateCounterValue('inc')
      }}
      onDecrementPress={() => {
        updateCounterValue('dec')
      }}
    />
  )
}

export default Counter
