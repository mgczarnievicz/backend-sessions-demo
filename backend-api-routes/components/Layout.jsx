import React from 'react';
import Header from './Header';
import styled from 'styled-components';

const Main = styled.main`
	display: grid;
	margin: auto;
	width: 50rem;
	padding-top: 1rem;
`;

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<Main>{children}</Main>
		</>
	);
}
