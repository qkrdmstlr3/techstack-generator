import React from 'react';
import { Global, css } from '@emotion/react';
import color from './color';

function GlobalStyle(): React.ReactElement {
  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          font-family: Roboto;
        }
        html,
        body {
          font-size: 62.5%;
          background-color: ${color.darkgray};
        }
        a {
          text-decoration: none;
          color: inherit;
        }
        button {
          outline: none;
          cursor: pointer;
        }
        li {
          list-style: none;
        }
      `}
    />
  );
}

export default GlobalStyle;
