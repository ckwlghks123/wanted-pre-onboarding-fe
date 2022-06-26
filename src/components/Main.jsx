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
  console.log(data);
  return <></>;
};

export default Main;
