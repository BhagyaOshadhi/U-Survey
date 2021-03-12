export const getPattern = (name: string): any => {
  switch (name) {
    case "ONLY_ALPHABETS":
      return /^[A-Za-z]+$/;
    case "PASSWORD":
      return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    case "ONLY_NUMBERS":
      return /^(0|[1-9][0-9]*)$/;

    default:
      break;
  }
};
