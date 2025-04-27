import DIE from "phpdie";
export const regexMapper = <M extends Record<string, RegExp | string>>(
  map: M
) => {
  const pairs = [map]
    .flatMap((e) => Object.entries(e))
    .map(([k, v]) => [k as keyof M, new RegExp(v)] as const);
  return (haystack: string) =>
    pairs.find(([, reg]) => reg.test(haystack))?.[0] as keyof M | undefined;
};
export const regexMapperStrict = <M extends Record<string, RegExp | string>>(
  map: M
) => {
  const pairs = [map]
    .flatMap((e) => Object.entries(e))
    .map(([k, v]) => [k as keyof M, new RegExp(v)] as const);
  return (haystack: string) =>
    pairs.find(([, reg]) => reg.test(haystack))?.[0] ??
    DIE(new Error("regMapper Mismatched", { cause: { map, haystack } }));
};
export const regexMatcher = <M extends Record<string, RegExp | string>>(
  map: M
) => {
  const pairs = [map]
    .flatMap((e) => Object.entries(e))
    .map(([k, v]) => [k as keyof M, new RegExp(v)] as const);
  return (haystack: string) =>
    pairs.filter(([, reg]) => reg.test(haystack)).map((e) => e[0]);
};
