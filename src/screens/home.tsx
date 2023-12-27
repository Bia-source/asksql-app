import * as S from './style';
import logo from '@assets/logo.png';
import trash from '@assets/trash.png';
import { SeparatorVertical } from '@shared/components/components-shared';

export function Home(){
    return(
        <S.Container>
            <SeparatorVertical distance={45}/>
            <S.Header>
              <S.LogoImage source={logo}/>
              <S.TouchableTrash>
                <S.TrashIcon source={trash}/>
              </S.TouchableTrash>
            </S.Header>
           
        </S.Container>
    )
}