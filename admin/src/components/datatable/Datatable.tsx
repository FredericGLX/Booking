import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CellParams, ListData } from '../../interfaces/intefaces';
import useFetch from '../../hooks/useFetch';
import { ColumnModel } from '../../interfaces/intefaces';
import axios from 'axios';
import { FC } from 'react';

const Datatable: FC<{ columns: ColumnModel[] }> = ({ columns }) => {
  const location = useLocation();
  const path = location.pathname.split('/')[1];
  const [list, setList] = useState<ListData[]>();
  const { data, loading, error } = useFetch(`/${path}`);

  useEffect(() => {
    setList(data);
  }, [data]);

  const handleDelete = async (id: string | number) => {
    try {
      await axios.delete(`/${path}/${id}`);
      setList(data.filter((item: ListData) => item._id !== id));
    } catch (err) {}
  };

  function titleCase(string: string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
  }

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params: CellParams) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: 'none' }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
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
      <div className="datatableTitle">
        {titleCase(path)}
        <Link to={`/${path}/new`} className="link">
          Add New
        </Link>
      </div>
      {list && (
        <>
          <DataGrid
            className="datagrid"
            rows={list}
            columns={(columns as any[]).concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
            getRowId={(row) => row._id}
          />
        </>
      )}
    </div>
  );
};

export default Datatable;
