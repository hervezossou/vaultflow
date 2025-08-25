import { logos } from "../../lib/data"
import { LogoWrapper } from "../ui/logo-wrapper"

export const LogoSection = () => {
    return (
        <section className="flex items-center gap-2.5 py-9">
            <div className="flex flex-col items-center gap-10">
                <h3 className="text-sm text-white text-center leading-[130%] lg:text-lg">
                    Trusted by teams at over 1,000 of the world’s leading organizations
                </h3>
                <div className="w-full flex flex-wrap items-center justify-center gap-7">
                    {logos.map((item, index) => (
                        <LogoWrapper key={index} logo={item.logo} altText={item.altText} />
                    )
                    )}
                </div>
            </div>
        </section>
    )
}