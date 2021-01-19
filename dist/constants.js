window.LQDGlobalConf = {
  supportEmail: "stores@vapeapp.net",

  /**
   * Backend url (no trailing slash - paths are manually concatenated)
   */
  backendUrl: "https://prod.app.vapeapp.net:8443", // test backend

  /**
   * The interval (ms) with which the upload status is polled.
   */
  uploadStatusPollInterval: 10000,

  /**
   * How long an unconfirmed upload is considered valid.
   */
  uploadStatusInvalidationTimeout: 5 * 60 * 1000,
};
