import dbConnect from '@/db/connect';
import Joke from '@/db/models/Joke';

export default async function handler(request, response) {
	await dbConnect();

	try {
		if (request.method === 'GET') {
			const jokes = await Joke.find();

			response.status(200).json(jokes);
			return;
		}
	} catch (error) {
		console.error(error);
		response.status(500).json({ message: 'Internal Server Error.' });
		return;
	}

	response.status(405).json({ status: 'Method not allowed.' });
}
