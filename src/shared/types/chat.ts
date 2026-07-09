/** 채팅 API 계약 타입 — 백엔드/LLM 스키마(07-07 기준)와 1:1. 변경 시 계약 문서와 함께 갱신 */
export type ChatChannel = "SHOPPING" | "CS" | "SELLER";

export interface ChatRequest {
  sessionId: string;
  userId?: number;
  guestId?: string | null;
  channel: ChatChannel;
  message: string;
  brandId?: number; // SELLER 채널 전용
}

export interface ProductCard {
  productId: number;
  name: string;
  brandName: string;
  price: number;
  originalPrice: number;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  reason: string; // AI 추천 이유 한 줄
}

export interface ProductGroup {
  title: string;
  items: ProductCard[];
}

export type ChatEvent =
  | { event: "token"; data: { text: string } }
  | { event: "conditions"; data: { items: string[] } }
  | { event: "products"; data: { groups: ProductGroup[] } }
  | {
      event: "action";
      data: { type: "CART_ADDED"; message: string; cartItemId: number };
    }
  | { event: "done"; data: { finishReason: string } }
  | { event: "error"; data: { code: string; message: string } };
