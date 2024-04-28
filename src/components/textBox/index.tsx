import React, { type FC } from "react";
import * as S from "./styled";
import { Icon } from "@static/icons";

type TextBoxLinkProps = {
    href?: string;
    target?: string;
};

export type TextBoxProps = {
    children: string | TrustedHTML;
    variant?: "normal" | "background-text";
    bgText?: string;
    boxAsLink?: boolean;
} & TextBoxLinkProps;

export const TextBox: FC<TextBoxProps> = ({
    children,
    variant,
    bgText,
    boxAsLink,
    ...rest
}) => {
    if (!children) return null;

    /**
     * box can appear as a link if needed
     */
    const TextBoxComponent = boxAsLink ? S.TextBoxLinkStyled : S.TextBotStyed;

    return (
        <TextBoxComponent $variant={variant} {...rest}>
            {variant === "background-text" && bgText && (
                <S.TextBotBgText>{bgText}</S.TextBotBgText>
            )}
            <S.TextBotTextWrapper
                dangerouslySetInnerHTML={{ __html: children }}
            />
            {boxAsLink && (
                <S.LinkIconFigure>
                    <S.LinkIcon iconData="arrowCircle" alt="arrow" />
                </S.LinkIconFigure>
            )}
        </TextBoxComponent>
    );
};
