"use client";

import { FC, useContext } from "react";
import { ThemeContext } from "./Providers/theme-provider";
import SunIcon from "@/libs/icons/SunIcon";
import MoonIcon from "@/libs/icons/MoonIcon";

interface ModeToggleProps {
  className: string;
}

const ModeToggle: FC<ModeToggleProps> = ({ className }) => {
  const toggleMode = useContext(ThemeContext);

  return (
    <button onClick={toggleMode} className={className}>
      <SunIcon className="dark:hidden h-6 w-6" />
      <MoonIcon className="hidden dark:block h-6 w-6" />
    </button>
  );
};

export default ModeToggle;
