import { expect } from "chai";
import cx from "../../src/util/cx";

describe("cx", () => {
  it("returns an empty string if all args are falsy", () => {
    expect(cx(false, 0, null, undefined, "")).to.equal("");
  });

  it("keeps truthy arguments", () => {
    expect(cx("a", null, undefined, false, "b")).to.equal("a b");
  });

  it("supports arrays as arguments", () => {
    expect(cx("a", ["b"], ["c", ["d", ["e", "f"]]])).to.equal("a b c d e f");
  });

  it("supports objects as arguments", () => {
    const result = cx({
      a: true,
      b: false,
      c: 0,
      d: 1,
      e: null,
      f: undefined,
      g: "",
      h: "test",
    });

    expect(result).to.equal("a d h");
  });
});
