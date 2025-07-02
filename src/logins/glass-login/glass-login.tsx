import { LockIcon, MailIcon } from 'lucide-react';

interface GlassLoginProps {}

export function GlassLogin({}: GlassLoginProps) {
  return (
    <div
      className={
        'flex flex-col bg-white/10 rounded-xl border-2 border-white/30 backdrop-blur-sm p-8 gap-5'
      }
    >
      <h2 className="text-2xl font-bold text-center my-3">Login</h2>

      <GlassLoginInput
        placeholder={'Email'}
        icon={<MailIcon className="text-white/30 absolute right-2" />}
      />

      <GlassLoginInput
        placeholder={'Password'}
        icon={<LockIcon className="text-white/30 absolute right-2" />}
      />

      <div className="flex items-center gap-2 justify-center">
        <input type="checkbox" />
        <span>Remember me</span>
      </div>

      <button className="bg-white text-black font-bold rounded-full py-2">Log in</button>

      <div className="text-sm flex flex-col gap-1">
        <div className="flex justify-center">
          <span className="text-blue-400 font-bold">Forgot Password?</span>
        </div>

        <div className="flex justify-center gap-1">
          <span>Don't have an account?</span>
          <span className="text-blue-400 font-bold">Register?</span>
        </div>
      </div>
    </div>
  );
}

function GlassLoginInput({ placeholder, icon }: { placeholder: string; icon: JSX.Element }) {
  return (
    <div className="flex relative items-center">
      <input
        className="bg-transparent pl-2 pr-10 py-3 border-b-white/30 border-transparent outline-none border-2 focus:border-b-blue-700/90 transition"
        placeholder={placeholder}
      />
      {icon}
    </div>
  );
}
