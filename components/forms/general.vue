<template>
	<div class="row">
		<div class="col-md-6">
			<div class="card card-primary">
				<div class="card-header">
					<h3 class="card-title">Quick Example</h3>
				</div>

				<form>
					<div class="card-body">
						<div class="form-group">
							<label for="exampleInputEmail1">Email address</label>
							<input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" @keyup="checkEmail($event)">
						</div>
						<div class="form-group">
							<label for="exampleInputPassword1">Password</label>
							<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
						</div>
						<div class="form-group">
							<label for="exampleInputNumber">Number</label>
							<input type="text" class="form-control" id="exampleInputNumber" placeholder="Only Number" @keypress="checkNumber($event)">
						</div>
						<div class="form-group">
							<label for="exampleInputFile">File input</label>
							<div class="form-group">
								<div class="custom-file">
									<input type="file" class="custom-file-input" id="customFile">
									<label class="custom-file-label" for="customFile">Choose file</label>
								</div>
							</div>
							<div class="input-group">
								<div class="custom-file">
									<input type="file" class="custom-file-input" id="exampleInputFile">
									<label class="custom-file-label" for="exampleInputFile">Choose file</label>
								</div>
								<div class="input-group-append">
									<span class="input-group-text">Upload</span>
								</div>
							</div>
						</div>
						<div class="form-check">
							<input type="checkbox" class="form-check-input" id="exampleCheck1">
							<label class="form-check-label" for="exampleCheck1">Check me out</label>
						</div>
					</div>

					<div class="card-footer">
						<button type="submit" class="btn btn-primary">Submit</button>
					</div>
				</form>
			</div>

			<div class="card card-primary">
				<div class="card-header">
					<h3 class="card-title">Different Styles</h3>
				</div>

				<div class="card-body">
					<h4>Input</h4>
					<div class="form-group">
						<label for="exampleInputBorder">Bottom Border only <code>.form-control-border</code></label>
						<input type="text" class="form-control form-control-border" id="exampleInputBorder" placeholder=".form-control-border">
					</div>
					<div class="form-group">
						<label for="exampleInputBorderWidth2">Bottom Border only 2px Border <code>.form-control-border.border-width-2</code></label>
						<input type="text" class="form-control form-control-border border-width-2" id="exampleInputBorderWidth2" placeholder=".form-control-border.border-width-2">
					</div>
					<div class="form-group">
						<label for="exampleInputRounded0">Flat <code>.rounded-0</code></label>
						<input type="text" class="form-control rounded-0" id="exampleInputRounded0" placeholder=".rounded-0">
					</div>
					<h4>Custom Select</h4>
					<div class="form-group">
						<label for="exampleSelectBorder">Bottom Border only <code>.form-control-border</code></label>
						<select class="custom-select form-control-border" id="exampleSelectBorder">
							<option>Value 1</option>
							<option>Value 2</option>
							<option>Value 3</option>
						</select>
					</div>
					<div class="form-group">
						<label for="exampleSelectBorderWidth2">Bottom Border only <code>.form-control-border.border-width-2</code></label>
						<select class="custom-select form-control-border border-width-2" id="exampleSelectBorderWidth2">
							<option>Value 1</option>
							<option>Value 2</option>
							<option>Value 3</option>
						</select>
					</div>
					<div class="form-group">
						<label for="exampleSelectRounded0">Flat <code>.rounded-0</code></label>
						<select class="custom-select rounded-0" id="exampleSelectRounded0">
							<option>Value 1</option>
							<option>Value 2</option>
							<option>Value 3</option>
						</select>
					</div>
				</div>
			</div>

			<div class="card card-info">
				<div class="card-header">
					<h3 class="card-title">Input Addon</h3>
				</div>
				<div class="card-body">
					<div class="input-group mb-3">
						<div class="input-group-prepend">
							<span class="input-group-text">@</span>
						</div>
						<input type="text" class="form-control" placeholder="Username">
					</div>

					<div class="input-group mb-3">
						<input type="text" class="form-control">
						<div class="input-group-append">
							<span class="input-group-text">.00</span>
						</div>
					</div>

					<div class="input-group">
						<div class="input-group-prepend">
							<span class="input-group-text">$</span>
						</div>
						<input type="text" class="form-control">
						<div class="input-group-append">
							<span class="input-group-text">.00</span>
						</div>
					</div>

					<h4>With icons</h4>

					<div class="input-group mb-3">
						<div class="input-group-prepend">
							<span class="input-group-text">
								<client-only>
									<font-awesome-icon :icon="['fas', 'fa-envelope']" />
								</client-only>
							</span>
						</div>
						<input type="email" class="form-control" placeholder="Email">
					</div>

					<div class="input-group mb-3">
						<input type="text" class="form-control">
						<div class="input-group-append">
							<span class="input-group-text">
								<client-only>
									<font-awesome-icon :icon="['fas', 'fa-check']" />
								</client-only>
							</span>
						</div>
					</div>

					<div class="input-group">
						<div class="input-group-prepend">
							<span class="input-group-text">
								<client-only>
									<font-awesome-icon :icon="['fas', 'fa-dollar-sign']" />
								</client-only>
							</span>
						</div>
						<input type="text" class="form-control">
						<div class="input-group-append">
							<div class="input-group-text">
								<client-only>
									<font-awesome-icon :icon="['fas', 'fa-ambulance']" />
								</client-only>
							</div>
						</div>
					</div>

					<h5 class="mt-4 mb-2">With checkbox and radio inputs</h5>

					<div class="row">
						<div class="col-lg-6">
							<div class="input-group">
								<div class="input-group-prepend">
									<span class="input-group-text">
										<input type="checkbox">
									</span>
								</div>
								<input type="text" class="form-control">
							</div>
						</div>
						<div class="col-lg-6">
							<div class="input-group">
								<div class="input-group-prepend">
									<span class="input-group-text">
										<input type="radio">
									</span>
								</div>
								<input type="text" class="form-control">
							</div>
						</div>
					</div>

					<h5 class="mt-4 mb-2">With buttons</h5>

					<p>Large: <code>.input-group.input-group-lg</code></p>

					<div class="input-group input-group-lg mb-3">
						<div class="input-group-prepend">
							<button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown">
								Action
							</button>
							<ul class="dropdown-menu">
								<li class="dropdown-item"><a href="#">Action</a></li>
								<li class="dropdown-item"><a href="#">Another action</a></li>
								<li class="dropdown-item"><a href="#">Something else here</a></li>
								<li class="dropdown-divider"></li>
								<li class="dropdown-item"><a href="#">Separated link</a></li>
							</ul>
						</div>
						<input type="text" class="form-control">
					</div>

					<p>Normal</p>
					<div class="input-group mb-3">
						<div class="input-group-prepend">
							<button type="button" class="btn btn-danger">Action</button>
						</div>
						<input type="text" class="form-control">
					</div>

					<p>Small <code>.input-group.input-group-sm</code></p>
					<div class="input-group input-group-sm">
						<input type="text" class="form-control">
						<span class="input-group-append">
							<button type="button" class="btn btn-info btn-flat">Go!</button>
						</span>
					</div>
				</div>
			</div>

			<div class="card card-info">
				<div class="card-header">
					<h3 class="card-title">Horizontal Form</h3>
				</div>

				<form class="form-horizontal">
					<div class="card-body">
						<div class="form-group row">
							<label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
							<div class="col-sm-10">
								<input type="email" class="form-control" id="inputEmail3" placeholder="Email">
							</div>
						</div>
						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
							<div class="col-sm-10">
								<input type="password" class="form-control" id="inputPassword3" placeholder="Password">
							</div>
						</div>
						<div class="form-group row">
							<div class="offset-sm-2 col-sm-10">
								<div class="form-check">
									<input type="checkbox" class="form-check-input" id="exampleCheck2">
									<label class="form-check-label" for="exampleCheck2">Remember me</label>
								</div>
							</div>
						</div>
					</div>
					<div class="card-footer">
						<button type="submit" class="btn btn-info">Sign in</button>
						<button type="submit" class="btn btn-default float-right">Cancel</button>
					</div>
				</form>
			</div>
		</div>

		<div class="col-md-6">
			<div class="card card-success">
				<div class="card-header">
					<h3 class="card-title">Different Height</h3>
				</div>
				<div class="card-body">
					<input class="form-control form-control-lg" type="text" placeholder=".form-control-lg">
					<br>
					<input class="form-control" type="text" placeholder="Default input">
					<br>
					<input class="form-control form-control-sm" type="text" placeholder=".form-control-sm">
				</div>
			</div>

			<div class="card card-danger">
				<div class="card-header">
					<h3 class="card-title">Different Width</h3>
				</div>
				<div class="card-body">
					<div class="row">
						<div class="col-3">
							<input type="text" class="form-control" placeholder=".col-3">
						</div>
						<div class="col-4">
							<input type="text" class="form-control" placeholder=".col-4">
						</div>
						<div class="col-5">
							<input type="text" class="form-control" placeholder=".col-5">
						</div>
					</div>
				</div>
			</div>

			<div class="card card-warning">
				<div class="card-header">
					<h3 class="card-title">General Elements</h3>
				</div>
				<div class="card-body">
					<form>
						<div class="row">
							<div class="col-sm-6">
								<!-- text input -->
								<div class="form-group">
									<label>Text</label>
									<input type="text" class="form-control" placeholder="Enter ...">
								</div>
							</div>
							<div class="col-sm-6">
								<div class="form-group">
									<label>Text Disabled</label>
									<input type="text" class="form-control" placeholder="Enter ..." disabled>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-6">
								<!-- textarea -->
								<div class="form-group">
									<label>Textarea</label>
									<textarea class="form-control" rows="3" placeholder="Enter ..."></textarea>
								</div>
							</div>
							<div class="col-sm-6">
								<div class="form-group">
									<label>Textarea Disabled</label>
									<textarea class="form-control" rows="3" placeholder="Enter ..." disabled></textarea>
								</div>
							</div>
						</div>

						<div class="form-group">
							<label class="col-form-label" for="inputSuccess">
								<client-only>
									<font-awesome-icon :icon="['fas', 'fa-check']" />
								</client-only>
								Input with success
							</label>
							<input type="text" class="form-control is-valid" id="inputSuccess" placeholder="Enter ...">
						</div>
						<div class="form-group">
							<label class="col-form-label" for="inputWarning">
								<client-only>
									<font-awesome-icon :icon="['fas', 'fa-bell']" />
								</client-only>
								Input with warning
							</label>
							<input type="text" class="form-control is-warning" id="inputWarning" placeholder="Enter ...">
						</div>
						<div class="form-group">
							<label class="col-form-label" for="inputError">
								<client-only>
									<font-awesome-icon :icon="['fas', 'fa-times-circle']" />
								</client-only>
								Input with error
							</label>
							<input type="text" class="form-control is-invalid" id="inputError" placeholder="Enter ...">
						</div>

						<div class="row">
							<div class="col-sm-6">
								<!-- checkbox -->
								<div class="form-group">
									<div class="form-check">
										<input class="form-check-input" type="checkbox">
										<label class="form-check-label">Checkbox</label>
									</div>
									<div class="form-check">
										<input class="form-check-input" type="checkbox" checked>
										<label class="form-check-label">Checkbox checked</label>
									</div>
									<div class="form-check">
										<input class="form-check-input" type="checkbox" disabled>
										<label class="form-check-label">Checkbox disabled</label>
									</div>
								</div>
							</div>
							<div class="col-sm-6">
								<!-- radio -->
								<div class="form-group">
									<div class="form-check">
										<input class="form-check-input" type="radio" name="radio1">
										<label class="form-check-label">Radio</label>
									</div>
									<div class="form-check">
										<input class="form-check-input" type="radio" name="radio1" checked>
										<label class="form-check-label">Radio checked</label>
									</div>
									<div class="form-check">
										<input class="form-check-input" type="radio" disabled>
										<label class="form-check-label">Radio disabled</label>
									</div>
								</div>
							</div>
						</div>

						<div class="row">
							<div class="col-sm-6">
								<!-- select -->
								<div class="form-group">
									<label>Select</label>
									<select class="form-control">
										<option>option 1</option>
										<option>option 2</option>
										<option>option 3</option>
										<option>option 4</option>
										<option>option 5</option>
									</select>
								</div>
							</div>
							<div class="col-sm-6">
								<div class="form-group">
									<label>Select Disabled</label>
									<select class="form-control" disabled>
										<option>option 1</option>
										<option>option 2</option>
										<option>option 3</option>
										<option>option 4</option>
										<option>option 5</option>
									</select>
								</div>
							</div>
						</div>

						<div class="row">
							<div class="col-sm-6">
								<!-- Select multiple-->
								<div class="form-group">
									<label>Select Multiple</label>
									<select multiple class="form-control">
										<option>option 1</option>
										<option>option 2</option>
										<option>option 3</option>
										<option>option 4</option>
										<option>option 5</option>
									</select>
								</div>
							</div>
							<div class="col-sm-6">
								<div class="form-group">
									<label>Select Multiple Disabled</label>
									<select multiple class="form-control" disabled>
										<option>option 1</option>
										<option>option 2</option>
										<option>option 3</option>
										<option>option 4</option>
										<option>option 5</option>
									</select>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>

			<div class="card card-secondary">
				<div class="card-header">
					<h3 class="card-title">Custom Elements</h3>
				</div>
				<div class="card-body">
					<form>
						<div class="row">
							<div class="col-sm-6">
								<div class="form-group">
									<div class="custom-control custom-checkbox">
										<input class="custom-control-input" type="checkbox" id="customCheckbox1" value="option1">
										<label for="customCheckbox1" class="custom-control-label">Custom Checkbox</label>
									</div>
									<div class="custom-control custom-checkbox">
										<input class="custom-control-input" type="checkbox" id="customCheckbox2" checked>
										<label for="customCheckbox2" class="custom-control-label">Custom Checkbox checked</label>
									</div>
									<div class="custom-control custom-checkbox">
										<input class="custom-control-input" type="checkbox" id="customCheckbox3" disabled>
										<label for="customCheckbox3" class="custom-control-label">Custom Checkbox disabled</label>
									</div>
									<div class="custom-control custom-checkbox">
										<input class="custom-control-input custom-control-input-danger" type="checkbox" id="customCheckbox4" checked>
										<label for="customCheckbox4" class="custom-control-label">Custom Checkbox with custom color</label>
									</div>
									<div class="custom-control custom-checkbox">
										<input class="custom-control-input custom-control-input-danger custom-control-input-outline" type="checkbox" id="customCheckbox5" checked>
										<label for="customCheckbox5" class="custom-control-label">Custom Checkbox with custom color outline</label>
									</div>
								</div>
							</div>
							<div class="col-sm-6">
								<div class="form-group">
									<div class="custom-control custom-radio">
										<input class="custom-control-input" type="radio" id="customRadio1" name="customRadio">
										<label for="customRadio1" class="custom-control-label">Custom Radio</label>
									</div>
									<div class="custom-control custom-radio">
										<input class="custom-control-input" type="radio" id="customRadio2" name="customRadio" checked>
										<label for="customRadio2" class="custom-control-label">Custom Radio checked</label>
									</div>
									<div class="custom-control custom-radio">
										<input class="custom-control-input" type="radio" id="customRadio3" disabled>
										<label for="customRadio3" class="custom-control-label">Custom Radio disabled</label>
									</div>
									<div class="custom-control custom-radio">
										<input class="custom-control-input custom-control-input-danger" type="radio" id="customRadio4" name="customRadio2" checked>
										<label for="customRadio4" class="custom-control-label">Custom Radio with custom color</label>
									</div>
									<div class="custom-control custom-radio">
										<input class="custom-control-input custom-control-input-danger custom-control-input-outline" type="radio" id="customRadio5" name="customRadio2">
										<label for="customRadio5" class="custom-control-label">Custom Radio with custom color outline</label>
									</div>
								</div>
							</div>
						</div>

						<div class="row">
							<div class="col-sm-6">
								<div class="form-group">
									<label>Custom Select</label>
									<select class="custom-select">
										<option>option 1</option>
										<option>option 2</option>
										<option>option 3</option>
										<option>option 4</option>
										<option>option 5</option>
									</select>
								</div>
							</div>
							<div class="col-sm-6">
								<div class="form-group">
									<label>Custom Select Disabled</label>
									<select class="custom-select" disabled>
										<option>option 1</option>
										<option>option 2</option>
										<option>option 3</option>
										<option>option 4</option>
										<option>option 5</option>
									</select>
								</div>
							</div>
						</div>

						<div class="row">
							<div class="col-sm-6">
								<div class="form-group">
									<label>Custom Select Multiple</label>
									<select multiple class="custom-select">
										<option>option 1</option>
										<option>option 2</option>
										<option>option 3</option>
										<option>option 4</option>
										<option>option 5</option>
									</select>
								</div>
							</div>
							<div class="col-sm-6">
								<div class="form-group">
									<label>Custom Select Multiple Disabled</label>
									<select multiple class="custom-select" disabled>
										<option>option 1</option>
										<option>option 2</option>
										<option>option 3</option>
										<option>option 4</option>
										<option>option 5</option>
									</select>
								</div>
							</div>
						</div>

						<div class="form-group">
							<div class="custom-control custom-switch">
								<input type="checkbox" class="custom-control-input" id="customSwitch1">
								<label class="custom-control-label" for="customSwitch1">Toggle this custom switch element</label>
							</div>
						</div>

						<div class="form-group">
							<div class="custom-control custom-switch custom-switch-off-danger custom-switch-on-success">
								<input type="checkbox" class="custom-control-input" id="customSwitch3">
								<label class="custom-control-label" for="customSwitch3">Toggle this custom switch element with custom colors danger/success</label>
							</div>
						</div>

						<div class="form-group">
							<div class="custom-control custom-switch">
								<input type="checkbox" class="custom-control-input" disabled id="customSwitch2">
								<label class="custom-control-label" for="customSwitch2">Disabled custom switch element</label>
							</div>
						</div>

						<div class="form-group">
							<label for="customRange1">Custom range</label>
							<input type="range" class="custom-range" id="customRange1">
						</div>

						<div class="form-group">
							<label for="customRange2">Custom range (custom-range-danger)</label>
							<input type="range" class="custom-range custom-range-danger" id="customRange2">
						</div>

						<div class="form-group">
							<label for="customRange3">Custom range (custom-range-teal)</label>
							<input type="range" class="custom-range custom-range-teal" id="customRange3">
						</div>

						<div class="form-group">
							<vue-date-picker
								class="dtpicker"
								position="left"
								placeholder="DateTime"
								:format="format"
								:preview-format="format"
								:max-date="date"
								:model-value="formDate"
								@update:model-value="updateDate"
							>
								<template #input-icon>
									<client-only>
										<font-awesome-icon :icon="['fas', 'calendar-days']" class="icon-menu" />
									</client-only>
								</template>
							</vue-date-picker>
							&nbsp;{{ formDate }}
						</div>
					</form>
				</div>
			</div>

		</div>
	</div>
