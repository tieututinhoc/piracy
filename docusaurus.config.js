module.exports = {
    title: "Piracy",
    tagline: "It's illegal cuz they can't tax you!",
    url: "https://piracy-git-next.maximousblk.now.sh/",
    baseUrl: "/",
    favicon: "img/favicon.ico",
    organizationName: "maximousblk",
    projectName: "piracy",
    themeConfig: {
        image: "img/ogimage.png",
        navbar: {
            title: "Piracy",
            logo: {
                alt: "Arrr!",
                src: "img/logo.svg",
                srcDark: "img/darklogo.svg",
            },
            links: [
                { to: "blog", label: "Blog", position: "left" },
                {
                    href: "https://github.com/maximousblk/piracy",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        algolia: {
            apiKey: "5470eae5ca52eb07867cedc3fdd33424",
            indexName: "maximousblk_piracy",
        },
        prism: {
            theme: require("prism-react-renderer/themes/dracula"),
        },
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    routeBasePath: "/",
                    homePageId: "home",
                    sidebarPath: require.resolve("./sidebars.js"),
                    editUrl:
                        "https://github.com/maximousblk/piracy/edit/master/",
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: "all",
                        copyright: "It's free real estate! (CC0)",
                    },
                    editUrl:
                        "https://github.com/maximousblk/piracy/edit/master/",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            },
        ],
    ],
};
