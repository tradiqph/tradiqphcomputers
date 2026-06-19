const XENDIT_API_BASE = "https://api.xendit.co";

export function isXenditConfigured(): boolean {
  return Boolean(process.env.XENDIT_SECRET_KEY);
}

export function getXenditSecretKey(): string {
  const key = process.env.XENDIT_SECRET_KEY;
  if (!key) {
    throw new Error(
      "XENDIT_SECRET_KEY is not configured. Add it to your environment variables."
    );
  }
  return key;
}

export function getXenditWebhookToken(): string | undefined {
  return process.env.XENDIT_WEBHOOK_TOKEN;
}

export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
}

export async function xenditFetch<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const secretKey = getXenditSecretKey();
  const auth = Buffer.from(`${secretKey}:`).toString("base64");

  const response = await fetch(`${XENDIT_API_BASE}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${auth}`,
      ...options.headers,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    const message =
      typeof data?.message === "string"
        ? data.message
        : "Xendit API request failed";
    throw new Error(message);
  }

  return data as T;
}
