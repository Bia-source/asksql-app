import theme from "@shared/theme/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 35px;
  background-color: ${theme.blueberry[900]};
`;

export const Title = styled.Text`
  font-size: 20px;
  color: aqua;
`