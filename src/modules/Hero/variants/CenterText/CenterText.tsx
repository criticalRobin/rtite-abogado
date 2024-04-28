import { type FC } from "react";
import * as S from "./styled";

export type CenterTextProps = {
    children: React.ReactNode | any;
};

export const CenterText: FC<CenterTextProps> = ({ children }) => {
    return <S.CenterTextStyled>{children}</S.CenterTextStyled>;
};
