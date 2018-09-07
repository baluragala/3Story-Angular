import { DurationPipe } from "./duration.pipe";
import { isRegExp } from "util";

describe("DurationPipe", () => {
  let pipe;
  beforeEach(() => {
    pipe = new DurationPipe();
  });
  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });
  it("should tranform hours to minutes", () => {
    const transformedResult = pipe.transform(20, "m");
    expect(transformedResult).toBe("1200 mins");
  });
  afterEach(() => {
    pipe = null;
  });
});
