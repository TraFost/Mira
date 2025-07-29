type FetchOptions<T> = {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  headers?: Record<string, string>;
  body?: T;
  params?: Record<string, string | number>;
};

type BaseFetchResult<T> = {
  data: T | null;
  error: string | null;
  status: number;
};

export const baseFetch = async <T = any>(
  url: string,
  options: FetchOptions<T> = {},
): Promise<BaseFetchResult<T>> => {
  try {
    const query =
      options.params &&
      "?" +
        Object.entries(options.params)
          .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
          .join("&");

    const res = await fetch(`${url}${query ?? ""}`, {
      method: options.method ?? "GET",
      headers: {
        "Content-Type": "application/json",
        ...(options.headers ?? {}),
      },
      body: options.body ? JSON.stringify(options.body) : undefined,
    });

    const status = res.status;
    const data = await res.json();

    if (!res.ok) {
      return { data: null, error: data?.error ?? "Unknown error", status };
    }

    return { data, error: null, status };
  } catch (err) {
    return {
      data: null,
      error: (err as Error).message ?? "Network error",
      status: 0,
    };
  }
};
