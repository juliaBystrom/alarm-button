import './style.css'
import './effects.css'
import { setupBetaButton } from './utils.js'
import { ALARM_TEXT, HEARTH_TEXT, SUBTEXT } from './constants.js'



const logo = `
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">

  <path d="M50 95 
           C0 60, -20 0, 50 30
           M50 95 
           C100 60, 120 0, 50 30
           " 
        fill="pink" 
        />
  
  <text x="50" y="70" font-family="Arial" font-size="40" text-anchor="middle" fill="black">${HEARTH_TEXT}</text>
</svg>
`

document.querySelector('.card').innerHTML = `
  <div id="bp-container">
    ${logo}
    ${logo}
    ${logo}
    ${logo}
    ${logo}
    <button id="beta-player" type="button">
      ${ALARM_TEXT}
      </button>
  </div>
`


document.querySelector('.mini-text').innerHTML = SUBTEXT

setupBetaButton(document.querySelector('#beta-player'))