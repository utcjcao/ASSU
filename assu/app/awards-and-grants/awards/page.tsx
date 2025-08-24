import Divider from "../../../components/common/Divider";
import Tabs, { TabItem } from "../../../components/common/Tabs";

export default function Awards() {
  // Gavin Nowlan Award tabs
  const gavinNowlanTabs: TabItem[] = [
    {
      id: "criteria",
      label: "Criteria",
      ariaLabel: "Gavin Nowlan Award Criteria",
      content: (
        <div className="space-y-4">
          <p className="text-gray-dark">
            ASSU annually awards a $1500 scholarship to one (1) full-time undergraduate student enrolled in the Faculty of Arts and Science on the St. George campus. ASSU also chooses two (2) $750 runner-ups. The award is named after a two-term President of ASSU. To be eligible for the award, you are required to fulfill the following criteria:
          </p>
          <ol className="list-decimal ml-8 space-y-2 text-gray-dark">
            <li>Must be a full time Arts and Science student registered on the St. George campus</li>
            <li>Must have a minimum CGPA of 1.70</li>
            <li>Must be a 2nd year student or higher</li>
            <li>Must demonstrate leadership in extra-curricular activities ON CAMPUS</li>
          </ol>
        </div>
      ),
    },
    {
      id: "past-recipients",
      label: "Past Recipients",
      ariaLabel: "Gavin Nowlan Award Past Recipients",
      content: (
        <div className="space-y-2 text-gray-dark">
          <p>LAYLA EL-DAKHAKHNI – (2023-2024)</p>
          <p>KATHRYN CHENG – (2022-2023)</p>
          <p>NATALIA LANDAVERDE – (2021-2022)</p>
          <p>SOPHIA DINICOLO – (2020-2021)</p>
          <p>JEFFREY FASEGHA – (2019-2020)</p>
          <p>TABITHA ONI – (2018-2019)</p>
          <p>MARIANNE ALICE KALACZYNSKI – (2017-2018)</p>
          <p>ALANA CHANGOOR – (2016-2017)</p>
          <p>IRIS ROBIN – (2015-2016)</p>
          <p>CHARLES DALRYMPLE-FRASER – (2014-2015)</p>
          <p>LUCY CHAU – (2013-2014)</p>
          <p>DAISY QIN – (2012-2013)</p>
          <p>NIKHAT AWAR – (2011-2012)</p>
          <p>BRANDON BAILEY – (2010-2011)</p>
        </div>
      ),
    },
  ];

  // William Gardner Award tabs
  const williamGardnerTabs: TabItem[] = [
    {
      id: "criteria",
      label: "Criteria",
      ariaLabel: "William Gardner Award Criteria",
      content: (
        <div className="space-y-4">
          <p className="text-gray-dark">
            ASSU annually awards a $1500 scholarship to one (1) full-time undergraduate student enrolled in the Faculty of Arts and Science on the St. George campus. ASSU also chooses two (2) $750 runner-ups. The award is named after a two-term President of ASSU. To be eligible for the award, you are required to fulfill the following criteria:
          </p>
          <ol className="list-decimal ml-8 space-y-2 text-gray-dark">
            <li>Must be a full time Arts and Science student registered on the St. George campus</li>
            <li>Must have a minimum CGPA of 1.70</li>
            <li>Must be a 2nd year student or higher</li>
            <li>Must demonstrate leadership in extra-curricular activities ON CAMPUS and OFF CAMPUS</li>
          </ol>
        </div>
      ),
    },
    {
      id: "past-recipients",
      label: "Past Recipients",
      ariaLabel: "William Gardner Award Past Recipients",
      content: (
        <div className="space-y-2 text-gray-dark">
          <p>RABBIA AKBAR – (2023-2024)</p>
          <p>RAYAN AWAD ALIM – (2022-2023)</p>
          <p>FASIKA JEMBERE – (2021-2022)</p>
          <p>ALLISON ALVARES – (2020-2021)</p>
          <p>SHAHD FULATH KHAN – (2019-2020)</p>
          <p>JONAH TOTH – (2018-2019)</p>
          <p>JULIA MOGUS – (2017-2018)</p>
          <p>VHIL CASTILLEJOS – (2016-2017)</p>
          <p>EMILY TSUI – (2015-2016)</p>
          <p>KALEEM HAWA – (2014-2015)</p>
          <p>ABINAYA BALASUBRAMANIAM – (2013-2014)</p>
          <p>AKANKSHA GANGULY – (2012-2013)</p>
          <p>SIMA ATRI – (2011-2012)</p>
          <p>CARINA CHAN – (2010-2011)</p>
          <p>JENNY HONG – (2009-2010)</p>
          <p>ERIN FITZGERALD – (2008-2009)</p>
          <p>ANH NGUYEN – (2007-2008)</p>
          <p>SHAHMEER ANSARI – (2006-2007)</p>
          <p>ALEXANDRA DODGER – (2005-2006)</p>
          <p>ALICE KIM – (2004-2005)</p>
          <p>STEPHANIE SILVERMAN – (2003-2004)</p>
          <p>CHRISTINA WONG – (2002-2003)</p>
        </div>
      ),
    },
  ];

  // Abdullah Shihipar Award tabs
  const abdullahShihiparTabs: TabItem[] = [
    {
      id: "criteria",
      label: "Criteria",
      ariaLabel: "Abdullah Shihipar Award Criteria",
      content: (
        <div className="space-y-4">
          <p className="text-gray-dark">
            A Student LEADERSHIP award for those who are involved in extra-curricular activities ON CAMPUS. Students must be registered full-time, A&S students, registered on the St. George campus, in 2nd year or higher, have a minimum CGPA of 1.70 and must be currently receiving OSAP/other Provincial Student Aid.
          </p>
        </div>
      ),
    },
    {
      id: "past-recipients",
      label: "Past Recipients",
      ariaLabel: "Abdullah Shihipar Award Past Recipients",
      content: (
        <div className="space-y-2 text-gray-dark">
          <p>SOBAN ATIQUE – (2023-2024)</p>
          <p>SION PARK – (2022-2023)</p>
          <p>AYESHA RASHIDI – (2021-2022)</p>
          <p>CHRISTEEN SALIK – (2020-2021)</p>
          <p>ESTER DUBALI – (2019-2020)</p>
          <p>SAMI UL HUQ – (2018-2019)</p>
          <p>AMANDA CHOI – (2017-2018)</p>
          <p>MARIANNE ALICE KALACZYNSKI – (2016-2017)</p>
          <p>LILY YUXI REN – (2015-2016)</p>
        </div>
      ),
    },
  ];

  // Ikran Jama Award tabs
  const ikranJamaTabs: TabItem[] = [
    {
      id: "criteria",
      label: "Criteria",
      ariaLabel: "Ikran Jama Award Criteria",
      content: (
        <div className="space-y-4">
          <p className="text-gray-dark">
            A Student leadership award for those who demonstrate significant involvement in extra-curricular activities ON or OFF campus in their BIPOC community. Applicants must be FULL-TIME, A&S students, registered on the St. George campus, in 2nd year or higher, have a minimum CGPA of 1.70 and must be currently receiving OSAP/Provincial loans and be a member of a BIPOC community.
          </p>
        </div>
      ),
    },
    {
      id: "past-recipients",
      label: "Past Recipients",
      ariaLabel: "Ikran Jama Award Past Recipients",
      content: (
        <div className="space-y-2 text-gray-dark">
          <p>ALI SYED – (2023-2024)</p>
          <p>VANEEZA MOOSA – (2022-2023)</p>
          <p>RUTH MASUKA – (2021-2022)</p>
        </div>
      ),
    },
  ];

  // Fatemeh Nami Award tabs
  const fatemehNamiTabs: TabItem[] = [
    {
      id: "criteria",
      label: "Criteria",
      ariaLabel: "Fatemeh Nami Award Criteria",
      content: (
        <div className="space-y-4">
          <p className="text-gray-dark">
            A student award for those who demonstrate significant involvement in extra-curricular activities that are aimed at enhancing EQUITY at the University of Toronto St. George campus and/or within the wider community. Applicants must be, FULL-TIME, Arts & Science students, registered on the St. George campus, in 2nd year or higher, with a minimum CGPA of 1.7.
          </p>
        </div>
      ),
    },
    {
      id: "past-recipients",
      label: "Past Recipients",
      ariaLabel: "Fatemeh Nami Award Past Recipients",
      content: (
        <div className="space-y-2 text-gray-dark">
          <p>INIOLUWA AJENIFUJA - (2023-2024)</p>
        </div>
      ),
    },
  ];

  // First Year Award tabs
  const firstYearTabs: TabItem[] = [
    {
      id: "criteria",
      label: "Criteria",
      ariaLabel: "First Year Award Criteria",
      content: (
        <div className="space-y-4">
          <p className="text-gray-dark">
            This award recognizes first year students in the Faculty of Arts and Science who have become involved in extra-curricular activities on campus and are receiving OSAP or other Provincial student aid.
          </p>
        </div>
      ),
    },
    {
      id: "past-recipients",
      label: "Past Recipients",
      ariaLabel: "First Year Award Past Recipients",
      content: (
        <div className="space-y-4 text-gray-dark">
          <div>
            <p className="font-semibold">(2023-2024)</p>
            <div className="ml-4 space-y-1">
              <p>CIARA DRUMMOND</p>
              <p>YI-SING FANG</p>
              <p>MIGHT GOUTA</p>
              <p>YI CHING BRANDICE LI</p>
              <p>XINYAN (CYNTHIA) LIN</p>
              <p>DE XIN ZHAO</p>
            </div>
          </div>
          <div>
            <p className="font-semibold">(2022-2023)</p>
            <div className="ml-4 space-y-1">
              <p>LAIBA IRFAN BUTT</p>
              <p>GRACE LIU</p>
              <p>CAMILA LUIZ</p>
              <p>ARCHI PARIKH</p>
              <p>SUNG PARK</p>
              <p>ANGELA SU</p>
            </div>
          </div>
          <div>
            <p className="font-semibold">(2021-2022)</p>
            <div className="ml-4 space-y-1">
              <p>CATHERINE KING</p>
              <p>CHHAVI SHAH</p>
              <p>REBECCA SY</p>
              <p>SUPRIYA VASANTHAKUMARAN</p>
              <p>LAUREN ZHUANG</p>
            </div>
          </div>
          <div>
            <p className="font-semibold">(2020-2021)</p>
            <div className="ml-4 space-y-1">
              <p>TASMEEN CHOUDHURY</p>
              <p>YAN YUI MORK</p>
              <p>RUHIKA SRIHARSHA</p>
              <p>ANNA YANG</p>
              <p>VIVIAN YIN</p>
            </div>
          </div>
          <div>
            <p className="font-semibold">(2019-2020)</p>
            <div className="ml-4 space-y-1">
              <p>ALEX ERICKSON</p>
              <p>CATHERINE GUAN</p>
              <p>EDDIE HUANG</p>
              <p>TONY HU</p>
              <p>WILLIAM LLOYD</p>
            </div>
          </div>
          <div>
            <p className="font-semibold">(2017-2018)</p>
            <div className="ml-4 space-y-1">
              <p>AQUEEL ASSAN-LEBBE</p>
              <p>SHAHD FULATH KHAN</p>
              <p>MARLEY GREENBERG</p>
            </div>
          </div>
          <div>
            <p className="font-semibold">(2016-2017)</p>
            <div className="ml-4 space-y-1">
              <p>HSIAO-WEN SUN</p>
              <p>BASIT ALI</p>
              <p>SYDNEY VENNIN</p>
            </div>
          </div>
          <div>
            <p className="font-semibold">(2015-2016)</p>
            <div className="ml-4 space-y-1">
              <p>ANGELA (MIN YI) HOU</p>
              <p>JINWEN (MOLLY) CONG</p>
              <p>MARIAN MENDOZA</p>
            </div>
          </div>
          <div>
            <p className="font-semibold">(2014-2015)</p>
            <div className="ml-4 space-y-1">
              <p>JINA ARYAAN</p>
              <p>IVVANNIA IRAWAN</p>
              <p>YI FAN YIN</p>
            </div>
          </div>
          <div>
            <p className="font-semibold">(2013-2014)</p>
            <div className="ml-4 space-y-1">
              <p>STEPHANIE CALHOUN</p>
              <p>AMITPAL SINGH</p>
              <p>AMY XIAO</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  // Second Year Award tabs
  const secondYearTabs: TabItem[] = [
    {
      id: "criteria",
      label: "Criteria",
      ariaLabel: "Second Year Award Criteria",
      content: (
        <div className="space-y-4">
          <p className="text-gray-dark">
            This award recognizes 2nd year students in the Faculty of Arts and Science who have demonstrated their involvement in extra-curricular activities on campus and are receiving OSAP or other Provincial aid.
          </p>
        </div>
      ),
    },
    {
      id: "past-recipients",
      label: "Past Recipients",
      ariaLabel: "Second Year Award Past Recipients",
      content: (
        <div className="space-y-4 text-gray-dark">
          <div>
            <p className="font-semibold">(2023-2024)</p>
            <div className="ml-4 space-y-1">
              <p>LAIBA IRFAN BUTT</p>
              <p>OYINDAMOLA DINA</p>
              <p>CAMILA LUIZ</p>
              <p>MAX PHAN</p>
              <p>BRYANNA VAN LEEUWEN</p>
              <p>WEN JIA (MICHELLE) ZHAO</p>
            </div>
          </div>
          <div>
            <p className="font-semibold">(2022-2023)</p>
            <div className="ml-4 space-y-1">
              <p>JULIA DO</p>
              <p>ALICE LO</p>
              <p>YOUNESS ROBERT-TAHIRI</p>
              <p>MAGNUS ROLAND MARUN</p>
              <p>JULIE TANG</p>
              <p>KUSHALI VYAS</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  // Teaching Award tabs
  const teachingAwardTabs: TabItem[] = [
    {
      id: "criteria",
      label: "Criteria",
      ariaLabel: "Teaching Award Criteria",
      content: (
        <div className="space-y-4">
          <p className="text-gray-dark">
            This award is presented annually to a faculty member who has demonstrated excellence in teaching. The award is named after a two-term President of ASSU.
          </p>
        </div>
      ),
    },
    {
      id: "past-recipients",
      label: "Past Recipients",
      ariaLabel: "Teaching Award Past Recipients",
      content: (
        <div className="space-y-2 text-gray-dark">
          <p>KENNETH YIP – (2023-2024)</p>
          <p>NAKANYIKE MUSISI – (2022-2023)</p>
          <p>NAOMI LEVY-STRUMPF – (2021-2022)</p>
          <p>CHANDNI DESAI – (2020-2021)</p>
          <p>ROBERT C. AUSTIN – (2019-2020)</p>
          <p>RYAN DECAIRE – (2018-2019)</p>
          <p>SPENCER BARRETT – (2017-2018)</p>
          <p>JAMES THOMSON – (2017-2018)</p>
          <p>ALISON KEITH – (2016-2017)</p>
          <p>HAKOB BARSEGHYAN – (2015-2016)</p>
          <p>DAN DOLDERMAN – (2014-2015)</p>
          <p>WILLIAM JU – (2013-2014)</p>
          <p>VIKKI VISVIS – (2012-2013)</p>
          <p>JOHN VERVAEKE – (2011-2012)</p>
          <p>NICHOLAS EVERETT – (2010-2011)</p>
          <p>SABINE STANLEY – (2009-2010)</p>
          <p>THOMAS TIEKU – (2008-2009)</p>
          <p>ANDY DICKS – (2006-2007)</p>
        </div>
      ),
    },
  ];

  // Course Union Award tabs
  const courseUnionAwardTabs: TabItem[] = [
    {
      id: "criteria",
      label: "Criteria",
      ariaLabel: "Course Union Award Criteria",
      content: (
        <div className="space-y-4">
          <p className="text-gray-dark">
            This award is presented annually to an active ASSU Course Union who organized engaging programming for their students, both academically and socially; attended participated in ASSU Council; and created community amongst their students. The award is named after a two-term President of ASSU.
          </p>
        </div>
      ),
    },
    {
      id: "past-recipients",
      label: "Past Recipients",
      ariaLabel: "Course Union Award Past Recipients",
      content: (
        <div className="space-y-2 text-gray-dark">
          <p>HUMAN BIOLOGY STUDENTS' UNION (HBSU) - (2023-2024)</p>
          <p>PHYSICS STUDENT UNION (PHYSU) - (2022-2023)</p>
          <p>HISTORY STUDENTS' ASSOCIATION (HSA) - (2021-2022)</p>
          <p>INTERNATIONAL RELATIONS SOCIETY (IRS) - (2020-2021)</p>
          <p>DIASPORA & TRANSNATIONAL STUDIES UNION (DTSU) - (2019-2020)</p>
          <p>NEUROSCIENCE ASSOCIATION OF UNDERGRADUATE STUDENTS (NAUS) - (2018-2019)</p>
          <p>ENVIRONMENTAL STUDENTS' UNION (ENSU) - (2017-2018)</p>
          <p>INDIGENOUS STUDIES STUDENTS' UNION (ISSU) - (2016-2017)</p>
          <p>COGNITIVE SCIENCE & ARTIFICIAL INTELLIGENCE STUDENTS' ASSOCIATION (CASA) - (2015-2016)</p>
          <p>CLASSICS STUDENTS' UNION (CLASSU) - (2014-2015)</p>
          <p>ASSOCIATION OF POLITICAL SCIENCE STUDENTS (APSS) - (2013-2014)</p>
          <p>ANTHROPOLOGY STUDENTS ASSOCIATION (ASA) - (2012-2013)</p>
          <p>AFRICAN STUDIES COURSE UNION (ASCU) - (2011-2012)</p>
          <p>MATHEMATICS UNION (MU) - (2010-2011)</p>
          <p>PHILOSOPHY COURSE UNION (PCU) - (2009-2010)</p>
          <p>HISTORY STUDENTS' ASSOCIATION (HSA) - (2008-2009)</p>
          <p>EAST ASIAN STUDIES STUDENTS' UNION (EASSU) - (2006-2007)</p>
        </div>
      ),
    },
  ];

  // Terry Buckland Award tabs
  const terryBucklandTabs: TabItem[] = [
    {
      id: "criteria",
      label: "Criteria",
      ariaLabel: "Terry Buckland Award Criteria",
      content: (
        <div className="space-y-4">
          <p className="text-gray-dark">
            This award is awarded annually by the Executive to someone who has outstanding achievements in promoting diversity and equity issues such as Race and Ethnicity, Class, Family, Gender, Age, Ability, etc, and in eliminating barriers to diversity in the Faculty of Arts and Science at the University of Toronto.
          </p>
        </div>
      ),
    },
    {
      id: "past-recipients",
      label: "Past Recipients",
      ariaLabel: "Terry Buckland Award Past Recipients",
      content: (
        <div className="space-y-2 text-gray-dark">
          <p>UAHIKEA MAILE - (2023-2024)</p>
          <p>UofT STUDENTS FOR CHOICE - (2022-2023)</p>
          <p>LINA LASHIN - (2021-2022)</p>
          <p>TRINITY COLLEGE MULTICULTURAL SOCIETY - (2020-2021)</p>
          <p>BLACK ROTMAN COMMERCE - (2019-2020)</p>
          <p>PUI CHING CHERYL QUAN - (2018-2019)</p>
          <p>ANYIKA MARK - (2017-2018)</p>
          <p>A.W. PEET - (2016-2017)</p>
          <p>CASSANDRA WILLIAMS - (2016-2017)</p>
          <p>BLACK LIBERATION COLLECTIVE - (2015-2016)</p>
          <p>THRIVE UofT AND UofT STUDENTS AGAINST SEXUAL VIOLENCE - (2014-2015)</p>
          <p>WASHROOM INCLUSIVITY PROJECT - (2013-2014)</p>
          <p>TRANSITIONAL YEAR PROGRAM - (2012-2013)</p>
          <p>KAYLA CARTER - (2011-2012)</p>
          <p>ROD MICHALKO - (2010-2011)</p>
          <p>EQUITY STUDIES STUDENTS' UNION - (2009-2010)</p>
          <p>DAVID RAYSIDE - (2008-2009)</p>
          <p>GURU FATA SINGH and OPIRG - (2007-2008)</p>
          <p>CHRIS RAMSAROOP - (2006-2007)</p>
        </div>
      ),
    },
  ];

  // Urmila Sarkar Service Award tabs
  const urmilaSarkarTabs: TabItem[] = [
    {
      id: "criteria",
      label: "Criteria",
      ariaLabel: "Urmila Sarkar Service Award Criteria",
      content: (
        <div className="space-y-4">
          <p className="text-gray-dark">
            Annually, ASSU awards a member of the university community for their service, above and beyond their regular duties, to students in the Faculty of Arts and Science. The award is named after Uma Sarkar, a two-term ASSU President, who continued to assist ASSU long after she graduated. The ASSU Executive decides the winner. A sum of $500 is donated to a charity organization in the winner's name.
          </p>
        </div>
      ),
    },
    {
      id: "past-recipients",
      label: "Past Recipients",
      ariaLabel: "Urmila Sarkar Service Award Past Recipients",
      content: (
        <div className="space-y-2 text-gray-dark">
          <p>LARRY ALFORD - (2023-2024)</p>
          <p>GILLAN LATOUR - (2022-2023)</p>
          <p>MICAH KALISCH - (2021-2022)</p>
          <p>LEANNE TOSHIKO SIMPSON - (2020-2021)</p>
          <p>JOSHUA BOWMAN - (2019-2020)</p>
          <p>JOSHUA GRONDIN - (2018-2019)</p>
          <p>NADIA KANANI - (2017-2018)</p>
          <p>THE REV'D ANDREA BUDGEY - (2016-2017)</p>
          <p>RICHARD CHAMBERS - (2015-2016)</p>
          <p>CUPE 3902 - (2014-2015)</p>
          <p>SALLY WALKER - (2013-2014)</p>
          <p>HEALTH AND WELLNESS - (2012-2013)</p>
          <p>DR.ANDREA WILLIAMS - (2011-2012)</p>
          <p>EAST ASIAN STUDENTS' UNION - (2010-2011)</p>
          <p>UC REGISTRAR'S OFFICE - (2009-2010)</p>
          <p>SASWATI DEB - (2008-2009)</p>
          <p>KEN DERRY - (2007-2008)</p>
          <p>GEORGE DAFOS - (2006-2007)</p>
        </div>
      ),
    },
  ];

  // Katharine Ball Award tabs
  const katharineBallTabs: TabItem[] = [
    {
      id: "criteria",
      label: "Criteria",
      ariaLabel: "Katharine Ball Award Criteria",
      content: (
        <div className="space-y-4">
          <p className="text-gray-dark">
            This award is to give recognition for Executive Members of Course Unions who are in their graduating year. Winners of this award in the past have demonstrated their involvement with their course union above and beyond what is generally expected of an Executive member.
          </p>
        </div>
      ),
    },
    {
      id: "past-recipients",
      label: "Past Recipients",
      ariaLabel: "Katharine Ball Award Past Recipients",
      content: (
        <div className="space-y-4 text-gray-dark">
          <div>
            <p className="font-semibold">(2023-2024)</p>
            <div className="ml-4 space-y-1">
              <p>MICHELLE WANG</p>
              <p>SEOYEON LEE</p>
            </div>
          </div>
          <div>
            <p className="font-semibold">(2022-2023)</p>
            <div className="ml-4 space-y-1">
              <p>MADELEINE FRECHETTE</p>
              <p>LEO RIZK</p>
            </div>
          </div>
          <div>
            <p className="font-semibold">(2021-2022)</p>
            <div className="ml-4 space-y-1">
              <p>NAKITA GOPAL</p>
              <p>MUKTI PATEL</p>
            </div>
          </div>
          <div>
            <p className="font-semibold">(2020-2021)</p>
            <div className="ml-4 space-y-1">
              <p>ISABELLA KUO</p>
              <p>TERRI SER</p>
            </div>
          </div>
          <div>
            <p className="font-semibold">(2019-2020)</p>
            <div className="ml-4 space-y-1">
              <p>MICHAEL LEE</p>
              <p>TARA SURI</p>
            </div>
          </div>
          <div>
            <p className="font-semibold">(2015-2016)</p>
            <div className="ml-4 space-y-1">
              <p>TAYLOR STARK</p>
              <p>EMILY TSUI</p>
            </div>
          </div>
          <div>
            <p className="font-semibold">(2014-2015)</p>
            <div className="ml-4 space-y-1">
              <p>CHARLES DALRYMPLE-FRASER</p>
              <p>STEPHANIE TRAN</p>
            </div>
          </div>
          <div>
            <p className="font-semibold">(2013-2014)</p>
            <div className="ml-4 space-y-1">
              <p>BENJAMIN GILLARD</p>
              <p>MATTHEW TRAN</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  // Ali Saeed Award tabs
  const aliSaeedTabs: TabItem[] = [
    {
      id: "criteria",
      label: "Criteria",
      ariaLabel: "Ali Saeed Award Criteria",
      content: (
        <div className="space-y-4">
          <p className="text-gray-dark">
            This award was established in memory of Ali Saeed (1992-2014) - an international student from Pakistan studying Political Science, who was a dedicated collaborator in the work ASSU did over the 2013-2014 academic year. He was a passionate photographer, student activist, and was highly respected by his peers and all who knew him. This award is open to international students in their 2nd year or higher with a CGPA of 3.0 or higher who have demonstrated leadership on our campus or in the community. The value of the award is $5,000
          </p>
        </div>
      ),
    },
    {
      id: "past-recipients",
      label: "Past Recipients",
      ariaLabel: "Ali Saeed Award Past Recipients",
      content: (
        <div className="space-y-2 text-gray-dark">
          <p>TERESA KRISTINA WIJAYA – (2023-2024)</p>
          <p>LI WAN – (2022-2023)</p>
          <p>SHREEYAA RAMANA – (2021-2022)</p>
          <p>HALA BUCHEERI - (2020-2021)</p>
          <p>SIMRAN SAWHNEY - (2019-2020)</p>
          <p>ELIZAVETA KLIMENKO - (2015-2016)</p>
          <p>CATRIONA SPAVEN-DONN - (2014-2015)</p>
        </div>
      ),
    },
  ];

  // Graduating Student Award tabs
  const graduatingStudentTabs: TabItem[] = [
    {
      id: "criteria",
      label: "Criteria",
      ariaLabel: "Graduating Student Award Criteria",
      content: (
        <div className="space-y-4">
          <p className="text-gray-dark">
            Awarded to a full-time graduating student in the Faculty of Arts & Science.
          </p>
          <p className="text-gray-dark">
            Students require demonstration of academic excellence (CGPA 3.0 or higher), financial need (OSAP or out of province loan) and outstanding extra-curricular leadership.
          </p>
          <p className="text-gray-dark">
            Recipients must enroll in a graduate program at the University of Toronto, Faculty of Arts & Science. Please note, students enrolling in graduate programs at other faculties or campuses are not eligible.
          </p>
          <p className="text-gray-dark">
            The value of the award is $5500
          </p>
        </div>
      ),
    },
    {
      id: "past-recipients",
      label: "Past Recipients",
      ariaLabel: "Graduating Student Award Past Recipients",
      content: (
        <div className="space-y-2 text-gray-dark">
          <p>(No past recipients yet)</p>
        </div>
      ),
    },
  ];

  // New Initiative Award tabs
  const newInitiativeTabs: TabItem[] = [
    {
      id: "criteria",
      label: "Criteria",
      ariaLabel: "New Initiative Award Criteria",
      content: (
        <div className="space-y-4">
          <p className="text-gray-dark">
            A student award conferred to those who have established a new organization, during the 23/24 or 24/25 academic year, at the University of Toronto St. George campus and/or within the wider community. The organization must be centered around a topic/subject which has previously received little attention on our campus from other organizations, or the organization may be focused on a pre-existing topic/subject but conducts events and initiatives on a significant and unprecedented scale
          </p>
        </div>
      ),
    },
    {
      id: "past-recipients",
      label: "Past Recipients",
      ariaLabel: "New Initiative Award Past Recipients",
      content: (
        <div className="space-y-2 text-gray-dark">
          <p>(No past recipients yet)</p>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* Top horizontal line */}
      <Divider width="100%" maxWidth="100%" color="var(--color-gray)" borderTopWidth="3px" />

      {/* ASSU Awards Title */}
      <h1 className="text-4xl font-bold text-gray-darker text-left">ASSU Awards</h1>

      {/* Bottom horizontal line */}
      <Divider width="100%" maxWidth="100%" color="var(--color-gray)" borderTopWidth="3px" />

      {/* Gavin Nowlan Award Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-pink">
          Gavin Nowlan Campus Student Leadership Award
        </h2>
        <p className="text-gray-dark">
          Nomination forms are due <span className="text-pink font-semibold">January 24th 2025 by 5pm Eastern Time</span>
        </p>
        <p className="text-pink font-semibold">ASSU Leadership Application 2024-25</p>
        
        {/* Gavin Nowlan Tabs */}
        <Tabs tabs={gavinNowlanTabs} defaultActiveTab="criteria" />
      </div>

      {/* Separator line */}
      <div className="border-t border-gray-light my-8"></div>

      {/* William Gardner Award Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-pink">
          William R. Gardner Student Leadership Award
        </h2>
        <p className="text-gray-dark">
          Nomination forms are due <span className="text-pink font-semibold">January 24th 2025 by 5pm Eastern Time</span>
        </p>
        <p className="text-pink font-semibold">ASSU Leadership Application 2024-25</p>
        
        {/* William Gardner Tabs */}
        <Tabs tabs={williamGardnerTabs} defaultActiveTab="criteria" />
      </div>

      {/* Separator line */}
      <div className="border-t border-gray-light my-8"></div>

      {/* Abdullah Shihipar Award Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-pink">
          Abdullah Shihipar Campus Student Leadership Award
        </h2>
        <p className="text-gray-dark">
          Nomination forms are due <span className="text-pink font-semibold">January 24th 2025 by 5pm Eastern Time</span>
        </p>
        <p className="text-pink font-semibold">ASSU Leadership Application 2024-25</p>
        
        {/* Abdullah Shihipar Tabs */}
        <Tabs tabs={abdullahShihiparTabs} defaultActiveTab="criteria" />
      </div>

      {/* Separator line */}
      <div className="border-t border-gray-light my-8"></div>

      {/* Ikran Jama Award Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-pink">
          Ikran Jama Student Leadership Award
        </h2>
        <p className="text-gray-dark">
          Nomination forms are due <span className="text-pink font-semibold">January 24th 2025 by 5pm Eastern Time</span>
        </p>
        <p className="text-pink font-semibold">JAMA Award Application 2024-25</p>
        
        {/* Ikran Jama Tabs */}
        <Tabs tabs={ikranJamaTabs} defaultActiveTab="criteria" />
      </div>

      {/* Separator line */}
      <div className="border-t border-gray-light my-8"></div>

      {/* Fatemeh Nami Award Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-pink">
          Fatemeh Nami Student Equity Award
        </h2>
        <p className="text-gray-dark">
          Nomination forms are due <span className="text-pink font-semibold">January 24th 2025 by 5pm Eastern Time</span>
        </p>
        <p className="text-pink font-semibold">NAMI Equity Award Application 2024-25</p>
        
        {/* Fatemeh Nami Tabs */}
        <Tabs tabs={fatemehNamiTabs} defaultActiveTab="criteria" />
      </div>

      {/* Separator line */}
      <div className="border-t border-gray-light my-8"></div>

      {/* ASSU First Year Award Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-pink">
          ASSU First Year Student Award
        </h2>
        <p className="text-gray-dark">
          Nomination forms are due <span className="text-pink font-semibold">January 24th 2025 by 5pm Eastern Time</span>
        </p>
        <p className="text-pink font-semibold">1st Year Award Application</p>
        
        {/* First Year Tabs */}
        <Tabs tabs={firstYearTabs} defaultActiveTab="criteria" />
      </div>

      {/* Separator line */}
      <div className="border-t border-gray-light my-8"></div>

      {/* ASSU 2nd Year Award Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-pink">
          ASSU 2nd Year Student Award
        </h2>
        <p className="text-gray-dark">
          Nomination forms are due <span className="text-pink font-semibold">January 24th 2025 by 5pm Eastern Time</span>
        </p>
        <p className="text-pink font-semibold">2nd Year Award Application</p>
        
        {/* Second Year Tabs */}
        <Tabs tabs={secondYearTabs} defaultActiveTab="criteria" />
      </div>

      {/* Separator line */}
      <div className="border-t border-gray-light my-8"></div>

      {/* Ranjini Ghosh Teaching Award Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-pink">
          Ranjini (Rini) Ghosh Excellence in Teaching Award
        </h2>
        <p className="text-gray-dark">
          Nomination forms are due <span className="text-pink font-semibold">February 14th by 5pm Eastern Time</span>
        </p>
        <p className="text-pink font-semibold">Teaching Award Nomination 2024-2025</p>
        
        {/* Teaching Award Tabs */}
        <Tabs tabs={teachingAwardTabs} defaultActiveTab="criteria" />
      </div>

      {/* Separator line */}
      <div className="border-t border-gray-light my-8"></div>

      {/* Sanjeev Dewett Course Union Award Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-pink">
          Sanjeev (Sanj) Dewett Course Union of the Year Award
        </h2>
        <p className="text-gray-dark">
          Nomination forms are due <span className="text-pink font-semibold">February 28th, 2025 by 5pm Eastern Time</span>
        </p>
        <p className="text-pink font-semibold">DEWETT CU Award 2024-25</p>
        
        {/* Course Union Award Tabs */}
        <Tabs tabs={courseUnionAwardTabs} defaultActiveTab="criteria" />
      </div>

      {/* Separator line */}
      <div className="border-t border-gray-light my-8"></div>

      {/* Terry Buckland Award Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-pink">
          Terry Buckland Award for Diversity and Equity in Education
        </h2>
        
        {/* Terry Buckland Tabs */}
        <Tabs tabs={terryBucklandTabs} defaultActiveTab="criteria" />
      </div>

      {/* Separator line */}
      <div className="border-t border-gray-light my-8"></div>

      {/* Urmila Sarkar Service Award Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-pink">
          Urmila (Uma) Sarkar Service Award
        </h2>
        
        {/* Urmila Sarkar Tabs */}
        <Tabs tabs={urmilaSarkarTabs} defaultActiveTab="criteria" />
      </div>

      {/* Separator line */}
      <div className="border-t border-gray-light my-8"></div>

      {/* Katharine Ball Award Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-pink">
          Katharine Ball Graduating Award for Course Unions
        </h2>
        <p className="text-gray-dark">
          Nomination forms are due <span className="text-pink font-semibold">February 14th, 2025 by 5pm Eastern Time</span>
        </p>
        <p className="text-pink font-semibold">BALL Award Application 2024-25</p>
        
        {/* Katharine Ball Tabs */}
        <Tabs tabs={katharineBallTabs} defaultActiveTab="criteria" />
      </div>

      {/* Separator line */}
      <div className="border-t border-gray-light my-8"></div>

      {/* Ali Saeed Memorial Award Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-pink">
          Ali Saeed Memorial Award for International Students
        </h2>
        <p className="text-gray-dark">
          Nomination forms are due <span className="text-pink font-semibold">February 14th, 2025 by 5pm Eastern Time</span>
        </p>
        <p className="text-pink font-semibold">SAEED Award Application 2024-25</p>
        
        {/* Ali Saeed Tabs */}
        <Tabs tabs={aliSaeedTabs} defaultActiveTab="criteria" />
      </div>

      {/* Separator line */}
      <div className="border-t border-gray-light my-8"></div>

      {/* ASSU Graduating Student Leadership Award Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-pink">
          ASSU Graduating Student Leadership Award
        </h2>
        <p className="text-gray-dark">
          Nomination forms are due <span className="text-pink font-semibold">April 11, 2025 by 5pm Eastern Time</span>
        </p>
        <p className="text-pink font-semibold">ASSU Graduating Student Leadership Application 2024-25</p>
        
        {/* Graduating Student Tabs */}
        <Tabs tabs={graduatingStudentTabs} defaultActiveTab="criteria" />
      </div>

      {/* Separator line */}
      <div className="border-t border-gray-light my-8"></div>

      {/* ASSU New Student Initiative Award Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-pink">
          ASSU New Student Initiative Award
        </h2>
        <p className="text-gray-dark">
          Nomination forms are due <span className="text-pink font-semibold">February 21st, 2025 by 5pm Eastern Time</span>
        </p>
        <p className="text-pink font-semibold">New Initiative Award Application 2024-25</p>
        
        {/* New Initiative Tabs */}
        <Tabs tabs={newInitiativeTabs} defaultActiveTab="criteria" />
      </div>
    </div>
  );
}