import { CircleCheckIcon } from "lucide-react";

interface SuccessAlertProps {
  message?: string;
}

export function SuccessAlert({ message }: SuccessAlertProps) {
    if(!message) return null;
  return (
    <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500">
      <CircleCheckIcon className="h-4 w-4" />
      <span>{message}</span>
    </div>
  );
}
