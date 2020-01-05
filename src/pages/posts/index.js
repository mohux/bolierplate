import React, { useEffect } from "react";
import "./styles/index.scss";
import { Container } from "reactstrap";
import Meta from "components/shared/meta";
import { pageView } from "utils/analytics";
import PostsList from "components/posts/postsList";
import "./styles/index.scss";

const Posts = () => {
  useEffect(() => {
    pageView();
  }, []);

  return (
    <Container className="posts-container py-4">
      <Meta title="Posts" ogImage="/images/sample.jpg" />
      <PostsList/>
    </Container>
  );
};

export default Posts;
