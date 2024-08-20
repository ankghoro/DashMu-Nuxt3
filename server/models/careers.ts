import {sql} from '@/server/db'

export type CareersModel = {
	title: string,
	type: string,
	description: string
}

export const read = async () => {
	const result = await sql({
		query: 'SELECT title, type, description FROM careers'
	})

	return result as CareersModel[]
}