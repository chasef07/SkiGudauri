import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInquirySchema, weatherDataSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Weather API endpoint
  app.get("/api/weather", async (req, res) => {
    try {
      // Use OpenWeatherMap API for Gudauri, Georgia
      const apiKey = process.env.OPENWEATHER_API_KEY || process.env.WEATHER_API_KEY || "";
      
      if (!apiKey) {
        return res.status(500).json({ 
          message: "Weather API key not configured",
          error: "Missing API key"
        });
      }

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=42.4787&lon=44.4735&appid=${apiKey}&units=metric`
      );

      if (!response.ok) {
        return res.status(response.status).json({
          message: "Failed to fetch weather data",
          error: "Weather API request failed"
        });
      }

      const data = await response.json();
      
      const weatherData = {
        temperature: Math.round(data.main.temp),
        condition: data.weather[0].main,
        windSpeed: Math.round(data.wind.speed * 3.6), // Convert m/s to km/h
        humidity: data.main.humidity,
        snowDepth: data.snow?.["1h"] ? Math.round(data.snow["1h"] * 10) : 85, // Default snow depth for ski resort
        lastUpdated: new Date().toISOString(),
      };

      res.json(weatherData);
    } catch (error) {
      console.error("Weather API error:", error);
      res.status(500).json({ 
        message: "Failed to fetch weather data",
        error: "Internal server error"
      });
    }
  });

  // Contact form submission
  app.post("/api/inquiries", async (req, res) => {
    try {
      const validatedData = insertInquirySchema.parse(req.body);
      const inquiry = await storage.createInquiry(validatedData);
      res.status(201).json({ 
        message: "Inquiry submitted successfully",
        id: inquiry.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Invalid inquiry data",
          errors: error.errors 
        });
      }
      console.error("Inquiry creation error:", error);
      res.status(500).json({ 
        message: "Failed to submit inquiry",
        error: "Internal server error"
      });
    }
  });

  // Get all inquiries (for admin purposes)
  app.get("/api/inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getAllInquiries();
      res.json(inquiries);
    } catch (error) {
      console.error("Get inquiries error:", error);
      res.status(500).json({ 
        message: "Failed to fetch inquiries",
        error: "Internal server error"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
