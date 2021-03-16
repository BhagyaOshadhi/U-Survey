import React, { useState, Fragment } from 'react'
import fieldList from '../Form/fieldList.json'
import Form from '../Form/Form';

interface StateObj {
  texField1?: string
}

interface Tab1Props {
  heading: string
}

const Tab1: React.FC<Tab1Props> = ({ heading }) => {
  const [state, setState] = useState<StateObj>({ texField1: "" });

  const handleTextChange = (e: any) => {
    setState({ texField1: e.target.value })
  }

  return (
    <Fragment>
      <Form fieldList={fieldList}/>
    </Fragment>
  );
};

export default Tab1;
