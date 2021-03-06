import { limit, request } from "../index";

export function getArticles(page = 1): Promise<ArticlesResponse> {
  const params = { limit, offset: (page - 1) * limit };
  return request.get<ArticlesResponse>("/articles1", { params });
}
