import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Documentación",
  description: "La documentación oficial para todos los proyectos de AlexDeveloperUwU",
  themeConfig: {
    aside: false,
    nav: [
      {
        text: "Inicio",
        link: "/",
      },
      {
        text: "Proyectos",
        link: "/proyectos",
        activeMatch: "/proyectos",
      },
    ],
    sidebar: {
      "/liberteis/": [
        {
          text: "Guide",
          items: [
            { text: "Index", link: "/guide/" },
            { text: "One", link: "/guide/one" },
            { text: "Two", link: "/guide/two" },
          ],
        },
      ],
    },
  },
});
