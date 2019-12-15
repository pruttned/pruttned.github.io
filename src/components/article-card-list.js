import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { ThemeContext } from 'styled-components';
import Container from './container';
import { FacebookIcon, LinkedinIcon, GithubIcon } from './icon';
import Link from './link';
import ArticleCard from './article-card';

const Root = styled.div`
  max-width: 800px;
`;

const ArticleCardList = ({ items }) => {
    const themeContext = React.useContext(ThemeContext);
    return (
        <Root>
            {items.map(item => (<ArticleCard key={item.path} {...item}></ArticleCard>))}
        </Root>
    );
}


export default ArticleCardList;