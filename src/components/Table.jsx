import React,{ forwardRef } from 'react';
import MaterialTable from 'material-table';
import { 
  MdAddBox, 
  MdArrowDownward, 
  MdCheck, 
  MdChevronLeft, 
  MdChevronRight, 
  MdClear, 
  MdDelete, 
  MdEdit, 
  MdFilterList, 
  MdFirstPage, 
  MdLastPage, 
  MdRemove,
  MdSave, 
  MdSearch, 
  MdViewColumn } from 'react-icons/md';

const tableIcons = {
    Add: forwardRef((props, ref) => <MdAddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <MdCheck {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <MdClear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <MdDelete {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <MdChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <MdEdit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <MdSave {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <MdFilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <MdFirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <MdLastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <MdChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <MdChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <MdClear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <MdSearch {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <MdArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <MdRemove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <MdViewColumn {...props} ref={ref} />)
  };


const Table = ({ columns, data, title }) => (
    <MaterialTable
      columns={columns}
      data={data}
      title={title || ''}
      icons={tableIcons}
    />
  )

export default Table;
