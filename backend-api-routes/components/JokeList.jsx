import useSWR from 'swr';
import Link from 'next/link';

export default function JokeList() {
	const { data, isLoading } = useSWR(
		'https://example-apis.vercel.app/api/bad-jokes/'
	);

	if (isLoading) {
		return <h1>Loading...</h1>;
	}

	if (!data) {
		return;
	}

	return (
		<ul>
			{data.map((joke) => (
				<li key={joke._id}>
					<Link href={`/${joke.id}`}>{joke.joke}</Link>
				</li>
			))}
		</ul>
	);
}
