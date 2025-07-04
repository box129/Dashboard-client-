import React from 'react';
import { Ellipsis } from 'lucide-react';
import './CustomerList.css';

const CustomerList = ({ columns, data, onRowAction }) => {
  //Avatar placement component
  const Avatar = ({ name }) => {
    const initials = name ? name.split(' ').map(n => n[0]).join('').toUpperCase() : 'U';
    return (
      <div className="avatar">
        {initials}
      </div>
    );
  };

  return (
    <div className="customer-list-container-none">
      <div className="table-wrapper">
        <table className="customer-table">
          <thead>
            <tr>
              <th></th> {/* Empty Column for avatar */}
              {columns.map((column, index) => (
                <th key={index} className="table-header">
                  {column.header}
                </th>
              ))}
              <th className="table-header">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="table-row">
                <td className="avatar-cell">
                  <Avatar name={row.name} />
                </td>
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="table-cell">
                    {column.render ? column.render(row) : row[column.key]}
                  </td>
                ))}
                <td className="table-cell action-cell">
                  <button
                    onClick={() => onRowAction && onRowAction(row)}
                    className="action-button"
                  >
                    <Ellipsis size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerList;