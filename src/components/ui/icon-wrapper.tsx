import clsx from "clsx";

interface IconWrapperProps {
  icon: string;
  altText?: string;
  className?: string;
}

export const IconWrapper = ({ icon, altText, className }: IconWrapperProps) => {
  return (
    <div
      className={clsx(
        "size-12.5 flex items-center justify-center rounded-2xl",
        className,
      )}
    >
      <img src={icon} alt={altText} className="object-cover size-full" />
    </div>
  );
};
