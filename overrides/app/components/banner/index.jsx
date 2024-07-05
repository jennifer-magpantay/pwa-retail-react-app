import React from 'react'
import PropTypes from 'prop-types'
import {Box, Flex, Image, Text} from '@chakra-ui/react'

function Banner({title, img, actions, ...props}) {
    const {src, alt} = img

    return (
        <Flex
            direction="column"
            justifyContent="center"
            marginBottom={10}
            layerStyle="banner"
            {...props}
        >
            <Box position="relative" zIndex={1}>
                <Text as="h2" textStyle="heroTitle" color="white">
                    {title}
                </Text>
                {actions && actions}
            </Box>
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
        </Flex>
    )
}

Banner.displayName = 'Banner'

Banner.propTypes = {
    title: PropTypes.string,
    img: PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string
    }),
    actions: PropTypes.element
}

export default Banner
