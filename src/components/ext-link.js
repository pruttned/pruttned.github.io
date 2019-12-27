import * as React from 'react';

const ExtLink = ({ href, children, follow }) => (
    <a href={href} target="blank" rel={['noopener', !follow && 'nofollow'].filter(x => x).join(' ')}>{children}</a>
);

export default ExtLink;