import { type FC } from "react";
import * as S from "./styled";
import { Container } from "@components/Container";
import { FadeIn } from "@utils/animations/FadeIn";

type LeadTextsProps = {
    title: string;
    contentText: {
        content: string;
    }[];
};

// Hide exp is for hiding the commercial experience - on the LeadTexts page cuz there is a separate section for that
export const LeadTexts: FC<LeadTextsProps> = ({ contentText, title }) => {
    //  do not render if there is no contentText
    if (!contentText && !title) {
        return null;
    }

    return (
        <S.LeadTextsStyled>
            <Container>
                <S.LeadTextsContent>
                    {title && (
                        <S.LeadTextsContentTitle>
                            <FadeIn>
                                <h2
                                    dangerouslySetInnerHTML={{ __html: title }}
                                />
                            </FadeIn>
                        </S.LeadTextsContentTitle>
                    )}
                    <S.LeadTextsContentText>
                        {contentText.map((content, index) => {
                            return (
                                <FadeIn key={index}>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: content.content,
                                        }}
                                    />
                                </FadeIn>
                            );
                        })}
                    </S.LeadTextsContentText>
                </S.LeadTextsContent>
            </Container>
        </S.LeadTextsStyled>
    );
};
