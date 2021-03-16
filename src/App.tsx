import React, { useState } from 'react'
import './App.css'
import { Button } from 'react-bootstrap'
import Test from './components/tabs/Test';

interface Tab {
  name: string,
  value: number,
}

const tabListJson = [
  {
    name: 'tab1',
    value: 1,
  },
  {
    name: 'tab2',
    value: 2,
  },
  {
    name: 'tab3',
    value: 3,
  },
  {
    name: 'tab4',
    value: 4,
  },
  {
    name: 'tab5',
    value: 5,
  },
]

function App() {
  const [selectedTabs, setSelectedTabs] = useState<Array<Tab>>([]);

  const handleButtonClick = ({ name, value }: Tab
  ) => {
    !selectedTabs.some(tab => tab.value === value) && setSelectedTabs([...selectedTabs, { name, value }])
  }

  const handleTabClose = ({ name, value }: Tab) => {
    setSelectedTabs([...selectedTabs.filter(tab => tab.value !== value)])
  }

  return (
    <>
      {tabListJson.map(option => (
        <Button variant="light" onClick={() => handleButtonClick({ ...option })}>{option.name}</Button>
      ))}
      <br />
      <Test selectedTabs={selectedTabs} handleTabClose={handleTabClose} />
    </>
  );
}

export default App;