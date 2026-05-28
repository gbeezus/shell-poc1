function isNullOrUndefined(value: unknown): value is null | undefined {
  return value === null || value === undefined;
}

function isNotNullNorUndefined<T>(value: T | null | undefined): value is T {
  return !isNullOrUndefined(value);
}

export { isNotNullNorUndefined };
export default isNullOrUndefined;
