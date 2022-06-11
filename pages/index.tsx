import React from 'react';

import Link from 'next/link';
import styled from 'styled-components';

import {COLOR} from '@/theme/constant/color';

const IndexContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${COLOR.PRIMARY};
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${COLOR.WHITE_100};
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
  color: ${COLOR.WHITE_80};
`;

const LinkToAuthor = styled.a`
  color: ${COLOR.WHITE_100};
  text-decoration: underline;
`;

const HomePage = (): JSX.Element => {
  return (
    <>
      <IndexContainer>
        <Title>A project template for Next.js PWA with TypeScript</Title>
        <SubTitle>
          Created by{' '}
          <Link href="https://saltchang.com" passHref>
            <LinkToAuthor>Salt Chang</LinkToAuthor>
          </Link>
        </SubTitle>
      </IndexContainer>
    </>
  );
};

export default HomePage;
