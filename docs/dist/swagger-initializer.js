/** @format */

window.onload = function () {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    urls: [
      {
        name: "Email Analysis",
        url: "external/emailAnalysis.yaml",
      },
      {
        name: "Track Email Reply",
        url: "external/trackEmailReply.yaml",
      },
      {
        name: "Track Email Sent",
        url: "external/trackEmailSent.yaml",
      },
    ],
    dom_id: "#swagger-ui",
    deepLinking: true,
    presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
    plugins: [SwaggerUIBundle.plugins.DownloadUrl],
    layout: "StandaloneLayout",
  });

  //</editor-fold>
};
