import styled from "@emotion/styled";
import { Theme } from "@styles/colors";
import { MediaQuery } from "@styles/mediaQuery";

export const LeadTextsStyled = styled.section`
    padding: 100px 0;

    ${MediaQuery.max("lg")} {
        padding: 60px 0;
    }
`;

export const LeadTextsTitle = styled.h2`
    &:last-child {
        margin-bottom: 40px;
    }
`;

export const LeadTextsContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;

    ${MediaQuery.max("lg")} {
        grid-template-columns: 1fr;
    }
`;

export const LeadTextsContentText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 150px;

    ${MediaQuery.max("lg")} {
        order: 2;
        gap: 50px;
    }

    h3 {
        font-size: 30px;
        font-weight: 200;

        ${MediaQuery.max("lg")} {
            font-size: 20px;
        }
    }

    h4 {
        font-size: 20px;

        margin-bottom: 5px;

        ${MediaQuery.max("lg")} {
            font-size: 16px;
        }
    }

    p {
        font-size: 16px;
        line-height: 1.7;
        letter-spacing: 0.7px;

        &:not(:last-child) {
            margin-bottom: 40px;
        }
    }

    > div:not(:last-child) {
        ${MediaQuery.max("lg")} {
            border-bottom: 1px solid ${Theme.tertiary};
            padding-bottom: 50px;
            margin-bottom: 0;
        }
    }
`;

export const LeadTextsContentTitle = styled.div`
    display: flex;
    justify-content: center;

    > div h2 {
        position: sticky;
        top: 50%;
        display: block;
    }

    img {
        border-radius: 10px;

        border-top-right-radius: 200px;
        border-bottom-left-radius: 200px;

        width: 90%;

        ${MediaQuery.max("lg")} {
            width: 100%;
            max-height: 300px;

            border-top-right-radius: 100px;
            border-bottom-left-radius: 100px;
        }
    }
`;

export const LeadTextsContentBoxesWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin: 50px 0;

    ${MediaQuery.max("sm")} {
        grid-template-columns: 1fr;
    }
`;

export const LeadTextsPageStyled = styled.section`
    padding: 100px 0;

    ${MediaQuery.max("lg")} {
        padding: 60px 0;
    }

    h2 br {
        ${MediaQuery.max("sm")} {
            display: none;
        }
    }
`;

export const LeadTextsPageStyledBoxesWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;

    ${MediaQuery.max("lg")} {
        grid-template-columns: repeat(2, 1fr);
    }

    ${MediaQuery.max("sm")} {
        grid-template-columns: 1fr;
    }
`;
