<template>
	<div class="content-header">
		<div class="container-fluid">
			<div class="row mb-2">
				<div class="col-sm-6">
					<h1 class="m-0">Dashboard</h1>
				</div>
			</div>
		</div>
	</div>
	<div class="content-body">
		<div class="container-fluid">
			<Boxes />

			<div class="row">
				<div class="col-lg-5 connectedSortable ui-sortable">
					under process...
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Boxes from '@/components/dashboard/index.vue'

export default {
	name: 'dashboard',
	components: {
		Boxes
	}
};
</script>