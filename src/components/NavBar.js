import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faImages, faMountain, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTwitter, faCodepen } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

export default function NavBar() {
  return (
    <Sidebar role="complementary">
      <Header role="banner">
        <LogoContainer>
          <Logo src="/Users/aa/Desktop/codingalex/src/assets/IMG_world.png" alt="Logo AlexCoding" />
        </LogoContainer>
      </Header>

      <Navigation role="navigation">
        <NavList>
          <NavItem>
            <StyledNavLink to="/" aria-label="Page d'accueil" activeClassName="navActive">
              <FontAwesomeIcon icon={faHome} aria-hidden="true" />
              <span>Accueil</span>
            </StyledNavLink>
          </NavItem>

          <NavItem>
            <StyledNavLink to="/portfolio" aria-label="Portfolio" activeClassName="navActive">
              <FontAwesomeIcon icon={faImages} aria-hidden="true" />
              <span>Portfolio</span>
            </StyledNavLink>
          </NavItem>

          <NavItem>
            <StyledNavLink to="/competences" aria-label="Compétences" activeClassName="navActive">
              <FontAwesomeIcon icon={faMountain} aria-hidden="true" />
              <span>Compétences</span>
            </StyledNavLink>
          </NavItem>

          <NavItem>
            <StyledNavLink to="/contact" aria-label="Contact" activeClassName="navActive">
              <FontAwesomeIcon icon={faAddressBook} aria-hidden="true" />
              <span>Contact</span>
            </StyledNavLink>
          </NavItem>
        </NavList>
      </Navigation>

      <SocialLinks role="contentinfo">
        <SocialList>
          <SocialItem>
            <SocialLink
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink
              href="https://github.com/bipba"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter Profile"
            >
              <FontAwesomeIcon icon={faTwitter} aria-hidden="true" />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink
              href="https://codepen.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CodePen Profile"
            >
              <FontAwesomeIcon icon={faCodepen} aria-hidden="true" />
            </SocialLink>
          </SocialItem>
        </SocialList>
      </SocialLinks>
    </Sidebar>
  );
}

// Styled components

const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  background-color: #333;
  color: #fff;
  padding: 20px;
  width: 250px;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 20px;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 203px;
  height: 199px;
  object-fit: cover;
`;

const Navigation = styled.nav`
  margin-bottom: 20px;
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const NavItem = styled.li`
  margin-bottom: 10px;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  font-size: 18px;
  padding: 10px;
  transition: background-color 0.3s;

  &.navActive {
    background-color: #444;
  }

  span {
    margin-left: 10px;
  }

  &:hover {
    background-color: #555;
  }
`;

const SocialLinks = styled.div`
  margin-top: auto;
`;

const SocialList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-between;
`;

const SocialItem = styled.li`
  margin: 0;
`;

const SocialLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 24px;
  transition: color 0.3s;

  &:hover {
    color: #1da1f2;
  }
`;
