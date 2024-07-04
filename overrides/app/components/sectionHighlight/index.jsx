import React from 'react'
import {Box, Flex, Image, Stack, Text, useMediaQuery} from '@chakra-ui/react'
import PropTypes from 'prop-types'

const SectionHighlight = ({title, subtitle, description, sourceImages, isReverse, actions}) => {
    const [isLargerThan800] = useMediaQuery('(min-width: 800px)', {
        ssr: true,
        fallback: false
    })

    const content = (
        <Box marginTop={2}>
            {subtitle && (
                <Text as="h3" textStyle="sectionSubtitle" marginBottom={2}>
                    {subtitle}
                </Text>
            )}
            {description && <Text fontSize="md">{description}</Text>}
            {actions && actions}
        </Box>
    )

    return (
        <Box as="section" width="100%" height="auto">
            <Text as="h2" textStyle="sectionTitle" width="50%" marginBottom={{base: '5', lg: '10'}}>
                {title}
            </Text>

            <Flex
                direction={isReverse ? 'row-reverse' : 'row'}
                alignItems="stretch"
                flexWrap={{base: 'wrap', lg: 'nowrap'}}
                width="100%"
                height="auto"
                gap={{base: 2, lg: 4}}
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
                        spacing={{base: 2, lg: 4}}
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
                    {isLargerThan800 && (subtitle || description || actions) && <>{content}</>}
                </Box>
            </Flex>
            {!isLargerThan800 && (subtitle || description || actions) && <>{content}</>}
        </Box>
    )
}

SectionHighlight.displayName = 'SectionHighlight'

SectionHighlight.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    sourceImages: PropTypes.arrayOf(PropTypes.object),
    isReverse: PropTypes.bool,
    actions: PropTypes.element
}

export default SectionHighlight
