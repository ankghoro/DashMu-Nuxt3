<template>
	<FullCalendar :options="calendarOptions" />
	<EventModal :show="isModalOpen" :type="isEventType" :event="selectedEvent" @close="closeModal" @save="updateEventModal" />
</template>

<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import EventModal from '@/components/modals/EventModal.vue'

export default {
	name: "Calendar",
	components: {
		FullCalendar,
		EventModal
	},
	methods: {
		handleEventClick(info) {
			// modifikasi param tanggal end date day + 1 jadi current day
			const endDate = new Date(new Date(info.event.endStr).setDate(new Date(info.event.endStr).getDate() - 1))
								.toISOString()
								.split("T")[0]
			this.selectedEvent = {
				id: info.event.id,
				title: info.event.title,
				start: info.event.startStr,
				end: endDate
			}
			this.isModalOpen = true
			this.isEventType = 'edit'
		},
		handleEventDrop(info) {
			console.log(`Event ${info.event.title} dipindahkan ke ${info.event.start}`)
		},
		handleEventResize(info) {
			console.log(`Event ${info.event.title} diperpanjang hingga ${info.event.end}`)
		},
		handleSelect(info) {
			this.selectedEvent = {
				id: String(this.events.length + 1),
				title: '',
				start: info.startStr,
				end: ''
			}
			this.isModalOpen = true
			this.isEventType = 'create'
		},
		updateCalendarEvents() {
			this.calendarOptions.events = [...this.events]
		},
		closeModal() {
			this.isModalOpen = false
		},
		updateEventModal(updatedEvent) {
			if(updatedEvent.type == 'create') {
				this.events.push({
					id: updatedEvent.id,
					title: updatedEvent.title,
					start: updatedEvent.start,
					end: updatedEvent.end
				})
				this.updateCalendarEvents()
			}
			else if(updatedEvent.type == 'edit') {
				const index = this.events.findIndex(event => event.id === updatedEvent.id)
				if (index !== -1) {
					const { type, ...eventData } = updatedEvent
					this.events[index] = { ...updatedEvent }
					this.updateCalendarEvents()
				}
			}
		},
		loadDataEvent() {
			this.events = [
				{ id: '1', title: 'Meeting', allDay: true, start: '2025-03-01' },
				{ id: '2', title: 'Conference', allDay: true, start: '2025-03-05', end: '2025-03-08' },
				{ id: '3', title: 'Meeting', allDay: true, start: '2025-03-08' },
				{ id: '4', title: 'Meeting', allDay: true, start: '2025-03-15' }
			]
			this.calendarOptions = {
				...this.calendarOptions,
				events: this.events
			};

			//this.updateCalendarEvents()
		}
	},
	data: () => ({
		events: [],
		calendarOptions: {
			plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
			initialView: 'dayGridMonth',
			editable: true,
			selectable: true,
			eventContent: function (eventInfo) {
				return {
					html: `<div style="font-size: 12px;">${eventInfo.event.title}</div>`,
				};
			},
			eventDataTransform: function (event) {
				if (event.end) {
					return {
						...event, // Salin data event agar tidak mengubah langsung
						end: new Date(new Date(event.end).setDate(new Date(event.end).getDate() + 1))
							.toISOString()
							.split("T")[0] // Format YYYY-MM-DD
					};
				}
				return event;
			},
			events: [],
			eventClick: null,
			eventDrop: null,
			eventResize: null,
			select: null
		},
		isModalOpen: false,
		isEventType: '',
		selectedEvent: {}
	}),
	mounted() {
		this.calendarOptions.eventClick = this.handleEventClick
		this.calendarOptions.eventDrop = this.handleEventDrop
		this.calendarOptions.eventResize = this.handleEventResize
		this.calendarOptions.select = this.handleSelect

		this.loadDataEvent()
	}
};
</script>
