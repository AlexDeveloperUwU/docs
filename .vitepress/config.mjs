import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Documentación",
  description: "La documentación oficial para todos los proyectos de AlexDeveloperUwU",
  ignoreDeadLinks: true,
  themeConfig: {
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Esta documentación ha sido creada por @AlexDeveloperUwU',
      copyright: 'Documentación bajo la licencia GPL-3.0'
    },    
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
          text: "LiberTeis",
          items: [
            { text: "Index", link: "/guide/" },
          ],
        },
      ],
    },
  },
});
