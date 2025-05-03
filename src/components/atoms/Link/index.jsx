import { font, palette } from 'styled-theme';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const styles = css`
  font-family: ${font('primary')};
  text-decoration: none;
  font-weight: 500;
  color: ${palette('secondary', 1)};

  &:hover {
    text-decoration: none;
  }
`;

const StyledLink = styled(({ ...props }) => <NavLink {...props} />)`
  ${styles}
`;

const StyledAnchor = styled.a`
  ${styles}
`;

const Link = ({ ...props }) => {
  const { to } = props;
  if (to) {
    return <StyledLink {...props} />;
  }
  return <StyledAnchor {...props} />;
};

export default Link;
