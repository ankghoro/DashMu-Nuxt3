import { defineNuxtPlugin } from '#app';
import {
	Chart as ChartJS,
	Title,
	Tooltip,
	Legend,
	BarElement,
	CategoryScale,
	LinearScale,
	LineElement,
	PointElement,
	ArcElement,
} from 'chart.js';

export default defineNuxtPlugin(() => {
	ChartJS.register(
		Title,
		Tooltip,
		Legend,
		BarElement,
		CategoryScale,
		LinearScale,
		LineElement,
		PointElement,
		ArcElement
	);
});