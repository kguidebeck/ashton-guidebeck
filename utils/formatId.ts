export const formatId = (input: string) => {
  const inputWithNoWhiteSpace = input.replace(/\s/g, '_');
  return inputWithNoWhiteSpace.replace(/[^A-Za-z0-9_\s]/g, '').toLowerCase();
};
