import React from "react";
import { useTable } from "react-table";
import { useNavigate } from "react-router-dom"; //  Import for navigation

const CreatedProjectTable = ({ data }) => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const columns = React.useMemo(
    () => [
      { Header: "Title", accessor: "title" },
      { Header: "Created", accessor: "created" },
      { Header: "Status", accessor: "status" },
      { Header: "Budget", accessor: "budget" },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  const handleRowClick = (row) => {
    // Customize the navigation path based on your project structure
    navigate(`/project/${row.original.title}`);
  };

  return (
    <div
      className="text-black-variant-1 bg-white-variant-4 p-1 rounded w-100"
      style={{ overflow: "auto" }}
    >
      {" "}
      {/* Wrapper for responsiveness */}
      <table
        {...getTableProps()}
        className="w-100"
        style={{ minWidth: "500px" }}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              className={``}
              style={{
                borderBottom: "1px solid gray",
              }}
              key={"headers"}
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column) => (
                <th
                  key={column.id}
                  {...column.getHeaderProps()}
                  className="p-2"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                className={``}
                style={{
                  borderBottom: "1px solid gray",
                }}
                key={row.id}
                {...row.getRowProps()}
                onClick={() => handleRowClick(row)}
              >
                {row.cells.map((cell) => (
                  <td
                    key={cell.value}
                    {...cell.getCellProps()}
                    className="p-2 py-3"
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CreatedProjectTable;
