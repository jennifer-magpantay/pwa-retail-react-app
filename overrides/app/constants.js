/* 
    It's necessary that the module export interface remain consistent, 
    as other files in the base template rely on constants.js, thus we
    import the underlying constants.js, modifies it and re-export it.
*/

// TODO: pass FormatedMessage on constant values

import {
    DEFAULT_LIMIT_VALUES,
    DEFAULT_SEARCH_PARAMS
} from '@salesforce/retail-react-app/app/constants'

// Overrided original value is 25
DEFAULT_LIMIT_VALUES[0] = 3
DEFAULT_SEARCH_PARAMS.limit = 3

// New constants
export const CUSTOM_HOME_TITLE = 'On Styling'
export const CUSTOM_HOME_SUBTITLE = "We are here to outfit the world's most ambitious people"

export const CUSTOM_HOME_SEC_ESENTIAL = {
    title: 'FOR YOUR ESSENTIAL STYLE',
    subtitle: 'Embrace Your Unique Style in the New Normal',
    description:
        "In the new normal era, where change is constant, it's time to move beyond the confines of uniforms and express your individuality. Embrace your personal style as self-expression."
}

export const CUSTOM_HOME_TITLE_ESENTIAL = 'FOR YOUR ESSENTIAL STYLE'
export const CUSTOM_HOME_SUBTITLE_ESENTIAL = 'Embrace Your Unique Style in the New Normal'
export const CUSTOM_HOME_DESC_ESENTIAL =
    "In the new normal era, where change is constant, it's time to move beyond the confines of uniforms and express your individuality. Wear your unique appearance and will with pride, no matter the situation or difficulty. Embrace your personal style as a testament to resilience and self-expression, proving that even in challenging times, your identity remains your strongest asset."

export const CUSTOM_HOME_BANNER_TITLE = 'Latest Collection'

export {DEFAULT_LIMIT_VALUES, DEFAULT_SEARCH_PARAMS}
export * from '@salesforce/retail-react-app/app/constants'
