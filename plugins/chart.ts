import { Chart } from 'chart.js'
import { ArcElement } from 'chart.js'
import { Tooltip } from 'chart.js'
import { Legend } from 'chart.js'
import { Bar, Pie, Line, Doughnut } from 'vue-chartjs'

const dataDough = {
  labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
  datasets: [
    {
      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
      data: [40, 20, 80, 10]
    }
  ]
}

const options = {
  responsive: true,
  maintainAspectRatio: false
}


Chart.register(ArcElement, Tooltip, Legend)

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.component('pieChart', Pie)
})