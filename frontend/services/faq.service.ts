import request from "./request";

export async function fetchFaqs(params: any) {
  return request("/faqs", {
    method: "GET",
    data: params && params.data,
  });
}
