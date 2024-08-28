import { AlertCircle } from "lucide-react";

interface ErrorAlertProps {
  message?: string;
}

export function ErrorAlert({ message }: ErrorAlertProps) {
  if(!message) return null;

  return (
    <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
      <AlertCircle className="h-4 w-4" />
      <span>{message}</span>
    </div>
  );
}
