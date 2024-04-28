import { type FC } from "react";
import * as S from "./styled";
import { Container } from "@components/Container";

import {
    CenterText,
    type CenterTextProps,
} from "./variants/CenterText/CenterText";
import { TextImage, type TextImageProps } from "./variants/TextImage/TextImage";

type HeroProps = {
    heroType: "center" | "textImage";
    children?: React.ReactNode | CenterTextProps | TextImageProps;
    content?: CenterTextProps | TextImageProps;
};
/**
 *
 * @children is for html custom content
 * @content is for the content of the specific hero type
 */
export const Hero: FC<HeroProps> = ({ heroType, children, content }) => {
    let HeroTypeOutput;
    switch (heroType) {
        case "center":
            HeroTypeOutput = (
                <CenterText children={children as CenterTextProps} />
            );
            break;
        case "textImage":
            HeroTypeOutput = <TextImage {...(content as TextImageProps)} />;
            break;
    }

    return (
        <S.HeroWrapper>
            <Container>{HeroTypeOutput}</Container>
        </S.HeroWrapper>
    );
};
