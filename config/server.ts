export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array(
      "APP_KEYS",
      "Q/iLjARKSiR2/48njYpZ0A==",
      "6MRO7gWwdfvj2PqQIlpynA=="
    ),
  },
});
