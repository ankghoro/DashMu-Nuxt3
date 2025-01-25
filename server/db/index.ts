// source https://www.youtube.com/watch?v=TYlT1dgkJrA
import mysql from 'mysql2/promise'

interface Options {
	query: string;
	values?: any[]
}

const connection = mysql.createPool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0
})

export const sql = async ({query, values}: Options) => {
	const[rows] = await connection.query(query, values);

	return rows;
}
