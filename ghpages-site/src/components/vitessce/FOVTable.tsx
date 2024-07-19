import DataTable from "@/lib/table/data-table";
import { fovs } from "@/lib/fovs";
import { columns } from "@/lib/table/columns";

export default function FOVTable() {
    const data = fovs;

    return (
        <div className="container p-2">
            <DataTable data={data} columns={columns} />
        </div>
    );
}
