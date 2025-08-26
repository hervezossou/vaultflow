import clsx from "clsx";

interface ButtonProps {
  label: string;
  onAction: () => void;
  variant: "contained" | "outlined" | "text";
}

export const Button = ({ label, onAction, variant }: ButtonProps) => {
  const baseStyles =
    "size-max px-6 py-3 rounded-[60px] transition-all ease-in-out duration-300 cursor-pointer font-medium text-sm lg:text-base";
  const variantStyles =
    variant === "contained"
      ? "bg-blue-5 text-white"
      : "border border-light-gray text-light-gray hover:bg-light-gray hover:opacity-80 hover:text-dark-purple";

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
