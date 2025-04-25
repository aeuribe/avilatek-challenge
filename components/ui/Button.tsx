type ButtonProps = {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
  height?: string;  // Añadir el prop height
};

const CustomButton = ({ variant = 'primary', children, onClick, height = '44px' }: ButtonProps) => {
  const base = 'px-4 py-2 rounded-md font-medium text-sm transition-colors duration-200';

  const variants = {
    primary: `bg-[#7F56D9] text-white text-[16px] hover:bg-[#6941C6] h-[${height || '48px'}]`, // Utilizar el height como prop
    secondary:
      'font-inter font-semibold text-[16px] leading-6 tracking-normal bg-white text-[#475467] hover:bg-[#F9FAFB]',
  };

  return (
    <button onClick={onClick} className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
};

export default CustomButton;
