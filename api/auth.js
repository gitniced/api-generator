import { stringify } from "qs";
import request from "@/utils/request";
import configs from "@/utils/env";

// 获取登录验证码
export async function AuthVCode(params) {
  return request(`/auth/vCode?${stringify(params, { arrayFormat: "comma" })}`);
}

// 登录
export async function AuthLogin(params) {
  return request(`/auth/login`, {
    methods: "POST",
    body: param,
  });
}
