import React from 'react';
import './list.css';
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DataTable from '../../components/datatable/DataTable';

const List = () => {
  return (
    <div className='list'>
      <Sidebar />
      <div className="list-Container">
        <Navbar />
        <DataTable />
      </div>
    </div>
  )
}

export default List