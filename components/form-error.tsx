import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
  messaage?: string;
}

export const FormError = ({ messaage }: FormErrorProps) => {
  if (!messaage) return null;

  return (
    <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <p>{messaage}</p>
    </div>
  );
};
