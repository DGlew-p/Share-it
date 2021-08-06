import styled from 'styled-components';
import { Button } from '@material-ui/core';
import heroImg from '../../images/dev.jpg';

export const LogLink = styled(Button)`
	font-size: 5rem;
	color: green;
`;

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	height: 100vh;
	background-color: #d4d7b8;
`;

export const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: var(--maxWidth);
`;

export const EmailWrap = styled.div`
	margin-top: 10rem;
`;

export const LogoImg = styled.img`
	width: 200px;
`;

export const HeroImg = styled.div`
	background-image: url(${heroImg});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
`;

export const SlugContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Logout = styled.button`
	margin: 1rem;
`;

export const Title = styled.h1`
	margin-top: 5rem;
	text-align: center;
	font-size: 1.4rem;
`;
