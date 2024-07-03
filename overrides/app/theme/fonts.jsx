import React from 'react'
import {css, Global} from '@emotion/react'

//TODO: 🙈 => check font path! adding custom fonts not working!

const globalStyles = css`
    @font-face {
        font-family: 'RowdiesBold';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('../static/fonts/rowdies-latin-700-normal.woff') format('woff'),
            url('../static/fonts/rowdies-latin-700-normal.ttf') format('ttf');
    }
    @font-face {
        font-family: 'Rowdies';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('../static/fonts/rowdies-latin-400-normal.woff') format('woff'),
            url('../static/fonts/rowdies-latin-400-normal.ttf');
    }
    @font-face {
        font-family: 'PromptBold';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('../static/fonts/prompt-latin-700-normal.woff2') format('woff2'),
            url('../static/fonts/prompt-latin-700-normal.woff') format('woff'),
            url('../static/fonts/prompt-latin-700-normal.ttf') format('ttf');
    }
    @font-face {
        font-family: 'Prompt';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('../static/fonts/prompt-latin-700-normal.woff2') format('woff2'),
            url('../static/fonts/prompt-latin-700-normal.woff') format('woff'),
            url('../static/fonts/prompt-latin-700-normal.ttf') format('ttf');
    }
`

const Fonts = () => <Global styles={globalStyles} />

export default Fonts
