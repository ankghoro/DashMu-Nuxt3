<template>
	<div class="sidebar">
		<div class="wrapper">
			<div class="dash-name">
				<a class="dash-link" href=".">
					<img alt="Vue logo" class="logo" src="@/assets/images/sneakers-color.png" height="24" />DashMU Nuxt 3
				</a>
			</div>
			<div class="dash-profile">
				<span class="dash-adm-dp"><img src="@/assets/images/sexy-girl.png" /></span>
				<span class="dash-adm-name">Sassy Emilia</span>
			</div>
			<div class="side-list" id="side-list">
				<ul>
					<li>
						<NuxtLink to="/">
							<div>
								<client-only>
									<font-awesome-icon :icon="['fas', 'fa-gauge']" />
								</client-only>
							</div>
							<div>Dashboard</div>
						</NuxtLink>
					</li>
					<li>
						<a class="parent-link" href="#" @click="expandable($event)">
							<div>
								<client-only>
									<font-awesome-icon :icon="['fas', 'fa-edit']" />
								</client-only>
							</div>
							<div>Forms</div>
						</a>
						<ul class="nav nav-treeview collapse" id="forms_expand">
							<li class="nav-item">
								<RouterLink to="/forms/general" class="nav-link">
									<client-only>
										<font-awesome-icon :icon="['fas', 'fa-check']" class="nav-icon" />
									</client-only>
									<p>General Elements</p>
								</RouterLink>
							</li>
							<li class="nav-item">
								<RouterLink to="/forms/advanced" class="nav-link">
									<client-only>
										<font-awesome-icon :icon="['fas', 'fa-check']" class="nav-icon" />
									</client-only>
									<p>Advanced Elements</p>
								</RouterLink>
							</li>
							<li class="nav-item">
								<RouterLink to="/forms/editors" class="nav-link">
									<client-only>
										<font-awesome-icon :icon="['fas', 'fa-check']" class="nav-icon" />
									</client-only>
									<p>Editors</p>
								</RouterLink>
							</li>
							<li class="nav-item">
								<RouterLink to="/forms/validation" class="nav-link">
									<client-only>
										<font-awesome-icon :icon="['fas', 'fa-check']" class="nav-icon" />
									</client-only>
									<p>Validation</p>
								</RouterLink>
							</li>
						</ul>
					</li>
					<li>
						<RouterLink to="/tables/simple">
							<div>
								<client-only>
									<font-awesome-icon :icon="['fas', 'fa-table']" />
								</client-only>
							</div>
							<div>Table</div>
						</RouterLink>
					</li>
					<li>
						<RouterLink to="/about">
							<div>
								<client-only>
									<font-awesome-icon :icon="['fas', 'fa-info']" />
								</client-only>
							</div>
							<div>About</div>
						</RouterLink>
					</li>
				</ul>
			</div>
		</div>
	</div>

	<div class="main">
		<div class="main-header">
			<ul class="navbar">
				<li>
					<a class="nav-link" href="#" @click="menus">
						<client-only>
							<font-awesome-icon :icon="['fas', 'fa-bars']" style="height:24px" />
						</client-only>
					</a>
				</li>
			</ul>
			<ul class="navbar ml-auto">
				<li>
					<a class="nav-link" href="#" @click="requestFullscreen">
						<client-only>
							<font-awesome-icon :icon="['fas', 'fa-maximize']" style="height:24px" />
						</client-only>
					</a>
				</li>
			</ul>
		</div>
		<div class="main-body">
			<NuxtPage />
		</div>
	</div>

	<div class="footer">
		<strong>Copyright &copy; {{ current.getFullYear() }} - 2011.</strong> &nbsp; All rights reserved.
	</div>
</template>

<script lang="ts">
export default {
	methods: {
		requestFullscreen() {
			if(document.fullscreenElement != null) {
				document.exitFullscreen()
			} else {
				document.body.requestFullscreen();
			}
		},
		resizeContainer() {
			const heightScreen = window.innerHeight;
			const fixed = heightScreen - 100;
			document.querySelector('.main-body').style.minHeight = fixed + "px";
		},
		menus() {
			var sidebar = document.querySelector('.sidebar');
			var content = document.querySelector('.main');
			var footer = document.querySelector('.footer');
			if(sidebar.style.left == '-250px') {
				sidebar.style.left = '0';
				sidebar.style.boxShadow = '0 14px 28px rgba(0,0,0,.2), 0 10px 10px rgba(0,0,0,.2)';
				sidebar.style.animation = "slide-in 0.5s";
				content.style.marginLeft = '250px';
				content.style.animation = "margin-in 0.5s";
			} else {
				sidebar.style.left = '-250px';
				sidebar.style.boxShadow = 'unset';
				sidebar.style.animation = "slide-out 0.5s";
				content.style.marginLeft = '0';
				content.style.animation = "margin-out 0.5s";
			}
		},
		expandable(ev) {
			this.expandClick = true;
			var menu_forms = document.getElementById('forms_expand');
			if(menu_forms.classList.value.match('expandable') != null) {
				menu_forms.classList.remove('expandable');
				menu_forms.classList.add('collapse');
			} else {
				menu_forms.classList.remove('collapse');
				menu_forms.classList.add('expandable');
			}
		}
	},
	data: () => ({
		current: new Date()
	}),
	mounted() {
		this.resizeContainer();
		window.addEventListener('resize', () => {
			this.resizeContainer();
		});
	}
};
</script>
