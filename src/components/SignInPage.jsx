import React from "react";
import { FacebookIcon, GoogleIcon, WindowsIcon } from "./Icons";


function SignInPage() {
  return (
    <header className="flex flex-col bg-white border-2 rounded-md">
        <form className="flex flex-col items-center self-center p-11 mt-9 max-w-full text-black bg-white rounded-xl w-[527px] max-md:px-5">
        <h2 className="text-2xl leading-5">Sign in</h2>
        <label className="self-stretch mt-8 max-md:max-w-full">Email</label>
        <input
          type="email"
          className="pl-3 shrink-0 self-stretch mt-1.5 rounded-lg border border-solid border-zinc-300 h-[42px] max-md:max-w-full"
          aria-label="email-input"
        />
        <label className="self-stretch mt-9 max-md:max-w-full">Password</label>
        <input
          type="password"
          className="pl-3 shrink-0 self-stretch mt-1.5 bg-white rounded-lg border border-solid border-zinc-300 h-[42px] max-md:max-w-full"
          aria-label="password-input"
        />
        <a className="self-end mt-3.5 text-sky-600 underline leading-[119%]" href="#" role="button">
          Forgot password
        </a>
        <button className="button-1 px-4 py-2" type="submit">
          Sign in
        </button>
        <div className="mt-7">Or</div>
        <div className="flex gap-4 justify-center px-12 py-4 mt-7 max-w-full tracking-tight rounded-full border-2 border-solid border-slate-200 leading-[150%] text-slate-800 w-[280px] max-md:px-5">
          <GoogleIcon />
          <div className="grow">Sign in with Google</div>
        </div>
        <div className="flex gap-4 justify-center px-11 py-4 mt-7 max-w-full tracking-tight rounded-full border-2 border-solid border-slate-200 leading-[150%] text-slate-800 w-[280px] max-md:px-5">
          <FacebookIcon/>
          <div className="grow">Sign in with Facebook</div>
        </div>
        <div className="flex gap-4 justify-center px-11 py-4 mt-7 max-w-full tracking-tight rounded-full border-2 border-solid border-slate-200 leading-[150%] text-slate-800 w-[280px] max-md:px-5">
          <WindowsIcon/>
          <div className="grow">Sign in with Microsoft</div>
        </div>
      </form>
    </header>
  );
}
export default SignInPage;