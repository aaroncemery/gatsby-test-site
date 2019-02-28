import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const POST_ARCHIVE_QUERY = graphql`
query BlogPostArchive {
    allMarkdownRemark(limit: 5, sort: {
      order: DESC,
      fields: [frontmatter___date]
    }) {
    edges {
      node {
        frontmatter {
          title
          slug
        }
      }
    }
  }
}
`

const ArchiveList = styled.ul`
    list-style: none;
    margin-left: 0;

    a {
    font-size: 0.8rem;
    font-family: 'Helvetica';
    color: palevioletred;
  }
`

const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={data => (
        <>
            <aside>
              <h3>Archive</h3>
              <ArchiveList>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                  <li key={node.frontmatter.slug}>
                    <Link to={`/posts${ node.frontmatter.slug }`}>
                      {node.frontmatter.title}
                    </Link>
                  </li>
                ))}
              </ArchiveList>
            </aside>
        </>
    )}
  />
)

export default Archive
