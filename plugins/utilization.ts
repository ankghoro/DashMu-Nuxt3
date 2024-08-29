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
			}
		}
	}
})