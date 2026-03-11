import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { TiLocationArrow } from "react-icons/ti";

const Login = ({ isOpen, onClose, onSwitchToRegister }) => {
  const modalRef = useRef(null);
  const contentRef = useRef(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Animation when opening/closing
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );
      gsap.fromTo(
        contentRef.current,
        { scale: 0.8, opacity: 0, y: 50 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "back.out(1.7)" }
      );
    }
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30 backdrop-blur-[2px]"
      onClick={onClose}
    >
      <div
        ref={contentRef}
        className="relative w-full max-w-sm overflow-hidden rounded-xl bg-black border border-violet-500/30 p-5 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "linear-gradient(135deg, rgba(30, 30, 30, 0.9) 0%, rgba(10, 10, 10, 0.95) 100%)",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 transition-colors hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Header */}
        <div className="mb-6 text-center">
          <h2 className="font-roboto text-2xl font-bold uppercase text-white">
            Login
          </h2>
          <p className="mt-2 text-xs text-gray-400">
            Welcome back to Pixorn
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-xs text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-violet-500/30 bg-black/50 px-3 py-2 text-sm text-white placeholder-gray-500 transition-all focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-violet-500/30 bg-black/50 px-3 py-2 text-sm text-white placeholder-gray-500 transition-all focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="group relative w-full overflow-hidden rounded-lg bg-violet-600 py-3 text-xs font-general uppercase text-white"
          >
            <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
              <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
                <span className="flex items-center justify-center gap-2">
                  Login
                  <TiLocationArrow />
                </span>
              </div>
              <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                <span className="flex items-center justify-center gap-2">
                  Login
                  <TiLocationArrow />
                </span>
              </div>
            </span>
          </button>
        </form>

        {/* Footer */}
        <p className="mt-4 text-center text-xs text-gray-400">
          Don't have an account?{" "}
          <button
            onClick={onSwitchToRegister}
            className="text-violet-400 hover:text-violet-300"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
