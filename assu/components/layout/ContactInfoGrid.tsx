import Text from "../common/Text";

export default function ContactInfoGrid() {
  return (
    <div
      className="grid gap-0"
      style={{ gridTemplateColumns: "1fr 1fr 1fr 1.5fr" }}
    >
      {/* Column 1 */}
      <div className="p-6">
        <div className="flex flex-col justify-end h-full">
          {/* Pagination Circles */}
          <div className="flex space-x-2 mb-4">
            <div className="w-12 h-12 border border-pink rounded-full"></div>
            <div className="w-12 h-12 bg-pink rounded-full"></div>
            <div className="w-12 h-12 border border-pink rounded-full"></div>
          </div>
          <Text as="h1" className="text-5xl font-semibold mb-3 text-left">
            Contact Us
          </Text>
        </div>
      </div>

      {/* Column 2 - Address */}
      <div className="relative">
        <div className="absolute left-0 top-4 bottom-4 w-px bg-gray-500"></div>
        <div className="p-6">
          <h3 className="text-2xl text-black mb-4">Address</h3>
          <div className="space-y-1">
            <p className="text-sm md:text-base text-black">
              100 St. George Street
            </p>
            <p className="text-sm md:text-base text-black">
              Sidney Smith Hall,
            </p>
            <p className="text-sm md:text-base text-black">Room 1068</p>
          </div>
        </div>
      </div>

      {/* Column 3 - Contact */}
      <div className="relative">
        <div className="absolute left-0 top-4 bottom-4 w-px bg-gray-500"></div>
        <div className="p-6">
          <h3 className="text-2xl text-black mb-4">Contact</h3>
          <div className="space-y-2">
            <p className="text-sm md:text-base text-black">
              Phone: (416) 978-4903 <br />
              Fax: (416) 971-2161
            </p>
            <p className="text-sm md:text-base text-black mb-2">
              <a
                href="mailto:students.assu@utoronto.ca"
                className="text-black hover:underline underline"
              >
                students.assu@utoronto.ca
              </a>
            </p>
            <div className="flex space-x-3">
              <a href="#" aria-label="Facebook" className="hover:opacity-70">
                <img
                  src="/images/facebook-logo.webp"
                  alt="Facebook"
                  className="w-6 h-6"
                />
              </a>
              <a href="#" aria-label="Twitter" className="hover:opacity-70">
                <img
                  src="/images/twitter-logo.webp"
                  alt="Twitter"
                  className="w-6 h-6"
                />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:opacity-70">
                <img
                  src="/images/linkedin-logo.webp"
                  alt="LinkedIn"
                  className="w-6 h-6"
                />
              </a>
              <a href="#" aria-label="Instagram" className="hover:opacity-70">
                <img
                  src="/images/instagram-logo.webp"
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Column 4 - Opening Hours */}
      <div className="relative">
        <div className="absolute left-0 top-4 bottom-4 w-px bg-gray-500"></div>
        <div className="p-6">
          <h3 className="text-2xl text-black mb-4">Opening Hours</h3>
          <div className="space-y-1">
            <div className="flex justify-between">
              <span className="text-sm md:text-base text-black">Monday</span>
              <span className="text-sm md:text-base text-black">
                10:00 am – 5:00 pm
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm md:text-base text-black">Tuesday</span>
              <span className="text-sm md:text-base text-black">
                10:00 am – 5:00 pm
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm md:text-base text-black">Wednesday</span>
              <span className="text-sm md:text-base text-black">
                10:00 am – 6:00 pm
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm md:text-base text-black">Thursday</span>
              <span className="text-sm md:text-base text-black">
                10:00 am – 6:00 pm
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm md:text-base text-black">Friday</span>
              <span className="text-sm md:text-base text-black">
                10:00 am – 5:00 pm
              </span>
            </div>
            <div className="text-xs md:text-sm text-black mt-2 text-right">
              (Friday <strong>closed</strong> from May-Aug)
            </div>
            <div className="flex justify-between">
              <span className="text-sm md:text-base text-black">Weekends</span>
              <span className="text-sm md:text-base text-black font-semibold text-left">
                Closed
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
