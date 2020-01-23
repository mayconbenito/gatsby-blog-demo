import React from "react"
import { graphql } from "gatsby"
import Post from "../components/Post"
import styled from "styled-components"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <Post key={edge.node.id} post={edge.node} />)

  return <PostsList>{Posts}</PostsList>
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            color
          }
        }
      }
    }
  }
`

const PostsList = styled.div`
  display: flex;
  flex-wrap: wrap;
`
