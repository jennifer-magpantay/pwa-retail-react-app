import React from 'react'
import PropTypes from 'prop-types'
import {Box, Stack, Image, Text} from '@chakra-ui/react'

const Hero = ({title, subtitle, img, actions, ...props}) => {
    const {src, alt} = img

    return (
        <Box marginBottom={10} layerStyle="banner" {...props}>
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
                    <Text as="h1" textStyle="heroTitle" color="white">
                        {title}
                    </Text>
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
                    <Text
                        as="h2"
                        textStyle="heroSubtitle"
                        width={{base: '100%', lg: '65%'}}
                        marginLeft={{base: 'none', lg: 'auto'}}
                        color="white"
                    >
                        {subtitle}
                    </Text>
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
    img: PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string
    }),
    title: PropTypes.string,
    actions: PropTypes.element
}

export default Hero
