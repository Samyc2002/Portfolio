import React from 'react';

import PrimaryButton from './PrimaryButton.tsx';
import SecondaryButton from './SecondaryButton.tsx';
import TextButton from './TextButton.tsx';

interface Iprops {
  type: string;
  background?: string;
  color?: string;
  rounded?: boolean;
  children: React.ReactNode;
}

const Button = ({ type, background, color, children, rounded }: Iprops) => {
  return (
    <>
      {type === 'primary' ? (
        <PrimaryButton bg={background} col={color} rounded={rounded}>
          {children}
        </PrimaryButton>
      ) : type === 'secondary' ? (
        <SecondaryButton bg={background} col={color} rounded={rounded}>
          {children}
        </SecondaryButton>
      ) : (
        <TextButton bg={background} col={color} rounded={rounded}>
          {children}
        </TextButton>
      )}
    </>
  );
};

export default Button;
