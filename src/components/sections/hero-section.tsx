import { Button } from "../ui/button";
import { ImageWrapper } from "../ui/image-wrapper";
import dashboardMobile from "../../assets/images/dashboard-mobile.png";
import dashboardDesktop from "../../assets/images/dashboard-desktop.png";


export const HeroSection = () => {
    return (
        <section className="w-full bg-hero flex flex-col items-center
         self-stretch px-5 pt-42.5 pb-20 gap-10 lg:gap-20">
            <div className="w-full max-w-[960px] flex flex-col items-center gap-10 lg:gap-20">
                <div className="w-full flex flex-col items-center gap-6">
                    <div className="flex items-center px-[19.81px] py-[9.91px] w-max h-max rounded-[61.909px] pill-border cursor-pointer">
                        <span className="text-anti-flash-white leading-[150%] text-xs lg:text-[17.33px]">
                            We just raised $20M in Series B. Learn more
                        </span>
                    </div>
                    <div className="w-full flex flex-col items-center gap-6">
                        <h1 className="bg-text font-medium text-4xl lg:text-[80px] leading-[100%] text-center text-white">
                            Modern analytics for the modern world
                        </h1>
                        <p className="text-center max-w-[600px] text-base text-light-gray leading-[160%] lg:text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                        </p>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center gap-4 lg:flex-row">
                        <Button
                            label="Download the app"
                            variant="contained"
                            onAction={() => alert("App download clicked!")}
                        />
                        <div className="hidden lg:block">
                            <Button
                                label="Talk to an expert"
                                variant="outlined"
                                onAction={() => alert("Ready to talk clicked!")}
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full lg:hidden">
                    <ImageWrapper
                        image={dashboardMobile}
                        altText="Dashboard mobile view"
                    />
                </div>
                <div className="w-full hidden lg:block">
                    <ImageWrapper
                        image={dashboardDesktop}
                        altText="Dashboard mobile view"
                    />
                </div>
            </div>
        </section>
    );
}