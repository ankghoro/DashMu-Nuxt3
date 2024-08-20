import * as careersModel from '@/server/models/careers'

export const read = async () => {
	try {
		const result = await careersModel.read()

		return {
			data: result
		}
	} catch {
		throw createError({
			statusCode: 500,
			statusMessage: 'Something went wrong'
		})
	}
}