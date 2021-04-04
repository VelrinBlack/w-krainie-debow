import styled from 'styled-components';

const StyledWrapper = styled.div`
  height: 100%;

  ${({ isHomePage }) =>
    !isHomePage &&
    `
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    `}
`;

export default StyledWrapper;
