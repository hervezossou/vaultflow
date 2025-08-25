import clsx from "clsx";

interface ImageWrapperProps {
  image: string;
  altText?: string;
}

export const ImageWrapper = ({ image, altText }: ImageWrapperProps) => {
  const customShadow =
    "drop-shadow-[0_0.196px_0_0_rgba(255,255,255,0.50)_inset,0_-0.783px_3.917px_0_rgba(233,223,255,0.30),0_-0.783px_15.667px_0_rgba(187,155,255,0.15)]";

  return (
    <div
      className={clsx(
        "size-full flex items-center justify-center",
        customShadow,
      )}
    >
      <img src={image} alt={altText} className="object-cover size-full" />
    </div>
  );
};
