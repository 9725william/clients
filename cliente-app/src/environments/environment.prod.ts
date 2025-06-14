import { globalConfig } from "./config/prod.config";

export const environment = {
  production: true,
  back: globalConfig.destino + "/back-franchise-dev/api/v1local/api-clients",
};
