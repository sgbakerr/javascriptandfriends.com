import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Helmet from 'react-helmet'

import Header from "./header";
import "./default.css";
import "./layout.css";

const Layout = ({ children, hideHeading = false }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <title>JavaScript and Friends Conference</title>
        </Helmet>
        {!hideHeading && <Header siteTitle={data.site.siteMetadata.title} />}
        <main
          style={{
            margin: "0 auto",
            maxWidth: 960,
            padding: "0px 1.0875rem 1.45rem",
            paddingTop: 0
          }}
        >
          {children}
        </main>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
