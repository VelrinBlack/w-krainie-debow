import styled from 'styled-components';

const StyledWrapper = styled.section`
  width: 75%;
  max-width: 1250px;

  margin: 140px auto 0 auto;

  display: flex;
  align-items: center;

  @media (max-width: 1280px) {
    width: 100%;
    margin-top: 80px;
    flex-direction: column;
  }

  .portrait {
    width: 35%;
    height: 550px;

    border-radius: 10px;
    object-fit: cover;
    box-shadow: 0 0 15px rgba(0, 0, 0, 25%);

    @media (max-width: 1280px) {
      height: fit-content;
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
    width: 65%;
    padding: 50px 20px;

    display: flex;
    flex-direction: column;

    background-image: ${({
      theme: {
        color: { lightGreen, darkGreen },
      },
    }) => `linear-gradient(to right bottom, ${lightGreen}, ${darkGreen})`};
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;

    z-index: -1;

    @media (max-width: 1280px) {
      width: 100%;
      padding: 85px 0 60px 0;
      margin-top: -50px;

      align-items: center;
      text-align: center;

      border-radius: 0;
    }

    h2,
    p {
      width: 95%;
      color: ${({ theme }) => theme.color.white};

      @media (max-width: 1280px) {
        width: 70%;
      }
      @media (max-width: 768px) {
        width: 90%;
      }
    }

    h2 {
      font-size: clamp(36px, 7vw, 48px);
      font-family: 'Berkshire Swash';
      font-weight: normal;
    }

    p {
      margin-top: 25px;
      font-size: 14px;
    }
  }
`;

export default StyledWrapper;
