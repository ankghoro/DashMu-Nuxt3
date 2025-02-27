<template>
	<div ref="chartRef" class="chart-container"></div>
</template>

<script>
import { useNuxtApp } from '#app';

export default {
	methods: {
		initChart() {
			const { $echarts } = useNuxtApp();
			if (this.$refs.chartRef) {
				this.chart = $echarts.init(this.$refs.chartRef);
				this.chart.setOption({
					title: {
						text: 'My Pie Chart',
						left: 'center'
					},
					tooltip: {
						trigger: 'item'
					},
					series: [
					{
						name: 'My Pie Chart',
						type: 'pie',
						radius: '70%',
						center: ['50%', '50%'],
						data: [
							{ value: 40, name: 'A' },
							{ value: 30, name: 'B' },
							{ value: 20, name: 'C' },
							{ value: 10, name: 'D' }
						],
						emphasis: {
							itemStyle: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						}
					}
					]
				});
			}
		},
		handleResize() {
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
			window.removeEventListener('resize', this.handleResize);
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
