import test from "node:test";
import assert from "node:assert/strict";
import { normalize, fare, position } from "../src/lib/trips.ts";
test("recherche insensible aux accents et à la casse", () => {
  assert.equal(normalize("ANGRÉ"), "angre");
  assert.ok(normalize("Angré Marcory").includes(normalize("angre")));
});
test("prix partagé, véhicule privé, capacité et entier", () => {
  assert.equal(fare(1500, 4000, "shared", 3, 3), 4500);
  assert.equal(fare(1500, 4000, "private", 3, 3), 4000);
  for (const s of [0, 4, 1.5])
    assert.throws(() => fare(1500, 4000, "shared", s, 3));
});
test("position du véhicule bornée au tracé", () => {
  assert.deepEqual(
    position(
      [
        [0, 0],
        [2, 4],
      ],
      0.5,
    ),
    [1, 2],
  );
  assert.deepEqual(
    position(
      [
        [0, 0],
        [2, 4],
      ],
      2,
    ),
    [2, 4],
  );
  assert.deepEqual(position([[1, 2]], 0.8), [1, 2]);
  assert.throws(() => position([], 0));
});
