import theme from "@shared/theme/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  flex-direction: column;
  padding: 35px;
  background-color: ${theme.blueberry[900]};
`;

export const Title = styled.Text`
  font-size: 20px;
  color: aqua;
`

export const LogoImage = styled.Image`
   
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const TouchableTrash = styled.TouchableOpacity`

`

export const TrashIcon = styled.Image`
  width: 38px;
  height: 38px;
`