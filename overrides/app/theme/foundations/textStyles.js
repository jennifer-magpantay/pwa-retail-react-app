import {theme as base} from '@chakra-ui/react'
// placed name as it is on Google fonts

const textStyles = {
    textStyles: {
        heroTitle: {
            fontFamily: `"Plus Jakarta Sans", ${base.fonts?.heading}, sans-serif`,
            fontWeight: 800,
            fontSize: ['4rem', '6rem', '10rem'],
            lineHeight: 1,
            textTransform: 'uppercase'
        },
        heroSubtitle: {
            fontFamily: `"Montserrat", ${base.fonts?.heading}, sans-serif`,
            fontWeight: 800,
            fontSize: ['1.25rem', '1.5rem', '2rem']
        },
        sectionTitle: {
            fontFamily: `"Plus Jakarta Sans", ${base.fonts?.heading}, sans-serif`,
            fontWeight: 800,
            fontSize: ['2rem', '3rem', '4rem'],
            lineHeight: 1,
            textTransform: 'uppercase'
        },
        sectionSubtitle: {
            fontFamily: `"Montserrat", ${base.fonts?.heading}, sans-serif`,
            fontWeight: 800,
            fontSize: ['1.5rem', '2rem', '2.5rem'],
            lineHeight: 1
        },
        body: {
            fontFamily: `"Montserrat",${base.fonts?.body} sans-serif`,
            fontWeight: 400,
            fontSize: ['sm', 'md'],
            lineHeight: 1.4
        }
    }
}

export default textStyles
