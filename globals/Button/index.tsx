import React from 'react';

import PrimaryButton from './PrimaryButton.tsx';
import SecondaryButton from './SecondaryButton.tsx';
import TextButton from './TextButton.tsx';

interface Iprops {
  type: string,
  background?: string,
  color?: string,
  children: React.ReactNode
}

const Button = ({ type, background, color, children }: Iprops) => {
  return (
    <>
      {type==="primary" ? (
        <PrimaryButton bg={background} col={color}>{children}</PrimaryButton>
      ): type==="secondary" ? (
        <SecondaryButton bg={background} col={color}>{children}</SecondaryButton>
      ):(
        <TextButton bg={background} col={color}>{children}</TextButton>
      )}
    </>
  )
}

export default Button
