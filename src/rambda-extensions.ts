type ValueOf<T> = T[keyof T];
type AnyObject = { [k: string]: any };

export const mapKeys = <
  T extends AnyObject & T extends any[] ? never : AnyObject
>(
  obj: T,
  fn: (k: string) => string
): { [k: string]: ValueOf<T> } => {
  return R.zipObj(Object.keys(obj).map(fn), Object.values(obj));
};

export const compact = (input: any[]) => R.filter(Boolean, input);

export const sum = (input: number[], inital = 0): number => {
  return R.reduce((prev, curr) => R.add(prev, curr), inital, input);
};

export const sumBy = <T extends AnyObject>(
  input: T[],
  key: string
): number | undefined => {
  const result = R.compose(
    sum,
    R.map((v: T) => R.path(key, v) as number)
  )(input);

  return isNaN(result) ? 0 : result;
};
