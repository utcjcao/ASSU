interface UnionResource {
  title: string;
  href: string;
}

export default function UnionResources() {
  const unionResources: UnionResource[] = [
    {
      title: "ABSSU Land Acknowledgement Statement",
      href: "https://f69d17aa-c996-4c07-84e8-5658e41b3090.filesusr.com/ugd/82c36b_d70428d89ba645ba96eca420e18f10c3.pdf",
    },
    {
      title: "Hart House $500 Student Social Package",
      href: "https://f69d17aa-c996-4c07-84e8-5658e41b3090.filesusr.com/ugd/82c36b_276448cf34ad4f67990a51395635b86b.pdf",
    },
    {
      title: "Approved Venues",
      href: "https://f69d17aa-c996-4c07-84e8-5658e41b3090.filesusr.com/ugd/82c36b_690807c4f5cb4c6eaa82a3d9ccca5766.pdf",
    },
    {
      title: "ASSU Games List",
      href: "https://f69d17aa-c996-4c07-84e8-5658e41b3090.filesusr.com/ugd/82c36b_294db2c8a10b467cad66808daf41f717.pdf",
    },
    {
      title: "ASSU Special Project Funding Request",
      href: "https://f69d17aa-c996-4c07-84e8-5658e41b3090.filesusr.com/ugd/82c36b_fd264bf357e04960a619141f3d498301.pdf",
    },
    {
      title: "ASSU Special Project Funding - Rules and Regulations 2024-25",
      href: "https://f69d17aa-c996-4c07-84e8-5658e41b3090.filesusr.com/ugd/82c36b_89b30df3d3c34092a18591a5c501a374.pdf",
    },
    {
      title: "Journal Printing Places",
      href: "https://f69d17aa-c996-4c07-84e8-5658e41b3090.filesusr.com/ugd/82c36b_1e188d3763c84460892346272977760d.pdf",
    },
    {
      title: "Organizing Manual 2023-24",
      href: "https://f69d17aa-c996-4c07-84e8-5658e41b3090.filesusr.com/ugd/82c36b_fbf8b8081eb3461988178a1c6afc78ca.pdf",
    },
    {
      title: "Budget Request Winter 2025",
      href: "https://f69d17aa-c996-4c07-84e8-5658e41b3090.filesusr.com/ugd/82c36b_fbf8b8081eb3461988178a1c6afc78ca.pdf",
    },
    {
      title: "Receipt Form FALL 2023",
      href: "https://f69d17aa-c996-4c07-84e8-5658e41b3090.filesusr.com/ugd/82c36b_cbfff90ca7444430a2a0e4d0ca05353b.pdf",
    },
  ];

  return (
    <div className="bg-gray-lighter p-8">
      <div className="max-w-7xl mx-auto">
        {/* Main layout container */}
        <div className="flex flex-col sm:flex-row">
          {/* Left side - Header, description, contact, and diamonds */}
          <div className="flex flex-col justify-between w-80 pr-8">
            {/* Header */}
            <h1 className="text-5xl font-bold text-[var(--color-text-primary)] leading-tight mb-4">
              Resources for Course Unions
            </h1>

            {/* Description */}
            <p className="text-[var(--color-text-primary)] leading-relaxed mb-4 text-xl">
              Course unions play a vital role in student life, and the ASSU
              offers assistance. <br />
              For inquiries, contact{" "}
              <a
                href="mailto:students.assu@utoronto.ca"
                className="text-pink hover:text-pink-dark underline"
              >
                students.assu@utoronto.ca
              </a>
            </p>

            {/* Three diamonds at bottom left */}
            <div className="flex gap-3 mt-auto">
              <div className="w-4 h-4 border-2 border-pink transform rotate-45"></div>
              <div className="w-4 h-4 bg-pink transform rotate-45"></div>
              <div className="w-4 h-4 border-2 border-pink transform rotate-45"></div>
            </div>
          </div>

          {/* Vertical divider */}
          <div className="w-0.5 bg-gray-500 mx-8"></div>

          {/* Right side - Resource list */}
          <div className="flex-1">
            <div className="space-y-0">
              {unionResources.map((resource, index) => (
                <div
                  key={index}
                  className="py-2 border-b border-gray-500 last:border-b-0 text-lg"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--color-text-primary)]">
                      {resource.title}
                    </span>
                    {/* Chain-link icon */}
                    <a
                      href={resource.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink hover:text-black hover:scale-120 transition-all duration-400"
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 200 200"
                        className="flex-shrink-0"
                        fill="currentColor"
                      >
                        <g>
                          <path d="M115.021 128.21c-13.137 0-26.119-5.966-34.578-17.275a5.792 5.792 0 0 1 1.169-8.109 5.792 5.792 0 0 1 8.108 1.169c10.413 13.922 30.215 16.78 44.132 6.363a31.285 31.285 0 0 0 3.412-2.957l22.392-22.394c12.006-12.433 11.659-32.435-.844-44.513a31.404 31.404 0 0 0-43.805 0L102.228 53.2a5.794 5.794 0 0 1-8.167-8.218l12.838-12.764c16.857-16.282 43.169-16.282 59.961-.059 17.097 16.516 17.573 43.866 1.06 60.968l-22.463 22.466a43.137 43.137 0 0 1-4.668 4.044 42.874 42.874 0 0 1-25.768 8.573z"></path>
                          <path d="M63.086 180c-10.775.002-21.535-4.054-29.925-12.156-8.284-8.002-12.954-18.751-13.155-30.265-.201-11.517 4.096-22.419 12.097-30.704l22.461-22.466a43.052 43.052 0 0 1 4.663-4.042c19.041-14.244 46.108-10.338 60.35 8.698a5.792 5.792 0 1 1-9.277 6.94c-10.411-13.922-30.21-16.77-44.132-6.363a31.326 31.326 0 0 0-3.408 2.955l-22.397 22.399c-5.78 5.986-8.922 13.959-8.776 22.379.146 8.423 3.564 16.282 9.621 22.132a31.407 31.407 0 0 0 43.805 0l12.692-12.693a5.79 5.79 0 0 1 8.192 0 5.796 5.796 0 0 1 0 8.193l-12.763 12.765C84.693 175.926 73.883 180 63.086 180z"></path>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
