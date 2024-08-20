// source https://www.youtube.com/watch?v=TYlT1dgkJrA
import mysql from 'mysql2/promise'

interface Options {
	query: string;
	values?: any[]
}

const connection = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'SPRIT_Portal',
})

export const sql = async ({query, values}: Options) => {
	const[rows] = await connection.query(query, values);

	return rows;
}
