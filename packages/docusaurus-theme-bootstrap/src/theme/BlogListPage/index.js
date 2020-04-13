/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import BlogPostCard from '@theme/BlogPostItem';

function BlogListPage(props) {
  const {items} = props;

  return (
    <div className="container-fluid my-5">
      <div className="row row-cols-1 row-cols-sm-1">
        {items.map(({content: BlogPostContent}) => (
          <div
            key={BlogPostContent.metadata.permalink}
            className="col col-md-4 offset-md-4 col-xs-6 mb-5">
            <BlogPostCard
              frontMatter={BlogPostContent.frontMatter}
              metadata={BlogPostContent.metadata}
              truncated={BlogPostContent.metadata.truncated}>
              <BlogPostContent />
            </BlogPostCard>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogListPage;