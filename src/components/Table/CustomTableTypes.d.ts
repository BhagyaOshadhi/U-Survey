type CustomTableProps = {
  tableHeaderList: Array<TableHeader>;
  tableRowList: Array<any>;
  paginate?: boolean | null;
  columnSearch?: boolean | null
};

type TableHeader = {
  name: string;
  value: string;
};
