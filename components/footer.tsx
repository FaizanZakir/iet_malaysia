export function Footer() {
  return (
    <footer className="bg-primary-dark text-gray-400 py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo (PNG) */}
          <div className="flex items-center gap-3">
          <img src="/images/logo2.png" alt="Logo" width={140}  />
          
            <span className="font-bold text-white text-lg">IET Malaysia</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-center md:text-left">
            © 2026 All Rights Reserved
          </p>

          {/* Social Icons (PNG) */}
          <div className="flex items-center gap-6">

            <a href="#" className="hover:opacity-80 transition">
              <img
                src="/icons/linkedin.png"
                alt="LinkedIn"
                className="w-8 h-8 object-contain"
              />
            </a>

            <a href="#" className="hover:opacity-80 transition">
              <img
                src="/icons/insta.png"
                alt="Instagram"
                className="w-8 h-8 object-contain"
              />
            </a>

            <a href="#" className="hover:opacity-80 transition">
              <img
                src="/icons/x.png"
                alt="X (Twitter)"
                className="w-8 h-8 object-contain"
              />
            </a>

            <a href="#" className="hover:opacity-80 transition">
              <img
                src="/icons/facebook.png"
                alt="Facebook"
                className="w-8 h-8 object-contain"
              />
            </a>

          </div>

        </div>
      </div>
    </footer>
  );
}
