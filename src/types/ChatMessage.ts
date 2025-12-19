export interface ChatMessage {
  id: string;
  text: string;
  sentAt: string;
  sender: {
    id: string;
    name: string; // PII
    email: string; // PII
    ip: string; // PII
    accountType?: "free" | "pro" | "enterprise";
    platform?: "web" | "mobile" | "desktop";
    verified?: boolean;
  };
  metadata: {
    sentiment: number;
    tags: string[];
  };
}
