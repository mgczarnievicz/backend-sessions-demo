import useSWR from 'swr';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import JokeForm from '@/components/JokesForm';

export default function Joke() {
	const router = useRouter();
	const { id } = router.query;

	const { data, isLoading } = useSWR(`/api/jokes/${id}`);

	if (isLoading) {
		return <h1>Loading...</h1>;
	}

	if (!data) return;

	return (
		<>
			<small>ID: {id}</small>
			<h1>{data.joke} </h1>
			<Link href='/'>Back to all</Link>
		</>
	);
}
