type Validation = {
  required?: boolean | undefined;
  pattern?: string | undefined;
};

type InputObject = {
  name?: string;
  label?: string;
  type?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  isDisabled?: boolean;
  validation?: Validation | undefined | null;
  errorMessage?: string | undefined;
};
