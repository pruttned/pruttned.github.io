import * as React from 'react';

const ExtLink = ({ href, children, follow, className }) => (
    <a href={href} target="blank" className={className} rel={['noopener', !follow && 'nofollow'].filter(x => x).join(' ')}>{children}</a>
);

export default ExtLink;