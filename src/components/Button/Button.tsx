import React, { memo, forwardRef } from 'react';
import MaterialButton from '@material-ui/core/Button';

interface Props {
  id?: string;
  label?: string;
  handleClick?: (event: any) => void;
  variant?: 'outlined' | 'contained' | 'text';
  className?: any;
  color?: 'primary' | 'secondary' | 'inherit';
  size?: 'large' | 'medium' | 'small';
  disabled?: boolean;
  inputRef?: React.Ref<any>;
  type?: 'button' | 'reset' | 'submit';
}

const Button: React.FC<Props> = forwardRef(
  ({ id, label, handleClick, variant, className, size, disabled, type, ...rest }, inputRef) => {
    return (
      <MaterialButton
        {...rest}
        className={className}
        id={id}
        onClick={handleClick}
        variant={variant}
        size={size}
        disabled={disabled}
        type={type}>
        {label}
      </MaterialButton>
    );
  },
);

export default memo(Button);
