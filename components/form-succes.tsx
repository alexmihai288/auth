import { CheckCircledIcon } from "@radix-ui/react-icons";

interface FormSuccesProps {
  messaage?: string;
}

export const FormSucces = ({ messaage }: FormSuccesProps) => {
  if (!messaage) return null;

  return (
    <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500">
      <CheckCircledIcon className="h-4 w-4" />
      <p>{messaage}</p>
    </div>
  );
};
