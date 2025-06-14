import { globalConfig } from "./config/qa.config";

export const environment = {
    production: false,
    back: globalConfig.destino + "/back-franchise-dev/api/v1local/api-clients",
  };