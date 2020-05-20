import styled from 'styled-components';

const EmptyState = styled.div`
  border: 1px solid ${props => props.theme.color.gray};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80vw;
  height: 65vh;
  box-sizing: border-box;
  margin: 0 auto;
`;

export default EmptyState;
