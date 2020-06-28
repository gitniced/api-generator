import { stringify } from "qs";
import request from "@/utils/request";
import configs from "@/utils/env";

// 查询-日志管理-产品抽查操作记录
export async function LogCheckResultList(params) {
  return request(
    `/log/checkResult/list?${stringify(params, { arrayFormat: "comma" })}`
  );
}
