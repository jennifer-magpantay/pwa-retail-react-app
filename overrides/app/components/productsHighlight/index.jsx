import React from 'react'
import PropTypes from 'prop-types'
import {Box, Flex, Image, Stack, Text, useMediaQuery} from '@chakra-ui/react'

const ProductsHighlight = ({title, description, sourceImages, isReverse, actions}) => {
    const [isLargerThan800] = useMediaQuery('(min-width: 800px)', {
        ssr: true,
        fallback: false
    })

    const content = (
        <Box width={{base: '100%', lg: '75%'}} marginTop={[2, 4, 6]}>
            {title && (
                <Text as="h3" textStyle="sectionSubtitle" marginBottom={2}>
                    {title}
                </Text>
            )}
            {description && <Text fontSize="md">{description}</Text>}
            {actions && actions}
        </Box>
    )

    return (
        <>
            <Flex
                direction={isReverse ? 'row-reverse' : 'row'}
                alignItems="stretch"
                flexWrap={{base: 'wrap', lg: 'nowrap'}}
                width="100%"
                height="xl"
                gap={{base: 2, md: 12, lg: 16}}
            >
                {sourceImages[0].src && (
                    <Box
                        flex={1}
                        width={{base: '100%', lg: '50%'}}
                        //height={{base: '200px', sm: '300px', lg: 'md'}}
                    >
                        <Image
                            width="100%"
                            height="100%"
                            objectFit="cover"
                            objectPosition="center"
                            src={sourceImages[0].src}
                            alt={sourceImages[0].alt || ''}
                        />
                    </Box>
                )}
                <Box
                    flex={1}
                    width={{base: '100%', lg: '50%'}}
                    //height={{base: '200px', lg: 'md'}}
                >
                    <Stack
                        direction="row"
                        width="100%"
                        height={{base: '100%', lg: '50%'}}
                        spacing={{base: 2, md: 6, lg: 8}}
                    >
                        {sourceImages[1].src && (
                            <Box flex={1} width="100%" height="100%">
                                <Image
                                    width="100%"
                                    height="100%"
                                    objectFit="cover"
                                    objectPosition="center"
                                    src={sourceImages[1].src}
                                    alt={sourceImages[1].alt || ''}
                                />
                            </Box>
                        )}

                        {sourceImages[2].src && (
                            <Box flex={1} width="100%" height="100%">
                                <Image
                                    width="100%"
                                    height="100%"
                                    objectFit="cover"
                                    objectPosition="center"
                                    src={sourceImages[2].src}
                                    alt={sourceImages[2].alt || ''}
                                />
                            </Box>
                        )}
                    </Stack>
                    {isLargerThan800 && (title || description || actions) && <>{content}</>}
                </Box>
            </Flex>
            {!isLargerThan800 && (title || description || actions) && <>{content}</>}
        </>
    )
}

ProductsHighlight.displayName = 'ProductsHighlight'

ProductsHighlight.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    sourceImages: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string,
            alt: PropTypes.string
        })
    ),
    isReverse: PropTypes.bool,
    actions: PropTypes.element
}

export default ProductsHighlight
