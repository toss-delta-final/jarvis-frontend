import { http, HttpResponse } from "msw";

const BASE = import.meta.env.VITE_API_BASE_URL;

export const handlers = [
  http.get(`${BASE}/api/categories`, () =>
    HttpResponse.json({
      categories: [
        { categoryId: 1, name: "패션의류", productCount: 120 },
        { categoryId: 2, name: "주방용품", productCount: 84 },
        { categoryId: 3, name: "침구류", productCount: 45 },
      ],
    }),
  ),
];
