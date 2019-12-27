import * as React from 'react';

const ExtLink = (props) => (
    <a {...props} target="blank" rel={['noopener', !props.follow && 'nofollow'].filter(x => x).join(' ')}></a>
);

export default ExtLink;