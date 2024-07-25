import { useQuery } from "@tanstack/react-query";
import { dataService } from "../services";

export const useFetchTableData = (params: {
  page: number;
  limit: number;
  search: string | null;
}) => {
  const { page, limit, search } = params;
  return useQuery({
    queryKey: ["table-data", { page, limit, search }],
    queryFn: () => dataService.getTableData({ page, limit, search }),
  });
};
