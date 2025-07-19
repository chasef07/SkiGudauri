import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Use OpenWeatherMap API for Gudauri, Georgia
    const apiKey = process.env.OPENWEATHER_API_KEY || process.env.WEATHER_API_KEY || "";
    
    if (!apiKey) {
      return NextResponse.json({ 
        message: "Weather API key not configured",
        error: "Missing API key"
      }, { status: 500 });
    }

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=42.4787&lon=44.4735&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      return NextResponse.json({
        message: "Failed to fetch weather data",
        error: "Weather API request failed"
      }, { status: response.status });
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

    return NextResponse.json(weatherData);
  } catch (error) {
    console.error("Weather API error:", error);
    return NextResponse.json({ 
      message: "Failed to fetch weather data",
      error: "Internal server error"
    }, { status: 500 });
  }
}