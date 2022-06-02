import styled, { css } from "styled-components";
import PropTypes from "prop-types";

import Logo from "../../../assets/images/logo-won.svg";

const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.main.colors.won.blue};
    height: ${theme.main.sizes.leftMenu.height};
    border-bottom: 1px solid rgba(245, 97, 97, 0.3);

    .projectName {
      display: block;
      height: ${(props) => props.theme.main.sizes.leftMenu.height};
      background-image: url(${Logo});
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 12rem;
    }
  `}
`;

export default Wrapper;
