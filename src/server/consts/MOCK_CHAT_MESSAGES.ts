import type { ChatMessage } from "@/types/ChatMessage";

export const MOCK_CHAT_MESSAGES: ChatMessage[] = [
  {
    id: "msg-001",
    text: "Hi, I'm having trouble logging into my account. It keeps saying my password is incorrect.",
    sentAt: "2025-12-18T09:15:00Z",
    sender: {
      id: "user-001",
      name: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      ip: "192.168.1.45",
    },
    metadata: {
      sentiment: -0.3,
      tags: ["login", "password", "support"],
    },
  },
  {
    id: "msg-002",
    text: "Your product is absolutely amazing! It has saved our team so much time. Thank you!",
    sentAt: "2025-12-18T10:22:00Z",
    sender: {
      id: "user-002",
      name: "Michael Chen",
      email: "m.chen@techcorp.io",
      ip: "10.0.0.128",
      accountType: "enterprise",
      verified: true,
    },
    metadata: {
      sentiment: 0.95,
      tags: ["feedback", "positive", "testimonial"],
    },
  },
  {
    id: "msg-003",
    text: "When will the new dashboard feature be released? We've been waiting for months.",
    sentAt: "2025-12-17T14:45:00Z",
    sender: {
      id: "user-003",
      name: "Emma Rodriguez",
      email: "emma.r@startup.co",
      ip: "172.16.0.33",
    },
    metadata: {
      sentiment: -0.2,
      tags: ["feature-request", "dashboard", "timeline"],
    },
  },
  {
    id: "msg-004",
    text: "I need to upgrade my subscription to the enterprise plan. Can someone help?",
    sentAt: "2025-12-17T16:30:00Z",
    sender: {
      id: "user-004",
      name: "David Kim",
      email: "dkim@enterprise.net",
      ip: "203.45.67.89",
      platform: "web",
    },
    metadata: {
      sentiment: 0.4,
      tags: ["billing", "upgrade", "enterprise"],
    },
  },
  {
    id: "msg-005",
    text: "The API response times have been really slow today. Is there an outage?",
    sentAt: "2025-12-18T08:05:00Z",
    sender: {
      id: "user-005",
      name: "Alex Turner",
      email: "alex.t@devshop.com",
      ip: "45.67.89.123",
    },
    metadata: {
      sentiment: -0.5,
      tags: ["api", "performance", "outage"],
    },
  },
  {
    id: "msg-006",
    text: "Just completed the onboarding tutorial. Everything was super clear and easy to follow!",
    sentAt: "2025-12-16T11:00:00Z",
    sender: {
      id: "user-006",
      name: "Lisa Wang",
      email: "lwang@newuser.org",
      ip: "98.76.54.32",
      accountType: "free",
      platform: "mobile",
    },
    metadata: {
      sentiment: 0.85,
      tags: ["onboarding", "feedback", "positive"],
    },
  },
  {
    id: "msg-007",
    text: "How do I export my data to CSV? I can't find the option anywhere.",
    sentAt: "2025-12-18T13:20:00Z",
    sender: {
      id: "user-007",
      name: "James Miller",
      email: "jmiller@consulting.biz",
      ip: "156.78.90.12",
    },
    metadata: {
      sentiment: 0.0,
      tags: ["export", "csv", "help"],
    },
  },
  {
    id: "msg-008",
    text: "This is the worst customer service I've ever experienced. Been waiting 3 days for a response!",
    sentAt: "2025-12-15T17:45:00Z",
    sender: {
      id: "user-008",
      name: "Rachel Green",
      email: "rgreen@frustrated.com",
      ip: "67.89.12.34",
      verified: true,
    },
    metadata: {
      sentiment: -0.9,
      tags: ["complaint", "support", "urgent"],
    },
  },
  {
    id: "msg-009",
    text: "Can you add dark mode to the mobile app? It would be really helpful for night use.",
    sentAt: "2025-12-17T21:15:00Z",
    sender: {
      id: "user-009",
      name: "Tom Bradley",
      email: "tbradley@nightowl.io",
      ip: "111.222.33.44",
    },
    metadata: {
      sentiment: 0.3,
      tags: ["feature-request", "mobile", "dark-mode"],
    },
  },
  {
    id: "msg-010",
    text: "Thanks for the quick fix on that bug! Everything is working perfectly now.",
    sentAt: "2025-12-18T15:00:00Z",
    sender: {
      id: "user-010",
      name: "Nina Patel",
      email: "nina.patel@happycustomer.com",
      ip: "88.99.11.22",
      accountType: "pro",
      platform: "desktop",
      verified: true,
    },
    metadata: {
      sentiment: 0.8,
      tags: ["bug-fix", "resolved", "positive"],
    },
  },
];
