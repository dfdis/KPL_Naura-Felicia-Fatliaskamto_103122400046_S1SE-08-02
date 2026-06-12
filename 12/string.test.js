import test from 'node:test';
import assert from 'node:assert';

test .describe("truth dan falsy", () => {
    test.it("Nilai kosong adalah falsy", () => {
        assert.ok(!"");
        assert.equal("", false);

        test.it("Nilai ada adalah truthy", () => {
            assert.ok("hello, world!");
        });
    });
});