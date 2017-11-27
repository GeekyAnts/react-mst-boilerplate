import styled, { StyledFunction } from "styled-components";

interface ListPropTypes {}
const listDiv: StyledFunction<ListPropTypes & React.HTMLProps<HTMLDivElement>> =
  styled.div;

const List = listDiv`
display: block;
clear: both;
width: 100%
`;

export default List;
