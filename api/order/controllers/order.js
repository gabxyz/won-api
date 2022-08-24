"use strict";

const stripe = require("stripe")(process.env.STRIPE_KEY);

module.exports = {
  createPaymentIntent: async (ctx) => {
    const { cart } = ctx.request.body;

    let games = [];

    await Promise.all(
      cart?.map(async (game) => {
        const validatedGame = await strapi.services.game.findOne({
          id: game.id,
        });

        if (validatedGame) {
          games.push(validatedGame);
        }
      })
    );

    if (!games.length) {
      ctx.response.status = 404;
      return {
        error: "No valid games found!",
      };
    }

    const total = games.reduce((acc, game) => {
      return acc + game.price;
    }, 0);

    if (total === 0) {
      return {
        freeGames: true,
      };
    }

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(total * 100),
        currency: "usd",
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

    // get games
    // get total (check if it's free)
    // get paymentIntentId
    // get payment data (paymentMethod)
    // save in db
    // send purchase email to user

    return { cart, paymentIntentId, paymentMethod, userInfo };
  },
};
