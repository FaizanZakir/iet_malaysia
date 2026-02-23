import Link from "next/link";
import { Mail } from "lucide-react";

const footerLinks = {
  iet: [
    { label: "Product", href: "#" },
    { label: "Features", href: "#" },
    { label: "Enterprise", href: "#" },
    { label: "Pricing", href: "#" },
  ],
  about: [
    { label: "Company", href: "#" },
    { label: "Customers", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
  solutions: [
    { label: "Efficient Workflow", href: "#" },
    { label: "Project Planning", href: "#" },
    { label: "Task Management", href: "#" },
    { label: "See All Solutions", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Contact */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex flex-col">
              <img src="/images/logo2.png" alt="Logo" width={240}  />
              </div>
            </Link>
            
            <a
              href="mailto:support@iet.io"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-4 w-4" />
              support@iet.io
            </a>
          </div>

          {/* IET Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">IET</h4>
            <ul className="space-y-3">
              {footerLinks.iet.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">ABOUT</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">SOLUTIONS</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; 2025 IET Inc.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms & Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
