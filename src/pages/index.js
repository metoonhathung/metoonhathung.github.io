import React from 'react';
import { Helmet } from 'react-helmet';
import AppendHead from 'react-append-head';
import { withPrefix } from 'gatsby';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Gatsby Simplefolio'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Gatsby Simplefolio'} />
      </Helmet>
      <AppendHead>
        <script
          name="three"
          order="0"
          defer
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
        />
        <script
          name="vanta"
          order="1"
          defer
          src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js"
        />
        <script name="script" order="2" defer src={withPrefix('script.js')} />
      </AppendHead>
      <App />
    </>
  );
};
