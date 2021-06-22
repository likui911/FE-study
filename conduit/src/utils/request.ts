export interface FetchRequestOptions {
  prefix: string;
  headers: Record<string, string>;
  params: Record<string, string | number | boolean>;
}

export default class FetchRequest {
  private readonly defaultOptions: FetchRequestOptions = {
    prefix: "",
    headers: {},
    params: {},
  };
  private readonly options: FetchRequestOptions;

  private readonly handleResponse = <T>(response: Response): Promise<T> => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  };

  constructor(options: Partial<FetchRequestOptions> = {}) {
    this.options = Object.assign({}, this.defaultOptions, options);
  }

  private runFetch(
    method: "GET" | "DELETE" | "POST" | "PUT" | "PATCH",
    url: string,
    data?: unknown,
    options?: Partial<FetchRequestOptions>
  ): Promise<Response> {
    //todo generate final url and options
    url = "https://conduit.productionready.io/api/articles?limit=10&offset=0";
    return fetch(url, options);
  }

  get<T = unknown>(
    url: string,
    options?: Partial<FetchRequestOptions>
  ): Promise<T> {
    return this.runFetch("GET", url, null, options).then((r) =>
      this.handleResponse<T>(r)
    );
  }
}
