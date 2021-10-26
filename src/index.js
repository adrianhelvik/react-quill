import { render } from 'react-dom'
import { StrictMode } from 'react'
import Examples from './Examples'

render(
  <StrictMode>
    <Examples />
  </StrictMode>,
  document.querySelector('#root'),
)
