import HeroImage from "../components/sections/HeroImage";
import AssuImage from "../components/common/AssuImage";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-lighter p-8">
      <div className="max-w-4xl mx-auto">
        {/* Page Title */}
        <h1 className="text-6xl font-sans text-gray-darker mb-8">
          ASSU Styling Demo
        </h1>

      {/* Colors & Typography Section */}
        <div className="mb-10 max-w-4xl mx-auto">
          <HeroImage
            src="/next.svg"
            alt="ASSU hero image placeholder"
            caption="This is a hero image inside site borders"
            heroAspectClassName="aspect-[16/6]"
            heroSizes="100vw"
            priority
            overlays={[
              {
                content: (
                  <div className="relative z-10 space-y-1">
                    <h2 className="text-3xl md:text-4xl font-sans font-bold drop-shadow">Welcome to ASSU</h2>
                    <p className="text-sm md:text-base font-body drop-shadow">Serving Arts & Science students</p>
                  </div>
                ),
                position: "bottom-left",
                className: "[text-shadow:_0_1px_2px_rgba(0,0,0,0.7)]",
              },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Brand Colors */}
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

          {/* Typography */}
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

        {/* Buttons */}
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

        {/* Color Palette */}
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

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <AssuImage
            src="/next.svg"
            alt="Next.js logo"
            caption="Regular image with overlay"
            sizes="(max-width: 640px) 100vw, 50vw"
            aspectClassName="aspect-square"
            overlays={[
              {
                content: (
                  <span className="inline-block rounded bg-black/40 px-2 py-1 text-sm">Top left title</span>
                ),
                position: "top-left",
              },
              {
                content: (
                  <span className="inline-block rounded bg-black/40 px-2 py-1 text-xs">Bottom right description</span>
                ),
                position: "bottom-right",
              },
            ]}
          />

          <AssuImage
            src="/public-not-exist.svg"
            alt="Broken image example"
            caption="Demonstrates error fallback"
            overlay=""
            sizes="(max-width: 640px) 100vw, 50vw"
            aspectClassName="aspect-[4/3]"
          />
        </div>
      </div>
    </div>
  );
}
