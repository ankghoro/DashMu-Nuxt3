export default defineNuxtPlugin(() => {
	return {
		provide: {
			onlyNumber: (msg: any) => {
				var text = msg.key
				if(text.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1') != '') {
					return text
				} else {
					msg.preventDefault()
				}
			},
			validateEmail: (email: string) => {
				const checkFormat = String(email)
					.toLowerCase()
					.match(
						/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
					);

				return (checkFormat != null) ? true : false
			}
		}
	}
})