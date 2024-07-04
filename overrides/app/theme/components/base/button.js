import colors from '../../foundations/colors'

const buttons = {
    Button: {
        baseStyle: {
            minW: 'fit-content',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            borderRadius: 'none',
            _hover: {
                textDecoration: 'none'
            }
        },
        sizes: {
            sm: {
                fontSize: '0.875rem',
                px: 8,
                py: 4
            },
            md: {
                fontSize: '0.875rem',
                px: 12,
                py: 6
            },
            lg: {
                fontSize: '1rem',
                px: 16,
                py: 8
            }
        },
        variants: {
            solid: {
                bg: colors.colors.white,
                color: colors.colors.black,
                _hover: {
                    bg: colors.colors.whiteAlpha[900]
                },
                _focusVisible: {},
                _active: {},
                _disabled: {}
            },
            outline: {
                bg: colors.colors.transparent,
                border: '4px',
                borderColor: colors.colors.black,
                color: colors.colors.black,
                _hover: {
                    bg: colors.colors.whiteAlpha[500],
                    borderColor: colors.colors.blackAlpha[700],
                    color: colors.colors.blackAlpha[700]
                },
                _focusVisible: {},
                _active: {},
                _disabled: {}
            },
            ghost: {
                bg: colors.colors.transparent,
                borderWidth: '1px',
                borderColor: colors.colors.transparent,
                _hover: {
                    bg: colors.colors.whiteAlpha[800],
                    borderColor: colors.colors.whiteAlpha[800]
                },
                _focusVisible: {},
                _active: {},
                _disabled: {}
            }
        }
    }
}

export default buttons
