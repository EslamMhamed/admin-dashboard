import { ThemeToggler } from "@/components/ThemeToggler";


const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-[calc(100vh-100px)] flex items-center justify-center relative'>
      <div className=' absolute right-0 bottom-5  text-white'>
        <ThemeToggler />
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;