import React from 'react'
import CustomTable from '../Table/CustomTable'

const tableHeaderList = [
    {
        name: "no",
        value: "#"
    },
    {
        name: "firstName",
        value: "First Name"
    },
    {
        name: "lastName",
        value: "Last Name"
    },
    {
        name: "userName",
        value: "Username"
    },
]

const tableRowList = [
    {
        no: "1",
        firstName: 'Mark',
        lastName: 'Antony',
        userName: '@mdo'
    },
    {
        no: "2",
        firstName: 'Jacob',
        lastName: 'Thornton',
        userName: '@fat'
    },
    {
        no: "3",
        firstName: 'Larry the Bird',
        lastName: '',
        userName: '@twitter'
    }
]

const tableRowList2 = [
    {
        no: "1",
        firstName: 'Mark',
        lastName: 'Antony',
        userName: '@mdo'
    },
    {
        no: "2",
        firstName: 'Jacob',
        lastName: 'Thornton',
        userName: '@fat'
    },
    {
        no: "3",
        firstName: 'Larry the Bird',
        lastName: <CustomTable tableHeaderList={tableHeaderList} tableRowList={tableRowList} paginate={false} columnSearch={true}/>,
        userName: '@twitter'
    }
]

const Tab3: React.FC = props => {
    return (
        <CustomTable tableHeaderList={tableHeaderList} tableRowList={tableRowList2} paginate={true} columnSearch={true} />
    )
}

Tab3.propTypes = {

}

export default Tab3
