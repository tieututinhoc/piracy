module.exports = {
    title: "Piracy",
    description: "It's illegal cuz they can't tax you!",
    dest: "dist",
    head: [
        ["link", { rel: "icon", href: "/favicon.ico" }],
        ["meta", { property: "og:type", content: "website" }],
        ["meta", { property: "og:url", content: "https://piracy.now.sh/" }],
        ["meta", { property: "og:title", content: "Piracy" }],
        [
            "meta",
            {
                property: "og:description",
                content: "It's illegal cuz they can't tax you!"
            }
        ],
        ["meta", { property: "og:image", content: "/banner.png" }],
        ["meta", { property: "twitter:card", content: "summary_large_image" }],
        [
            "meta",
            { property: "twitter:url", content: "https://piracy.now.sh/" }
        ],
        ["meta", { property: "twitter:title", content: "Piracy" }],
        [
            "meta",
            {
                property: "twitter:description",
                content: "It's illegal cuz they can't tax you!"
            }
        ],
        ["meta", { property: "twitter:image", content: "/banner.png" }],
        [
            "meta",
            {
                name: "google-site-verification",
                content: "M4wcsX_DZ9CkpAzZ5rNmUbk1JWl3aLqgxIfB4YG-ozI"
            }
        ]
    ],
    themeConfig: {
        logo: "/logo.svg",
        nav: [{ text: "Home", link: "/" }],
        algolia: {
            apiKey: "5470eae5ca52eb07867cedc3fdd33424",
            indexName: "maximousblk_piracy"
        },
        searchMaxSuggestions: 10,
        searchPlaceholder: "Search...",
        sidebar: [
            ["/", "Piracy"],
            ["/security", "Security"],
            ["/laws", "Laws"],
            ["/cartoons-and-anime", "Cartoons and Anime"],
            [
                "/comics-manga-and-light-novels",
                "Comics, Manga and Light novels"
            ],
            ["/books-and-magazines", "Books and Magazines"],
            ["/academic-papers-and-textbook", "Academic papers and Textbooks"],
            ["/courses-and-tutorials", "Courses and Tutorials"],
            ["/documentaries", "Documentaries"],
            ["/audiobooks", "Audiobooks"],
            ["/music-and-podcasts", "Music and podcasts"],
            ["/movies-and-tv-shows", "Movies and TV shows"],
            ["/sports", "Sports"],
            ["/games", "Games"],
            ["/software", "Software"],
            ["/creative-assets", "Creative assets"],
            ["/iptv", "IPTV"],
            ["/android", "Android"],
            ["/ios", "iOS"],
            ["/windows", "Windows"],
            ["/macos", "macOS"],
            ["/bypass-paywalls", "Bypassing Paywalls"],
            ["/browser-extensions", "Browser Extensions"],
            ["/userscripts", "Userscripts"],
            ["/media-centre-applications", "Media Centre Applications"],
            ["/torrents", "Torrents"],
            ["/usenet", "Usenet"],
            ["/direct-downloads", "Direct Downloads"],
            ["/file-sharing", "File Sharing"],
            ["/cloud-storage", "Cloud Storage"],
            ["/discord", "Discord"],
            ["/irc", "IRC"],
            ["/telegram", "Telegram"],
            ["/dc-plus-plus", "DC++"],
            ["/miscellaneous", "Miscellaneous"],
            ["/dead", "Dead"]
        ],
        sidebarDepth: 2,
        lastUpdated: true,
        repo: "maximousblk/piracy",
        repoLabel: "GitHub",
        editLinks: true,
        editLinkText: "Help improve this page!",
        nextLinks: true,
        prevLinks: true
    }
};
