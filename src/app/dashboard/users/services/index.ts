import axios, { AxiosResponse } from "axios";

class DataService {
  public async getTableData(params: {
    page: number;
    limit: number;
    search: string | null;
  }) {
    try {
      const offset = (params.page - 1) * params.limit;
      const res: AxiosResponse<any> = await axios.get(
        "https://api.slingacademy.com/v1/sample-data/users",
        {
          params: {
            offset,
            limit: params.limit,
            search: params.search,
          },
        }
      );
      return res.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

export const dataService = new DataService();
