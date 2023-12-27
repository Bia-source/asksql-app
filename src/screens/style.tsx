import theme from "@shared/theme/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: flex-start;
  flex-direction: column;
  padding: 35px;
  background-color: ${theme.blueberry[900]};
`;

export const BorderInput = styled.View`
 border-radius: 3%;
`

export const Title = styled.Text`
  font-size: 20px;
  color: ${theme.foam};
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;


export const TrashIcon = styled.Image`
  width: 38px;
  height: 38px;
`
export const TouchableSubmit = styled.TouchableOpacity`
  width: 100%;
  border: 2px;
  border-color: ${theme.pistachio};
  border-radius: 6px;
  padding: 12px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const TextButtonSubmit = styled.Text`
  font-size: 16px;
  color: ${theme.foam};
  margin-left: 3px;
`

export const LogoImage = styled.Image``;
export const Touchable = styled.TouchableOpacity``
