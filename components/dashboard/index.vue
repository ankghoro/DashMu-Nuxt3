<template>
	<div class="row">
		<div class="col-lg-3 col-6">
			<div class="small-box bg-info">
				<div class="inner">
					<h3>150</h3>
					<p>New Orders</p>
				</div>
				<div class="icon">
					<client-only>
						<font-awesome-icon :icon="['fas', 'fa-bag-shopping']" />
					</client-only>
				</div>
				<a href="#" class="small-box-footer">
					More info 
					<client-only>
						<font-awesome-icon :icon="['fas', 'fa-arrow-circle-right']" style="height:16px" />
					</client-only>
				</a>
			</div>
		</div>
		<div class="col-lg-3 col-6">
			<div class="small-box bg-success">
				<div class="inner">
					<h3>53<sup style="font-size: 20px">%</sup></h3>
					<p>Bounce Rate</p>
				</div>
				<div class="icon">
					<client-only>
						<font-awesome-icon :icon="['fas', 'fa-chart-simple']" />
					</client-only>
				</div>
				<a href="#" class="small-box-footer">
					More info
					<client-only>
						<font-awesome-icon :icon="['fas', 'fa-arrow-circle-right']" style="height:16px" />
					</client-only>
				</a>
			</div>
		</div>
		<div class="col-lg-3 col-6">
			<div class="small-box bg-warning">
				<div class="inner">
					<h3>44</h3>
					<p>User Registrations</p>
				</div>
				<div class="icon">
					<client-only>
						<font-awesome-icon :icon="['fas', 'fa-user-plus']" />
					</client-only>
				</div>
				<a href="#" class="small-box-footer">
					More info
					<client-only>
						<font-awesome-icon :icon="['fas', 'fa-arrow-circle-right']" style="height:16px" />
					</client-only>
				</a>
			</div>
		</div>
		<div class="col-lg-3 col-6">
			<div class="small-box bg-danger">
				<div class="inner">
					<h3>65</h3>
					<p>Unique Visitors</p>
				</div>
				<div class="icon">
					<client-only>
						<font-awesome-icon :icon="['fas', 'fa-chart-pie']" />
					</client-only>
				</div>
				<a href="#" class="small-box-footer">
					More info
					<client-only>
						<font-awesome-icon :icon="['fas', 'fa-arrow-circle-right']" style="height:16px" />
					</client-only>
				</a>
			</div>
		</div>
	</div>

	<div class="row">
		<section class="col-lg-6 connectedSortable">
			<div class="card">
				<div class="card-header">
					<h3 class="card-title">
						<client-only>
							<font-awesome-icon :icon="['fas', 'fa-chart-pie']" />
						</client-only>
						Sales
					</h3>
					<div class="card-tools">
						<ul class="nav nav-pills ml-auto">
							<li class="nav-item">
								<a class="nav-link active" data-toggle="tab" @click="setActived($event, 'bar')">Bar</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" data-toggle="tab" @click="setActived($event, 'pie')">Pie</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="card-body">
					<div class="tab-content p-0">
						<!-- Morris chart - Sales -->
						<div class="chart tab-pane active" ref="bar" style="position: relative; height: 300px;">
							<client-only>
								<BarChart :data="barData" :options="options_1" v-if="barData && barData.labels"  />
								<div v-else>Loading chart data...</div>
							</client-only>
						</div>
						<div class="chart tab-pane" ref="pie" style="position: relative; height: 300px;">
							<client-only>
								<PieChart :data="pieData" :options="options_2" v-if="pieData && pieData.labels" />
								<div v-else>Loading chart data...</div>
							</client-only>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="col-lg-6 connectedSortable">
			<div class="card">
				<div class="card-header">
					<h3 class="card-title">
						<client-only>
							<font-awesome-icon :icon="['fas', 'fa-chart-pie']" />
						</client-only>
						Market Area
					</h3>
					<div class="card-tools">
						<ul class="nav nav-pills ml-auto">
							<li class="nav-item">
								<a class="nav-link active" @click="setActived($event, 'line')">Line</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" @click="setActived($event, 'doughnut')">Doughnut</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="card-body">
					<div class="tab-content p-0">
						<div class="chart tab-pane active" ref="line" style="position: relative; height: 300px;">
							<client-only>
								<LineChart :data="lineData" :options="options_1" v-if="lineData && lineData.labels" />
								<div v-else>Loading chart data...</div>
							</client-only>
						</div>
						<div class="chart tab-pane" ref="doughnut" style="position: relative; height: 300px;">
							<client-only>
								<DoughnutChart :data="doughData" :options="options_2" v-if="doughData && doughData.labels" />
								<div v-else>Loading chart data...</div>
							</client-only>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import { Line, Bar, Pie, Doughnut } from 'vue-chartjs'
