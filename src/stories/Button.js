import React from 'react';
import MaterialButton from '@material-ui/core/Button';




export const Button = ({ id, label, handleClick, variant, className, size, disabled, type, ...rest }) => {
  
  return (
    <MaterialButton 
    >
      {label}
    </MaterialButton>
  );
};


Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  // size: 'medium',
  onClick: undefined,
  id: String,
  label: String,
  // handleClick: (event: any) => void,
  // variant: 'outlined' | 'contained' | 'text',
  // // className: any;
  // color: 'primary' | 'secondary' | 'inherit',
  // size: 'large' | 'medium' | 'small',
  // disabled: Boolean,
  // // inputRef: React.Ref<any>,
  // type: 'button' | 'reset' | 'submit',
};
