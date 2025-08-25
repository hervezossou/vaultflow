interface LogoWrapperProps {
    logo: string;
    altText?: string;
}

export const LogoWrapper = ({ logo, altText }: LogoWrapperProps) => {
    return (
        <div className="size-max flex items-center justify-center">
            <img src={logo} alt={altText} className="object-cover size-full" />
        </div>
    )
}