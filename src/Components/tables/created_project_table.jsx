import React, { useContext } from "react";
import { useTable } from "react-table";
import { useNavigate } from "react-router-dom";
import { ProjectContext } from "../../utils/context/project";
const CreatedProjectTable = ({ data }) => {
  const navigate = useNavigate();
  const { setCurrentProject } = useContext(ProjectContext);
  const columns = React.useMemo(
    () => [
      { Header: "Title", accessor: "title" },
      { Header: "Created", accessor: "created_at" },
      { Header: "Status", accessor: "project_status" },
      { Header: "Budget", accessor: "project_price" },
    ],
    []
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  const handleRowClick = (index) => {
    // Customize the navigation path based on your project structure
    console.log(data, index);
    setCurrentProject(data[index]);
    navigate(`projects/status/${index}`);
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
          {rows.map((row, index) => {
            prepareRow(row);
            return (
              <tr
                className={``}
                style={{
                  borderBottom: "1px solid gray",
                }}
                key={row.id}
                {...row.getRowProps()}
                onClick={() => handleRowClick(index)}
              >
                {row.cells.map((cell) => (
                  <td
                    key={cell.value}
                    {...cell.getCellProps()}
                    className="p-2 "
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
