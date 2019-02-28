const path = require('path')

const CREATE_BLOG_POSTS_QUERY = `
{
  allMarkdownRemark{
  edges {
    node {
      frontmatter {
        slug
      }
    }
  }
}
}
`
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(CREATE_BLOG_POSTS_QUERY).then(results => {
      results.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: `/posts${ node.frontmatter.slug }`,
          component: path.resolve('./src/components/postLayout.js'),
          context: {
            slug: node.frontmatter.slug,
          }
        })
      })
      resolve()
    })
  })
}
