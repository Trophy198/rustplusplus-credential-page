import styles from './table.module.css';
import { CommonTableProps } from '@/types/tableComponentTypes';

const CommonTable = ({ columns, rows }: CommonTableProps) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.fullWidthTable}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key} className={styles.tableHeaderCell}>
                <div dangerouslySetInnerHTML={{ __html: column.label as string }} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={row.key} className={`${styles.tableRow} ${rowIndex % 2 === 0 ? styles.darkRow : styles.lightRow}`}>
              {columns.map((column) => (
                <td key={`${row.key}-${column.key}`} className={styles.tableDataCell}>
                  <div dangerouslySetInnerHTML={{ __html: row[column.key] as string }} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommonTable;
