import styled from "@emotion/styled";
import { Theme } from "@styles/colors";

export const CenterTextStyled = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    max-width: 650px;
    margin: 0 auto;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80%;
        height: 80%;
        background: linear-gradient(
            0deg,
            transparent 0%,
            ${Theme.tertiary} 100%
        );

        filter: blur(100px);
        opacity: 0.3;
        z-index: -1;
    }

    .icon-wrapper {
        margin-top: 50px;
    }
`;
