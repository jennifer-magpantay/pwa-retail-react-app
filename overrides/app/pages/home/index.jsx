import React, {useEffect} from 'react'
import {useIntl, FormattedMessage} from 'react-intl'
import {useLocation} from 'react-router-dom'

//Hooks
import useEinstein from '@salesforce/retail-react-app/app/hooks/use-einstein'
import {useServerContext} from '@salesforce/pwa-kit-react-sdk/ssr/universal/hooks'
import {useProductSearch} from '@salesforce/commerce-sdk-react'

// Utils
import {getAssetUrl} from '@salesforce/pwa-kit-react-sdk/ssr/universal/utils'

// Constants
import {
    CUSTOM_HOME_BANNER_TITLE,
    CUSTOM_HOME_SEC_ESENTIAL,
    CUSTOM_HOME_SUBTITLE,
    CUSTOM_HOME_TITLE,
    HOME_SHOP_PRODUCTS_CATEGORY_ID,
    HOME_SHOP_PRODUCTS_LIMIT,
    MAX_CACHE_AGE,
    STALE_WHILE_REVALIDATE
} from '../../constants'

// Components
import {Box, Button, Link, useStyleConfig} from '@chakra-ui/react'

// Project Components
import Hero from '../../components/hero'
import Section from '../../components/section'
import ProductsHighlight from '../../components/productsHighlight'
import ProductsGrid from '../../components/sectionProductsGrid'
import Banner from '../../components/banner'
import Seo from '@salesforce/retail-react-app/app/components/seo'
import ProductScroller from '@salesforce/retail-react-app/app/components/product-scroller'

const Home = () => {
    const intl = useIntl()
    const einstein = useEinstein()
    const {pathname} = useLocation()

    // useServerContext is a special hook introduced in v3 PWA Kit SDK.
    // It replaces the legacy `getProps` and provide a react hook interface for SSR.
    // it returns the request and response objects on the server side,
    // and these objects are undefined on the client side.
    const {res} = useServerContext()
    if (res) {
        res.set(
            'Cache-Control',
            `s-maxage=${MAX_CACHE_AGE}, stale-while-revalidate={STALE_WHILE_REVALIDATE}`
        )
    }

    const {data: productSearchResult, isLoading} = useProductSearch({
        parameters: {
            refine: [`cgid=${HOME_SHOP_PRODUCTS_CATEGORY_ID}`, 'htype=master'],
            expand: ['promotions', 'variations', 'prices', 'images', 'availability'],
            perPricebook: true,
            allVariationProperties: true,
            limit: HOME_SHOP_PRODUCTS_LIMIT
        }
    })

    /**************** Einstein ****************/
    useEffect(() => {
        einstein.sendViewPage(pathname)
    }, [])

    return (
        <Box data-testid="home-page" layerStyle="page">
            <Seo
                title="Home Page"
                description="Commerce Cloud Retail React App"
                keywords="Commerce Cloud, Retail React App, React Storefront"
            />
            <Hero
                title={CUSTOM_HOME_TITLE}
                subtitle={CUSTOM_HOME_SUBTITLE}
                img={{
                    src: getAssetUrl('static/img/hero.jpg'),
                    alt: 'npx pwa-kit-create-app'
                }}
                actions={
                    <Button
                        as={Link}
                        href="https://developer.salesforce.com/docs/commerce/pwa-kit-managed-runtime/guide/getting-started.html"
                        target="_blank"
                        variant="solid"
                        size={['sm', 'md', 'lg']}
                        width={{base: 'full', md: 'inherit'}}
                    >
                        <FormattedMessage defaultMessage="Get started" id="home.link.get_started" />
                    </Button>
                }
            />
            <Section title={CUSTOM_HOME_SEC_ESENTIAL.title}>
                <ProductsHighlight
                    title={CUSTOM_HOME_SEC_ESENTIAL.subtitle}
                    description={CUSTOM_HOME_SEC_ESENTIAL.description}
                    sourceImages={[
                        {src: getAssetUrl('/static/img/sec_essential_1.jpg'), alt: ''},
                        {src: getAssetUrl('/static/img/sec_essential_2.jpg'), alt: ''},
                        {src: getAssetUrl('/static/img/sec_essential_3.jpg'), alt: ''}
                    ]}
                    actions={
                        <Button
                            as={Link}
                            href="https://developer.salesforce.com/docs/commerce/pwa-kit-managed-runtime/guide/getting-started.html"
                            target="_blank"
                            variant="outline"
                            size={['sm', 'md', 'lg']}
                            width={{base: 'full', md: 'inherit'}}
                            marginTop={[3, 6, 9]}
                        >
                            <FormattedMessage defaultMessage="Shop now" id="home.link.shop_now" />
                        </Button>
                    }
                />
            </Section>
            {/* Products Grid */}
            {productSearchResult && (
                <Section>
                    <ProductsGrid products={productSearchResult?.hits} isLoading={isLoading} />
                </Section>
            )}
            {/* Products Scroller */}
            {productSearchResult && (
                <Section title="Spring Summer Show 2025">
                    <ProductScroller products={productSearchResult?.hits} isLoading={isLoading} />
                </Section>
            )}
            <Banner
                title={CUSTOM_HOME_BANNER_TITLE}
                img={{src: getAssetUrl('/static/img/home_banner.jpg'), alt: ''}}
                actions={
                    <Button
                        as={Link}
                        href="https://developer.salesforce.com/docs/commerce/pwa-kit-managed-runtime/guide/getting-started.html"
                        target="_blank"
                        variant="solid"
                        size={['sm', 'md', 'lg']}
                        width={{base: 'full', md: 'inherit'}}
                        marginTop={4}
                    >
                        <FormattedMessage defaultMessage="Shop now" id="home.link.shop_now" />
                    </Button>
                }
            />
            {/* Products Grid */}
            {productSearchResult && (
                <Section>
                    <ProductsGrid products={productSearchResult?.hits} isLoading={isLoading} />
                </Section>
            )}
        </Box>
    )
}

Home.getTemplateName = () => 'home'

export default Home
