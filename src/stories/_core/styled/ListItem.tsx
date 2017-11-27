import styled, { StyledFunction } from "styled-components";
import COLORS from "../styled/constants/COLORS";
import Size from "../styled/types/SizePropType";

interface ListItemPropTypes extends Size {}
const listItemPaddingMap = {
  l: 15,
  m: 10,
  s: 8,
  xs: 4
};
const listItemDiv: StyledFunction<
  ListItemPropTypes & React.HTMLProps<HTMLDivElement>
> =
  styled.div;

const ListItem = listItemDiv`
  padding: ${(props: any) =>
    props.uiSize
      ? listItemPaddingMap[props.uiSize]
      : listItemPaddingMap["m"]}px;
  border-bottom: 1px solid ${COLORS[600]};
`;

export default ListItem;
