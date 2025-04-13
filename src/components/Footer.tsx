import { Link } from "react-router-dom";
import { Github, Twitter, Bot, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted mt-auto py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Bot className="h-6 w-6 text-aipurple" />
              <span className="font-bold text-xl text-gradient">AIToolHub</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Discover, review, and use the best AI tools in one place.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </a>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4">Browse</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/categories" className="text-muted-foreground hover:text-foreground">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/categories?filter=popular" className="text-muted-foreground hover:text-foreground">
                  Popular
                </Link>
              </li>
              <li>
                <Link to="/categories?filter=new" className="text-muted-foreground hover:text-foreground">
                  New Tools
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4">Resources</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/forum" className="text-muted-foreground hover:text-foreground">
                  Forum
                </Link>
              </li>
              <li>
                <Link to="/submit" className="text-muted-foreground hover:text-foreground">
                  Submit a Tool
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4">Legal</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AIToolHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
