import { Container } from "@components/Container";
import styled from "@emotion/styled";
import { MediaQuery } from "@styles/mediaQuery";

export const ContactStyled = styled.section`
    padding: 100px 0;

    ${MediaQuery.max("lg")} {
        padding: 60px 0;
    }
`;

export const ContactStyledWrapper = styled.div`
    max-width: 920px;
    margin: 0 auto;
`;

export const ContactTitle = styled.h2`
    &,
    &:last-child {
        margin-bottom: 90px;
    }
`;

export const ContainerStyled = styled(Container)`
    ${MediaQuery.min("xxxl")} {
        max-width: 920px;
    }
`;

export const ContactBox = styled.div`
    margin: 40px 0;
`;

export const ContactThankYou = styled.h2`
    padding: 20px;
    max-width: 800px;
    margin: 0 auto !important;
    box-shadow: 0 0 30px #bc52ee7a;

    ${MediaQuery.max("lg")} {
        font-size: 25px;
        line-height: 30px;
        max-width: 400px;
    }
`;
