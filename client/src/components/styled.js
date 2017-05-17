import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const font = css`
  text-decoration: none;
  color: black;
  font-weight: 800;
  &:hover {
    text-decoration: underline;
  }
`;

export const StyledLink = styled(Link)`
  ${font};
`;

export const PageLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${props => (props.row ? 'row' : 'column')};
  align-items: center;
  justify-content:center;
`;

export const Button = styled.button`
  margin: 0.5rem;
  padding: 0.5rem;
  border: none;
  box-shadow: 0 1px 1px grey;
  ${font}
`;