</template>

<script lang="ts">
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope, faAmbulance, faDollarSign, faBell, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faEnvelope, faAmbulance, faDollarSign, faBell, faTimesCircle)

export default {
	name: 'general',
	components: {
		FontAwesomeIcon
	},
	methods: {
		setDate(now) {
			const dt = new Date(now).toISOString().split('T')[0];
			const time = new Date(now).toTimeString().slice(0, 8);

			return `${dt} ${time}`
		},
		updateDate(dtx) {
			this.formDate = this.setDate(dtx)
		}
	},
	data:() => ({
		formDate: '',
		date: new Date(),
		format: (date) => {
			const dt = date.toISOString().split('T')[0];
			const time = date.toTimeString().slice(0, 8);

			return `${dt} ${time}`;
		},
	}),
	setup() {
		const { $onlyNumber, $validateEmail } = useNuxtApp()
		const checkNumber = (event) => {
			return $onlyNumber(event)
		}
		const checkEmail = (event) => {
			const value = event.target.value
			if($validateEmail(value) == true) {
				event.target.classList.remove('is-invalid')
				event.target.classList.add('is-valid')
			} else if($validateEmail(value) == false) {
				event.target.classList.remove('is-valid')
				event.target.classList.add('is-invalid')
			}
		}

		return { checkNumber, checkEmail }
	}
};
</script>