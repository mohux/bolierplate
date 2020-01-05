import React, { useEffect, Fragment } from "react";
import { inject, observer } from "mobx-react";
import NavLink from "components/shared/navLink";
const PostsList = ({ posts = [], error, loading, fetchPosts }) => {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default inject(state => ({
  posts: state.store.posts.data,
  error: state.store.posts.error,
  loading: state.store.posts.loading,
  fetchPosts: state.store.posts.getPosts
}))(observer(PostsList));