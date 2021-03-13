import styled from 'styled-components';

const StyledWrapper = styled.section`
  width: 100%;
  height: fit-content;
  padding: 100px 0;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1280px) {
    flex-direction: column;
  }

  .portrait {
    width: 35%;
    max-width: 550px;
    height: 700px;

    object-fit: cover;
    border-radius: 20px;

    @media (max-width: 1280px) {
      height: fit-content;
      z-index: 1;
    }
    @media (max-width: 1024px) {
      width: 50%;
    }
    @media (max-width: 768px) {
      width: 60%;
    }
    @media (max-width: 500px) {
      width: 70%;
    }
  }

  .text-container {
    width: 40%;
    max-width: 750px;

    padding: 60px 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    background-image: ${({
      theme: {
        color: { lightGreen, darkGreen },
      },
    }) => `linear-gradient(to right bottom, ${lightGreen}, ${darkGreen})`};
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;

    @media (max-width: 1440px) {
      width: 45%;
    }
    @media (max-width: 1280px) {
      min-width: 100%;

      padding: 85px 0 60px 0;
      margin-top: -50px;

      align-items: center;
      text-align: center;

      border-radius: 0;
    }

    h2,
    p {
      width: 90%;
      color: ${({ theme }) => theme.color.white};

      @media (max-width: 1280px) {
        width: 70%;
      }
      @media (max-width: 768px) {
        width: 90%;
      }
    }

    h2 {
      font-size: 48px;
      font-family: 'Berkshire Swash';
      font-weight: normal;
    }

    p {
      margin-top: 30px;
      font-size: 16px;

      @media (max-width: 500px) {
        font-size: 14px;
      }
    }
  }
`;

export default StyledWrapper;