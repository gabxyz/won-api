/* eslint-disable */
import styled, { css } from "styled-components";

const Block = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 34px;
  background: rgba(245, 97, 97, 0.1);
  padding: 19px 30px 30px 30px;
  box-shadow: 3px 3px 0 0 #f5dbdb;
  border-radius: 5px;
  line-height: 18px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

  a {
    position: inline-block;
    text-decoration: none;

    &:hover::after {
      position: relative;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      border-radius: 0.3rem;
      content: "";
      opacity: 0.1;
      background: #ffffff;
    }
  }

  h2,
  p {
    line-height: 18px;
  }
  h2 {
    display: inline-block;
    pointer-events: none;
    padding-top: 10px;
    font-size: 22px !important;
  }
  #mainHeader {
    &:after {
      content: "";
      width: 100%;
      display: block;
      background: #f56161;
      pointer-events: none;
    }
  }

  .social-wrapper {
    span {
      display: inline-block;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    > div:nth-child(2n) {
      padding-right: 0;
    }
  }
`;

const Container = styled.div`
  height: 60vh;
  width: 125vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > div {
    margin: 0;
  }
`;

const P = styled.p`
  max-width: 550px;
  padding-top: 10px;
  padding-right: 30px;
  color: #5c5f66;
  font-size: 14px;
  b {
    font-weight: 600;
  }
`;

const ALink = styled.a`
  display: inline-block;
  position: relative;
  height: 34px;
  padding-right: 20px;
  border-radius: 3px;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 34px;
  font-size: 13px;

  &:before {
    content: "\f105";

    font-weight: 600;
    margin-right: 10px;
    font-family: "FontAwesome";
  }

  &:hover,
  :focus,
  :active {
    text-decoration: none;
    outline: 0;
  }

  &:hover::after {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 0.3rem;
    content: "";
    opacity: 0.1;
    background: #ffffff;
  }
`;

const Separator = styled.div`
  height: 1px;
  background-color: rgba(245, 97, 97, 0.5);
`;

const LinkWrapper = styled.a`
  width: calc(50% - 6px);
  position: relative;
  padding: 21px 30px;
  padding-left: 95px;
  height: auto;
  line-height: 18px;
  background-color: #f7f8f8;

  &:hover,
  :focus,
  :active {
    text-decoration: none;
    outline: 0;
  }

  &:before {
    position: absolute;
    left: 30px;
    top: 38px;
    font-family: "FontAwesome";
    font-size: 38px;

    ${({ type }) => {
      if (type === "doc") {
        return css`
          content: "\f02d";
          color: #42b88e;
        `;
      }

      return css`
        content: "\f121";
        color: #f0811e;
      `;
    }}
  }

  > p {
    margin: 0;
    font-size: 13px;
    &:first-child {
      font-size: 16px;
    }
    color: #919bae;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .bold {
    color: #333740;
    font-weight: 600;
  }
`;

const SocialLinkWrapper = styled.div`
  position: relative;
  height: 24px;
  margin-bottom: 30px;
  font-size: 15px;

  img,
  span {
    display: inline-block;
    vertical-align: middle;
  }
  img {
    height: 22px;
    width: 22px;
    object-fit: contain;
  }
  span {
    width: calc(100% - 24px);
    padding-left: 11px;
    font-weight: 500;
  }
  &:hover {
    text-decoration: none;
  }
`;

const StyledLink = styled.a`
  color: #f231a5;
  &:hover {
    color: #f56161;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    cursor: pointer;
  }
`;

export {
  ALink,
  Block,
  Container,
  LinkWrapper,
  P,
  Separator,
  SocialLinkWrapper,
  StyledLink,
};
