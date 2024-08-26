import type { ButtonProps } from '@nextui-org/react'
import { Button as NextButton } from '@nextui-org/react'

const Button = ({ children, className = '', ...rest }: ButtonProps) => {
  return <NextButton {...rest}>{children}</NextButton>
}

export default Button
