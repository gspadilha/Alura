import get from 'lodash/get';

export function getLodash(theme: any, option: string) {
  const valueFound = get(theme, option);
  return valueFound;
}
