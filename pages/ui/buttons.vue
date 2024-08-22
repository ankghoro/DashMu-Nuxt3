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
			<Buttons />
		</div>
	</div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router'
import Buttons from '@/components/ui/buttons.vue'

export default {
	name: 'forms',
	components: {
		Buttons
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
		var pageName = ""
		for(var i = 0; i < pageSplit.length; i++) {
			pageName += ((i + 1) < pageSplit.length) ? pageSplit[i] + ' > ' : pageSplit[i]
		}
		return { pageName }
	}
};
</script>