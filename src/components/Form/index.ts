import styled from "@emotion/styled";
import { Theme } from "@styles/colors";
import { MediaQuery } from "@styles/mediaQuery";

/**
 * Define the default styled components for the Form component
 */
export const FormStyled = styled.form`
    padding: 30px;
    background: ${Theme.bgElement};
    border-radius: 10px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
    width: 100%;

    h2 {
        font-size: 30px;
        line-height: 36px;
        font-weight: 300;
        margin-bottom: 10px;

        ${MediaQuery.max("lg")} {
            font-size: 20px;
            line-height: 25px;
        }
    }

    p {
        opacity: 0.8;

        ${MediaQuery.max("lg")} {
            font-size: 14px;
            line-height: 16px;
        }
    }
`;
