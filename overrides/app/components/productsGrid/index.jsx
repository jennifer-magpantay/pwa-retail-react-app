import React, {forwardRef, useRef} from 'react'
import PropTypes from 'prop-types'
import {
    AspectRatio,
    Box,
    Heading,
    Skeleton,
    Stack,
    Flex,
    Button,
    Link,
    useMediaQuery
} from '@chakra-ui/react'
import {useIntl, FormattedMessage} from 'react-intl'

// Components
import ProductTile from '@salesforce/retail-react-app/app/components/product-tile'
import ProductScroller from '@salesforce/retail-react-app/app/components/product-scroller'

/**
 * Renders a scrollable, horizontal container of products with native scroll on mobile screens
 * and a static grid on desktop
 */
const ProductsGrid = forwardRef(
    (
        {
            header,
            title,
            products,
            isLoading,
            scrollProps,
            itemWidth = {base: '70%', md: '40%', lg: 'calc(25% - 10px)'},
            productTileProps,
            ...props
        },
        ref
    ) => {
        const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)', {
            ssr: true,
            fallback: false
        })
        const intl = useIntl()
        const scrollRef = useRef()
        const productsGrid = products.slice(0, 4)

        // Renders nothing if we aren't loading and have no products.
        if ((!productsGrid || productsGrid.length < 1) && !isLoading) {
            return null
        }

        const button = (
            <Button
                as={Link}
                href="https://developer.salesforce.com/docs/commerce/pwa-kit-managed-runtime/guide/getting-started.html"
                target="_blank"
                variant="outline"
                size={['sm', 'md', 'lg']}
                width="fit-content"
                display="block"
                marginTop={[6, 8, 12]}
                marginInline="auto"
                lineHeight={0}
            >
                <FormattedMessage defaultMessage="See all" id="home.link.see_all" />
            </Button>
        )

        if (!isLargerThan1024) {
            return (
                <>
                    <ProductScroller products={productsGrid} isLoading={isLoading} />
                    {button}
                </>
            )
        }

        return (
            <Box position="relative" data-testid="product-scroller" overflow="hidden" ref={ref}>
                <Stack spacing={6} {...props}>
                    {isLoading && <Skeleton height={6} width="150px" m="auto" />}

                    {title && !header && !isLoading && (
                        <Heading as="h2" fontSize="xl" textAlign="center">
                            {title}
                        </Heading>
                    )}
                    {!title && !isLoading && header ? header : null}
                    <Flex direction="row" wrap="nowrap" justifyContent="space-between">
                        {isLoading
                            ? [0, 1, 2, 3].map((key) => {
                                  return (
                                      <Box
                                          key={key}
                                          flex="0 0 auto"
                                          width={itemWidth}
                                          style={{scrollSnapAlign: 'start'}}
                                      >
                                          <Stack data-testid="product-scroller-item-skeleton">
                                              <AspectRatio ratio={1}>
                                                  <Skeleton />
                                              </AspectRatio>
                                              <Stack spacing={2}>
                                                  <Skeleton width="150px" height={5} />
                                                  <Skeleton width="75px" height={5} />
                                              </Stack>
                                          </Stack>
                                      </Box>
                                  )
                              })
                            : productsGrid.map((product, idx) => {
                                  return (
                                      <Box
                                          key={product?.id || idx}
                                          flex="0 0 auto"
                                          width={itemWidth}
                                          style={{scrollSnapAlign: 'start'}}
                                      >
                                          <ProductTile
                                              data-testid="product-scroller-item"
                                              product={product}
                                              {...(typeof productTileProps === 'function'
                                                  ? {...productTileProps(product)}
                                                  : {...productTileProps})}
                                              dynamicImageProps={{
                                                  widths: ['70vw', '70vw', '40vw', '30vw']
                                              }}
                                          />
                                      </Box>
                                  )
                              })}
                    </Flex>
                </Stack>
                {button}
            </Box>
        )
    }
)

ProductsGrid.displayName = 'ProductsGrid'

ProductsGrid.propTypes = {
    header: PropTypes.any,
    title: PropTypes.any,
    products: PropTypes.array,
    isLoading: PropTypes.bool,
    scrollProps: PropTypes.object,
    itemWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
    productTileProps: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
}

export default ProductsGrid
