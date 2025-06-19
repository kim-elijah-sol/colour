export function tail<T>(array: T[]): T | null {
  return array[array.length - 1] ?? null;
}
