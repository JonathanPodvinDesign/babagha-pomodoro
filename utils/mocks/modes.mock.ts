import { Mode } from "@/types/mode.types";
import pomodoroImg from "@/assets/images/modes/pomodoro-illustration.png";
import enduranceImg from "@/assets/images/modes/endurance-illustration.png";
import focusImg from "@/assets/images/modes/focus-illustration.png";

export const MODES_MOCK: Mode[] = [
  {
    id: 1,
    name: "Pomodoro",
    description: "25/5",
    image: pomodoroImg,
    backgroundColor: "#6CB28E",
    time: 25,
    breakTime: 5,
  },
  {
    id: 2,
    name: "Endurance",
    description: "50/10",
    image: enduranceImg,
    backgroundColor: "#FA6E5A",
    time: 50,
    breakTime: 10,
  },
  {
    id: 3,
    name: "Focus",
    description: "90/20",
    image: focusImg,
    backgroundColor: "#D9A5B5",
    time: 90,
    breakTime: 20,
  },
];
