/*
 * Copyright (c) 2023, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

/* 
    Hello there! This is a demonstration of how to override a file from the base template.
    
    It's necessary that the module export interface remain consistent, 
    as other files in the base template rely on constants.js, thus we
    import the underlying constants.js, modifies it and re-export it.
*/

import {
    DEFAULT_LIMIT_VALUES,
    DEFAULT_SEARCH_PARAMS
} from '@salesforce/retail-react-app/app/constants'

// original value is 25
DEFAULT_LIMIT_VALUES[0] = 3
DEFAULT_SEARCH_PARAMS.limit = 3

export const CUSTOM_HOME_TITLE = 'On Styling'
export const CUSTOM_HOME_SUBTITLE = "We are here to outfit the world's most ambitious people"

export const CUSTOM_HOME_SEC_ESENTIAL = {
    title: 'FOR YOUR ESSENTIAL STYLE',
    subtitle: 'Embrace Your Unique Style in the New Normal',
    description:
        "In the new normal era, where change is constant, it's time to move beyond the confines of uniforms and express your individuality. Wear your unique appearance and will with pride, no matter the situation or difficulty. Embrace your personal style as a testament to resilience and self-expression, proving that even in challenging times, your identity remains your strongest asset."
}

export const CUSTOM_HOME_TITLE_ESENTIAL = 'FOR YOUR ESSENTIAL STYLE'
export const CUSTOM_HOME_SUBTITLE_ESENTIAL = 'Embrace Your Unique Style in the New Normal'
export const CUSTOM_HOME_DESC_ESENTIAL =
    "In the new normal era, where change is constant, it's time to move beyond the confines of uniforms and express your individuality. Wear your unique appearance and will with pride, no matter the situation or difficulty. Embrace your personal style as a testament to resilience and self-expression, proving that even in challenging times, your identity remains your strongest asset."

export {DEFAULT_LIMIT_VALUES, DEFAULT_SEARCH_PARAMS}

export * from '@salesforce/retail-react-app/app/constants'
