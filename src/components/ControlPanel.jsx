import { Volume2, Music, CircleHelp } from "lucide-react";
import { controlPanelButton } from "../utils/common/button";

export default function ControlPanel() {
  return (
    <div className="flex justify-between p-5">
      <div className="left__contents flex gap-[var(--size-16px)]">
        <div className={controlPanelButton}>
          <Volume2 className="w-5 h-5" />
        </div>
        <div className={controlPanelButton}>
          <Music className="w-5 h-5" />
        </div>
      </div>
      <div className="right__contents">
        <div className={controlPanelButton}>
          <CircleHelp className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}
