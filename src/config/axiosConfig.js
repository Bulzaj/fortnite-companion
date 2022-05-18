import axios from "axios";

export const fortniteApiV2 = axios.create();
fortniteApiV2.defaults.baseURL = "https://fortnite-api.com/v2";
fortniteApiV2.defaults.timeout = 3000;
