import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getFetch } from '../helper/getFetch';
import Feed from './Feed';

const Main = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const dataFetch = async () => {
      const data = await getFetch('/feed/feed.json');
      setLoading(false);
      if (data) {
        setData(data);
      }
    };
    dataFetch();
  }, []);

  const regComment = (feedId, comment) => {
    const userId = 'test';
    const newState = [...data];
    setData(
      newState.map((feed) => {
        return feed.id !== feedId
          ? feed
          : {
              ...feed,
              comments: [
                ...feed.comments,
                { id: feed.comments.length + 1, userId, comment },
              ],
            };
      })
    );
  };

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Wrapper>
          {data.map(({ id, userId, profile, feedImage, likes, comments }) => (
            <Feed
              key={id}
              feedId={id}
              userId={userId}
              profile={profile}
              feedImage={feedImage}
              likes={likes}
              comments={comments}
              regComment={regComment}
            />
          ))}
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(211, 211, 211, 0.4);
`;

export default Main;
