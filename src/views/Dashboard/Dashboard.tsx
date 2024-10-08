import {
  ChevronDown,
  Droplet,
  Smile,
  Sun,
  ThermometerSun,
  Wind,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";

const plants = [
  {
    name: "Ficus Lyrata",
    nickname: "Frank",
    image: "/images/ficus.jpg",
    status: "yellow",
  },
  {
    name: "Host",
    nickname: "Hosta La Vista",
    image: "/images/hosta.jpg",
    status: "green",
  },
  {
    name: "Succulent",
    nickname: "Succ It Up",
    image: "/images/succulent.jpg",
    status: "red",
  },
];

const wateringScheduleBase = [
  { name: plants[0]!.nickname, daysLeft: 3, progress: 57 },
  { name: plants[1]!.nickname, daysLeft: 12, progress: 20 },
  { name: plants[2]!.nickname, daysLeft: 1, progress: 85 },
];

const environmentalConditions = [
  { name: "Humidity", value: "65%", icon: Droplet, color: "blue" },
  { name: "Light", value: "Bright", icon: Sun, color: "yellow" },
  { name: "Temperature", value: "72°F", icon: ThermometerSun, color: "red" },
  { name: "Air Flow", value: "Moderate", icon: Wind, color: "gray" },
];

export const Dashboard = () => {
  const [wateringSchedule, setWateringSchedule] =
    useState(wateringScheduleBase);

  const onMergeWithNext = (name: string) => {
    const elementIndex = wateringSchedule.findIndex(
      (schedule) => schedule.name === name,
    );
    const element = wateringSchedule[elementIndex];
    if (element == null) {
      return;
    }

    const nextElementIndex = elementIndex + 1;
    const nextElement = wateringSchedule[nextElementIndex];

    if (nextElement == null) {
      return;
    }

    const mergedElement = {
      ...element,
      name: `${element.name} & ${nextElement.name}`,
      daysLeft: element.daysLeft + nextElement.daysLeft,
      progress: Math.round((element.progress + nextElement.progress) / 2),
    };

    setWateringSchedule((prev) => [
      ...prev.slice(0, elementIndex),
      mergedElement,
      ...prev.slice(elementIndex + 2),
    ]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="bg-green-50 p-8 flex-grow">
        <div className="max-w-6xl mx-auto space-y-8">
          <header className="text-center">
            <h1 className="text-4xl font-bold text-green-800">
              🌿 Leaf It to Me: Plant Care Dashboard 🌱
            </h1>
            <p className="text-green-600 mt-2">
              Where every day is a chlorophyll-good day!
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="col-span-1 md:col-span-2">
              <CardHeader>
                <CardTitle>Featured Plants</CardTitle>
                <CardDescription>
                  Your green squad in the spotlight
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {plants.map((plant) => (
                    <div key={plant.nickname} className="space-y-2">
                      <div className="w-full h-[300px] relative">
                        <img
                          src={plant.image}
                          alt={`${plant.name} (${plant.nickname})`}
                          className="w-full h-full object-cover rounded-lg"
                          draggable="false"
                        />
                        <div className="absolute inset-0 inner-border inner-border-slate-600/20 rounded-lg" />
                      </div>
                      <p className="font-medium text-center">
                        {plant.name} ({plant.nickname})
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Plant Status</CardTitle>
                <CardDescription>
                  How your green friends are feeling
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {plants.map((plant) => (
                    <div
                      key={plant.nickname}
                      className="flex items-center justify-between"
                    >
                      <span className="font-medium">
                        {plant.name} ({plant.nickname})
                      </span>
                      <Smile className={cn(`text-${plant.status}-500`)} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Watering Schedule</CardTitle>
                <CardDescription>
                  Keep &rsquo;em hydrated, not drowned!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {wateringSchedule.map((schedule, i, arr) => (
                    <div key={schedule.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">
                          {schedule.name}
                        </span>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              size="xs"
                              className="text-sm font-medium group"
                              variant="ghost"
                              onClick={() => {
                                onMergeWithNext(schedule.name);
                              }}
                              disabled={i === arr.length - 1}
                            >
                              <ChevronDown className="h-4 w-4 mr-1 transition-opacity opacity-0 group-hover:opacity-100" />
                              {schedule.daysLeft} days left
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>Merge with next</TooltipContent>
                        </Tooltip>
                      </div>
                      <Progress value={schedule.progress} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Plant Pun of the Day</CardTitle>
                <CardDescription>Lettuce entertain you!</CardDescription>
              </CardHeader>
              <CardContent>
                <blockquote className="italic text-lg text-center">
                  &ldquo;I&rsquo;m rooting for you, but I think it's thyme you
                  leaf this relationship. Don't let it succ-ulent your
                  happiness!&rdquo;
                </blockquote>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Environmental Conditions</CardTitle>
                <CardDescription>
                  Creating the perfect plant paradise
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {environmentalConditions.map((condition) => (
                    <div
                      key={condition.name}
                      className={cn(
                        `flex flex-col items-center p-4 rounded-lg inner-border inner-border-green-600/20`,
                        `bg-${condition.color}-100`,
                      )}
                    >
                      <condition.icon
                        className={`text-${condition.color}-500 mb-2`}
                      />
                      <span className="text-sm font-medium">
                        {condition.name}
                      </span>
                      <span className="text-lg font-bold">
                        {condition.value}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
