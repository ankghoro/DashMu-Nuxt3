<template>
	<div class="row">
		<div class="col-lg-12">
			<ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
		</div>
	</div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

export default {
	name: 'Editors',
	components: {
		//
	},
	methods: {
		//
	},
	data() {
		return {
			editor: ClassicEditor,
			editorData: '<p>Content of the editor.</p>',
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