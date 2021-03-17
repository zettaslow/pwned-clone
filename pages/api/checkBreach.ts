import axios, { AxiosResponse } from 'axios';
import { BreachModel } from '../../models/Breach';
import { BreachResponse } from '../../models/BreachResponse';
import { config } from "./config";

export async function GetBreachesPerEmail(account: string): Promise<BreachResponse> {
  return axios({
    method: 'GET',
    url: config.baseUrl + "/breaches/" + account,
  }).then((response: AxiosResponse<BreachResponse>) => {
    return response.data;
  })
}
