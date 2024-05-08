import React, { useEffect, useState } from 'react'
import FooterAccordion from './FooterAccordian';
import FooterRight from './FooterRight';
import FooterLeft from './FooterLeft';
import FooterBrandList from './FooterBrandList';
import TermsOfUsePrivacy from './TermOfUsePrivacy';
import styled from 'styled-components';

const Footer = () => {
    const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Assuming mobile below 768px width
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
        <FooterWrapper>
    {isMobile ? <FooterAccordion/> : <FooterRight />}
    <FooterLeft />
  </FooterWrapper>
  <FooterBrandList />
  <TermsOfUsePrivacy />
  </div>
  )
}

export default Footer;

const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
  justify-content: center; /* Center horizontally */
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }

  @media (max-width: 480px) {
    flex-direction: column-reverse;
  }
`;