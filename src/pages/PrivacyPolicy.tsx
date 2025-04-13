
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground mb-6">Last Updated: April 13, 2025</p>
          
          <section className="mb-8">
            <p className="text-muted-foreground mb-4">
              AIToolHub ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy 
              explains how we collect, use, disclose, and safeguard your information when you visit our website
              and use our services.
            </p>
            <p className="text-muted-foreground mb-4">
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy,
              please do not access the site.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="text-muted-foreground mb-4">
              We may collect information about you in a variety of ways. The information we may collect includes:
            </p>
            <h3 className="text-xl font-medium mb-2">Personal Data</h3>
            <p className="text-muted-foreground mb-4">
              When you register on our site, we collect personally identifiable information, such as your name,
              email address, and any other information you voluntarily provide. This information is used to
              personalize your experience, manage your account, and improve our services.
            </p>
            <h3 className="text-xl font-medium mb-2">Usage Data</h3>
            <p className="text-muted-foreground mb-4">
              We may also collect information on how the site is accessed and used. This usage data may include
              information such as your computer's IP address, browser type, browser version, the pages of our
              site that you visit, the time and date of your visit, the time spent on those pages, and other
              diagnostic data.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Use of Your Information</h2>
            <p className="text-muted-foreground mb-4">
              We may use the information we collect from you in the following ways:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our service</li>
              <li>To monitor the usage of our service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
            <p className="text-muted-foreground mb-4">
              We use cookies and similar tracking technologies to track activity on our site and hold certain information.
              Cookies are files with small amounts of data which may include an anonymous unique identifier.
            </p>
            <p className="text-muted-foreground mb-4">
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However,
              if you do not accept cookies, you may not be able to use some portions of our service.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="font-medium">privacy@aitoolhub.com</p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
