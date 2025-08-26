import { features } from "../../lib/data"
import { FeatureCard } from "../ui/feature-card"

export const FeaturesSection = () => {
    const featureWithImage = features.filter((feature) => feature.image != null);

    return (
        <section id="features" className="w-full max-w-[1200px] flex flex-col items-center gap-20">
            <div className="max-w-[470px] flex flex-col items-center justify-center gap-17.5 text-center">
                <h1 className="max-w-[430px] font-medium leading-[120%] text-light-gray text-[42px] lg:text-5xl">
                    Features that work for your future.
                </h1>
                <p className="text-lg text-light-gray leading-[160%]">Check out our amazing features and experience the power of Vaultflow for yourself.</p>
            </div>
            <div className="w-full grid grid-cols-1 gap-8 px-5 lg:px-0 lg:grid-cols-2 lg:gap-4">
                {features.slice(0, 2).map((feature, index) => (
                    <FeatureCard
                        key={index}
                        icon={feature.icon}
                        iconAlt={feature.iconAlt}
                        title={feature.title}
                        description={feature.description}
                        action={feature.action}
                    />
                ))}
            </div>
            <div className="px-5 lg:px-0 w-full">
                {featureWithImage.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        icon={feature.icon}
                        iconAlt={feature.iconAlt}
                        title={feature.title}
                        description={feature.description}
                        action={feature.action}
                        image={feature.image}
                    />
                ))}
            </div>
        </section>
    )
}