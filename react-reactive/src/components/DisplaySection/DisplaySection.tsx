import React from 'react'


interface AcceptableProps {
  children: JSX.Element
}

/**
 * This is the documentation for the display section,
 * this thing will blindly render anything passed on it
 * inside a div tag
 */
const DisplaySection = (props : AcceptableProps) => {
  const { children } = props;
  return <div>{children}</div>
}

export default DisplaySection