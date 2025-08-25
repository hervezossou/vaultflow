/* Featured icon import */
import analyticsIcon from "../assets/icons/analytics-icon.png";
import codeIcon from "../assets/icons/code-icon.png";
import digitalIcon from "../assets/icons/digital-icon.png";
import codeInterface from "../assets/images/code-interface.png";

/* Logo images import */
import dell from "../assets/images/logo-dell.png";
import lattice from "../assets/images/logo-lattice.png";
import ncr from "../assets/images/logo-ncr.png";
import pacificFunds from "../assets/images/logo-pacific-funds.png";
import rakuten from "../assets/images/logo-rakuten.png";
import ted from "../assets/images/logo-ted.png";
import zendesk from "../assets/images/logo-zendesk.png";


export const features = [
    {
        icon: analyticsIcon,
        iconAlt: "Analytics icon",
        title: "Analytics Dashboard",
        description: "Our Analytics Dashboard provides a clear and intuitive interface for you to easily analyze your data. From customizable graphs to real-time data updates, our dashboard offers everything you need to gain valuable insights.",
        action: "View dashboard"
    },
    {
        icon: digitalIcon,
        iconAlt: "Digital icon",
        title: "Digital Credit Tokens",
        description: "Reward your customers and incentivize engagement with our innovative digital credit tokens. Our tokens can be customized to match your branding, and are a flexible and scalable way to drive customer loyalty and encourage repeat business.",
        action: "View tokens"
    },
    {
        icon: codeIcon,
        iconAlt: "Code icon",
        title: "Code collaboration",
        description: "Our advanced code synchronization technology ensures that your data is always up-to-date and accurate, no matter where it's coming from. Whether you're integrating data from multiple sources or working with a team of developers, our synchronization technology makes it easy to collaborate and ensure that your data is consistent and reliable.",
        action: "View code collaboration",
        image: codeInterface
    },
]

export const logos = [
    {
        logo: dell,
        altText: "Dell logo"
    },
    {
        logo: zendesk,
        altText: "Zendesk logo"
    },
    {
        logo: rakuten,
        altText: "Rakuten logo"
    },
    {
        logo: pacificFunds,
        altText: "PacificFunds logo"
    },
    {
        logo: lattice,
        altText: "Lattice logo"
    },
    {
        logo: ncr,
        altText: "NCR logo"
    },
    {
        logo: ted,
        altText: "TED logo"
    }
]
