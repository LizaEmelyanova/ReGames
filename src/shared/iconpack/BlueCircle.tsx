import { SVGProps } from 'react'

export const BlueCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="250"
    height="250"
    viewBox="0 0 250 250"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="125" cy="125" r="124.5" fill="#048CD6" stroke="black"/>
  </svg>
)