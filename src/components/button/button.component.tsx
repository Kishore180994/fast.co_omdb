import React, { MouseEventHandler } from 'react';
import { ButtonContainer } from './button.styles';

interface Props{
    padding: string,
    action: MouseEventHandler<HTMLButtonElement>
}

const ThemedButton: React.FC<Props> = ({padding, children, action}) => {
    return (
        <ButtonContainer padding={padding} onClick={action}>
            {children}
        </ButtonContainer>
    );
};

export default ThemedButton;