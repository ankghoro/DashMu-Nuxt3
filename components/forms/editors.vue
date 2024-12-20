<template>
	<div class="card card-secondary">
		<div class="card-header">
			<h3 class="card-title">Editor</h3>
		</div>
		<div class="card-body">
			<div class="row">
				<div class="col-lg-12">
					<TipTapEditor v-model="editorData" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import TipTapEditor from '../TipTapEditor.vue'

export default {
	name: 'Editors',
	components: {
		TipTapEditor
	},
	methods: {
		//
	},
	data() {
		return {
			editorData: '',
			editorConfig: {
				//
			}
		}
	}
};
</script>

<style>
.ck-editor__editable_inline {
	min-height: 250px;
}
</style>