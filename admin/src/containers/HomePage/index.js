import React, { memo, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import PageTitle from '../../components/PageTitle';

import { ALink, Block, Container, LinkWrapper, P, Wave, Separator } from './components';

const FIRST_BLOCK_LINKS = [
  {
    link:
      'https://strapi.io/documentation/v3.x/getting-started/quick-start.html#_4-create-a-category-content-type',
    contentId: 'app.components.BlockLink.documentation.content',
    titleId: 'app.components.BlockLink.documentation',
  },
  {
    link: 'https://github.com/strapi/foodadvisor',
    contentId: 'app.components.BlockLink.code.content',
    titleId: 'app.components.BlockLink.code',
  },
];

const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    link: 'https://github.com/andddersonrds/',
  },
  {
    name: 'Slack',
    link: 'https://bit.ly/will-slack/',
  },
  {
    name: 'Medium',
    link: 'https://medium.com/@strapi',
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/anddersonrds',
  },
];

const HomePage = () => {
  return (
    <>
      <FormattedMessage id="HomePage.helmet.title">
        {title => <PageTitle title={title} />}
      </FormattedMessage>
      <Container className="container-fluid">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <Block>
              <h2 id="mainHeader">Bem vindo ao Won Games!</h2>
              <P>
                Ao lado você pode inserir diferentes jogos, categorias e publishers
                para a nossa maravilhosa loja de jogos!
              </P>
              <Separator style={{ marginTop: 37, marginBottom: 36 }} />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {FIRST_BLOCK_LINKS.map((data, index) => {
                  const type = index === 0 ? 'doc' : 'code';

                  return (
                    <LinkWrapper href={data.link} target="_blank" key={data.link} type={type}>
                      <FormattedMessage id={data.titleId}>
                        {title => <p className="bold">{title}</p>}
                      </FormattedMessage>
                      <FormattedMessage id={data.contentId}>
                        {content => <p>{content}</p>}
                      </FormattedMessage>
                    </LinkWrapper>
                  );
                })}
              </div>
            </Block>
          </div>

          <div className="col-md-12 col-lg-4">
            <Block style={{ paddingRight: 30, paddingBottom: 0 }}>
              <h2>Veja nossos links!</h2>
              <P style={{ marginTop: 7, marginBottom: 0 }}>
                Em caso de dúvidas ou sugestões, só ir em algum dos nossos links =)
              </P>
              <ALink
                rel="noopener noreferrer"
                href="https://reactavancado.com.br"
                target="_blank"
              >
                Veja nosso planejamento de módulos
              </ALink>

              <Separator style={{ marginTop: 18 }} />
              <div
                className="row social-wrapper"
                style={{
                  display: 'flex',
                  margin: 0,
                  marginTop: 36,
                  marginLeft: -15,
                }}
              >
                {SOCIAL_LINKS.map((value, key) => (
                  <SocialLink key={key} {...value} />
                ))}
              </div>
            </Block>
          </div>
        </div>
      </Container>
    </>
  );
};

export default memo(HomePage);
