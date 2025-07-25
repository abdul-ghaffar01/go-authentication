import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen min-h-screen items-center justify-center flex">
      <div className="max-w-[380px] w-full bg-light border-borderc border rounded-md mt-5 shadow-md mx-auto p-4">
        {/* Heading of login */}
        <h1 className="text-3xl text-primary text-center font-bold ">Login</h1>
        {/* Form  */}
        <form>
          {/* email  */}
          <div className="my-4">
            <label className="text-md text-textc cursor-pointer select-none">Email</label>
            <input type="email" className="w-full px-4 py-2 text-md outline-none border border-borderc shadow-sm text-dark rounded-md" />
          </div>
          {/* password  */}
          <div className="mb-4">
            <label className="text-md text-textc cursor-pointer select-none">Password</label>
            <input type="password" className="w-full px-4 py-2 text-md outline-none border border-borderc shadow-sm text-dark rounded-md" />
          </div>

          <div>
            {/* Remember me and forgot password */}
            <div className="flex justify-between items-center mb-4 h-fit">
              <div className="flex items-center">
                <input id="rememberme" type="checkbox" className="h-4 w-4 mr-2 text-primary accent-primary  rounded focus:ring-primary focus:outline-none" />
                <label className="text-sm text-textc cursor-pointer select-none" htmlFor="rememberme">Remember me</label>
              </div>
              <Link href="/forgot-password" className="text-sm text-primary hover:text-primary-hover select-none" >Forgot password?</Link>
            </div>

            {/* Login button */}
            <button type="submit" className="w-full px-4 py-2 bg-primary text-light rounded-md hover:bg-primary-hover">Login</button>

            {/* other options */}
            <div>
              {/* heading */}
              <div className="relative flex items-center justify-center my-5 bg-red-600">
                <hr className="text-borderc top-0 w-full"/>
                <h1 className="absolute text-textc text-sm bg-bgc px-2 text-textc">Or login with</h1>
              </div>
              <div className="flex justify-between items-center mt-2 gap-2">
                <Link href="/login/google" className="w-full px-4 py-2 bg-white text-dark border border-borderc rounded-md hover:bg-gray-100 text-center">Google</Link>
                <Link href="/login/github" className="w-full px-4 py-2 bg-white text-dark border border-borderc rounded-md hover:bg-gray-100 text-center">GitHub</Link>
                </div>
            </div>

            {/* Register link */}
            <div className="mt-4 text-center">
              <span className="text-sm text-textc">Don't have an account? </span>
              <Link href="/register" className="text-sm text-primary hover:text-primary-hover">Signup</Link>
            </div>

          </div>

        </form>
      </div>
    </div>);
}
