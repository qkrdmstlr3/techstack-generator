import { Helmet } from 'react-helmet';

import React from 'react';

function SEO() {
  return (
    <Helmet title="TechStack Generator">
      <meta name="description" content="animated techstack markdown/html generator" />
      <meta name="author" content="shellboy" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="TechStack Generator" />
      <meta property="og:site_name" content="techstack-generator.vercel.app/" />
      <meta property="og:description" content="animated techstack markdown/html generator" />
      <meta property="og:locale" content="ko_KR" />
    </Helmet>
  );
}

export default SEO;
