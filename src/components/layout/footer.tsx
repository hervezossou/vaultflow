import { LogoWrapper } from "../ui/logo-wrapper";
import logo from "../../assets/images/logo.png";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full flex flex-col items-center px-5 py-16 bg-dark-purple">
            <div className="w-full max-w-[1200px] flex flex-col items-start gap-6 p-5 lg:flex-row lg:gap-10 lg:p-6">
                <div className="w-full flex flex-col items-start gap-4 lg:gap-10 lg:w-[462px]">
                    <div className="flex flex-col items-start gap-4 w-full">
                        <h2 className="font-medium text-2xl text-white">
                            Contact
                        </h2>
                        <div className="flex flex-col gap-1.5 text-white">
                            <p className="font-light text-lg">
                                Work inquires: <a href="mailto:work@vaultflow.com">work@vaultflow.com</a>
                            </p>
                            <p className="font-light text-lg">
                                PR and speaking: <a href="mailto:press@vaultflow.com">press@vaultflow.com</a>
                            </p>
                            <p className="font-light text-lg">
                                New business: <a href="mailto:newbusiness@vaultflow.com">newbusiness@vaultflow.com</a>
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-4 w-full">
                        <h2 className="font-medium text-2xl text-white">
                            Careers
                        </h2>
                        <a href="mailto:careers@vaultflow.com" className="font-light text-lg text-white">
                            Careers@vaultflow.com
                        </a>
                    </div>
                    <p className="hidden font-light text-lg text-white lg:block">
                        © {currentYear} Vaultflow. All rights reserved.
                    </p>
                </div>
                <div className="w-full flex flex-col items-start gap-4 lg:gap-10 lg:w-[462px]">
                    <div className="flex flex-col items-start gap-4 w-[220px] h-max">
                        <h2 className="font-medium text-2xl text-white">
                            Address
                        </h2>
                        <p className="font-light text-lg text-white">
                            398 11th Street, Floor 2 San Francisco, CA 94103
                        </p>
                    </div>
                    <div className="flex flex-col items-start gap-4 w-full">
                        <h2 className="font-medium text-2xl text-white">
                            Social
                        </h2>
                        <div className="flex flex-col gap-1.5">
                            <a href="#" className="font-light text-lg text-white">
                                Twitter
                            </a>
                            <a href="#" className="font-light text-lg text-white">
                                Instagram
                            </a>
                            <a href="#" className="font-light text-lg text-white">
                                TikTok
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center justify-center gap-4 lg:h-full lg:items-end lg:justify-end lg:w-max lg:mt-[300px]">
                    <LogoWrapper logo={logo} altText="Vaultflow logo" />
                    <p className="block font-light text-lg text-white lg:hidden">
                        © {currentYear} Vaultflow. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}