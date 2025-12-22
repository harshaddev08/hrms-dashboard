import { Button } from "../Button";

interface IIconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
}

export const IconButton = ({ icon, ...props }: IIconButtonProps) => {
  return (
    <Button className="bg-gray-10 w-12.5 h-12.5 p-0" {...props}>
      {icon}
    </Button>
  );
};
