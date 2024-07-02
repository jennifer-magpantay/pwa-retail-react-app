/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React from 'react'
import PropTypes from 'prop-types'
import {
    Box,
    Flex,
    Heading,
    Stack,
    Image
} from '@salesforce/retail-react-app/app/components/shared/ui'

const Hero = ({title, subtitle, img, actions, ...props}) => {
    const {src, alt} = img

    return (
        <Box marginBottom={10} height="xl" position="relative" {...props}>
            <Stack
                width="100%"
                position="absolute"
                left={0}
                bottom={0}
                zIndex={2}
                align={{base: 'start', lg: 'center'}}
                spacing={{base: 4, md: 6}}
                paddingTop={{base: 12, md: 10}}
                paddingInline={{base: 4, md: 8}}
                paddingBottom={{base: 4, md: 8}}
                direction={{base: 'column', lg: 'row'}}
            >
                <Stack flex={1} spacing={{base: 5, md: 8}}>
                    <Heading
                        as="h1"
                        color="white"
                        fontSize={{base: '3rem', md: '6rem', lg: '8rem'}}
                        lineHeight={1}
                        textTransform="uppercase"
                    >
                        {title}
                    </Heading>
                    {actions && (
                        <Box
                            width={{base: 'full', lg: 'inherit'}}
                            display={{base: 'none', lg: 'block'}}
                        >
                            {actions}
                        </Box>
                    )}
                </Stack>
                <Stack flex={1} spacing={{base: 5, md: 8}}>
                    <Heading
                        as="h2"
                        color="white"
                        fontSize={{base: '2xl', md: '3xl', lg: '4xl'}}
                        width={{base: '100%', lg: '65%'}}
                        marginLeft={{base: 'none', lg: 'auto'}}
                    >
                        {subtitle}
                    </Heading>
                </Stack>
                {actions && (
                    <Box
                        width={{base: 'full', lg: 'inherit'}}
                        display={{base: 'block', lg: 'none'}}
                    >
                        {actions}
                    </Box>
                )}
            </Stack>
            <Box
                width="100%"
                height="100%"
                position="absolute"
                top="0"
                left="0"
                bgGradient="linear(to-b, transparent, blackAlpha.900)"
                zIndex={1}
                aria-hidden={true}
            />
            <Box width="100%" height="100%" position="absolute" top="0" left="0" zIndex={0}>
                <Image
                    fit={'cover'}
                    align={'center'}
                    width={'100%'}
                    height={'100%'}
                    src={src}
                    alt={alt}
                />
            </Box>
        </Box>
    )
}

Hero.displayName = 'Hero'

Hero.propTypes = {
    /**
     * Hero component image
     */
    img: PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string
    }),
    /**
     * Hero component main title
     */
    title: PropTypes.string,
    /**
     * Call to action component(s)
     */
    actions: PropTypes.element
}

export default Hero
