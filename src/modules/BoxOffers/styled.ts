import styled from "@emotion/styled";
import { MediaQuery } from "@styles/mediaQuery";

export const BoxOffersStyled = styled.section`
    padding: 90px 0;
`;

export const BoxOffersWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;

    ${MediaQuery.max("lg")} {
        grid-template-columns: repeat(1, 1fr);
    }

    h2 {
        letter-spacing: 2px;
        margin-bottom: 10px;
    }

    h2 {
        font-size: 35px;
        line-height: 1.2;

        ${MediaQuery.max("lg")} {
            font-size: 30px;
        }
    }
`;
