import styled from "styled-components";
import { propToStyle } from "../../../theme/utils/propToStyles";

export const Box = styled.div`
  ${propToStyle("flex")}
  ${propToStyle("display")}
  ${propToStyle("flexWrap")}
  ${propToStyle("flexDirection")}
  ${propToStyle("justifyContent")}
  ${propToStyle("alignItems")}
  ${propToStyle("backgroundImage")}
  ${propToStyle("backgroundRepeat")}
  ${propToStyle("backgroundPosition")}
`;
