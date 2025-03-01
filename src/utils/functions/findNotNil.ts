export function findNotNil<T>(...args: T[]) {
  return args.find((it) => it !== null && it !== undefined);
}
