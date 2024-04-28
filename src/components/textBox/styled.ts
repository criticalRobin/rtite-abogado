import styled from "@emotion/styled";
import { Theme } from "@styles/colors";
import type { TextBoxProps } from ".";
import { css } from "@emotion/react";
import { MediaQuery } from "@styles/mediaQuery";
import { Icon } from "@static/icons";

export const TextBotStyed = styled.div<{
    $variant: TextBoxProps["variant"];
}>`
    padding: 30px;
    border-radius: 10px;
    background: ${Theme.bgElement};

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        background: linear-gradient(
            0deg,
            ${Theme.tertiary} 100%,
            ${Theme.primary} 0%
        );
        filter: blur(30px);
        opacity: 0.1;
        z-index: -1;
        transition: 0.3s opacity;
    }

    ${(props) =>
        props.$variant === "background-text" && TextBoxBackgroundTextVariant}
`;

export const TextBoxLinkStyled = styled(TextBotStyed.withComponent("a"))`
    &:hover {
        &:before {
            opacity: 0.6;
        }

        img[data-icon="true"] {
            transform: translate(10px, -10px) scale(1.1);
        }
    }
`;

export const TextBotBgText = styled.span`
    position: absolute;
    top: 0;
    right: 0;
    text-transform: uppercase;

    font-size: 90px;
    line-height: 1;
    font-weight: 900;
    letter-spacing: -7px;
    z-index: 1;
    color: ${Theme.primary};
    opacity: 0.5;

    ${MediaQuery.max("xxl")} {
        font-size: 80px;
    }

    ${MediaQuery.max("xl")} {
        font-size: 60px;
        letter-spacing: -3px;
    }
`;

export const TextBotTextWrapper = styled.div`
    position: relative;
    z-index: 2;

    ${MediaQuery.max("md")} {
        max-width: 80%;
    }
`;

const TextBoxBackgroundTextVariant = css`
    position: relative;
    overflow: hidden;
    padding: 20px;

    h2,
    h3,
    h4 {
        margin-bottom: 10px;
        font-size: 25px;
        line-height: 1.2;

        &:after {
            content: none;
        }
    }

    h4,
    p {
        position: relative;
        z-index: 2;
    }

    p {
        line-height: 1.2;
    }
`;

export const LinkIconFigure = styled.figure`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
`;

export const LinkIcon = styled(Icon)`
    transition: transform 0.3s;
`;
