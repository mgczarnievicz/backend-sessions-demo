import useSWR from 'swr';
import JokeForm from '@/components/JokesForm';
import JokeList from '@/components/JokeList';

export default function HomePage() {
	return (
		<>
			<JokeList />
		</>
	);
}
