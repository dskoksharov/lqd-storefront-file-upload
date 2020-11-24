window.LQDGlobalConf = {
  supportEmail: "stores@vapeapp.net",

  /**
   * Backend url (no trailing slash - paths are manually concatenated)
   */
  // TODO change to prod backend
  backendUrl: "https://test.app.vapeapp.net:8443", // test backend
  // backendUrl: "https://3.129.157.184:8080" // prod backend

  /**
   * The interval (ms) with which the upload status is polled.
   */
  uploadStatusPollInterval: 10000,

  /**
   * How long an unconfirmed upload is considered valid.
   */
  uploadStatusInvalidationTimeout: 5 * 60 * 1000,
};
