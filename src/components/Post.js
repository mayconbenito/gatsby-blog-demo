import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Post = ({ post }) => (
  <Container bgColor={post.frontmatter.color}>
    {console.log(post)}
    <Title to={post.frontmatter.path}>
      {post.frontmatter.title} ({post.frontmatter.date})
    </Title>
  </Container>
)

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 400px;
  background-color: ${props => props.bgColor};
`
const Title = styled(Link)`
  font-size: 24px;
  color: #fff;
`

export default Post
