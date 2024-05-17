export interface TableColumnType {
  key: string;
  label: string;
}

export interface TableRowType {
  key: string;
  [key: string]: string;
}

export interface CommonTableProps {
  columns: TableColumnType[];
  rows: TableRowType[];
}