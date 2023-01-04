import styled from 'styled-components';
import {
  color,
  space,
  compose,
  flexbox,
  background,
  shadow,
  layout,
  border,
} from 'styled-system';

const Box = styled('div')(
  compose(color, space, flexbox, background, shadow, layout, border)
);

export default Box;
