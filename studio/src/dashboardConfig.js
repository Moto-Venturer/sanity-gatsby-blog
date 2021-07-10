export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60e92c1baf97d6859d7462a1",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-ftxeugjm",
                  apiId: "52bfbb18-75d2-4d3a-8561-e7ae8e7e0325",
                },
                {
                  buildHookId: "60e92c1b5500d3847a6c5387",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-o4fko5ya",
                  apiId: "e6df171a-0ada-49e1-b03f-d80fb97e8b26",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Moto-Venturer/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-o4fko5ya.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
