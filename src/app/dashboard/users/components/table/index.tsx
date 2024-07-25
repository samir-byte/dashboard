import { DataTable } from "@/components/common/data-table";
import { columns, User } from "./columns";
import UserTableActions from "./actions";

type Props = {
  users: User[];
  pageCount: number;
};

export default function UsersTable({ users, pageCount }: Props) {
  return (
    <>
      <UserTableActions />
      {users && (
        <DataTable columns={columns} data={users} pageCount={pageCount} />
      )}
    </>
  );
}
