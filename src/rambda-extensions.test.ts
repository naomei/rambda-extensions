import { mapKeys, compact, sum, sumBy } from "./rambda-extensions";

it("mapKeys", () => {
  expect(mapKeys({ a: "1", b: 10 }, (x) => x + "a")).toEqual({
    aa: "1",
    ba: 10,
  });
});

it("compact", () => {
  expect(compact([0, undefined, 1, "", "2"])).toEqual([1, "2"]);
});

it("sum", () => {
  expect(sum([1, 2, 3])).toBe(6);
});

it("sumBy", () => {
  expect(sumBy([], "score")).toBe(0);

  expect(sumBy([{ score: 1 }, { score: 3 }], "score")).toBe(4);

  expect(
    sumBy([{ score: { value: 2 } }, { score: { value: 7 } }], "score.value")
  ).toBe(9);

  expect(
    sumBy(
      [{ score: { value: { age: 100 } } }, { score: { value: { age: 20 } } }],
      "score.value.age"
    )
  ).toBe(120);
});
