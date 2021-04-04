import StyledWrapper from './Header.styles';
import Logo from 'components/molecules/Logo/Logo';
import Navbar from 'components/molecules/Navbar/Navbar';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import HamburgerMenu from 'components/molecules/HamburgerMenu/HamburgerMenu';
import { scrollToRef } from 'helpers';

const Header = ({
  backgroundImage,
  title,
  description,
  isHomePage = false,
}) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const scrollRef = useRef();

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 1280);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <StyledWrapper backgroundImage={backgroundImage} isHomePage={isHomePage}>
      <div className="top-bar">
        {isSmallScreen ? (
          <>
            <HamburgerMenu />
            {!isHomePage && <Logo />}
          </>
        ) : (
          <>
            {!isHomePage && <Logo hasBackground />}
            <Navbar />
          </>
        )}
      </div>

      <div className={`text-container ${isHomePage && 'is-home-page'}`}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      {isHomePage ? (
        <img
          src="/images/scroll.svg"
          alt="ikona scrollowania"
          className="scroll-icon"
          onClick={() => scrollToRef(scrollRef)}
        />
      ) : (
        <div className="gradient-line"></div>
      )}

      <span ref={scrollRef} className="scroll-ref"></span>
    </StyledWrapper>
  );
};

Header.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  isHomePage: PropTypes.bool,
};

export default Header;
