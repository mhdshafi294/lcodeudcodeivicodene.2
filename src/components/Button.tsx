import { cn } from "./../lib/utils";

interface ButtonProps {
  label?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  className,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "px-[30px] h-12 border border-[#051F10] text-center text-[#051F10] text-sm font-light font-body leading-[33px] tracking-wide flex justify-center items-center duration-500 hover:border-[#897358] hover:text-white hover: hover:bg-[#897358] uppercase",
        className
      )}
    >
      {label}
    </button>
  );
};

export default Button;
