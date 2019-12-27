import * as React from 'react';
import styled from 'styled-components';
import { Link as GLink } from 'gatsby';

const ExtLink = (props) => (
    <a {...props} target="blank" rel="noopener nofollow"></a>
);

export default ExtLink;