import styled from 'styled-components';

const Content = styled.div`
  margin-top: ${props => props.theme.margin}px;
  padding: 0 ${props => props.theme.margin}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 2;
  width: 100%;
  box-sizing: border-box;
`;

export default Content;
