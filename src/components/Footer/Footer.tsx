import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <p className="text-green-400 text-sm text-center mt-6 flex gap-1 justify-center">
      <Link
        to="/terms"
        className="underline underline-offset-4 hover:text-primary"
      >
        Terms of Service
      </Link>
      <span>&bull;</span>
      <Link
        to="/privacy"
        className="underline underline-offset-4 hover:text-primary"
      >
        Privacy Policy
      </Link>
    </p>
  );
};
