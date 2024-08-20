<template>
	<div class="content-header">
		<div class="container-fluid">
			<div class="row mb-2">
				<div class="col-sm-6">
					<h1 class="m-0">Tables</h1>
				</div>
			</div>
		</div>
	</div>
	<div class="content-body">
		<div class="container-fluid">
			<Simple />
		</div>
	</div>
</template>

<script>
import Simple from '@/components/tables/simple.vue'

export default {
	name: 'dashboard',
	components: {
		Simple
	}
};
</script>