import React from 'react';
import styled from 'styled-components';

const HeaderTitleStyled = styled.h1`
	color: var(--white);
	font-weight: lighter;
	font-size: 28px;
	padding: 10px;
	margin: 0px auto;
`;

const HeaderStyled = styled.header`
	width: 100%;
	border-bottom: 1px solid var(--white);
`;

export default function Header() {
	return (
		<HeaderStyled>
			<HeaderTitleStyled>
				MongoDB Sessions: CRUD operations
			</HeaderTitleStyled>
		</HeaderStyled>
	);
}
