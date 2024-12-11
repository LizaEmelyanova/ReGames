import { SVGProps } from 'react'

export const Arrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3839 5.36612C13.872 5.85427 13.872 6.64573 13.3839 7.13388L6.76777 13.75H26.25C26.9404 13.75 27.5 14.3096 27.5 15C27.5 15.6904 26.9404 16.25 26.25 16.25H6.76777L13.3839 22.8661C13.872 23.3543 13.872 24.1457 13.3839 24.6339C12.8957 25.122 12.1043 25.122 11.6161 24.6339L2.86612 15.8839C2.37796 15.3957 2.37796 14.6043 2.86612 14.1161L11.6161 5.36612C12.1043 4.87796 12.8957 4.87796 13.3839 5.36612Z" fill="black"/>
  </svg>
)