import React from 'react';
import { Ellipsis } from 'lucide-react';

const TransactionList = ({ columns, data, onRowAction }) => {

  return(
    <div className="customer-list-container-none">
      <div className="table-wrapper">
        <table className="customer-table">
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index} className="table-header">
                  {column.header}
                </th>
              ))}
              <th className="table-header"></th> {/* Empty header for the action button */}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="table-row">
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

export default TransactionList;