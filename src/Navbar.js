import React from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";
import colors from "./colors";

const spin = keyframes`to{
  transform:rotate(360deg);
}`;

const Navbar = () => {
  return (
    <header
      css={css`
        background-color: ${colors.primary};
        padding: 15px;
      `}
    >
      <Link to="/">Adopt me!</Link>
      <span
        role="img"
        aria-label="logo"
        css={css`
          font-size: 60px;
          display: inline-block-size;
          animation: 1s ${spin} linear infinite;

          &:hover {
            animation: 1s ${spin} linear infinite reverse;
            text-decoration: underline;
          }
        `}
      >
        😇
      </span>
    </header>
  );
};

export default Navbar;
