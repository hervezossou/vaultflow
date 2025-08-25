import clsx from "clsx";

interface ButtonProps {
  label: string;
  onAction: () => void;
  variant: "contained" | "outlined" | "text";
}

export const Button = ({ label, onAction, variant }: ButtonProps) => {
  const baseStyles =
    "px-6 py-3 rounded-[60px] hover:opacity-90 transition-all ease-in-out duration-300";
  const variantStyles =
    variant === "contained"
      ? "bg-blue-500 text-white"
      : "border border-blue-500 text-blue-500";

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
