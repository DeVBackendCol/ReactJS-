import React from 'react';

function BlogPost({ title, imageSrc, description }) {
  return (
    <div className="blog-post">
      <img src={imageSrc} alt={description} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default BlogPost;
