import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, keywords, author }) => {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {author && <meta name="author" content={author} />}
    </Helmet>
  );
};

export default SEO;
