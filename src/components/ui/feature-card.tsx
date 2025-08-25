import clsx from "clsx";
import { IconWrapper } from "./icon-wrapper";
import { TextLink } from "./TextLink";

interface FeaturedCardProps {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
  action: string;
}

export const FeatureCard = ({
  icon,
  iconAlt,
  title,
  description,
  action,
}: FeaturedCardProps) => {
  const baseStyles =
    "w-full max-w-[370px] h-[346px] flex flex-col items-start gap-4 p-7.5 rounded-[20px] self-stretch";

  return (
    <div className={clsx(baseStyles, "bg-linear-card-gradient shadow-card")}>
      <IconWrapper icon={icon} altText={iconAlt} className="" />
      <div className="w-full flex flex-col items-start gap-2.5">
        <h2 className="font-medium text-[26px] leading-[130%] text-light-gray">
          {title}
        </h2>
        <p className="font-normal text-sm leading-[150%] text-light-gray">
          {description}
        </p>
        <TextLink label={action} href="#" />
      </div>
    </div>
  );
};
