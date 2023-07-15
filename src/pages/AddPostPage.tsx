import React from 'react';
import { AddPostPageDiv } from './AddPost.style';
import PostContent from '../components/PostContent/PostContent';

const AddPostPage = () => {
  return (
    <AddPostPageDiv className="AddPostPage">
      <PostContent />
    </AddPostPageDiv>
  );
};

export default AddPostPage;
