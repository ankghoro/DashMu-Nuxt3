<template>
	<div ref="chartRef" class="chart-container"></div>
</template>

<script>
import { useNuxtApp } from '#app';

export default {
	methods: {
		initChart() {
			const { $echarts } = useNuxtApp(); // Ambil ECharts dari plugin Nuxt
			if (this.$refs.chartRef) {
				this.chart = $echarts.init(this.$refs.chartRef);
				this.chart.setOption({
					title: { text: 'Tren Penjualan', left: 'center' },
					tooltip: { trigger: 'axis' },
					xAxis: {
						type: 'category',
						data: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei']
					},
					yAxis: {
						type: 'value'
					},
					series: [
						{
							name: 'Penjualan',
							type: 'line',
							data: [500, 700, 1200, 800, 1500],
							smooth: true, // Membuat garis lebih halus
							lineStyle: { color: '#e74c3c', width: 2 }, // Warna merah
							areaStyle: { color: 'rgba(231, 76, 60, 0.2)' } // Area transparan di bawah garis
						}
					]
				});
			}
		},
		resizeChart() {
			if (this.chart) {
				this.chart.resize();
			}
		}
	},
	data() {
		return {
			chart: null
		};
	},
	mounted() {
		this.initChart();
		window.addEventListener('resize', this.resizeChart);
	},
	beforeUnmount() {
		if (this.chart) {
			this.chart.dispose();
			window.removeEventListener('resize', this.resizeChart);
		}
	}
};
</script>

<style scoped>
.chart-container {
	width: 600px;
	height: 330px;
}
</style>
