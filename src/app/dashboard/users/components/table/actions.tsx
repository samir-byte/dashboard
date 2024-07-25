import TableSearchInput from "@/components/common/table-search-input";

export default function UserTableActions() {
  return (
    <div className="flex items-center justify-between py-5">
      <div className="flex flex-1 gap-4">
        <TableSearchInput placeholder="Search People Here" />
      </div>
    </div>
  );
}
