export interface TableType {
  key: string;
  [key: string]: string;
}

export interface CommonTableProps {
  columns: TableType[];
  rows: TableType[];
}