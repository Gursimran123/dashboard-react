import React,{useState} from 'react';
import "./datatable.css";
import { DataGrid } from "@mui/x-data-grid";
import { userRows,userColumns } from '../../datatableSource';
import { Link } from 'react-router-dom';


const DataTable = () => {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id));
    };

    const actionColumn = [
      {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => {
          return (
            <div className="cellAction">
              <Link to="/users/test" style={{ textDecoration: "none" }}>
                <div className="viewButton">View</div>
              </Link>
              <div
                className="deleteButton"
                onClick={() => handleDelete(params.row.id)}
              >
                Delete
              </div>
            </div>
          );
        },
      },
    ];
  return (
    <div className="datatable">
      <div className="datatabletitle">
        Add New User
        <Link to='/users/new' className="addlink">
          Add New
        </Link>
      </div>
      <DataGrid
        className='datagrid'
        rows={data}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5,6,7,8, 10]}
        checkboxSelection
      />
    </div>
  );
}

export default DataTable