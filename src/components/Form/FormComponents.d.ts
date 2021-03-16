type Validation = {
  required?: boolean | undefined;
  pattern?: string | undefined;
};

type Option = {
  key: string | number;
  value: string | number;
};

type InputObject = {
  name?: string;
  label?: string;
  type?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  isDisabled?: boolean;
  validation?: Validation | undefined | null;
  errorMessage?: string | undefined;
  updateFormError?: (data: any) => void;
};
