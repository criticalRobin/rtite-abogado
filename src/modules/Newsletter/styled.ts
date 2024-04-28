import { FormStyled } from "@components/Form";
import styled from "@emotion/styled";
import { Theme } from "@styles/colors";
import { MediaQuery } from "@styles/mediaQuery";

export const NewsletterStyled = styled.div`
    background: ${Theme.bgElement};
    transform: translateY(-50%);

    ${MediaQuery.max("lg")} {
        transform: translateY(-20%);
    }
`;

export const NewsletterWrapper = styled.div``;

export const NewsletterFormStyled = styled(FormStyled)``;

export const NewsletterFormWrapper = styled.div`
    display: grid;
    grid-template-columns: 80% 20%;
    gap: 30px;
    align-items: flex-start;

    ${MediaQuery.max("lg")} {
        grid-template-columns: 1fr;
        gap: 0;
    }
`;

export const NewsletterThankYou = styled.h2`
    padding: 20px;
    max-width: 800px;
    margin: 0 auto !important;
    box-shadow: 0 0 30px ${Theme.tertiary};

    ${MediaQuery.max("lg")} {
        font-size: 25px;
        line-height: 30px;
        max-width: 400px;
    }
`;
