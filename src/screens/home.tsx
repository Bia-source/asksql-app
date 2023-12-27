import * as S from './style';
import logo from '@assets/logo.png';
import trash from '@assets/trash.png';
import star from '@assets/star.png';

import { SeparatorVertical } from '@shared/components/components-shared';
import { useEffect, useRef, useState } from 'react';
import CodeEditor, { CodeEditorSyntaxStyles } from '@rivascva/react-native-code-editor';
import theme from '@shared/theme/theme';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

export function Home() {
    const [schema, setSchema] = useState("");
    const textInputRef = useRef(null);

    function handleDismissKeyboard() {
        Keyboard.dismiss();
    }

    useEffect(() => {
        console.log(textInputRef)
        handleDismissKeyboard();
    }, [textInputRef])

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
                ref={textInputRef}
                style={{
                    fontSize: 20,
                    width: "100%",
                    height: "20%",
                    backgroundColor: theme.blueberry[600]
                }}
                onKeyPress={e => setSchema(e)}
                language="sql"
                syntaxStyle={CodeEditorSyntaxStyles.atomOneDark}
                showLineNumbers
            />

            <SeparatorVertical distance={25} />
            <S.Title>Faça uma pergunta sobre o código</S.Title>
            <SeparatorVertical distance={25} />
            <S.InputSchema onSubmitEditing={handleDismissKeyboard}>
            </S.InputSchema>
        
            <SeparatorVertical distance={25} />
            <S.TouchableSubmit>
                <S.LogoImage source={star} />
                <S.TextButtonSubmit> Perguntar à inteligencia artificial</S.TextButtonSubmit>
            </S.TouchableSubmit>
        </S.Container>
    )
}