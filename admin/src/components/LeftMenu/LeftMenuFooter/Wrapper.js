import styled, { css } from "styled-components";

const Wrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    width: 100%;
    background: ${theme.main.colors.won.blue};
    border-top: 1px solid rgba(245, 97, 97, 0.3);
    bottom: 0;
    .poweredBy {
      width: 100%;
      bottom: 0;
      height: 3rem;
      padding-left: 15px;
      padding-right: 15px;
      line-height: 3rem;
      background-color: rgba(255, 255, 255, 0.02);
      font-size: 1.2rem;
      font-weight: 400;
      letter-spacing: 0.05rem;
      vertical-align: middle;
      text-align: center;
      color: ${({ theme }) => theme.main.colors.strapi["gray-light"]};
    }
  `}
`;

const A = styled.a`
  color: ${({ theme }) => theme.main.colors.won.pink};
  &:hover {
    color: ${({ theme }) => theme.main.colors.won.orange};
    transition: all 0.5s ease-in-out;
    text-decoration: none;
  }
`;

export default Wrapper;
export { A };
