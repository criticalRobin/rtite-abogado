import { Logo } from "@components/Logo";
import * as S from "./styled";
import { Navigation } from "@components/Navigation";
import type { FC } from "react";

export const Header: FC = () => {
    return (
        <S.HeaderStyled>
            <S.ContainerStyled>
                <Logo />
                <Navigation />
            </S.ContainerStyled>
        </S.HeaderStyled>
    );
};
