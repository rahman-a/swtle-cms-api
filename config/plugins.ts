module.exports = ({ env }) => ({
  // ...
  seo: {
    enabled: true,
  },
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_KlXkCGozmj7NoTDXBbX5Oens64hB/sII14Pdpsz",
      apiToken: "MRH18eKEgYxndIG0X5ywc8W8",
      appFilter: "swtle-cms-ui",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
  // ...
});
