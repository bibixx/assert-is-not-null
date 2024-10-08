export class AssertionError extends Error {
  protected ERROR_TYPE = "AssertionError";
  public name = "AssertionError";

  public static isAssertionError(e: unknown): e is AssertionError {
    if (e instanceof AssertionError) {
      return true;
    }

    if (hasOwnProperty(e, "ERROR_TYPE") && e?.ERROR_TYPE === "AssertionError") {
      return true;
    }

    return false;
  }
}

export function assertIsNotNullish<T>(
  value: T | null | undefined,
  detail?: string,
): asserts value is T {
  if (!isNotNullish(value)) {
    throw new AssertionError(detail ?? `Passed value ${value} is nullish`);
  }
}

export function isNotNullish<V>(value: V | null | undefined): value is V {
  return value != null;
}

export const hasOwnProperty = <T extends string>(
  object: unknown,
  key: T,
): object is Record<T, unknown> => {
  if (typeof object !== "object" || object == null) {
    return false;
  }

  return key in object;
};
