<template>
	<div ref="chartRef" class="chart-container"></div>
</template>

<script>
export default {
	mounted() {
		this.initChart();
		window.addEventListener('resize', this.resizeChart);
	},
	beforeUnmount() {
		if (this.chart) {
			this.chart.dispose();
			window.removeEventListener('resize', this.resizeChart);
		}
	},
	methods: {
		initChart() {
			const { $echarts } = useNuxtApp();
			if (!this.$refs.chartRef || !$echarts) return;

			this.chart = $echarts.init(this.$refs.chartRef);
			this.chart.setOption({
				title: { text: 'Data Penjualan', left: 'center' },
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
					type: 'bar',
					data: [500, 700, 1200, 800, 1500],
					itemStyle: { color: '#3498db' }
				}
				]
			});
		},
		resizeChart() {
			if (this.chart) {
				this.chart.resize();
			}
		}
	}
};
</script>

<style scoped>
.chart-container {
	width: 100%;
	height: 330px;
}
</style>