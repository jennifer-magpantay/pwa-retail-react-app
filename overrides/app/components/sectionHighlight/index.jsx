import {
    Box,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useMediaQuery
} from '@salesforce/retail-react-app/app/components/shared/ui'
import React from 'react'

const SectionHighlight = ({
    title,
    subtitle,
    description,
    sourceImages = [{}],
    isReverse = false
}) => {
    // ssr-friendly media query with fallback
    const [isLargerThan800] = useMediaQuery('(min-width: 800px)', {
        ssr: true,
        fallback: false // return false on the server, and re-evaluate on the client side
    })

    return (
        <Box as="section" width="100%" height={{base: 'auto', lg: 'xl'}}>
            <Heading
                as="h2"
                width="350px"
                marginBottom={{base: '5', lg: '10'}}
                fontSize={{base: '2xl', md: '3xl', lg: '4xl'}}
                textTransform="uppercase"
            >
                {title}
            </Heading>

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
                        width={{base: '100%', lg: '50%'}}
                        height={{base: '200px', sm: '300px', lg: 'md'}}
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
                <Box width={{base: '100%', lg: '50%'}} height={{base: '200px', lg: 'md'}}>
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
                    {isLargerThan800 && (subtitle || description) && (
                        <Box marginTop={2}>
                            {subtitle && (
                                <Heading
                                    as="h3"
                                    fontSize={{base: 'xl', md: '2xl', lg: '2xl'}}
                                    marginBottom={2}
                                >
                                    {subtitle}
                                </Heading>
                            )}
                            {description && <Text fontSize="md">{description}</Text>}
                        </Box>
                    )}
                </Box>
            </Flex>
            {!isLargerThan800 && (subtitle || description) && (
                <Box marginTop={2}>
                    {subtitle && (
                        <Heading
                            as="h3"
                            fontSize={{base: 'xl', md: '2xl', lg: '3xl'}}
                            marginBottom={1}
                        >
                            {subtitle}
                        </Heading>
                    )}
                    {description && <Text fontSize="sm">{description}</Text>}
                </Box>
            )}
        </Box>
    )
}

export default SectionHighlight
