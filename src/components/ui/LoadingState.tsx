import { Spinner } from '@nextui-org/spinner'
import React from 'react'

interface LoadingStateProps {
    size?: 'sm' | 'md' | 'lg'
}

const LoadingState = ({size}: LoadingStateProps ) => {
  return (
    <>
        <Spinner color="current" size={size} />
    </>
  )
}

export default LoadingState