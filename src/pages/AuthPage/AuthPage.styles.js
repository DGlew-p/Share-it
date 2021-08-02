import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const LogLink = styled(Button)`
	font-size: 5rem;
	color: green;
`;

export const Wrapper = styled.div`
	padding: 0 20px;
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
