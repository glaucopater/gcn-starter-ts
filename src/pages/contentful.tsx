import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Layout } from '../components';
import Img from 'gatsby-image';

const ContentfulBlog = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost(sort: { fields: publishDate, order: DESC }) {
          edges {
            node {
              title
              id
              slug
              publishDate(formatString: "Do MMMM, YYYY")
              heroImage {
                fluid(maxWidth: 750) {
                  ...GatsbyContentfulFluid
                }
              }
              description {
                id
              }
            }
          }
        }
      }
    `,
  );
  return (
    <Layout>
      <p>
        <Link to="/">Go back to the homepage</Link>
      </p>
      <ul className="posts">
        {data.allContentfulBlogPost.edges.map((edge: any) => {
          return (
            <li className="post" key={edge.node.id}>
              <h2>
                <Link to={`/contentful/${edge.node.slug}/`}>{edge.node.title}</Link>
              </h2>
              <div className="meta">
                <span>Posted on {edge.node.publishDate}</span>
              </div>
              {edge.node.heroImage && edge.node.heroImage.fluid && (
                <Img fluid={edge.node.heroImage.fluid} alt={edge.node.title} />
              )}
              <div className="button">
                <Link to={`/contentful/${edge.node.slug}/`}>Read More</Link>
              </div>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default ContentfulBlog;
