import React from "react";
import HeroText from "@/components/sections/HeroText";
import AssuImage from "@/components/common/AssuImage";
import Text from "@/components/common/Text";
import Link from "next/link";
import Image from "next/image";

const arborJournalCovers = [
  {
    src: "/images/arbor-journal-2023.avif",
    alt: "Arbor Journal 2023 cover",
    yearRange: "2023 - 2024",
    href: "https://f69d17aa-c996-4c07-84e8-5658e41b3090.filesusr.com/ugd/82c36b_3d382fcf831844619187d17a1a6a2a8b.pdf",
  },
  {
    src: "/images/arbor-journal-2022.avif",
    alt: "Arbor Journal 2022 cover",
    yearRange: "2022 - 2023",
    href: "https://f69d17aa-c996-4c07-84e8-5658e41b3090.filesusr.com/ugd/82c36b_0df22904b70e4383b869ee5d2d253157.pdf",
  },
  {
    src: "/images/arbor-journal-2021.avif",
    alt: "Arbor Journal 2021 cover",
    yearRange: "2021 - 2022",
    href: "https://f69d17aa-c996-4c07-84e8-5658e41b3090.filesusr.com/ugd/82c36b_b2e6c4a80d0f4924b80a85952f6d9ee0.pdf",
  },
  {
    src: "/images/arbor-journal-2020.avif",
    alt: "Arbor Journal 2020 cover",
    yearRange: "2020 - 2021",
    href: "https://f69d17aa-c996-4c07-84e8-5658e41b3090.filesusr.com/ugd/82c36b_c4b2f3a4437949a58e383f72d1db63cd.pdf",
  },
  {
    src: "/images/arbor-journal-2019.avif",
    alt: "Arbor Journal 2019 cover",
    yearRange: "2019 - 2020",
    href: "https://f69d17aa-c996-4c07-84e8-5658e41b3090.filesusr.com/ugd/82c36b_193c0e5c68cf48e8ab7842beb699c37a.pdf",
  },
];

