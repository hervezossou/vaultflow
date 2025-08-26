import { useState } from "react";

import { LogoWrapper } from "../ui/logo-wrapper";
import { Button } from "../ui/button";
import { Hamburger } from "../ui/hamburger";

import logo from "../../assets/images/logo.png";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="relative w-full flex items-center px-12 bg-rich-black h-18">
            <div className="w-full hidden lg:flex lg:items-center lg:justify-between lg:gap-auto">
                <a href="/">
                    <LogoWrapper logo={logo} altText="Vaultflow Logo" />
                </a>
                <nav className="flex items-center gap-8">
                    <ul className="flex items-center gap-8 text-white">
                        <li className="w-max h-full flex items-start px-3 py-6">
                            <a href="#features" className="hover:underline">
                                Features
                            </a>
                        </li>
                        <li className="w-max h-full flex items-start px-3 py-6">
                            <a href="#" className="hover:underline">
                                Pricing
                            </a>
                        </li>
                        <li className="w-max h-full flex items-start px-3 py-6">
                            <a href="#" className="hover:underline">
                                About us
                            </a>
                        </li>
                    </ul>
                    <div className="hidden lg:flex items-center gap-4">
                        <Button
                            label="Download the app"
                            variant="contained"
                            onAction={() => alert("App download clicked!")}
                        />
                        <Button
                            label="Talk to an expert"
                            variant="outlined"
                            onAction={() => alert("Ready to talk clicked!")}
                        />
                    </div>
                </nav>
            </div>
            <div className="w-full flex items-center justify-between gap-auto lg:hidden">
                <a href="/">
                    <LogoWrapper logo={logo} altText="Vaultflow Logo" />
                </a>
                <Hamburger
                    isOpen={isMenuOpen}
                    onAction={() => setIsMenuOpen(!isMenuOpen)}
                />
            </div>
            <div className={`absolute top-0 right-0 z-40 w-full h-screen flex flex-col items-start md:items-center justify-between gap-auto px-5 pt-5 pb-10 bg-dark-purple transition-transform ease-in-out duration-300 transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                } lg:hidden`}
            >
                <div className="w-full h-max flex-col items-start gap-6">
                    <div className="w-full flex items-center justify-between gap-auto lg:hidden">
                        <a href="/">
                            <LogoWrapper logo={logo} altText="Vaultflow Logo" />
                        </a>
                        <Hamburger
                            isOpen={isMenuOpen}
                            onAction={() => setIsMenuOpen(!isMenuOpen)}
                        />
                    </div>
                    <nav className="flex items-start">
                        <ul className="h-20 flex flex-col items-start text-white">
                            <li className="w-max h-max flex items-start px-3 py-6 text-[23px] text-left">
                                <a href="#features" className="hover:underline">
                                    Features
                                </a>
                            </li>
                            <li className="w-max h-full flex items-start px-3 py-6 text-[23px] text-left">
                                <a href="#" className="hover:underline">
                                    Pricing
                                </a>
                            </li>
                            <li className="w-max h-full flex items-start px-3 py-6 text-[23px] text-left">
                                <a href="#" className="hover:underline">
                                    About us
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Button
                    label="Talk to an expert"
                    variant="outlined"
                    onAction={() => alert("Ready to talk clicked!")}
                    className="md:w-72"
                />
            </div>
        </header>
    )
}