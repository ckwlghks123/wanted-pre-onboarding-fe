import React, { useEffect, useRef, useState } from 'react';
import Comment from './Comment';
import styled from 'styled-components';

import {
  BsThreeDots,
  BsEmojiSmile,
  BsFillSuitHeartFill,
  BsChatLeft,
  BsCursor,
  BsBookmark,
} from 'react-icons/bs';

const Feed = ({
  id,
  userId,
  profile,
  feedImage,
  likes,
  comments,
  addComment,
}) => {
  const commentRef = useRef();
  const [comment, setComment] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = commentRef.current.value;

    if (value.trim()) {
    }
  };

  return (
    <Wrapper>
      <UserWrapper>
        <ProfileImage src={profile} />
        <UserId>{/*userId*/}dkdldldldl</UserId>
        <BsThreeDots />
      </UserWrapper>
      <FeedWrapper>
        <FeedImageWrap>
          <FeedImage src={feedImage} />
        </FeedImageWrap>
        <IconWrap>
          <LeftIcon>
            <BsFillSuitHeartFill size="25" />
            <BsChatLeft size="25" />
            <BsCursor size="25" />
          </LeftIcon>
          <RightIcon>
            <BsBookmark size="25" />
          </RightIcon>
        </IconWrap>
        <Like>좋아요{/*likes*/} 123개</Like>
      </FeedWrapper>
      <CommentsWrap>
        {/* {comments.map(({ id, userId, comment }) => (
          <Comment key={id} userId={userId} comment={comment} />
        ))} */}
      </CommentsWrap>
      <SubmitComment>
        <BsEmojiSmile size="25" />
        <InputComment ref={commentRef} type="text" placeholder="댓글 달기..." />
        <Button>게시</Button>
      </SubmitComment>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 550px;
  min-width: 470px;
  width: 40%;
  border: 1px solid rgba(133, 133, 133, 0.34);
  border-radius: 8px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const UserWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
  padding: 10px;
`;

const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;

const UserId = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 10px 13px;
  font-size: 13px;
  font-weight: bold;
`;

const FeedWrapper = styled.div``;

const FeedImageWrap = styled.div``;

const FeedImage = styled.img`
  width: 100%;
`;

const IconWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const LeftIcon = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
`;

const RightIcon = styled.div``;

const Like = styled.div`
  font-size: 14px;
  font-weight: bold;
  padding: 10px;
`;

const CommentsWrap = styled.div`
  padding: 10px;
  margin-bottom: 5px;

  & > div {
    margin-bottom: 10px;
    :last-child {
      margin-bottom: 0px;
    }
  }
`;

const SubmitComment = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-top: 1px solid rgba(131, 131, 131, 0.15);
`;

const InputComment = styled.input`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 10px;
`;

const Button = styled.button`
  background-color: transparent;
  font-size: 15px;
  font-weight: bold;
  color: skyblue;
`;

export default Feed;
