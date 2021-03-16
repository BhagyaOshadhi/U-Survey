import React from 'react'
import CustomTable from '../Table/CustomTable'


const tableHeaderList = [
    {
        name: "dessert",
        value: "Dessert (100g serving)",
    },
    {
        name: "calories",
        value: "Calories",
    },
    {
        name: "fat",
        value: "Fat (g)",
    },
    {
        name: "Carbs",
        value: "Carbs (g)",
    },
    {
        name: "Protein",
        value: "Protein (g)",
    }
]

const tableRowList = [
    {
        dessert: "Frozen yoghurt",
        calories: '159',
        fat: '6',
        Carbs: '24',
        Protein: '4',

    },
    {
        dessert: "Ice cream sandwich",
        calories: '237',
        fat: '9',
        Carbs: '37',
        Protein: '4.3',

    },
    {
        dessert: "Eclair",
        calories: '262',
        fat: '16',
        Carbs: '24',
        Protein: '6',

    },
    {
        dessert: "Cupcake",
        calories: '305',
        fat: '3.7',
        Carbs: '67',
        Protein: '4.3',

    },
    {
        dessert: "Gingerbread",
        calories: '356',
        fat: '16',
        Carbs: '49',
        Protein: '4.9',

    },
]


const Tab4: React.FC = () => {
    return (
        <CustomTable tableHeaderList={tableHeaderList} tableRowList={tableRowList} paginate={true} columnSearch={true}/>
    )
}

export default Tab4
