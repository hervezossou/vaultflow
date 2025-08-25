interface TextLinkProps {
  label: string;
  href: string;
}

export const TextLink = ({ label, href }: TextLinkProps) => {
  return (
    <button type="button" className="gap-2 w-max h-6">
      <a
        href={href}
        className="text-base text-white font-medium underline leading-[150%] hover:text-light-gray"
      >
        {label}
      </a>
    </button>
  );
};
