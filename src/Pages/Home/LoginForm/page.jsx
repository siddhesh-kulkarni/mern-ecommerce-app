import React from "react";

const LoginForm = () => {
  return (
    <div className="w-full px-4 py-10 flex justify-center bg-white min-h-screen">
      <div className="w-full max-w-3xl">
        <section id="main">
          {/* Breadcrumbs */}
          {/* Breadcrumbs - left aligned */}
          <nav className="text-sm text-gray-600 mb-4" aria-label="Breadcrumb">
            <ol className="flex space-x-2">
              <li>
                <a href="/" className="hover:underline !text-[rgba(0,0,0,0.8)] !font-[500]">
                  Home
                </a>
              </li>
              <li>|</li>
              <li className="text-gray-500 font-[500]">Login</li>
            </ol>
          </nav>

          {/* Page Header */}
          <header className="mb-6">
            <h1 className="font-['Roboto',sans-serif] text-[22px] !font-[600] text-gray-800">
              Log in to your account
            </h1>
          </header>

          {/* Login Form Section */}
          <section className="bg-white shadow-md rounded-md p-6 lg:p-10">
            <form
              id="login-form"
              action="https://demos.codezeel.com/prestashop/PRS21/PRS210502/en/login?back=my-account"
              method="post"
              className="max-w-md mx-auto"
            >
              <input type="hidden" name="back" value="my-account" />

              {/* Email Field - inline */}
              <div className="mb-4 flex items-center gap-4">
                <label
                  htmlFor="field-email"
                  className="text-gray-700 font-medium text-sm w-24"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="field-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="flex-1 px-4 py-1.5 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-[#ff5252] focus:outline-none"
                />
              </div>

              {/* Password Field - inline */}
              <div className="mb-4 flex items-center gap-4">
                <label
                  htmlFor="field-password"
                  className="text-gray-700 font-medium text-sm w-24"
                >
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative flex-1">
                  <input
                    id="field-password"
                    name="password"
                    type="password"
                    required
                    minLength={5}
                    pattern=".{5,}"
                    autoComplete="current-password"
                    className="w-full px-4 py-1.5 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-[#ff5252] focus:outline-none pr-20"
                  />
                  <button
                    type="button"
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 text-sm text-primary hover:underline"
                  >
                    Show
                  </button>
                </div>
              </div>

              {/* Forgot Password */}
              <div className="text-center mb-6">
                <a
                  href="https://demos.codezeel.com/prestashop/PRS21/PRS210502/en/password-recovery"
                  className="!text-[rgba(0,0,0,0.8)] text-sm hover:l"
                  rel="nofollow"
                >
                  Forgot your password?
                </a>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <input type="hidden" name="submitLogin" value="1" />
                <button
                  id="submit-login"
                  type="submit"
                  className="w-full bg-primary text-white py-2 rounded-md transition text-sm"
                >
                  Sign in
                </button>
              </div>
            </form>

            {/* Divider */}
            <hr className="my-6 max-w-md mx-auto" />

            {/* No Account Link */}
            <div className="text-center">
              <a
                href="https://demos.codezeel.com/prestashop/PRS21/PRS210502/en/registration"
                className="text-primary hover:underline text-sm"
              >
                No account? Create one here
              </a>
            </div>
          </section>

          {/* Footer (optional) */}
          <footer className="mt-8 text-center text-gray-400 text-sm">
            {/* Footer content if needed */}
          </footer>
        </section>
      </div>
    </div>
  );
};

export default LoginForm;
