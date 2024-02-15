'use client';
import React from 'react'

const error = (error) => {
    console.log(error,"ERROR");
  return (
    // <div>Something went wrong</div>
    <div>{error.error.message}</div>
  )
}

export default error