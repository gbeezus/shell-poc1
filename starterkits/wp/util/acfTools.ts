import { isNotNullNorUndefined } from '~/util/isNullOrUndefined';

/**
 * Returns an array of objects given data from an ACF repeater/flex content field.
 *
 * ACF array fields can often be returned as null or arrays containing nulls. We
 * eliminate both worries and _always_ return an array of only the item type
 * expected.
 * @example
 *
 * ```tsx
 * const books = arrayFromAcf(acfField.books);
 *
 * // books is guaranteed to be Book[], even if acfField.books was null/undefined.
 * // books is guaranteed to have no null/undefined items.
 * ```
 */
export function arrayFromAcf<T>(
  value: Array<T | null> | null | undefined,
): T[] {
  return isNotNullNorUndefined(value)
    ? value.filter(isNotNullNorUndefined)
    : [];
}

type OmitNull<T> = T extends null ? Exclude<T, null> | undefined : T;

type OmitNullProps<T extends object> = { [Key in keyof T]: OmitNull<T[Key]> };

/**
 * Allow destructuring an object, turning any null properties into undefined so
 * a default can be given. If the given object may be null/undefined, then every
 * property may be undefined.
 *
 * Useful for assigning defaults for properties that may be null.
 * @example
 *
 * ```tsx
 * const book = {title: null, pages: 100};
 *
 * // We can set defaults for null properties
 * const {title = 'default title', pages} = withoutNulls(book);
 *
 * const person: Person | null = null;
 *
 * // We can set defaults even if the whole object is null.
 * const {name = 'default Name'} = withoutNulls(person);
 * ```
 */
export function withoutNulls<T extends object>(value: T): OmitNullProps<T>;
export function withoutNulls<T extends object>(
  value: T | null | undefined,
): Partial<OmitNullProps<T>>;
export function withoutNulls(value: unknown) {
  return Object.fromEntries(
    Object.entries(value || {}).filter(kv => kv[1] !== null),
  );
}

/**
 * Create a Record from a list of objects keyed by a particular property.
 * Use the 3rd argument to pick the values from a property, too.
 * @example
 *
 * ```tsx
 * const items = [{lower: 'a', upper: 'A'}, {lower: 'b', upper: 'B'}];
 *
 * mapFromArray(items, 'lower');
 * // {
 * //   a: {lower: 'a', upper: 'A'},
 * //   b: {lower: 'b', upper: 'B'},
 * // }
 *
 * mapFromArray(items, 'lower', 'upper');
 * // {
 * //   a: 'A',
 * //   b: 'B',
 * // }
 * ```
 */
export function mapFromArray<T>(
  items: T[],
  indexProp: keyof T,
): Record<string, T>;
export function mapFromArray<T, VP extends keyof T>(
  items: T[],
  indexProp: keyof T,
  valueProp: VP,
): Record<string, T[VP]>;

export function mapFromArray<T, VP extends keyof T>(
  items: T[],
  indexProp: keyof T,
  valueProp?: VP,
) {
  if (typeof valueProp === 'undefined') {
    return items.reduce(
      (acc, curr) => {
        const key = curr[indexProp] as string;
        acc[key] = curr;
        return acc;
      },
      {} as Record<string, T>,
    );
  }

  return items.reduce(
    (acc, curr) => {
      const key = curr[indexProp] as string;
      const value = curr[valueProp];
      acc[key] = value;
      return acc;
    },
    {} as Record<string, T[VP]>,
  );
}
