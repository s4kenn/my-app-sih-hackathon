import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  PiAppStoreLogo,
  PiChat,
  PiDatabase,
  PiGraph,
  PiHeadsetFill,
  PiLock,
  PiMegaphone,
  PiMonitor,
  PiStorefront,
} from "react-icons/pi";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiLock className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Data Privacy & Security",
    description:
      "All conversations and images are encrypted, and no data is shared without explicit user consent.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiGraph className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Model Accuracy",
    description:
      "The models have been trained to achieve high accuracy, providing precise diagnoses.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiHeadsetFill className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Secure Chatbot",
    description:
      "The chatbot is built with robust security features to ensure the safety of all interactions.",
  },
];
