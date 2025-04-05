export const roundMap = <T extends number[]>(v: T): T => v.map(Math.round) as T;
