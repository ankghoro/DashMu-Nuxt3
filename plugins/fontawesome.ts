import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas, faMaximize, faBars, faGauge, faEdit, faInfo, faCheck, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faArrowCircleRight, faBagShopping, faChartSimple, faUserPlus, faChartPie } from '@fortawesome/free-solid-svg-icons'

library.add(fas, faMaximize, faBars, faGauge, faEdit, faInfo, faCheck, faSearch, faArrowCircleRight, faBagShopping, faChartSimple, faUserPlus, faChartPie)

config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})