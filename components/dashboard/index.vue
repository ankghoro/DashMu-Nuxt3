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
						<font-awesome-icon class="fas" icon="fa-solid fa-chart-simple" />
					</client-only>
				</div>
				<a href="#" class="small-box-footer">
					More info
					<client-only>
						<font-awesome-icon class="fas" icon="fa-solid fa-arrow-circle-right" style="height:16px" />
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
						<font-awesome-icon class="fas" icon="fa-solid fa-user-plus" />
					</client-only>
				</div>
				<a href="#" class="small-box-footer">
					More info
					<client-only>
						<font-awesome-icon class="fas" icon="fa-solid fa-arrow-circle-right" style="height:16px" />
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
						<font-awesome-icon class="fas" icon="fa-solid fa-arrow-circle-right" style="height:16px" />
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
								<a class="nav-link active" href="#revenue-chart" data-toggle="tab">Area</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#sales-chart" data-toggle="tab">Donut</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="card-body">
					<div class="tab-content p-0">
						<!-- Morris chart - Sales -->
						<div class="chart tab-pane active" id="revenue-chart" style="position: relative; height: 300px;">
							<client-only>
								<!--Bar :data="chartData" :options="chartOptions" /-->
							</client-only>
						</div>
						<div class="chart tab-pane" id="sales-chart" style="position: relative; height: 300px;">
							<client-only>
								<!--pieChart /-->
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
							<!--Line :data="dataLine" :options="optionsLine" /-->
						</div>
						<div class="chart tab-pane" ref="doughnut" style="position: relative; height: 300px;">
							<!--Doughnut :data="dataDough" :options="optionsDough" /-->
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	name: 'boxes',
	components: {
		//
	},
	data() {
		return {
			//
		}
	}
};
</script>