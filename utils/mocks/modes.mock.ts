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
    backgroundColor: "#FA6E5A",
  },
  {
    id: 2,
    name: "Endurance",
    description: "50/10",
    image: enduranceImg,
    backgroundColor: "#6CB28E",
  },
  {
    id: 3,
    name: "Focus",
    description: "90/20",
    image: focusImg,
    backgroundColor: "#D9A5B5",
  },
];
