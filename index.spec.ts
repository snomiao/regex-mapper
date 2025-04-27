import { regexMapper, regexMapperStrict, regexMatcher } from ".";

describe("regexMapper", () => {
  const map = {
    greeting: /^hello/,
    farewell: "bye$", // works as RegExp too
  };

  it("should return the correct key for a matching string", () => {
    const match = regexMapper(map);
    expect(match("hello world")).toBe("greeting");
    expect(match("goodbye")).toBe("farewell");
  });

  it("should return undefined for a non-matching string", () => {
    const match = regexMapper(map);
    expect(match("unknown")).toBeUndefined();
  });
});

describe("regexMapperStrict", () => {
  const map = {
    greeting: /^hello/,
    farewell: "bye$", // works as RegExp too
  };

  it("should return the correct key for a matching string", () => {
    const matchStrict = regexMapperStrict(map);
    expect(matchStrict("hello world")).toBe("greeting");
    expect(matchStrict("goodbye")).toBe("farewell");
  });

  it("should throw an error for a non-matching string", () => {
    const matchStrict = regexMapperStrict(map);
    expect(() => matchStrict("unknown")).toThrow();
  });
});

describe("regexMatcher", () => {
  const map = {
    greeting: /^hello/,
    farewell: /bye$/,
    casual: /yo/,
  };

  it("should return all keys for matching strings", () => {
    const matchAll = regexMatcher(map);
    expect(matchAll("hello yo")).toEqual(["greeting", "casual"]);
    expect(matchAll("farewell bye")).toEqual(["farewell"]);
  });

  it("should return an empty array for non-matching strings", () => {
    const matchAll = regexMatcher(map);
    expect(matchAll("unknown")).toEqual([]);
  });
});
