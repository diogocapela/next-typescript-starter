import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

import metadata from '@zd/config/metadata';
import { Container } from '@zd/components/grid';
import theme from '@zd/theme';

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translate(-50%, 12vh);
  }

  40% {
    transform: translate(-50%, 11vh);
  }

  60% {
    transform: translate(-50%, 10vh);
  }
`;

const WrapperDiv = styled.div`
  position: relative;
  min-height: 60vh;
  margin-bottom: 20vh;

  @media (max-width: 375px) {
    min-height: 70vh;
  }

  ${theme.medias.gteSmall} {
    min-height: 800px;
    margin-bottom: 2rem;
  }

  ${theme.medias.gteMedium} {
    min-height: 700px;
    margin-bottom: 2rem;
  }
`;

const ClipPathDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${theme.colors.mainBlue};
  margin-top: -5px;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);

  ${theme.medias.gteSmall} {
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0% 100%);
  }

  ${theme.medias.gteMedium} {
    clip-path: polygon(0 0, 100% 0, 100% 70%, 0% 100%);
  }

  ${theme.medias.gteLarge} {
    clip-path: polygon(0 0, 100% 0, 100% 65%, 0% 100%);
  }
`;

const StyledContainer = styled(Container)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;

  ${theme.medias.gteSmall} {
    text-align: left;
  }
`;

const LogoImg = styled.img`
  margin-bottom: 2rem;
  width: 200px;
  margin-top: 10vw;

  ${theme.medias.gteSmall} {
    margin-bottom: 1rem;
    margin-top: 210px;
  }

  ${theme.medias.gteMedium} {
    width: 300px;
    margin-top: 120px;
  }

  ${theme.medias.gteLarge} {
    margin-top: 120px;
  }
`;

const H1 = styled.h1`
  color: ${theme.colors.white};
  font-weight: 600;
  max-width: 100%;
  width: 400px;
  margin: 0 auto;
  font-size: 2rem;
  line-height: 1.5;
  text-align: center;

  ${theme.medias.gteSmall} {
    width: 600px;
    font-size: 3rem;
    line-height: 1.2;
    text-align: left;
    margin: 0;
  }

  ${theme.medias.gteMedium} {
    width: 700px;
  }

  ${theme.medias.gteLarge} {
    width: 800px;
  }
`;

const IllustrationImg = styled.img`
  position: absolute;
  max-width: 80%;
  width: 300px;
  bottom: -5%;
  right: 50%;
  transform: translateX(50%);

  ${theme.medias.gteSmall} {
    width: 450px;
    right: 5%;
    bottom: 0;
    transform: translateX(0);
  }

  ${theme.medias.gteMedium} {
    width: 500px;
    bottom: 0;
  }

  ${theme.medias.gteLarge} {
    width: 500px;
    bottom: 4%;
  }
`;

const ArrowImg = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 11vh);
  width: 50px;
  animation: ${bounce} 2s infinite;

  ${theme.medias.gteSmall} {
    display: none;
  }
`;

const Hero = (props) => {
  const { text, logoSrc, logoAlt, illustrationSrc, illustrationAlt } = props;

  return (
    <WrapperDiv>
      <ClipPathDiv />
      <StyledContainer>
        <LogoImg src={logoSrc} alt={logoAlt || metadata.website.name} />
        <H1>{text}</H1>
        <IllustrationImg src={illustrationSrc} alt={illustrationAlt || metadata.website.name} />
        <ArrowImg src="/images/arrow.svg" alt="Learn more" />
      </StyledContainer>
    </WrapperDiv>
  );
};

Hero.propTypes = {
  text: PropTypes.string,
  logoSrc: PropTypes.string,
  logoAlt: PropTypes.string.isRequired,
  illustrationSrc: PropTypes.string,
  illustrationAlt: PropTypes.string.isRequired,
};

Hero.defaultProps = {
  text: 'We build small digital products with care.',
  logoSrc: '/images/logo/logo-small-light.png',
  illustrationSrc: '/images/illustrations/progressive-app.svg',
};

export default Hero;
