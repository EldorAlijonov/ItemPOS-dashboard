import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";
import mData from "../../util/mock_data.json";
import { useState } from "react";
import "./TableComponent.scss";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
const TableComponent = () => {

    const [data, setData] = useState(mData);

    const orderRevese = () => {
        const newData = [...data];
        newData.reverse();
        setData(newData);
    }



    const dataSort = () => {
        const newData = [...data];

        newData.sort((a, b) => {
            return a.employee.localeCompare(b.employee);
        });

        setData(newData);
    }

    const columns = [
        {
            header: () => (
                <div className="table-item" onClick={orderRevese}>
                    Order ID  <FaArrowRightArrowLeft className="icon" />
                </div>
            ),
            accessorKey: "order_id",
        },
        {
            header: () => (
                <div className="table-item">
                    Date/Time  <FaArrowRightArrowLeft className="icon" />
                </div>
            ),
            accessorKey: "date",
        },
        {
            header: "Order Type",
            accessorKey: "order_type",
        },
        {
            header: () => (
                <div className="table-item" onClick={dataSort}>
                    Employee  <FaArrowRightArrowLeft className="icon" />
                </div>
            ),
            accessorKey: "employee",
        },
        {
            header: "Status",
            accessorKey: "status",
            cell: (text) => (
                <div className={`status ${text.getValue()}`}>
                    {text.getValue()}
                </div>
            ),
        },
        {
            header: "Payment Status",
            accessorKey: "payment_status",
            cell: (text) => (
                <span className={`payment-status ${text.getValue()}`}>
                    {text.getValue()}
                </span>
            )
        },
        {
            header: () => (
                <div className="table-item">
                    Amount  <FaArrowRightArrowLeft className="icon" />
                </div>
            ),
            accessorKey: "amount",
        },
    ]




    const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });

    return (
        <div className="table">
            <div className="table-content-header">
                <h1 className="table-title">
                    Order List
                </h1>
                <ul className="menu">
                    <li><span className="active">All</span></li>
                    <li><span>Monthly</span></li>
                    <li><span>Weekly</span></li>
                    <li><span>Today</span></li>
                </ul>
            </div>
            <table className="table-table" >
                <thead>
                    {table.getHeaderGroups().map((hederGroup) => (
                        <tr key={hederGroup.id}>
                            {hederGroup.headers.map(header => (
                                <th key={header.id}>
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id}>
                                    {flexRender(
                                        cell.column.columnDef.cell, cell.getContext()
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>


        </div >
    );
}

export default TableComponent
