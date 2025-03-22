import React from 'react';

const Blog = ({ posts }) => {
  return (
    <div>
      <h1>Blog</h1>
      <div className="blog-list">
        {posts.map((post) => (
          <div key={post.id} className="blog-item">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
