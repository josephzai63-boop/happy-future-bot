export async function getOrCreateContactSubmission<T>(
  loadExisting: () => Promise<T | null>,
  insertNew: () => Promise<T | null>,
): Promise<T | null> {
  const existing = await loadExisting();
  if (existing) return existing;

  const inserted = await insertNew();
  if (inserted) return inserted;

  // A concurrent request may have inserted the same request ID first.
  return loadExisting();
}

export function shouldSendContactNotification(notificationSentAt: string | null): boolean {
  return notificationSentAt === null;
}