/**
 * service controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::service.service",
  ({ strapi }) => ({
    async findOne(ctx) {
      const entity = await strapi.db.query("api::service.service").findOne({
        where: { slug: ctx.params.id, locale: ctx.query.locale },
        populate: [
          "description",
          "description.sectionImage",
          "description.list",
          "Benefits",
          "action",
          "action.cta",
          "metadata",
        ],
      });
      const sanitizedResults = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(sanitizedResults);
    },
  })
);
