import { Button } from "../ui/button"

export const CallToAction = () => {
    const handleClickAction = () => {
        alert("Button clicked!");
    }

    return (
        <section className="w-full flex flex-col items-center px-5 py-15 gap-10">
            <div className="w-full max-w-[1200px] flex flex-col items-center justify-center gap-4 p-15 shadow-card bg-linear-card-gradient rounded-[20px]">
                <div className="w-full max-w-[768px] h-max flex flex-col items-center justify-center p-0 text-center text-light-gray gap-6">
                    <h2 className="text-[32px] text-center font-bold leading-[120%] w-full h-max lg:text-5xl">
                        Our powerful analytics provides invaluable insights.
                    </h2>
                    <p className="text-base text-center font-normal leading-[150%] w-full h-max lg:text-lg">
                        Unlock the power of data with our cutting-edge analytics product. Get instant insights with our user-friendly Analytics Dashboard, and take advantage of our innovative digital credit tokens to reward your customers and incentivize engagement.
                    </p>
                    <Button
                        label="Downaload the app"
                        onAction={handleClickAction}
                        variant="outlined"
                    />
                </div>
            </div>
        </section>
    )
}