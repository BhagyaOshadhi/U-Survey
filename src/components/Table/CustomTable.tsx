import React, { useState, useEffect } from 'react'
import { Pagination, Table } from 'react-bootstrap'

const CustomTable: React.FC<CustomTableProps> = ({ tableHeaderList, tableRowList, paginate, columnSearch }) => {

    const [pageNumber, setPageNumber] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(10);
    const [filter, setFilter] = useState<any>({});
    const [filteredRowList, setFilteredRowList] = useState<any>([]);

    useEffect(() => {
        setFilteredRowList(tableRowList)
    }, [tableRowList])

    const changePageNumber = (num: number): void => {
        if (!(num < 1 || num > totalPages))
            setPageNumber(num)
    }

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setFilter({ [event.target.name]: event.target.value })
        
    }

    const getTableRow = (tRow: any): Array<JSX.Element> => {
        const keyList: any = Object.keys(tRow)
        return keyList.map((key: any): JSX.Element => <td>{tRow[key]}</td>);
    }

    const pagination = () => {
        return (
            <Pagination>
                <Pagination.Prev disabled={pageNumber === 1} onClick={() => changePageNumber(pageNumber - 1)} />
                {pageNumber > 3 && (<><Pagination.Item onClick={() => changePageNumber(1)}>{1}</Pagination.Item>
                    <Pagination.Ellipsis /></>)}

                {pageNumber > 2 && <Pagination.Item onClick={() => changePageNumber(pageNumber - 2)}>{pageNumber - 2}</Pagination.Item>}
                {pageNumber > 1 && <Pagination.Item onClick={() => changePageNumber(pageNumber - 1)}>{pageNumber - 1}</Pagination.Item>}
                <Pagination.Item active>{pageNumber}</Pagination.Item>
                {pageNumber + 1 <= totalPages && <Pagination.Item onClick={() => changePageNumber(pageNumber + 1)}>{pageNumber + 1}</Pagination.Item>}
                {pageNumber + 2 <= totalPages && <Pagination.Item onClick={() => changePageNumber(pageNumber + 2)}>{pageNumber + 2}</Pagination.Item>}

                {pageNumber + 2 < totalPages && <> <Pagination.Ellipsis />
                    <Pagination.Item onClick={() => changePageNumber(totalPages)}>{totalPages}</Pagination.Item></>}
                <Pagination.Next disabled={pageNumber === totalPages} onClick={() => changePageNumber(pageNumber + 1)} />
            </Pagination>
        )
    }

    return (
        <>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        {
                            tableHeaderList.map((tHeader: TableHeader): JSX.Element => <th>{tHeader.value}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {columnSearch && <tr> {
                        tableHeaderList.map((tRow: TableHeader): JSX.Element =>
                            <td><input
                                style={{ width: '100%' }}
                                name={tRow.name}
                                onChange={handleFilterChange}
                                value={filter[tRow.name] || ""}
                            /></td>
                        )
                    }</tr>}

                    {
                        tableRowList.map((tRow: any): JSX.Element => <tr>
                            {
                                getTableRow(tRow)
                            }
                        </tr>)
                    }
                </tbody>
            </Table>
            {paginate && pagination()}
        </>
    )
}

export default CustomTable
