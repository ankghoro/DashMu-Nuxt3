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
								<BarChart />
							</client-only>
						</div>
						<div class="chart tab-pane" ref="pie" style="position: relative; height: 300px;">
							<client-only>
								<PieChart />
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
								<LineChart />
							</client-only>
						</div>
						<div class="chart tab-pane" ref="doughnut" style="position: relative; height: 300px;">
							<client-only>
								<DoughnutChart />
							</client-only>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import BarChart from '@/components/BarChart.vue';
import LineChart from '@/components/LineChart.vue';
import PieChart from '@/components/PieChart.vue';
import DoughnutChart from '@/components/DoughnutChart.vue';
import { reactive } from 'vue'

export default {
	name: 'dashboardComponents',
	components: {
		LineChart,
		BarChart,
		PieChart,
		DoughnutChart
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
		}
	},
	data: () => ({
		//
	}),
	setup() {
		//
	},
	mounted() {
		//
	}
};
</script>