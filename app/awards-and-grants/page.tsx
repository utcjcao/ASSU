import Tabs, { TabItem } from "../../components/common/Tabs";

export default function AwardsAndGrants() {
  const awardsGrantsTabs: TabItem[] = [
    {
      id: "overview",
      label: "Overview",
      ariaLabel: "Awards and grants overview",
      content: (
        <div>
          <h2 className="text-2xl font-bold text-gray-darker mb-4">
            Awards & Grants Overview
          </h2>
          <p className="text-gray-dark mb-4">
            ASSU is committed to recognizing outstanding achievements and supporting 
            innovative initiatives through our comprehensive awards and grants program. 
            We celebrate excellence in academics, leadership, and community service.
          </p>
          <p className="text-gray-dark">
            Our funding opportunities are designed to empower students to pursue 
            their passions, conduct meaningful research, and make positive impacts 
            in their communities.
          </p>
          <ul className="mt-4 space-y-2 text-gray-dark">
            <li>• Merit-based recognition awards</li>
            <li>• Research and project funding</li>
            <li>• Community service grants</li>
            <li>• Leadership development opportunities</li>
          </ul>
        </div>
      ),
    },
    {
      id: "awards",
      label: "Awards",
      ariaLabel: "Available awards",
      content: (
        <div>
          <h2 className="text-2xl font-bold text-gray-darker mb-4">
            Recognition Awards
          </h2>
          <p className="text-gray-dark mb-4">
            We offer various awards to recognize outstanding contributions and 
            achievements in different areas of student life and academic excellence.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-pink-lighter p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-pink mb-2">
                Academic Excellence Award
              </h3>
              <p className="text-gray-dark">
                Recognizing students with exceptional academic performance and 
                scholarly achievements.
              </p>
            </div>
            <div className="bg-blue-light p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue mb-2">
                Leadership Award
              </h3>
              <p className="text-gray-dark">
                Honoring students who demonstrate outstanding leadership in 
                student organizations and community initiatives.
              </p>
            </div>
            <div className="bg-green-light p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-green-dark mb-2">
                Community Service Award
              </h3>
              <p className="text-gray-dark">
                Celebrating students who make significant contributions to 
                community service and social impact projects.
              </p>
            </div>
            <div className="bg-orange-light p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-orange-dark mb-2">
                Innovation Award
              </h3>
              <p className="text-gray-dark">
                Recognizing creative solutions and innovative approaches to 
                campus and community challenges.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "grants",
      label: "Grants",
      ariaLabel: "Available grants",
      content: (
        <div>
          <h2 className="text-2xl font-bold text-gray-darker mb-4">
            Funding Opportunities
          </h2>
          <p className="text-gray-dark mb-6">
            Apply for grants to support your research projects, community initiatives, 
            and innovative ideas that benefit the student community.
          </p>
          
          <div className="space-y-6">
            <div className="border-l-4 border-pink pl-4">
              <h3 className="text-xl font-semibold text-gray-darker mb-2">
                Research Grants
              </h3>
              <p className="text-gray-dark">
                Funding for undergraduate and graduate research projects across 
                all disciplines. Up to $5,000 per project.
              </p>
            </div>
            
            <div className="border-l-4 border-blue pl-4">
              <h3 className="text-xl font-semibold text-gray-darker mb-2">
                Community Impact Grants
              </h3>
              <p className="text-gray-dark">
                Support for projects that address community needs and create 
                positive social impact. Up to $3,000 per initiative.
              </p>
            </div>
            
            <div className="border-l-4 border-green pl-4">
              <h3 className="text-xl font-semibold text-gray-darker mb-2">
                Event and Workshop Grants
              </h3>
              <p className="text-gray-dark">
                Funding for educational events, workshops, and conferences that 
                benefit the student community. Up to $2,000 per event.
              </p>
            </div>
            
            <div className="border-l-4 border-orange pl-4">
              <h3 className="text-xl font-semibold text-gray-darker mb-2">
                Travel and Conference Grants
              </h3>
              <p className="text-gray-dark">
                Support for students presenting research or attending academic 
                conferences. Up to $1,500 per student.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "application",
      label: "How to Apply",
      ariaLabel: "Application information",
      content: (
        <div>
          <h2 className="text-2xl font-bold text-gray-darker mb-4">
            Application Process
          </h2>
          <p className="text-gray-dark mb-6">
            Follow these steps to apply for awards and grants. All applications 
            are reviewed by our selection committee on a rolling basis.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-darker mb-4">
                Application Requirements
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-pink rounded-full mt-1 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-gray-darker">Completed Application Form</p>
                    <p className="text-gray-dark">Fill out the online application completely</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-blue rounded-full mt-1 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-gray-darker">Supporting Documents</p>
                    <p className="text-gray-dark">Transcripts, CV, project proposal, etc.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green rounded-full mt-1 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-gray-darker">References</p>
                    <p className="text-gray-dark">Contact information for 2-3 references</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-darker mb-4">
                Important Dates
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-darker">Fall Applications</span>
                  <span className="text-gray-dark">Due Sept 30</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-darker">Winter Applications</span>
                  <span className="text-gray-dark">Due Jan 31</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-darker">Summer Applications</span>
                  <span className="text-gray-dark">Due May 31</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-pink-lighter rounded-lg">
                <h4 className="font-semibold text-pink mb-2">Need Help?</h4>
                <p className="text-gray-dark text-sm">
                  Contact our awards office for guidance on your application 
                  or to schedule a consultation session.
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
            Awards & Grants
          </h1>
          <p className="text-xl text-gray-dark max-w-2xl mx-auto">
            Discover opportunities for recognition and funding to support your 
            academic pursuits, research projects, and community initiatives.
          </p>
        </header>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <Tabs
            tabs={awardsGrantsTabs}
            defaultActiveTab="overview"
          />
        </section>

        <footer className="mt-12 text-center">
          <div className="bg-pink-lighter p-6 rounded-lg">
            <h2 className="text-lg font-semibold text-pink mb-2">
              Questions about Awards & Grants?
            </h2>
            <p className="text-gray-dark">
              Contact our awards office at awards@assu.utoronto.ca or visit us 
              during office hours for personalized assistance with your application.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}