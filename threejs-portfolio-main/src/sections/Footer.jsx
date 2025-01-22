const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon cursor-pointer hover:opacity-70 transition-all hover:scale-105" onClick={() => {
          window.open("https://github.com/CodeWith-HAMZA", "_blank");
        }}>
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </div>
        {/* <div className="social-icon">
          <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
        </div> */}
        <div className="social-icon cursor-pointer hover:opacity-70 transition-all hover:scale-105" onClick={() => {
          window.open("https://www.linkedin.com/in/hamza-shaikh-a5616b31b/", "_blank");
        }}>
          <img src="/assets/linkedin.png" alt="linkedin" className="rounded-full" />
        </div>
      </div>

      <p className="text-white-500">© 2024 Adrian Hajdin. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
