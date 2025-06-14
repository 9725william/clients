import { globalConfig } from "./config/dev.config";

export const environment = {
  production: false,
      //Desarrollo
      back: globalConfig.destino + "/back-franchise-dev/api/v1local/api-clients",
};

