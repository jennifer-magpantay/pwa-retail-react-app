import React from 'react'
import PropTypes from 'prop-types'
import {Box, Text} from '@chakra-ui/react'

const Section = ({title, subtitle, children}) => {
    return (
        <Box as="section" layerStyle="section">
            {title && (
                <Text
                    as="h2"
                    width={{base: '100%', lg: '50%'}}
                    marginBottom={{base: '5', lg: '10'}}
                    textStyle="sectionTitle"
                >
                    {title}
                </Text>
            )}

            {subtitle && (
                <Text as="h3" textStyle="sectionSubtitle">
                    {subtitle}
                </Text>
            )}
            {children}
        </Box>
    )
}

Section.displayName = 'Section'

Section.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    children: PropTypes.node
}

export default Section
