import { Container } from "@components/Container";
import * as S from "./styled";
import { type FC } from "react";

type ContentSectionProps = React.HTMLAttributes<HTMLElement> & {
    children?: any;
};

export const ContentSection: FC<ContentSectionProps> = ({
    children,
    ...rest
}) => {
    return (
        <S.ContentSectionStyled {...rest}>
            <Container>
                <S.ContentSectionWrapper>{children}</S.ContentSectionWrapper>
            </Container>
        </S.ContentSectionStyled>
    );
};
