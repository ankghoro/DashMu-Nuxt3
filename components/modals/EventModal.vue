<template>
	<transition name="fade" appear>
		<div v-if="show" class="modal-overlay">
			<div class="modal-content">
				<h2 v-if="type == 'edit'" class="modal-title">Edit Event</h2>

				<label class="modal-label">Judul Event:</label>
				<input type="text" v-model="eventData.title" class="modal-input" />

				<label class="modal-label">Tanggal Mulai:</label>
				<input type="date" v-model="eventData.start" class="modal-input" />

				<label class="modal-label">Tanggal Selesai:</label>
				<input type="date" v-model="eventData.end" class="modal-input" />

				<div class="modal-footer">
					<button @click="closeModal" class="btn-cancel">Batal</button>
					<button @click="saveEvent" class="btn-save">Simpan</button>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	props: {
		show: Boolean,
		type: String,
		event: Object
	},
	data() {
		return {
			eventData: { ...this.event }
		}
	},
	watch: {
		event(newVal) {
			if (this.type === 'edit') {
				this.eventData = { ...newVal };
			} else {
				this.eventData = { title: '', start: newVal.start, end: '' };
			}
		}
	},
	methods: {
		closeModal() {
			this.$emit('close')
		},
		saveEvent() {
			this.eventData.type = this.type
			this.$emit('save', this.eventData)
			this.closeModal()
		}
	}
};
</script>

<style scoped>
.modal-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5); /* Efek blur latar belakang */
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1000;
}

/* Kotak modal */
.modal-content {
	background: white;
	padding: 20px;
	border-radius: 12px;
	width: 420px;
	box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
	text-align: left;
}

/* Judul modal */
.modal-title {
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 16px;
}

/* Input & label */
.modal-label {
	display: block;
	font-size: 14px;
	font-weight: 600;
	margin-bottom: 6px;
}

.modal-input {
	width: 100%;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 6px;
	font-size: 14px;
	margin-bottom: 12px;
}

/* Footer modal */
.modal-footer {
	display: flex;
	justify-content: flex-end;
	gap: 10px;
	margin-top: 12px;
}

/* Tombol */
.btn-cancel {
	background: #ccc;
	color: black;
	padding: 8px 14px;
	border-radius: 6px;
	font-size: 14px;
	cursor: pointer;
	border: none;
}

.btn-save {
	background: #007bff;
	color: white;
	padding: 8px 14px;
	border-radius: 6px;
	font-size: 14px;
	cursor: pointer;
	border: none;
}

.btn-cancel:hover {
	background: #b3b3b3;
}

.btn-save:hover {
	background: #0056b3;
}

.fade-enter-active, .fade-leave-active {
	transition: opacity 0.5s ease-in-out;
}

/* Efek transisi */
.fade-enter-active, .fade-leave-active {
	transition: opacity 0.3s ease-in-out;
}

/* Saat modal pertama kali muncul */
.fade-enter-from {
	opacity: 0;
}

/* Saat modal sudah tampil */
.fade-enter-to {
	opacity: 1;
}

/* Saat modal mulai menghilang */
.fade-leave-from {
	opacity: 1;
}

/* Saat modal sudah hilang */
.fade-leave-to {
	opacity: 0;
}
</style>
