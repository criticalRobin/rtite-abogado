import styled from "@emotion/styled";
import { Theme } from "@styles/colors";
import { MediaQuery } from "@styles/mediaQuery";

export const ContentSectionStyled = styled.section`
    padding: 100px 0;

    ${MediaQuery.max("lg")} {
        padding: 60px 0;
    }
`;

export const ContentSectionWrapper = styled.div`
    text-align: center;

    h3,
    h4,
    h5 {
        margin-bottom: 70px;
        font-weight: 200;
    }

    figure {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

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
                ${Theme.primary} 0%,
                ${Theme.tertiary} 100%
            );

            filter: blur(100px);
            opacity: 0.7;
            z-index: -1;
        }

        &,
        img {
            border-radius: 10px;

            width: 100%;
            height: auto;
            object-fit: cover;
            max-width: 970px;
            margin: 0 auto;
        }
    }
`;
