
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">About AIToolHub</h1>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-4">
              At AIToolHub, our mission is to simplify the discovery of AI tools by providing a comprehensive, 
              user-friendly platform where anyone can find, compare, and learn about the latest AI innovations.
              We believe that artificial intelligence should be accessible to everyone, and our goal is to bridge
              the gap between cutting-edge AI technology and everyday users.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
            <p className="text-muted-foreground mb-4">
              We've built AIToolHub as a centralized repository of the most innovative AI tools available today.
              Our platform offers:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>Curated listings of the best AI tools across multiple categories</li>
              <li>Detailed information about each tool's features, pricing, and use cases</li>
              <li>Authentic user reviews and ratings to help you make informed decisions</li>
              <li>Community forums for discussing AI technologies and applications</li>
              <li>Regular updates as new tools emerge in the rapidly evolving AI landscape</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <p className="text-muted-foreground mb-4">
              AIToolHub was founded in 2023 by a team of AI enthusiasts, developers, and industry experts
              who saw the need for a better way to discover and evaluate AI tools. Our team combines
              technical expertise with a passion for making technology more accessible.
            </p>
            <p className="text-muted-foreground">
              We're constantly working to improve our platform and expand our database of AI tools.
              If you're passionate about AI and would like to contribute to our mission, we'd love to hear from you!
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              Have questions, suggestions, or feedback? We'd love to hear from you!
              Visit our <a href="/contact" className="text-primary hover:underline">Contact page</a> or
              email us directly at <span className="font-medium">info@aitoolhub.com</span>.
            </p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
