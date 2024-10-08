import { FallbackProps } from "react-error-boundary";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";

export const ErrorBoundaryFallback = ({
  error,
  resetErrorBoundary,
}: FallbackProps) => {
  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full space-y-8 text-center">
        <div className="space-y-4">
          <img
            src="/images/wilted.png"
            alt="Sad plant"
            className="mx-auto w-96"
          />
          <h1 className="text-4xl font-bold text-green-800">
            Oops! Something went wrong
          </h1>
          <p className="text-xl text-green-600">
            Looks like the app has wilted a bit
          </p>
        </div>

        <div className="bg-white pt-6 rounded-lg shadow-md space-y-4">
          <pre className="text-gray-600 text-left overflow-auto px-6 pb-6">
            {error?.stack}
          </pre>
        </div>

        <div className="space-y-4">
          <p className="text-green-700 italic">
            &ldquo;Don't let this little hiccup leaf you feeling down. Let's get
            back to nurturing those green friends!&rdquo;
          </p>
          <Button variant="default" onClick={resetErrorBoundary}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
        </div>
      </div>
    </div>
  );
};
