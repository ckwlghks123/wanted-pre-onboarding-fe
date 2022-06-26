import React from 'react';
import styled from 'styled-components';

const Comment = ({ userId, comment }) => {
  return (
    <Wrappr>
      <UserId>{userId}</UserId>
      <CommentWrap>{comment}</CommentWrap>
    </Wrappr>
  );
};

const Wrappr = styled.div``;

const UserId = styled.span`
  font-weight: bold;
  margin-right: 7px;
`;

const CommentWrap = styled.span``;

export default Comment;
