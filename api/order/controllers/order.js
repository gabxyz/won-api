"use strict";

const { sanitizeEntity } = require("strapi-utils/lib");

const stripe = require("stripe")(process.env.STRIPE_KEY);

module.exports = {
  createPaymentIntent: async (ctx) => {
    const { cart } = ctx.request.body;

    // simplify cart data
    const cartGamesIds = await strapi.config.functions.cart.cartGamesIds(cart);

    // get all games
    const games = await strapi.config.functions.cart.cartItems(cartGamesIds);

    if (!games.length) {
      ctx.response.status = 404;
      return {
        error: "No valid games found!",
      };
    }

    const total = await strapi.config.functions.cart.total(games);

    if (total === 0) {
      return {
        freeGames: true,
      };
    }

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(total * 100),
        currency: "usd",
        metadata: { cart: JSON.stringify(cartGamesIds) },
        automatic_payment_methods: { enabled: true },
      });

      return paymentIntent;
    } catch (err) {
      return {
        error: err.raw.message,
      };
    }
  },

  create: async (ctx) => {
    // get data from the front-end
    const { cart, paymentIntentId, paymentMethod } = ctx.request.body;

    // get token
    const token = await strapi.plugins[
      "users-permissions"
    ].services.jwt.getToken(ctx);

    // get user id
    const userId = token.id;

    // get user data
    const userInfo = await strapi
      .query("user", "users-permissions")
      .findOne({ id: userId });

    // simplify cart data
    const cartGamesIds = await strapi.config.functions.cart.cartGamesIds(cart);

    // get games
    const games = await strapi.config.functions.cart.cartItems(cartGamesIds);

    // get total (check if it's free)
    const total_in_cents = await strapi.config.functions.cart.total(games);

    // get paymentMethod values in the front-end
    // and retrieve them here

    // save in db
    const entry = {
      total_in_cents,
      payment_intent_id: paymentIntentId,
      card_brand: null,
      card_last4: null,
      user: userInfo,
      games,
    };

    const entity = await strapi.services.order.create(entry);

    // send purchase email to user

    return sanitizeEntity(entity, { model: strapi.models.order });
  },
};
