import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme, { VPBadge } from 'vitepress/theme'

import './custom.css'
import 'virtual:group-icons.css'

// noinspection NpmUsedModulesInstalled
import VPSwiper from '@cssnr/vitepress-swiper'
import '@cssnr/vitepress-swiper/style.css'

import ExampleLinks from './components/ExampleLinks.vue'

// import Contributors from '@cssnr/vitepress-plugin-contributors'
// import '@cssnr/vitepress-plugin-contributors/style.css'
// import contributors from '../contributors.json'

import CopyButton from '@cssnr/vitepress-plugin-copybutton'
import '@cssnr/vitepress-plugin-copybutton/style.css'


// noinspection JSUnusedGlobalSymbols
export default {
    extends: DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {
            // https://vitepress.dev/guide/extending-default-theme#layout-slots
        })
    },
    enhanceApp({ app }) {
        app.component('Badge', VPBadge)

        app.component('VPSwiper', VPSwiper)

        app.component('ExampleLinks', ExampleLinks)

        // app.component('Contributors', Contributors)
        // app.config.globalProperties.$contributors = contributors

        app.component('CB', CopyButton)
    },
} satisfies Theme
