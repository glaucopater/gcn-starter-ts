import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import { Layout, Wrapper, Header, Button, Content, SectionTitle } from '../components';

import config from '../../config/SiteConfig';
import { ButtonIcon } from '../components/ButtonIcon';

export default () => {
  return (
    <Layout>
      <Helmet title={`Contact | ${config.siteTitle}`} />
      <Header>
        <Link to="/">{config.siteTitle}</Link>
        <SectionTitle uppercase={true}>Contact</SectionTitle>
      </Header>
      <Wrapper>
        <Content>
          <p>Super cool intro text to get people contacting me!</p>
          <a href="https://www.twitter.com/mhadaily">
            <ButtonIcon big={true}>Twitter</ButtonIcon>
          </a>
          <a href="https://www.linkedin.com/in/mhadaily">
            <ButtonIcon big={true}>Linkedin</ButtonIcon>
          </a>
          <a href="https://www.majidhajian.com">
            <ButtonIcon big={true}>WebSite</ButtonIcon>
          </a>
        </Content>
      </Wrapper>
    </Layout>
  );
};
