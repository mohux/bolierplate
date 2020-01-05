import React, { useEffect } from "react";
import { inject, observer } from "mobx-react";
import NavLink from "components/shared/navLink";
import "./styles/index.scss";
import { Container } from "reactstrap";
import Meta from "components/shared/meta";
import { pageView } from "utils/analytics";
const Posts = ({ posts = [], error, loading, fetchPosts }) => {
  useEffect(() => {
    pageView();
    fetchPosts();
  }, [fetchPosts]);

  return (
    <Container className="posts-container py-4">
      <Meta title="Posts" />
      {loading && <div className="display-4">Loading..</div>}
      <ul>
        {!loading &&
          posts &&
          posts.map(({ id, title, body }) => (
            <li key={id}>
              <h4>
                <NavLink to={`/posts/${id}`}>{title}</NavLink>
              </h4>
              <p>{body}</p>
            </li>
          ))}
      </ul>
    </Container>
  );
};

export default inject(state => ({
  posts: state.store.posts.data,
  error: state.store.posts.error,
  loading: state.store.posts.loading,
  fetchPosts: state.store.posts.getPosts
}))(observer(Posts));
