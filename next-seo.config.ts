import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
    title: "@UA",
    description: "Navigating the Cosmos of Social Media: Explore with @UnitAndro 🚀",
    themeColor: "#87A1FF",
    openGraph: {
        "title": "@UA",
        type: "website",
        description: "Navigating the Cosmos of Social Media: Explore with @UnitAndro 🚀",
        siteName: "@UA"
    },
    twitter: {
        handle: "@unitandro",
        site: "@unitandro",
        cardType: "summary_large_image"
    },
    additionalLinkTags: [
        {
            "rel": "icon",
            "href": "favicon.png"
        }
    ]
}

export default config;