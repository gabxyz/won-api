import React, { memo, useMemo } from "react";
import PageTitle from "../../components/PageTitle";

import { Block, Container, P, Separator, StyledLink } from "./components";
import SocialLink from "./SocialLink";
import { Header } from "@buffetjs/custom";
import styled from "styled-components";

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    link: "https://github.com/gabxyz/",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/gabxyzdev",
  },
];

const TestWrap = styled.div`
  padding: 18px 30px;
`;

const HomePage = () => {
  return (
    <>
      <PageTitle title={"Won Games"} />
      <TestWrap>
        <Header
          title={{ label: "Won Games" }}
          content="Welcome to Won Games, a e-commerce platform for gamers."
          style={{ paddingTop: "200px" }}
        />
      </TestWrap>
      <Container className="container-fluid">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <Block>
              <h2 id="mainHeader">Won Games admin panel</h2>
              <Separator style={{ marginTop: 5 }} />
              <P>
                On the left side you can add games, categories, developers,
                platforms and publishers to our wonderful game shop!
              </P>
            </Block>
          </div>

          <div className="col-lg-8 col-md-12">
            <Block style={{ paddingRight: 30, paddingBottom: 0 }}>
              <h2 id="mainHeader">Social Media</h2>
              <Separator style={{ marginTop: 5 }} />
              <P>You can find me in the social media links below.</P>
              <div
                className="row social-wrapper"
                style={{
                  display: "flex",
                  margin: 0,
                  marginTop: 20,
                  marginLeft: -15,
                }}
              >
                {SOCIAL_LINKS.map((value, key) => (
                  <SocialLink key={key} {...value} />
                ))}
              </div>
            </Block>
          </div>
          <div className="col-lg-8 col-md-12">
            <Block>
              <h2 id="mainHeader">About this website</h2>
              <Separator style={{ marginTop: 5 }} />
              <P>
                This is a website for the Won Games project. It is a content
                management system for an online e-commerce website. The project
                is from the course{" "}
                <StyledLink
                  href="https://reactavancado.com.br/"
                  target="_blank"
                >
                  React Avançado
                </StyledLink>{" "}
                taught by{" "}
                <StyledLink
                  href="https://twitter.com/Willian_justen"
                  target="_blank"
                >
                  Willian Justen
                </StyledLink>{" "}
                and{" "}
                <StyledLink
                  href="https://twitter.com/guilhermelouro"
                  target="_blank"
                >
                  Guilherme Louro.
                </StyledLink>
              </P>
            </Block>
          </div>
        </div>
      </Container>
    </>
  );
};

export default memo(HomePage);
