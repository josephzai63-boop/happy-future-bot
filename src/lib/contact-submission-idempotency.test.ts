import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { getOrCreateContactSubmission, shouldSendContactNotification } from "./contact-submission-idempotency";

describe("contact submission retries", () => {
  it("keeps repeated requests with one request ID to a single saved enquiry", async () => {
    const rows = new Map<string, { requestId: string; message: string }>();
    const requestId = "6ad3a2f6-1eac-45f5-8b16-c17be8ec0c2c";
    let inserts = 0;

    const loadExisting = async () => rows.get(requestId) ?? null;
    const insertNew = async () => {
      inserts += 1;
      if (rows.has(requestId)) return null;
      const row = { requestId, message: "Please call me about care." };
      rows.set(requestId, row);
      return row;
    };

    const first = await getOrCreateContactSubmission(loadExisting, insertNew);
    const retry = await getOrCreateContactSubmission(loadExisting, insertNew);

    assert.deepEqual(first, retry);
    assert.equal(rows.size, 1);
    assert.equal(inserts, 1);
  });

  it("only retries notification delivery when no sent timestamp is stored", () => {
    assert.equal(shouldSendContactNotification(null), true);
    assert.equal(shouldSendContactNotification("2026-11-25T09:55:00.000Z"), false);
  });
});