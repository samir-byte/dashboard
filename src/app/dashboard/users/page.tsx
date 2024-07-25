import { useSearchParams } from "react-router-dom";
import { useFetchTableData } from "./hooks";
import { DataTableSkeleton } from "@/components/common/table-skeleton";
import UsersTable from "./components/table";

export default function TablePage() {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page") || 1);
  const limit = Number(searchParams.get("limit") || 10);
  const search = searchParams.get("search") || null;

  const { data, isLoading } = useFetchTableData({ page, limit, search });
  console.log(data);

  if (isLoading)
    return (
      <div className="p-5">
        <DataTableSkeleton
          columnCount={10}
          filterableColumnCount={2}
          searchableColumnCount={1}
        />
      </div>
    );

  return (
    <div>
      <h1>Table</h1>
      <p>Welcome to the table</p>
      <UsersTable users={data.users} pageCount={data.total_users} />
    </div>
  );
}
