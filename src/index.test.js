const { greet } = require("./index");

jest.spyOn(global.console, "log");

describe("index", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("expects a greeting to be called", () => {
    greet();

    expect(console.log).toHaveBeenCalledWith("Hello, World!");
  });
});
