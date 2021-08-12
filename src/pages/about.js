import React from 'react'
import { css } from '@emotion/react'

const About = () => {
  return (
    <div css={wrap}>
      <h1 css={title}>About</h1>
      <p>Hello about!</p>
    </div>
  )
}

const wrap = css`
  background: red;
`

const title = css`
  color: blue;
`

export default About
