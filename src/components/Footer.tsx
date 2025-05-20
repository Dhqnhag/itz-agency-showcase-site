
import { useState } from "react";

const Footer = () => {
  const [year] = useState(new Date().getFullYear());

  return (
    <footer className="py-8 bg-accent/5">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">
              <span className="text-highlight">D</span>hanush H M
            </h3>
            <p className="text-sm text-foreground/70 mt-1">
              Digital Marketing & AI-Coding Expert
            </p>
          </div>
          <div className="text-sm text-foreground/70">
            © {year} Dhanush H M. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
