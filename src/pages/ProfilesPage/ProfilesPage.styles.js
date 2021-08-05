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
