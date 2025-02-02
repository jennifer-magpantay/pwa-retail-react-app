import {extendTheme} from '@chakra-ui/react'

// Foundational style overrides
import globalStyles from './foundations/globalStyles'
import textStyles from './foundations/textStyles'
import layerStyles from './foundations/layerStyles'
import colors from './foundations/colors'
import fonts from './foundations/fonts'

import gradients from '@salesforce/retail-react-app/app/theme/foundations/gradients'
import sizes from '@salesforce/retail-react-app/app/theme/foundations/sizes'
import space from '@salesforce/retail-react-app/app/theme/foundations/space'
import shadows from '@salesforce/retail-react-app/app/theme/foundations/shadows'

// Base component style overrides
import buttons from './components/base/button'

import Alert from '@salesforce/retail-react-app/app/theme/components/base/alert'
import Accordion from '@salesforce/retail-react-app/app/theme/components/base/accordion'
import Badge from '@salesforce/retail-react-app/app/theme/components/base/badge'
import Checkbox from '@salesforce/retail-react-app/app/theme/components/base/checkbox'
import Container from '@salesforce/retail-react-app/app/theme/components/base/container'
import Drawer from '@salesforce/retail-react-app/app/theme/components/base/drawer'
import FormLabel from '@salesforce/retail-react-app/app/theme/components/base/formLabel'
import Icon from '@salesforce/retail-react-app/app/theme/components/base/icon'
import Input from '@salesforce/retail-react-app/app/theme/components/base/input'
import Modal from '@salesforce/retail-react-app/app/theme/components/base/modal'
import Radio from '@salesforce/retail-react-app/app/theme/components/base/radio'
import Select from '@salesforce/retail-react-app/app/theme/components/base/select'
import Skeleton from '@salesforce/retail-react-app/app/theme/components/base/skeleton'
import Tooltip from '@salesforce/retail-react-app/app/theme/components/base/tooltip'
import Popover from '@salesforce/retail-react-app/app/theme/components/base/popover'

// Project Component style overrides
import App from '@salesforce/retail-react-app/app/theme/components/project/_app'
import Breadcrumb from '@salesforce/retail-react-app/app/theme/components/project/breadcrumb'
import Header from '@salesforce/retail-react-app/app/theme/components/project/header'
import ListMenu from '@salesforce/retail-react-app/app/theme/components/project/list-menu'
import Footer from '@salesforce/retail-react-app/app/theme/components/project/footer'
import CheckoutFooter from '@salesforce/retail-react-app/app/theme/components/project/checkout-footer'
import LinksList from '@salesforce/retail-react-app/app/theme/components/project/links-list'
import DrawerMenu from '@salesforce/retail-react-app/app/theme/components/project/drawer-menu'
import NestedAccordion from '@salesforce/retail-react-app/app/theme/components/project/nested-accordion'
import LocaleSelector from '@salesforce/retail-react-app/app/theme/components/project/locale-selector'
import OfflineBanner from '@salesforce/retail-react-app/app/theme/components/project/offline-banner'
import Pagination from '@salesforce/retail-react-app/app/theme/components/project/pagination'
import ProductTile from '@salesforce/retail-react-app/app/theme/components/project/product-tile'
import SocialIcons from '@salesforce/retail-react-app/app/theme/components/project/social-icons'
import SwatchGroup from '@salesforce/retail-react-app/app/theme/components/project/swatch-group'
import ImageGallery from '@salesforce/retail-react-app/app/theme/components/project/image-gallery'

export const overrides = {
    styles: {
        ...globalStyles
    },
    // foundation components
    ...textStyles,
    ...colors,
    ...fonts,
    ...layerStyles,
    sizes,
    space,
    gradients,
    shadows,
    components: {
        // base components
        ...buttons,
        Accordion,
        Alert,
        Badge,
        Checkbox,
        Container,
        Drawer,
        FormLabel,
        Icon,
        Input,
        Modal,
        Popover,
        Radio,
        Select,
        Skeleton,
        Tooltip,
        // project components
        App,
        Breadcrumb,
        Header,
        Footer,
        CheckoutFooter,
        LinksList,
        ListMenu,
        DrawerMenu,
        NestedAccordion,
        LocaleSelector,
        OfflineBanner,
        SocialIcons,
        Pagination,
        ProductTile,
        SwatchGroup,
        ImageGallery
    }
}

export default extendTheme(overrides)
