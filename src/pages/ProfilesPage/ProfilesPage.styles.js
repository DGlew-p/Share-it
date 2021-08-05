import styled from 'styled-components';

export const Followers = styled.section`
	width: 90vw;
	max-width: 1170px;
	margin: 5rem auto;
`;

export const Container = styled.div`
	display: grid;
	gap: 2rem;
	margin-bottom: 4rem;

	@media screen and (min-width: 576px) {
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	}
`;

export const Card = styled.article`
	background: #d4d7b8;
	border-radius: 0.75rem;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
	padding: 2rem 3.5rem;
	text-align: center;
`;

export const Button = styled.button`
	margin: 1rem 0 1rem 0;
`;
