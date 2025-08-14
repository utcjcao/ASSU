import Tabs, { TabItem } from "../../../components/common/Tabs";

export default function TabsDemo() {
  const demoTabs: TabItem[] = [
    {
      id: "overview",
      label: "Overview",
      ariaLabel: "Overview information",
      content: (
        <div>
          <h2 className="text-2xl font-bold text-gray-darker mb-4">
            Welcome to Our Platform
          </h2>
          <p className="text-gray-dark mb-4">
            This is the overview section where you can find general information
            about our services and offerings. We provide comprehensive solutions
            for students and faculty members.
          </p>
          <p className="text-gray-dark">
            Our platform is designed with accessibility in mind, ensuring that
            all users can navigate and interact with our content effectively.
          </p>
          <ul className="mt-4 space-y-2 text-gray-dark">
            <li>• Easy navigation with keyboard support</li>
            <li>• Screen reader compatibility</li>
            <li>• Mobile-responsive design</li>
            <li>• Clear visual indicators</li>
          </ul>
        </div>
      ),
    },
    {
      id: "services",
      label: "Services",
      ariaLabel: "Services we offer",
      content: (
        <div>
          <h2 className="text-2xl font-bold text-gray-darker mb-4">
            Our Services
          </h2>
          <p className="text-gray-dark mb-4">
            We offer a wide range of services to support the academic and
            personal development of our community members.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-pink-lighter p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-pink mb-2">
                Academic Support
              </h3>
              <p className="text-gray-dark">
                Tutoring, study groups, and academic resources to help you
                succeed.
              </p>
            </div>
            <div className="bg-blue-light p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue mb-2">
                Events & Activities
              </h3>
              <p className="text-gray-dark">
                Social events, workshops, and networking opportunities.
              </p>
            </div>
            <div className="bg-green-light p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-green-dark mb-2">
                Career Development
              </h3>
              <p className="text-gray-dark">
                Resume reviews, interview prep, and job placement assistance.
              </p>
            </div>
            <div className="bg-orange-light p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-orange-dark mb-2">
                Mental Health
              </h3>
              <p className="text-gray-dark">
                Counseling services and wellness programs for student support.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "resources",
      label: "Resources",
      ariaLabel: "Available resources",
      content: (
        <div>
          <h2 className="text-2xl font-bold text-gray-darker mb-4">
            Available Resources
          </h2>
          <p className="text-gray-dark mb-6">
            Access a comprehensive collection of resources designed to support
            your academic journey and personal growth.
          </p>
          
          <div className="space-y-6">
            <div className="border-l-4 border-pink pl-4">
              <h3 className="text-xl font-semibold text-gray-darker mb-2">
                Digital Library
              </h3>
              <p className="text-gray-dark">
                Access thousands of academic papers, journals, and e-books
                through our digital library platform.
              </p>
            </div>
            
            <div className="border-l-4 border-blue pl-4">
              <h3 className="text-xl font-semibold text-gray-darker mb-2">
                Study Spaces
              </h3>
              <p className="text-gray-dark">
                Book quiet study rooms, collaborative spaces, and computer labs
                available 24/7 for student use.
              </p>
            </div>
            
            <div className="border-l-4 border-green pl-4">
              <h3 className="text-xl font-semibold text-gray-darker mb-2">
                Student Handbook
              </h3>
              <p className="text-gray-dark">
                Complete guide to university policies, procedures, and important
                information for students.
              </p>
            </div>
            
            <div className="border-l-4 border-orange pl-4">
              <h3 className="text-xl font-semibold text-gray-darker mb-2">
                Emergency Contacts
              </h3>
              <p className="text-gray-dark">
                Important contact information for campus security, health
                services, and emergency support.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "contact",
      label: "Contact",
      ariaLabel: "Contact information",
      content: (
        <div>
          <h2 className="text-2xl font-bold text-gray-darker mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-dark mb-6">
            We're here to help! Reach out to us through any of the following
            methods, and we'll get back to you as soon as possible.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-darker mb-4">
                Office Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-pink rounded-full mt-1 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-gray-darker">Main Office</p>
                    <p className="text-gray-dark">Room 201, Student Center</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-blue rounded-full mt-1 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-gray-darker">Phone</p>
                    <p className="text-gray-dark">(416) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green rounded-full mt-1 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-gray-darker">Email</p>
                    <p className="text-gray-dark">info@assu.utoronto.ca</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-darker mb-4">
                Office Hours
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-darker">Monday - Friday</span>
                  <span className="text-gray-dark">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-darker">Saturday</span>
                  <span className="text-gray-dark">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-darker">Sunday</span>
                  <span className="text-gray-dark">Closed</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-pink-lighter rounded-lg">
                <h4 className="font-semibold text-pink mb-2">Quick Tip</h4>
                <p className="text-gray-dark text-sm">
                  For urgent matters outside office hours, use our 24/7 online
                  support portal or emergency hotline.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-darker mb-4">
            Tab Component Demo
          </h1>
          <p className="text-xl text-gray-dark max-w-2xl mx-auto">
            An accessible, keyboard-navigable tab component built for the ASSU
            website. Try using the Tab key to navigate and Enter/Space to
            activate tabs.
          </p>
        </header>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <Tabs
            tabs={demoTabs}
            defaultActiveTab="overview"
          />
        </section>

        <footer className="mt-12 text-center">
          <div className="bg-pink-lighter p-6 rounded-lg">
            <h2 className="text-lg font-semibold text-pink mb-2">
              Accessibility Features
            </h2>
            <ul className="text-gray-dark text-sm space-y-1">
              <li>✓ Keyboard navigation (Arrow keys, Home, End, Tab, Enter, Space)</li>
              <li>✓ ARIA roles and attributes for screen readers</li>
              <li>✓ Focus management and visual indicators</li>
              <li>✓ Mobile-friendly touch targets (44x44px minimum)</li>
              <li>✓ Responsive design for all device sizes</li>
            </ul>
          </div>
        </footer>
      </div>
    </main>
  );
}
