import { getMax } from "./getMax"

describe("generics", () => {
  it.each([{ a: 1, b: 2, larger: 2 }, { a: 2, b: 1, larger: 2 }])(
    "compares numbers correctly",
    ({ a, b, larger }) => {
      expect(getMax(a, b)).toEqual(larger)
    }
  )

  it.each([{ a: true, b: false }, { a: false, b: true }])(
    "compares booleans correctly",
    ({ a, b }) => {
      expect(getMax(a, b)).toEqual(true)
    }
  )

  it.each([
    { a: "Hello", b: "World", larger: "World" },
    { a: "Hi", b: "HI", larger: "Hi" }
  ])("compares strings correctly", ({ a, b, larger }) => {
    expect(getMax(a, b)).toEqual(larger)
  })

  it.each([
    {
      a: { name: "Alasdair" },
      b: { name: "Alasdair", position: "Developer" },
      larger: { name: "Alasdair" }
    },
    {
      a: { position: "Developer", employer: "Senacor" },
      b: { employer: "Senacor" },
      larger: { position: "Developer", employer: "Senacor" }
    }
  ])("compares objects by their string representation", ({ a, b, larger }) => {
    expect(getMax(a, b)).toEqual(larger)
  })
})
