import { type FC } from "react";
import * as S from "./styled";
import { Icon } from "@static/icons";

export const Socials: FC = ({ ...rest }) => {
    return (
        <S.SocialsStyled {...rest}>
            <S.SocialsList>
                <S.SocialsListItem>
                    <S.SocialsLink
                        href="https://www.facebook.com/people/CodexCode/61557714076333/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Icon iconData="facebook" alt="facebook" />
                    </S.SocialsLink>
                </S.SocialsListItem>
                <S.SocialsListItem>
                    <S.SocialsLink
                        href="https://www.linkedin.com/company/codexcode/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Icon iconData="linkedin" alt="linkedin" />
                    </S.SocialsLink>
                </S.SocialsListItem>
            </S.SocialsList>
        </S.SocialsStyled>
    );
};
