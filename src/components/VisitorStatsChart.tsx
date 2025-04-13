
import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";

// Mock visitor data
const dailyData = [
  { date: "Apr 07", visitors: 520, signups: 42 },
  { date: "Apr 08", visitors: 650, signups: 53 },
  { date: "Apr 09", visitors: 800, signups: 63 },
  { date: "Apr 10", visitors: 950, signups: 75 },
  { date: "Apr 11", visitors: 1200, signups: 93 },
  { date: "Apr 12", visitors: 1100, signups: 88 },
  { date: "Apr 13", visitors: 1300, signups: 102 },
];

const monthlyData = [
  { date: "Jan", visitors: 15200, signups: 1240 },
  { date: "Feb", visitors: 18500, signups: 1450 },
  { date: "Mar", visitors: 22400, signups: 1780 },
  { date: "Apr", visitors: 25600, signups: 2020 },
];

const yearlyData = [
  { date: "2022", visitors: 153000, signups: 12400 },
  { date: "2023", visitors: 248000, signups: 19500 },
  { date: "2024", visitors: 320000, signups: 25600 },
];

type TimeRange = "daily" | "monthly" | "yearly";

const chartConfig = {
  visitors: {
    label: "Visitors",
    theme: {
      light: "rgba(59, 130, 246, 0.5)",
      dark: "rgba(59, 130, 246, 0.3)",
    },
  },
  signups: {
    label: "Signups",
    theme: {
      light: "rgba(168, 85, 247, 0.5)",
      dark: "rgba(168, 85, 247, 0.3)",
    },
  },
};

const VisitorStatsChart = () => {
  const [timeRange, setTimeRange] = useState<TimeRange>("daily");

  const getDataByTimeRange = () => {
    switch (timeRange) {
      case "daily":
        return dailyData;
      case "monthly":
        return monthlyData;
      case "yearly":
        return yearlyData;
      default:
        return dailyData;
    }
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Website Analytics</CardTitle>
          <CardDescription>
            Track visitor engagement and growth over time
          </CardDescription>
        </div>
        <div className="flex gap-1">
          <Button
            variant={timeRange === "daily" ? "default" : "outline"}
            size="sm"
            onClick={() => setTimeRange("daily")}
          >
            Daily
          </Button>
          <Button
            variant={timeRange === "monthly" ? "default" : "outline"}
            size="sm"
            onClick={() => setTimeRange("monthly")}
          >
            Monthly
          </Button>
          <Button
            variant={timeRange === "yearly" ? "default" : "outline"}
            size="sm"
            onClick={() => setTimeRange("yearly")}
          >
            Yearly
          </Button>
        </div>
      </CardHeader>
      <CardContent className="px-0 pb-0">
        <div className="h-[280px]">
          <ChartContainer config={chartConfig}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={getDataByTimeRange()}
                margin={{
                  top: 10,
                  right: 30,
                  left: 30,
                  bottom: 20,
                }}
              >
                <defs>
                  <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorSignups" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#A855F7" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#A855F7" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis 
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={10}
                  padding={{ left: 10, right: 10 }}
                  tick={{ fontSize: 12 }}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value.toLocaleString()}`}
                  tick={{ fontSize: 12 }}
                />
                <Tooltip 
                  content={<ChartTooltipContent />}
                  cursor={{ strokeDasharray: '3 3', stroke: 'rgba(100, 116, 139, 0.5)' }}
                />
                <Legend 
                  verticalAlign="top"
                  height={36}
                  iconType="circle"
                  iconSize={8}
                />
                <Area
                  type="monotone"
                  dataKey="visitors"
                  name="Visitors"
                  stroke="#3B82F6"
                  fillOpacity={1}
                  fill="url(#colorVisitors)"
                  strokeWidth={2}
                />
                <Area
                  type="monotone"
                  dataKey="signups"
                  name="Signups"
                  stroke="#A855F7"
                  fillOpacity={1}
                  fill="url(#colorSignups)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default VisitorStatsChart;
