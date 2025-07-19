import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, CloudSnow, Wind, Droplets, Mountain } from "lucide-react";
import type { WeatherData } from "@shared/schema";

export default function WeatherWidget() {
  const { data: weather, isLoading, error } = useQuery<WeatherData>({
    queryKey: ["/api/weather"],
    refetchInterval: 10 * 60 * 1000, // Refetch every 10 minutes
  });

  if (isLoading) {
    return (
      <Card className="bg-white/10 backdrop-blur-md rounded-3xl p-8">
        <CardContent className="p-0 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin" />
          <span className="ml-2">Loading weather data...</span>
        </CardContent>
      </Card>
    );
  }

  if (error || !weather) {
    return (
      <Card className="bg-white/10 backdrop-blur-md rounded-3xl p-8">
        <CardContent className="p-0 text-center">
          <p className="text-white/80 mb-4">Unable to load weather data</p>
          <p className="text-sm text-white/60">Please check back later</p>
        </CardContent>
      </Card>
    );
  }

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'snow':
      case 'light snow':
        return '❄️';
      case 'clear':
        return '☀️';
      case 'clouds':
        return '☁️';
      case 'rain':
        return '🌧️';
      default:
        return '🌨️';
    }
  };

  const getSkiCondition = (temperature: number, condition: string) => {
    if (temperature <= -2 && condition.toLowerCase().includes('snow')) {
      return { status: 'Excellent', color: 'bg-green-500', description: 'Fresh powder' };
    } else if (temperature <= 2) {
      return { status: 'Good', color: 'bg-blue-500', description: 'Good conditions' };
    } else {
      return { status: 'Fair', color: 'bg-yellow-500', description: 'Spring conditions' };
    }
  };

  const skiCondition = getSkiCondition(weather.temperature, weather.condition);

  return (
    <Card className="bg-white/10 backdrop-blur-md rounded-3xl p-8 mb-8">
      <CardContent className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-6xl mb-2">{getWeatherIcon(weather.condition)}</div>
            <div className="text-3xl font-bold mb-1">{weather.temperature}°C</div>
            <div className="text-white/80">{weather.condition}</div>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-white/80 flex items-center">
                <Wind className="h-4 w-4 mr-2" />
                Wind Speed
              </span>
              <span className="font-semibold">{weather.windSpeed} km/h</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/80 flex items-center">
                <Droplets className="h-4 w-4 mr-2" />
                Humidity
              </span>
              <span className="font-semibold">{weather.humidity}%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/80 flex items-center">
                <CloudSnow className="h-4 w-4 mr-2" />
                Snow Depth
              </span>
              <span className="font-semibold">{weather.snowDepth} cm</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 flex items-center">
              <Mountain className="h-4 w-4 mr-2" />
              Ski Conditions
            </h3>
            <div className="space-y-2">
              <Badge className={`${skiCondition.color} text-white px-3 py-1 rounded-full text-sm`}>
                {skiCondition.status}
              </Badge>
              <div className="text-sm text-white/80">{skiCondition.description}</div>
              <div className="text-sm text-white/80">All lifts operational</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
