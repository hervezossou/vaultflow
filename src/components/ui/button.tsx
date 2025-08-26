import clsx from "clsx";

interface ButtonProps {
  label: string;
  onAction: () => void;
  variant: "contained" | "outlined" | "text";
}

export const Button = ({ label, onAction, variant }: ButtonProps) => {
  const baseStyles =
    "w-max h-10 flex items-center justify-center px-6 py-3 rounded-[60px] transition-all ease-in-out duration-300 cursor-pointer font-medium text-sm lg:text-base";
  const variantStyles =
    variant === "contained"
      ? "bg-light-gray text-rich-dark hover:opacity-80"
      : "border border-light-gray text-light-gray hover:bg-french-gray hover:text-dark-purple";

  return (
    <button
      type="button"
      onClick={onAction}
      className={clsx(baseStyles, variantStyles)}
    >
      {label}
    </button>
  );
};
