import { z } from "zod";

export const insertInquirySchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  checkIn: z.string().optional(),
  checkOut: z.string().optional(),
  message: z.string().optional(),
});

export type InsertInquiry = z.infer<typeof insertInquirySchema>;

export interface Inquiry extends InsertInquiry {
  id: number;
  createdAt: string;
}

export const weatherDataSchema = z.object({
  temperature: z.number(),
  condition: z.string(),
  windSpeed: z.number(),
  humidity: z.number(),
  snowDepth: z.number(),
  lastUpdated: z.string(),
});

export type WeatherData = z.infer<typeof weatherDataSchema>;