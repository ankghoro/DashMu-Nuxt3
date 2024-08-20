<template>
	<div class="content-header">
		<div class="container-fluid">
			<div class="row mb-2">
				<div class="col-sm-6">
					<h1 class="m-0">{{ firstUpper(pageName) }}</h1>
				</div>
			</div>
		</div>
	</div>
	<div class="content-body">
		<div class="container-fluid">
			<Editors />
		</div>
	</div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router'
import Editors from '@/components/forms/editors.vue'

export default {
	name: 'forms',
	components: {
		Editors
	},
	methods: {
		firstUpper(str) {
			return str.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
		}
	},
	setup() {
		const route = useRoute()
		const page = computed(() => route.name)
		const pageSplit = page.value.split('-')
		const pageName = pageSplit[0] + ' ' + pageSplit[1]
		return { pageName }
	}
};
</script>