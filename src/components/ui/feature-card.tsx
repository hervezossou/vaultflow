import clsx from "clsx";
import { IconWrapper } from "./icon-wrapper";
import { TextLink } from "./text-link";
import { ImageWrapper } from "./image-wrapper";

interface FeaturedCardProps {
    icon: string;
    iconAlt: string;
    iconStyle?: "analytics" | "digital" | "code";
    title: string;
    description: string;
    action: string;
    image?: string;
}

export const FeatureCard = ({
    icon,
    iconAlt,
    iconStyle = "analytics",
    title,
    description,
    action,
    image
}: FeaturedCardProps) => {
    const baseStyles =
        "w-full h-max flex flex-col items-start gap-6 p-15 rounded-[20px] self-stretch lg:flex-row";

    const shadowStyles = {
        analytics: "shadow-analytics",
        digital: "shadow-digital",
        code: "shadow-code",
    }

    return (
        <div className={clsx(baseStyles, "bg-linear-card-gradient shadow-card")}>
            <div className="w-full h-full flex flex-col items-start gap-5">
                <IconWrapper icon={icon} altText={iconAlt} className={shadowStyles[iconStyle]} />
                <div className="w-full lg:max-w-[458px] flex flex-col items-start gap-2.5">
                    <h2 className="font-medium text-[26px] leading-[130%] text-light-gray">
                        {title}
                    </h2>
                    <p className="font-normal text-sm leading-[150%] text-light-gray">
                        {description}
                    </p>
                    <TextLink label={action} href="#" />
                </div>
            </div>
            {image && <ImageWrapper image={image} altText={title} />}
        </div>
    );
};
