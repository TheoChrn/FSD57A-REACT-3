import { PiSpinner } from "react-icons/pi";

export default function Loading() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <PiSpinner size={100} className="animate-spin" />
    </div>
  );
}
