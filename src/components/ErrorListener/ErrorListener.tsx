import { useEffect } from "react";
import { useErrorBoundary } from "react-error-boundary";

export const ErrorListener = () => {
  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      showBoundary(event.error);
    };
    const handleUncaughtPromise = (event: PromiseRejectionEvent) => {
      showBoundary(event.reason);
    };

    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleUncaughtPromise);

    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleUncaughtPromise);
    };
  }, [showBoundary]);

  return null;
};
