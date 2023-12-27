import * as S from './style';
import logo from '@assets/logo.png';
import trash from '@assets/trash.png';
import star from '@assets/star.png';

import { SeparatorVertical } from '@shared/components/components-shared';
import { useState } from 'react';
import CodeEditor, { CodeEditorSyntaxStyles } from '@rivascva/react-native-code-editor';
import theme from '@shared/theme/theme';


export function Home() {
    const [schema, setSchema] = useState("");

    return (
        <S.Container>
            <SeparatorVertical distance={45} />
            <S.Header>
                <S.LogoImage source={logo} />
                <S.Touchable>
                    <S.TrashIcon source={trash} />
                </S.Touchable>
            </S.Header>

            <SeparatorVertical distance={25} />
            <S.Title>cole seu código SQL aqui</S.Title>
            <SeparatorVertical distance={25} />
            <CodeEditor
                style={{
                    fontSize: 20,
                    width: "100%",
                    height: "30%",
                    backgroundColor: theme.blueberry[600]
                }}
                onKeyPress={e => setSchema(e)}
                language="sql"
                syntaxStyle={CodeEditorSyntaxStyles.atomOneDark}
                showLineNumbers
                autoFocus={true}
            />

            <SeparatorVertical distance={25} />
            <S.Title>Faça uma pergunta sobre o código</S.Title>
            <SeparatorVertical distance={25} />
            <CodeEditor
                style={{
                    fontSize: 20,
                    width: "100%",
                    height: "10%",
                    backgroundColor: theme.blueberry[600]
                }}
                onKeyPress={e => setSchema(e)}
                language="sql"
                syntaxStyle={CodeEditorSyntaxStyles.atomOneDark}
                showLineNumbers
            />

            <SeparatorVertical distance={25} />
            <S.TouchableSubmit>
                <S.LogoImage source={star} />
                <S.TextButtonSubmit> Perguntar à inteligencia artificial</S.TextButtonSubmit>
            </S.TouchableSubmit>
        </S.Container>
    )
}