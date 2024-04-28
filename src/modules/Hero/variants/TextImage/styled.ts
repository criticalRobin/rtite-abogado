import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Image } from "@static/images";
import { Theme } from "@styles/colors";
import { MediaQuery } from "@styles/mediaQuery";

export const TextImageStyled = styled.div<{
    $switchPlaces: boolean;
}>`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    text-align: left;

    align-items: center;

    ${MediaQuery.max("lg")} {
        grid-template-columns: 1fr;
        text-align: center;
    }

    ${({ $switchPlaces }) =>
        $switchPlaces &&
        css`
            > div:first-of-type {
                order: 2;
            }
        `}
`;

export const TextImageFigure = styled.figure`
    width: 100%;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        border-radius: 100%;
        background: linear-gradient(
            0deg,
            ${Theme.tertiary} 100%,
            ${Theme.primary} 0%
        );

        filter: blur(50px);
        opacity: 0.3;
        z-index: -1;
    }
`;

export const TextImage = styled(Image)`
    width: 100%;
    margin-bottom: 30px;
    min-height: 450px;

    object-fit: contain;

    ${MediaQuery.max("lg")} {
        min-height: auto;
    }
`;

export const TextImageContent = styled.div`
    ${MediaQuery.max("lg")} {
        max-width: 490px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
    }

    h1 {
        margin-bottom: 20px;
        font-size: 80px;
        line-height: 84px;
        letter-spacing: -1px;

        ${MediaQuery.max("xl")} {
            font-size: 60px;
            line-height: 64px;
        }

        ${MediaQuery.max("sm")} {
            font-size: 50px;
            line-height: 45px;
            letter-spacing: -0.5px;
        }
    }

    p {
        ${MediaQuery.min("lg")} {
            max-width: 400px;
        }
    }
`;

export const ButtonsWrapper = styled.div`
    display: flex;

    ${MediaQuery.min("lg")} {
        gap: 30px;
    }

    ${MediaQuery.max("lg")} {
        flex-direction: column;
        align-items: center;
    }
`;
