import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import theme from '../theme';

const StyledHeader = styled.header`
  background: ${theme.accent}
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div>
      <h1 >
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
