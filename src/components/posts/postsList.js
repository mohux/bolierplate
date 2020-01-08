import React, { useEffect, Fragment } from "react";
import { inject, observer } from "mobx-react";
import NavLink from "components/shared/navLink";
import ComponentLoader from "components/loaders/componentLoader";
const PostsList = ({ posts = [], error, loading, fetchPosts }) => {
  useEffect(() => {
    // * fetching posts once, this is similar to component did mount, it will watch fetchPosts if its changed or not
    fetchPosts();
  }, [fetchPosts]);
  return (
    <Fragment>
      {loading && <ComponentLoader/>}
      <ul>
        {posts &&
          posts.map(({ id, title, body }) => (
            <li key={id}>
              <h4>
                <NavLink to={`/posts/${id}`}>{title}</NavLink>
              </h4>
              <p>{body}</p>
            </li>
          ))}
      </ul>
    </Fragment>
  );
};

export default inject(state => ({
  posts: state.store.posts.data,
  error: state.store.posts.error,
  loading: state.store.posts.loading,
  fetchPosts: state.store.posts.getPosts
}))(observer(PostsList));
