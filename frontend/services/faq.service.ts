import request from "./request";

export async function fetchFaqs(params: any) {
  return request("/api/faqs", {
    method: "GET",
    data: params && params.data,
  });
}
