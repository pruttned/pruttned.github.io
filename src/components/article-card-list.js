import * as React from 'react';
import styled from 'styled-components';
import ArticleCard from './article-card';

const Root = styled.div`
`;

const ArticleCardList = ({ items }) => {
    return (
        <Root>
            {items.map(item => (<ArticleCard key={item.path} {...item}></ArticleCard>))}
        </Root>
    );
}


export default ArticleCardList;