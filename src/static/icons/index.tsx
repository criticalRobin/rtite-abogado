import { type FC } from "react";

import IconFacebook from "./icon-facebook.svg";
import IconInstagram from "./icon-instagram.svg";
import IconTwitter from "./icon-twitter.svg";
import IconLinkedIn from "./icon-linkedin.svg";
import IconArrowDown from "./icon-arrow-down.svg";
import IconArrowCircle from "./icon-arrow-circle.svg";

import IconAstro from "./icon-astro.svg";

export const icons = {
    arrowDown: IconArrowDown,
    arrowCircle: IconArrowCircle,
    facebook: IconFacebook,
    instagram: IconInstagram,
    twitter: IconTwitter,
    linkedin: IconLinkedIn,
    astro: IconAstro,
};

type IconName = {
    iconData: keyof typeof icons;
    alt: string;
};

/**
 * Icon is a component that renders an image with the specified icon name
 * @example
 * <Icon iconData="home" alt="home" />
 * for change color of icon use css filter
 */
export const Icon: FC<IconName> = ({ alt, iconData, ...rest }) => {
    const icon = icons[iconData];

    return (
        <img
            src={icon.src}
            alt={alt}
            width={icon.width}
            height={icon.height}
            data-icon="true"
            {...rest}
        />
    );
};

export { IconAstro };
