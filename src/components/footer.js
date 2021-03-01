import React from 'react';
import {css} from '@emotion/core';
import Navegacion from './nav';
import styled from '@emotion/styled';
import{ Link } from 'gatsby';

const EnlaceHome = styled(Link)`
    color: #FFF;
    text-align: center;
    text-decoration: none;
    font-size: 6rem;
`;


const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer
        css={css`
          background-color: #000;
          margin-top: 5rem;
          padding: 1rem;
          border-top: 1px solid #fff;
          border-bottom: 1px solid #fff;
        `}
      >
        <div
          css={css`
            max-width: 1300px;
            margin: 0 auto;

            @media (min-width: 768px) {
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
          `}
        >
          <Navegacion />
          <EnlaceHome to="/">AP</EnlaceHome>
        </div>

        <div 
          css={css`
          max-width: 200px;
          margin: 0 auto;

          @media (min-width: 768px) {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        `}
        >
          <a href="https://www.instagram.com/albertopadrontrainer/">
            <svg
              id="Grupo_182"
              data-name="Grupo 182"
              xmlns="http://www.w3.org/2000/svg"
              width="46.523"
              height="46.523"
              viewBox="0 0 46.523 46.523"
            >
              <g
                id="Grupo_181"
                data-name="Grupo 181"
                transform="translate(8.142 8.142)"
              >
                <path
                  id="Trazado_577"
                  data-name="Trazado 577"
                  d="M402.62,364.224c4.037,0,4.515.015,6.11.088a8.344,8.344,0,0,1,2.808.52,5.009,5.009,0,0,1,2.869,2.869,8.373,8.373,0,0,1,.521,2.808c.072,1.595.088,2.073.088,6.11s-.016,4.516-.088,6.111a8.364,8.364,0,0,1-.521,2.806,5.006,5.006,0,0,1-2.869,2.871,8.373,8.373,0,0,1-2.808.52c-1.595.073-2.073.088-6.11.088s-4.515-.015-6.11-.088a8.373,8.373,0,0,1-2.808-.52,5.006,5.006,0,0,1-2.869-2.871,8.363,8.363,0,0,1-.521-2.806c-.072-1.595-.088-2.073-.088-6.111s.016-4.515.088-6.11a8.372,8.372,0,0,1,.521-2.808,5.009,5.009,0,0,1,2.869-2.869,8.344,8.344,0,0,1,2.808-.52c1.595-.073,2.073-.088,6.11-.088m0-2.725c-4.107,0-4.621.017-6.234.092a11.106,11.106,0,0,0-3.671.7,7.733,7.733,0,0,0-4.422,4.422,11.106,11.106,0,0,0-.7,3.671c-.073,1.612-.091,2.127-.091,6.233s.017,4.622.091,6.234a11.106,11.106,0,0,0,.7,3.671,7.741,7.741,0,0,0,4.422,4.422,11.105,11.105,0,0,0,3.671.7c1.613.073,2.127.091,6.234.091s4.621-.017,6.234-.091a11.106,11.106,0,0,0,3.671-.7,7.741,7.741,0,0,0,4.422-4.422,11.106,11.106,0,0,0,.7-3.671c.073-1.612.091-2.127.091-6.234s-.017-4.621-.091-6.233a11.106,11.106,0,0,0-.7-3.671,7.733,7.733,0,0,0-4.422-4.422,11.107,11.107,0,0,0-3.671-.7c-1.613-.074-2.127-.092-6.234-.092Z"
                  transform="translate(-387.5 -361.499)"
                  fill="#c13584"
                />
                <path
                  id="Trazado_578"
                  data-name="Trazado 578"
                  d="M401.589,367.824a7.764,7.764,0,1,0,7.765,7.764A7.764,7.764,0,0,0,401.589,367.824Zm0,12.8a5.04,5.04,0,1,1,5.04-5.041A5.04,5.04,0,0,1,401.589,380.628Z"
                  transform="translate(-386.469 -360.468)"
                  fill="#c13584"
                />
                <circle
                  id="Elipse_34"
                  data-name="Elipse 34"
                  cx="1.814"
                  cy="1.814"
                  r="1.814"
                  transform="translate(21.377 5.235)"
                  fill="#c13584"
                />
              </g>
              <path
                id="Trazado_579"
                data-name="Trazado 579"
                d="M380.5,354.5v46.523h46.523V354.5Zm41.871,39.545a2.325,2.325,0,0,1-2.326,2.326H387.479a2.325,2.325,0,0,1-2.326-2.326V361.477a2.326,2.326,0,0,1,2.326-2.326h32.566a2.326,2.326,0,0,1,2.326,2.326Z"
                transform="translate(-380.5 -354.499)"
                fill="#c13584"
                fill-rule="evenodd"
              />
            </svg>
          </a>

          <a href="https://www.facebook.com/alberto.padron.940">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46.523"
              height="46.523"
              viewBox="0 0 46.523 46.523"
            >
              <path
                id="Trazado_573"
                data-name="Trazado 573"
                d="M180.5,401.024h46.523V354.5H180.5Zm41.871-6.72a2.069,2.069,0,0,1-2.068,2.068h-9.454v-14.4H215.7l.721-5.634h-5.576v-3.587c0-1.628.454-2.738,2.784-2.738H216.6V365a40.248,40.248,0,0,0-4.331-.221c-4.3,0-7.237,2.622-7.237,7.427v4.134H200.2v5.636h4.834v14.392H187.22a2.069,2.069,0,0,1-2.068-2.068V361.219a2.067,2.067,0,0,1,2.068-2.066H220.3a2.067,2.067,0,0,1,2.068,2.066Z"
                transform="translate(-180.5 -354.501)"
                fill="#3b5998"
                fill-rule="evenodd"
              />
            </svg>
          </a>
        </div>
      </footer>

      <p
        css={css`
          text-align: center;
          color: #fff;
          background-color: #000;
          margin: 0;
          padding: 1rem;
        `}
      >
        Todos los Derechos Reservados {year} &copy;
      </p>
    </>
  )
}
 
export default Footer;