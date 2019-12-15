export const isNumber = (value: any): value is number => (
  !Number.isNaN(value)
);
