import Divider from "../components/common/Divider";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-lighter p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-sans text-gray-darker mb-8">
          ASSU Styling Demo
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-sans text-pink mb-4">
              Primary Brand Color
            </h2>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-pink rounded"></div>
                <span className="font-body text-gray-darker">
                  Primary Pink (pink) - Most used color
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-pink-light rounded"></div>
                <span className="font-body text-gray-darker">
                  Light Pink (pink-light)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-pink-lighter rounded"></div>
                <span className="font-body text-gray-darker">
                  Lighter Pink (pink-lighter)
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-sans text-pink mb-4">Typography</h2>
            <div className="space-y-2">
              <p className="text-2xl font-sans text-gray-darker">
                Questrial Heading
              </p>
              <p className="text-lg font-body text-gray-dark">
                din-next-w01-light Body
              </p>
              <p className="text-base font-body text-gray">Secondary Text</p>
              <p className="text-sm font-body text-gray-light">Small Text</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-3xl font-sans text-pink mb-8">
            ASSU Button Styles
          </h2>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-pink text-white font-body rounded hover:bg-pink-light transition-colors">
              Button
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-3xl font-sans text-pink mb-4">
            ASSU Divider Component
          </h2>
          <p className="font-body text-gray-dark mb-4">
            This divider mimics the styling from the ASSU website with 980px
            width, 3px border, and centered positioning.
          </p>
          <Divider />
          <p className="font-body text-gray-dark mt-4">
            The divider uses the design system&apos;s{" "}
            <code className="bg-gray-lighter px-2 py-1 rounded">
              --color-gray
            </code>{" "}
            token and respects container width.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-pink p-4 rounded text-center">
            <div className="text-2xl font-sans text-white">Primary Pink</div>
            <div className="text-sm font-body text-white">pink</div>
          </div>
          <div className="bg-pink-light p-4 rounded text-center">
            <div className="text-2xl font-sans text-gray-darker">
              Light Pink
            </div>
            <div className="text-sm font-body text-gray-dark">pink-light</div>
          </div>
          <div className="bg-pink-lighter p-4 rounded text-center">
            <div className="text-2xl font-sans text-gray-darker">
              Lighter Pink
            </div>
            <div className="text-sm font-body text-gray-dark">pink-lighter</div>
          </div>
          <div className="bg-blue-dark p-4 rounded text-center">
            <div className="text-2xl font-sans text-white">Dark Blue</div>
            <div className="text-sm font-body text-white">blue-dark</div>
          </div>
        </div>
      </div>
    </div>
  );
}