export default function ArborJournalPage() {
  return (
    <div>
      <div className="w-full bg-white">
        <div className="mx-auto w-full max-w-5xl rounded-2xl px-6 py-8">
          <AssuImage
            src="/images/arbor-journal.webp"
            alt="Arbor Journal Header Image"
            imgClassName="object-bottom"
            className="mx-auto max-w-l"
          />
        </div>
      </div>
      <HeroText text="Arbor Journal" />
      <Text
        as="h1"
        className="text-2xl md:text-3xl font-semibold mb-4"
        color="primary"
      >
        Arbor Journal is accepting submissions!
      </Text>
      <Text as="p" className="text-l">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Articles must have received an A- grade (80+) to be considered.
          </li>
          <li>Articles may not be more than 3,000 words.</li>
          <li>
            Articles may be from any course in the humanities, social sciences,
            life sciences, and physical sciences and may include papers, book
            reviews, policy memos, historiographical essays, or literature
            reviews.
          </li>
        </ul>
      </Text>
      <HeroText text="Submit Your Articles" />
      <div className="space-y-4">
        <Text as="p">You may only submit one submission.</Text>
        <Text as="p">
          Send your submission in .doc or .docx form to arbor.assu@gmail.com
          with the subject title [Program] Arbor Journal Submission (Program
          categories: Humanities, Social Sciences, Sciences).
        </Text>
        <Text as="p">
          Please remove all identifying information from your submission to
          facilitate an anonymous review. Include your name, year, program of
          study, grade of the article, and the course the article was written
          for in the text of your email.
        </Text>
      </div>
      <HeroText text="Past Arbor Journal Library" />
      <div className="grid grid-cols-3 gap-12">
        <div className="bg-black text-white flex items-center justify-center text-center font-semibold">
          Coming Soon
        </div>
        {arborJournalCovers.map((cover) => (
          <div key={cover.src} className="space-y-2">
            <Link
              href={cover.href}
              target="_blank"
              rel="noreferrer"
              className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink focus-visible:ring-offset-2"
              aria-label={`Open ${cover.alt}`}
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={cover.src}
                  alt={cover.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-contain"
                />
              </div>
            </Link>
            <Text as="p" className="w-full text-center text-sm text-gray-700">
              {cover.yearRange}
            </Text>
          </div>
        ))}
      </div>
      <HeroText text="Arbor Positions Available" />
      <div className="space-y-6">
        <div className="space-y-3">
          <Text as="h2" className="text-xl md:text-2xl font-semibold">
            Senior Editors (4)
          </Text>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <Text as="p">
                One each for Humanities, Social Sciences, Math and Physical
                Science, Life Sciences
              </Text>
            </li>
            <li>
              <Text as="p">
                Senior Editors are responsible for coordinating the initial
                submission review process within their respective section,
                assigning submissions to Associate Editors, and initially
                working with the Associate Editors to establish a team of
                referees. Senior Editors will edit and approve submissions
                before they are passed on to the Editors-in-Chief for final
                review and publication.
              </Text>
            </li>
            <li>
              <Text as="p">
                Successful applicants for Senior Editor positions should have
                prior experience with academic publications, broad knowledge of
                their field, and superior writing skills. Extensive contacts
                with Faculty members in the field is a plus.
              </Text>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <Text as="h2" className="text-xl md:text-2xl font-semibold">
            Associate Editors (8)
          </Text>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <Text as="p">
                Two each for Humanities, Social Sciences, Math and Physical
                Sciences, Life Sciences
              </Text>
            </li>
            <li>
              <Text as="p">
                Associate Editors will carry out the bulk of assessment work for
                papers submitted to the Journal for their assigned subjects. The
                two Associate Editors per section will be responsible for
                coordinating with referees and providing editorial feedback on
                the submissions they are assigned. They will also be responsible
                for presenting their and the referees assessment of papers to
                their corresponding Senior Editor. During the final selection
                process, they will be heavily consulted. Finally, Associate
                Editors will be expected to work with the Senior Editors and
                authors during the copy editing process to prepare the articles
                for publication.
              </Text>
            </li>
            <li>
              <Text as="p">
                Successful applicants for the Associate editor positions should
                have a wide knowledge of the methodologies and terminology of
                the section to which they are applying, as well as demonstrate
                superior writing skills.
              </Text>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <Text as="h2" className="text-xl md:text-2xl font-semibold">
            Referees (8+)
          </Text>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <Text as="p">
                Referees are subject matter experts who will provide a peer
                review function on papers. Their assessment of the scholarly
                merit of articles will be invaluable in identifying papers for
                final publication. Referees must conduct themselves in an
                impartial manner and demonstrate expert knowledge in the subject
                designated by the Section Editors.
              </Text>
            </li>
            <li>
              <Text as="p">
                Referees will be contacted on an as-needed basis to provide
                subject-specific knowledge for the papers submitted to Arbor.
              </Text>
            </li>
            <li>
              <Text as="p">
                Referees may be Faculty members, graduate students, or strong
                undergraduate students though priority will be given to
                undergraduate students with relevant expertise.
              </Text>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <Text as="h2" className="text-xl md:text-2xl font-semibold">
            Design Editor (1)
          </Text>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <Text as="p">
                The design editor is responsible for developing the physical and
                digital issues of the journal in close collaboration with the
                Managing Editor.
              </Text>
            </li>
            <li>
              <Text as="p">
                Successful applicants for the Design Editor position should have
                extensive experience with design and publishing software such as
                Adobes InDesign and Photoshop. Prior journal design experience
                and/or work with an academic journal is an asset.
              </Text>
            </li>
          </ul>
        </div>
      </div>
      <HeroText text="Editorial Board" />
      <div className="space-y-6">
        <div className="space-y-3">
          <Text as="h2" className="text-xl md:text-2xl font-semibold">
            Co-Editors-in-Chief
          </Text>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <Text as="p">Farida Kayed</Text>
            </li>
            <li>
              <Text as="p">Mia Rodrigo</Text>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <Text as="h2" className="text-xl md:text-2xl font-semibold">
            Managing Editors
          </Text>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <Text as="p">Sharanya Tissera (Humanities)</Text>
            </li>
            <li>
              <Text as="p">Shania Winter (Social Sciences)</Text>
            </li>
            <li>
              <Text as="p">Franco M. Valencia (Sciences)</Text>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <Text as="h2" className="text-xl md:text-2xl font-semibold">
            Associate Editors - Humanities
          </Text>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <Text as="p">Emily Carlucci</Text>
            </li>
            <li>
              <Text as="p">Natalie Lau</Text>
            </li>
            <li>
              <Text as="p">Vanessa Salvati</Text>
            </li>
            <li>
              <Text as="p">Callie Zhang</Text>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <Text as="h2" className="text-xl md:text-2xl font-semibold">
            Associate Editors - Social Sciences
          </Text>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <Text as="p">Jacob Marr</Text>
            </li>
            <li>
              <Text as="p">Elliot Savin</Text>
            </li>
            <li>
              <Text as="p">Isabel V. Reny</Text>
            </li>
            <li>
              <Text as="p">Annie Li</Text>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <Text as="h2" className="text-xl md:text-2xl font-semibold">
            Associate Editors - Sciences
          </Text>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <Text as="p">Cynthia Ji</Text>
            </li>
            <li>
              <Text as="p">Arshad N. Seleh</Text>
            </li>
            <li>
              <Text as="p">Miguel Villegas</Text>
            </li>
            <li>
              <Text as="p">Judy Zhu</Text>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <Text as="h2" className="text-xl md:text-2xl font-semibold">
            Design Editor
          </Text>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <Text as="p">Eno Ma</Text>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
