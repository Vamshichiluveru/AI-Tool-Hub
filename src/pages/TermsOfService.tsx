
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
          <p className="text-muted-foreground mb-6">Last Updated: April 13, 2025</p>
          
          <section className="mb-8">
            <p className="text-muted-foreground mb-4">
              Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the AIToolHub
              website operated by AIToolHub ("us", "we", or "our").
            </p>
            <p className="text-muted-foreground mb-4">
              Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms.
              These Terms apply to all visitors, users and others who access or use the Service.
            </p>
            <p className="text-muted-foreground mb-4">
              By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part
              of the terms, then you may not access the Service.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Accounts</h2>
            <p className="text-muted-foreground mb-4">
              When you create an account with us, you must provide information that is accurate, complete, and current
              at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination
              of your account on our Service.
            </p>
            <p className="text-muted-foreground mb-4">
              You are responsible for safeguarding the password that you use to access the Service and for any activities
              or actions under your password, whether your password is with our Service or a third-party service.
            </p>
            <p className="text-muted-foreground mb-4">
              You agree not to disclose your password to any third party. You must notify us immediately upon becoming
              aware of any breach of security or unauthorized use of your account.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Content</h2>
            <p className="text-muted-foreground mb-4">
              Our Service allows you to post, link, store, share and otherwise make available certain information,
              text, graphics, videos, or other material ("Content"). You are responsible for the Content that you
              post to the Service, including its legality, reliability, and appropriateness.
            </p>
            <p className="text-muted-foreground mb-4">
              By posting Content to the Service, you grant us the right and license to use, modify, perform, display,
              reproduce, and distribute such Content on and through the Service. You retain any and all of your rights
              to any Content you submit, post or display on or through the Service and you are responsible for protecting
              those rights.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Links To Other Web Sites</h2>
            <p className="text-muted-foreground mb-4">
              Our Service may contain links to third-party web sites or services that are not owned or controlled by AIToolHub.
            </p>
            <p className="text-muted-foreground mb-4">
              AIToolHub has no control over, and assumes no responsibility for, the content, privacy policies, or practices
              of any third party web sites or services. You further acknowledge and agree that AIToolHub shall not be
              responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or
              in connection with use of or reliance on any such content, goods or services available on or through any
              such web sites or services.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Termination</h2>
            <p className="text-muted-foreground mb-4">
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason
              whatsoever, including without limitation if you breach the Terms.
            </p>
            <p className="text-muted-foreground mb-4">
              All provisions of the Terms which by their nature should survive termination shall survive termination,
              including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="font-medium">legal@aitoolhub.com</p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
