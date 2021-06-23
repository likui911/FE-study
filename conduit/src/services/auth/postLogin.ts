import { request } from "../index";

export interface PostLoginForm {
  email: string;
  password: string;
}

export function postLogin(form: PostLoginForm): Promise<UserResponse> {
  return request.post<UserResponse>("/users/login", {
    user: form,
  });
}
