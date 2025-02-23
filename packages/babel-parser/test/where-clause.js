import { parse } from "../lib";

function getParser(code) {
  return () => parse(code, { sourceType: "module", plugins: ["typescript"] });
}

describe("where clause syntax", function () {
  it("should parse", function () {
    expect(
      getParser(`type AdultAge = number where { value >= 18 };`)(),
    ).toMatchSnapshot();
  });
});
