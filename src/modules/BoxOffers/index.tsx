import { Container } from "@components/Container";
import * as S from "./styled";
import { type FC } from "react";
import { TextBox } from "@components/textBox";
import { FadeIn } from "@utils/animations/FadeIn";

type BoxOffersProps = {
    boxes: {
        asLink?: boolean;
        href?: string;
        content: JSX.Element | string;
    }[];
};

export const BoxOffers: FC<BoxOffersProps> = ({ boxes }) => {
    if (!boxes || boxes.length === 0) return null;
    return (
        <S.BoxOffersStyled>
            <Container>
                <S.BoxOffersWrapper>
                    {boxes.map((box, index) => {
                        return (
                            box.content && (
                                <FadeIn key={index} delay={`0.` + index}>
                                    <TextBox
                                        boxAsLink={box.asLink}
                                        href={box.href}
                                        children={box.content}
                                    />
                                </FadeIn>
                            )
                        );
                    })}
                </S.BoxOffersWrapper>
            </Container>
        </S.BoxOffersStyled>
    );
};
