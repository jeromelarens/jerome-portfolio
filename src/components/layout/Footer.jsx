const Footer = () => {
  return (
    <footer className="mt-32 border-t border-[#C7A183]/30 bg-[#0b0b0b]">
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* TOP */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* IDENTITY */}
          <div>
            <h3 className="text-xl font-semibold text-gray-100">
              Jerome Larens
            </h3>

            <p className="mt-2 text-sm text-gray-400 max-w-sm">
              Backend-focused MERN Stack Developer building
              production-ready systems with clarity and intent.
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Chennai · Remote friendly
            </p>
          </div>

          {/* CONTACT */}
          <div className="text-sm text-gray-400 space-y-2">
            <a
              href="mailto:jeromelarens7@gmail.com"
              className="block hover:text-[#C7A183] transition"
            >
              jeromelarens7@gmail.com
            </a>

            <a
              href="tel:9176306875"
              className="block hover:text-[#C7A183] transition"
            >
              +91 91763 06875
            </a>

            <a
              href="https://www.linkedin.com/in/jerome-larens-5b244b3a9"
              target="_blank"
              rel="noreferrer"
              className="block hover:text-[#C7A183] transition"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 pt-6 border-t border-[#C7A183]/20
                        flex flex-col md:flex-row
                        justify-between gap-4 text-xs text-gray-500">

          <span>© {new Date().getFullYear()} Jerome Larens</span>
          <span>Built with MERN · Backend-first mindset</span>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
