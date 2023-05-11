export interface FillProps{
  fillOne: string,
  fillTwo: string,
  fillThree: string,
  fillFour: string
}

function lever({ fillOne, fillTwo, fillThree, fillFour }:FillProps) {
  return (
    <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="18" width="4" height="6" fill={ fillOne }/>
      <rect x="6" y="12" width="4" height="12" fill={ fillTwo } />
      <rect x="12" y="6" width="4" height="18" fill={ fillThree }  />
      <rect x="18" width="4" height="24"  fill={ fillFour } />
    </svg>
  )
}

export default lever