import { reactive } from 'vue'

export default {
	name: 'dashboardComponents',
	components: {
		LineChart: Line,
		BarChart: Bar,
		PieChart: Pie,
		DoughnutChart: Doughnut
	},
	methods: {
		setActived(event, param) {
			let parent = event.target.parentElement.parentElement.children;
			for(var i = 0; i < parent.length; i++) {
				parent[i].children[0].classList.remove('active')
				event.target.classList.add('active')
			}

			switch(param) {
				case 'bar':
					this.$refs.bar.classList.remove('active')
					this.$refs.pie.classList.remove('active')
					this.$refs.bar.classList.add('active');
					break;
				case 'pie':
					this.$refs.bar.classList.remove('active')
					this.$refs.pie.classList.remove('active')
					this.$refs.pie.classList.add('active');
					break;
				case 'line':
					this.$refs.line.classList.remove('active')
					this.$refs.doughnut.classList.remove('active')
					this.$refs.line.classList.add('active');
					break;
				case 'doughnut':
					this.$refs.line.classList.remove('active')
					this.$refs.doughnut.classList.remove('active')
					this.$refs.doughnut.classList.add('active');
					break;
			}
		},
		loadLine() {
			this.lineData = {
				labels: ['January', 'February', 'March', 'April'],
				datasets: [
					{
						label: 'Sample Data',
						data: [40, 20, 12, 39],
						fill: false,
						borderColor: '#42A5F5',
						tension: 0.1
					}
				]
			};
		},
		loadBar() {
			this.barData = {
				labels: ['January', 'February', 'March', 'April'],  // x-axis labels
				datasets: [
					{
						label: 'Monthly Sales',  // Label for the dataset
						data: [40, 20, 12, 39],  // Data for each label (y-values)
						backgroundColor: 'rgba(75, 192, 192, 0.2)',  // Bar color
						borderColor: 'rgba(75, 192, 192, 1)',  // Border color
						borderWidth: 1
					}
				]
			};
		},
		loadPie() {
			this.pieData = {
				labels: ['Red', 'Blue', 'Yellow', 'Green'],
				datasets: [
					{
						label: 'My Pie Chart',
						data: [12, 19, 3, 7],
						backgroundColor: ['#FF6384', '#36A2EB', '#FFCD56', '#4BC0C0'],
						hoverOffset: 4
					}
				]
			};
		},
		loadDough() {
			this.doughData = {
				labels: ['Red', 'Blue', 'Yellow', 'Green'],  // Doughnut slice labels
				datasets: [
					{
						label: 'My Doughnut Chart',  // Label for the dataset
						data: [12, 19, 3, 7],  // Values for each slice
						backgroundColor: ['#FF6384', '#36A2EB', '#FFCD56', '#4BC0C0'],  // Slice colors
						hoverOffset: 4,
						options: {
							cutout: '70%' // Makes the doughnut chart thicker
						}
					}
				]
			};
		}
	},
	data: () => ({
		lineData: null,
		barData: null,
		pieData: null,
		doughData: null
	}),
	setup() {
		// Define chart data and options using Vue's Composition API
		const doughData = ref(null);
		const options_1 = reactive({
			responsive: true,
			maintainAspectRatio: false,
			scales: {
				x: {
					beginAtZero: true
				},
				y: {
					beginAtZero: true
				}
			}
		});
		const options_2 = reactive({
			responsive: true,
			maintainAspectRatio: false,
			plugins: {
				legend: {
					position: 'top'
				},
				tooltip: {
					enabled: true
				}
			}
		});

		return {
			options_1,
			options_2
		};
	},
	mounted() {
		this.loadLine()
		this.loadBar()
		this.loadPie()
		this.loadDough()
	}
};
</script>