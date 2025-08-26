import openIcon from "../../assets/icons/open.png";
import closeIcon from "../../assets/icons/close.png";

interface HamburgerProps {
    isOpen?: boolean;
    onAction: () => void;
}

export const Hamburger = ({ isOpen, onAction }: HamburgerProps) => {
    return (
        <button
            className="w-[45px] h-11 flex items-center justify-center bg-federal-blue rounded-[10px]"
            onClick={onAction}
        >
            <img
                src={isOpen ? closeIcon : openIcon}
                alt={isOpen ? "Close menu" : "Open menu"}
                className="object-cover size-auto"
            />
        </button>
    )
}