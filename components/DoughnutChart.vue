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
					title: {
						text: 'My Doughnut Chart',
						left: 'center'
					},
					tooltip: {
						trigger: 'item'
					},
					// legend: { bottom: 10, left: 'center' },
					series: [
						{
							name: 'My Doughnut Chart',
							type: 'pie',
							radius: ['30%', '70%'],
							center: ['50%', '50%'],
							data: [
								{ value: 40, name: 'Elektronik' },
								{ value: 30, name: 'Pakaian' },
								{ value: 20, name: 'Makanan' },
								{ value: 10, name: 'Lainnya' }
							],
							itemStyle: {
								borderRadius: 10,
								borderColor: '#fff',
								borderWidth: 2
							},
							label: {
								formatter: '{b}: {c} ({d}%)'
							}
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
		this.$nextTick(() => {
			setTimeout(() => {
				this.initChart();
				window.addEventListener('resize', this.handleResize);
			}, 300);
		});
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
	width: 520px;
	max-width: 600px;
	height: 320px;
	min-width: 300px;
	min-height: 300px;
	margin: auto;
}
</style>
