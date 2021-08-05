import styled from 'styled-components';

export const ProjectCard = styled.div`
	margin: 0 auto;
	padding-top: 5rem;
	padding-bottom: 3rem;
`;

export const InnerCard = styled.article`
	background-color: #d4d7b8;
`;

export const MainTitle = styled.h1`
	text-align: center;
	color: #fbe095;
	padding: 2rem;
`;

export const ToggleBox = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 2rem;
`;

export const ProjectButton = styled.button`
	margin-right: 1rem;
`;

export const ToggleButton = styled.button`
	width: 30%;
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	grid-gap: 1em;
`;
