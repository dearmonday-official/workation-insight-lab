/* ═════════════════════════════════════════════════════════
   WIL — Workation Insight Lab | 공통 데이터 · 컴포넌트 스크립트
   출처: DearMonday_W2BI_Official_Diagnosis_Results_v2.xlsx (2026-07-28)
   ═════════════════════════════════════════════════════════ */

/* ── 다국어(i18n) — 1차 범위: 헤더/푸터(전 페이지 공통) + 홈 히어로·허브·진단 CTA
   미번역 콘텐츠(하위 페이지 본문 등)는 data-i18n이 없으므로 한국어 그대로 유지된다 ── */
const I18N = {
  en: {
    'header.subscribe': 'Subscribe',
    'footer.terms': 'Terms of Service',
    'footer.privacy': 'Privacy Policy',
    'footer.links': 'DearMonday Links',
    'footer.platformLink': 'DearMonday Platform',
    'footer.bizNameLabel': 'Company Name', 'footer.bizNameValue': 'DearMonday Corp.',
    'footer.repLabel': 'Representatives', 'footer.repValue': 'Jeongsu Kim, Sungwoo Kim',
    'footer.bizRegLabel': 'Business Registration No.', 'footer.ecommerceLabel': 'E-Commerce License No.',
    'footer.addressLabel': 'Address', 'footer.addressValue': '3F-310, 21 Baekbeom-ro 31-gil, Mapo-gu, Seoul (Gongdeok-dong, Seoul Startup Hub Annex)',
    'footer.privacyOfficerLabel': 'Personal Data Protection Officer', 'footer.privacyOfficerValue': 'Sungwoo Kim (sungwoo.kim@dearmonday.io)',
    'home.hero.eyebrow': 'Workation Insight Lab · Private Workation Research Institute',
    'home.hero.h1': 'Proving the Value of Workation <em>with Data</em>',
    'home.hero.p': 'DearMonday, Korea’s dedicated workation platform, has accumulated workation usage data from a diverse customer base of companies, individuals, and local governments since the market’s earliest days. Beyond our own directly-operated locations, we also run private-partner and municipal public facilities — and use the data gathered across all of them to propose original workation indices, quantitatively proving the corporate and regional economic effects that workation creates.',
    'home.hubs.eyebrow': 'ABOUT WORKATION INSIGHT LAB',
    'home.hubs.h2': 'What <em>WORKATION INSIGHT LAB</em> Offers',
    'home.hubs.p': 'From an introduction to the Lab, to our original index framework, data and published reports — the core research assets, all in one place',
    'home.hub1.h3': 'About the LAB',
    'home.hub1.p': 'Introducing WORKATION INSIGHT LAB’s vision, four core research fields, and partner network',
    'home.hub1.li1': 'Our Vision',
    'home.hub1.li2': '4 Core Research Fields',
    'home.hub1.li3': 'Industry Partner Network',
    'home.hub2.h3': 'Original Index Framework',
    'home.hub2.p': 'Two indices that diagnose how well a workation facility meets corporate requirements, and how ready a company is to adopt workation.',
    'home.hub2.li1': 'Workation-to-Business Index',
    'home.hub2.li2': 'Workation-in-Business Index',
    'home.hub2.li3': 'Overview, methodology and results for each index',
    'home.hub3.h3': 'Workation DataLab',
    'home.hub3.p': 'Check facility diagnosis data and the research materials and sources used in our workation research, all in one place',
    'home.hub3.li1': 'Nationwide facility diagnosis data',
    'home.hub3.li2': 'Aggregated by metro region',
    'home.hub3.li3': 'Research data and sources',
    'home.hub4.h3': 'Research Reports',
    'home.hub4.p': 'See published research reports from WORKATION INSIGHT LAB and upcoming content',
    'home.hub4.li1': 'Index development · empirical research',
    'home.hub4.li2': 'Academic partnerships · data forums',
    'home.hub4.li3': 'Subscribe',
    'home.hub.go': 'Learn more →',
    'home.diag.eyebrow': 'W2BI Self-Diagnosis',
    'home.diag.h2': 'Diagnose how well your facility<br>meets <em>corporate requirements</em>',
    'home.diag.p': 'A self-diagnosis that applies the same 12-item, 100-point system used in our official diagnosis. Answering the items alone instantly shows your W2BI total score, whether the facility fits corporate workation, and which program types it qualifies for.',
    'home.diag.btn': 'Try the W2BI Self-Diagnosis →',
    'home.diag.d1': 'Wifi & Information Security',
    'home.diag.d2': 'Private Work Space',
    'home.diag.d3': 'Experience Programs',
    'home.diag.d4': 'Room Quality',
    'home.diag.d5': 'Usage Process',
    'home.diag.d6': 'Hours · Security · Meeting Space · Access, etc.',
    'indexes.h1': 'An Index System Built for <em>Work-Focused Workation</em>',
    'indexes.p': 'Two indices that separately diagnose how well a workation facility meets corporate requirements, and how ready a company is to adopt workation.',
    'indexes.h2': 'WIL’s <em>Two Indices</em>',
    'indexes.sechead.p': 'Each index page walks through overview, verification methodology, and diagnosis results in one flow.',
    'indexes.w2bi.sub': 'Workation-to-Business Index',
    'indexes.w2bi.desc': 'Diagnoses the work, stay, and operating conditions companies check when choosing a facility, across 12 items.',
    'indexes.w2bi.li1': 'Overview and the 100-point diagnosis system',
    'indexes.w2bi.li2': 'Partial-confirmation scoring and program-type methodology',
    'indexes.w2bi.li3': 'Directly-operated locations · 7 metro-region results',
    'indexes.wibi.sub': 'Workation-in-Business Index',
    'indexes.wibi.desc': 'Combines organizational systems, work infrastructure, job fit, and employee acceptance to assess adoption readiness and priority steps.',
    'indexes.wibi.li1': 'Overview from a corporate adoption-decision perspective',
    'indexes.wibi.li2': 'Evaluation domains · verification · refinement methodology',
    'indexes.wibi.li3': 'Diagnosis results — coming soon',
    'indexes.go': 'View page →',
    'wibi.h1': 'Corporate <em>Workation Adoption Readiness</em> Index',
    'wibi.p': 'Diagnoses the real constraints companies face in adopting workation across 5 evaluation domains, and lays out a staged entry path suited to the organization.',
    'wibi.overview.p': 'WIBI (Workation-in-Business Index) is a 100-point index that uses a multi-criteria decision model to diagnose the conditions and obstacles a company faces in adopting workation. After first classifying company size, industry, job function, work style, and welfare level, it evaluates 5 domains — offering not a simple possible/impossible verdict, but an actionable entry path and priority items to address.',
    'wibi.domainA.b': 'A · Work Environment & System Maturity', 'wibi.domainA.p': 'Checks flexible-work policy, share of remotely-doable jobs, attendance management method, and related internal rules.',
    'wibi.domainB.b': 'B · Security & IT Infrastructure', 'wibi.domainB.p': 'Diagnoses external system access, device removal, security policy, and work-device operating conditions.',
    'wibi.domainC.b': 'C · Cost & Budget Structure', 'wibi.domainC.p': 'Looks at welfare budget, accounting treatment, cost sharing, and availability of government support.',
    'wibi.domainD.b': 'D · Decision-Making & Culture', 'wibi.domainD.p': 'Checks approval stages, the authority of the person in charge, management understanding, and pilot willingness.',
    'wibi.domainE.b': 'E · Adoption Experience & Information Level', 'wibi.domainE.p': 'Assesses prior remote-work experience, research into other companies’ cases, internal demand, and pilot readiness.',
    'wibi.formula': 'WIBI = A(25) + B(20) + C(20) + D(20) + E(15) = 100 points total',
    'wibi.method.p': 'Cross-verifies prior research, corporate inquiry/meeting data, quantitative surveys and in-depth interviews to refine the index and entry model.',
    'wibi.step1.h4': 'Reflecting Company Profile', 'wibi.step1.p': 'Reflects that the same score can carry different constraints and execution conditions depending on size, industry, job function, work style, and welfare level.',
    'wibi.step1.li1': 'Company size and approval structure', 'wibi.step1.li2': 'Security sensitivity by industry', 'wibi.step1.li3': 'Share of remotely-doable jobs',
    'wibi.step1.n': '01 · Pre-Classification', 'wibi.step2.n': '02 · Quantitative Diagnosis', 'wibi.step3.n': '03 · Qualitative Verification',
    'wibi.domainA.score': '25pt', 'wibi.domainB.score': '20pt', 'wibi.domainC.score': '20pt', 'wibi.domainD.score': '20pt', 'wibi.domainE.score': '15pt',
    'wibi.stage5.badge': 'Structural Constraint',
    'wibi.step2.h4': '5 Domains · 17 Questions', 'wibi.step2.p': 'Diagnoses adoption readiness across Work & System (25pt), Security & IT (20pt), Cost & Budget (20pt), Decision-Making (20pt), and Experience & Information (15pt).',
    'wibi.step2.li1': '100-point structure total', 'wibi.step2.li2': 'Reviews security/remote-access disqualifying conditions', 'wibi.step2.li3': 'Identifies bottlenecks by domain',
    'wibi.step3.h4': 'Interpreting the Reasons Behind the Score', 'wibi.step3.p': 'In-depth interviews confirm why a score came out the way it did and what conditions would enable adoption, to design a tailored entry path.',
    'wibi.step3.li1': 'Success-reference analysis', 'wibi.step3.li2': 'Identifying organizational bottlenecks', 'wibi.step3.li3': 'Exploring re-entry conditions',
    'wibi.stage.h2': 'Diagnosis Isn’t the End — the <em>5-Stage Entry Model</em>',
    'wibi.stage.p': 'A low score isn’t a rejection — it’s a starting point for lowering organizational resistance and building adoption experience.',
    'wibi.stage1.h4': 'Immediate Action', 'wibi.stage1.p': 'With flexible work, management support and budget in place, a pilot or full rollout can be designed right away.',
    'wibi.stage2.h4': 'Conditional Action', 'wibi.stage2.p': 'Address the bottleneck in one or two weak domains, then enter via a small-scale pilot.',
    'wibi.stage3.h4': 'Adoption Under Review', 'wibi.stage3.p': 'Build internal references and approval grounds through workshop- or business-trip-linked bridge programs.',
    'wibi.stage4.h4': 'Mid- to Long-Term Task', 'wibi.stage4.p': 'First put structural fundamentals in place — policy, budget, management awareness — then re-diagnose.',
    'wibi.stage5.h4': 'Latent Demand', 'wibi.stage5.p': 'Clarify constraints such as network segregation or HQ policy, and explore which roles, business trips, or team-building formats remain possible.',
    'wibi.results.h2': 'WIBI Diagnosis Results',
    'wibi.results.p': 'Published after refining domain weights and stage boundaries through in-depth corporate interviews and pilot verification.',
    'wibi.results.tag': 'Verifying questions and weights',
    'wibi.cta.h3': 'Self-Diagnose Your Company’s Workation Readiness',
    'wibi.cta.p': 'A feature that checks your organization’s adoption stage and priority tasks against the 5 domains and 17 questions is in preparation.',
    'wibi.cta.btn': 'Try the WIBI Self-Diagnosis →',
    'research.h1': 'WORKATION INSIGHT LAB <em>Research Reports</em>',
    'research.p': 'A range of reports on the workation market, corporate usage and adoption effects, empirical evidence of municipal contribution, and case studies.',
    'about.h1': 'Tourism Is No Longer Measured by Visitor Count —<br>It’s Designed with <em>Stay, Spend, and Conversion Data</em>',
    'about.p': 'WORKATION INSIGHT LAB is a private workation research organization operated by <b>DearMonday Inc.</b><br>Drawing on B2B/B2C stay data accumulated since 2024 and empirical operating data from workation facilities nationwide,<br>we produce the objective evidence companies and local governments need for workation adoption and policy decisions.',
    'about.vision.h3': 'An International Research Hub Opening the<br><em>K-Workation Standard</em> through Workation Data',
    'about.vision.p': 'As Korea’s first private research organization dedicated to workation, WIL builds the shared language of the workation industry through an evidence-based index system and joint academic-industry research.',
    'about.axis1.b': 'Research', 'about.axis1.span': 'Practical, forward-looking empirical research<br>grounded in real payment and stay data',
    'about.axis2.b': 'Index System', 'about.axis2.span': 'Operating an original index system (WIBI·W2BI)<br>that quantifies both demand and supply sides',
    'about.axis3.b': 'Networking', 'about.axis3.span': 'Building an annual data platform<br>with academia, industry, and local government',
    'about.vision.goal': 'Establishing and spreading corporate-fit workation facility standards · <em>proving regional economic impact</em> · leading the global K-Workation standard',
    'about.field.h2': '11 Directly-Operated Locations Nationwide,<br><em>100+ Partner Workation Facilities</em> in Total',
    'about.field.p': 'Beyond the workation packages DearMonday builds by directly combining offices and rooms, the stay, work, and spending data generated at the diverse private and public facilities listed on the DearMonday platform nationwide is the wellspring of WORKATION INSIGHT LAB’s research.',
    'about.stat1.b': '11 Directly-Operated Locations', 'about.stat1.span': 'Operated directly by DearMonday',
    'about.stat2.b': '98 Private/Public Partners', 'about.stat2.span': 'Workation facilities listed nationwide',
    'about.stat3.b': '24 Population-Declining Areas', 'about.stat3.span': 'Linked to balanced regional development',
    'about.stat4.b': '5,000+ Records', 'about.stat4.span': 'Cumulative usage data',
    'about.stat5.b': '100+', 'about.stat5.span': 'Facilities in regular workation operation',
    'about.fields.h2': 'WIL’s <em>4 Core Research Fields</em>',
    'about.fields.p': 'From corporate adoption effects to regional economic evidence, standard index development, and policy guidance — we research the entire workation ecosystem.',
    'about.network.h2': 'Building an Industry <em>Expert Partner Network</em>',
    'about.network.p': 'We run a complementary governance model that combines the speed of a private data platform with the methodology and credibility of academia and research institutions.',
    'w2bi.h1': 'The <em>Corporate Requirement Fit Index</em> for Workation Facilities',
    'w2bi.p': 'Diagnoses how business-friendly a facility or program is and which program types it fits, based on conditions real companies actually required.',
    'w2bi.overview.p': 'W2BI (Workation-to-Business Index) is a business-friendliness index that reverse-diagnoses municipal workation facilities and programs against requirements identified from real corporate usage and inquiry data from 2022–2026.<br>It is not a ranking table pitting individual facilities against each other —<br>it checks how well a facility meets the conditions companies need to adopt workation, and surfaces improvement priorities and matching program types.',
    'w2bi.card1.b': 'Mandatory Requirements · 45pt', 'w2bi.card1.p': 'Evaluates Wifi & security, private work space, experience programs, room quality, and usage process. A disqualifying item directly affects whether the facility is recommended for corporate matching.',
    'w2bi.card2.b': 'Recommended Requirements · 55pt', 'w2bi.card2.p': 'Evaluates operating hours, access control, meeting facilities, work-support equipment, transit access, and room-to-office distance.',
    'w2bi.card3.b': 'Program Type Matching', 'w2bi.card3.p': 'Independently of the total score, determines fit for business-trip-linked, team/group workshop, immersive project, and regular-work program types.',
    'w2bi.method.p': 'Only verifiable evidence is scored — unconfirmed information is never scored arbitrarily.',
    'w2bi.step1.h4': 'Combining Research and Real Customer Data', 'w2bi.step1.p': 'Builds evaluation items by cross-referencing the KTO corporate guide and prior research against 2022–2026 corporate customer purchase, inquiry, and interview data.',
    'w2bi.step1.li1': '5 mandatory requirements · 45 points', 'w2bi.step1.li2': '7 recommended requirements · 55 points',
    'w2bi.step1.n': '01 · Extract Items',
    'w2bi.step2.h4': 'Evidence-Based Converted Score', 'w2bi.step2.p': 'Only items confirmed via official websites, operator materials, or on-site visits are finalized. Unconfirmed items are excluded from the scorable total as well.',
    'w2bi.formula': 'Converted Index = Confirmed Score ÷ Scorable Total × 100',
    'w2bi.step2.n': '02 · Partial-Confirmation Principle',
    'w2bi.step3.h4': 'Mandatory Requirements & Program Fit, Judged Independently', 'w2bi.step3.p': 'After checking the mandatory subtotal and any zero-scored items, business-trip-linked, team workshop, immersive project, and regular-work types are each judged independently.',
    'w2bi.step3.li1': 'Whether mandatory subtotal reaches 33+', 'w2bi.step3.li2': 'Type fit ≥ 80 · evidence coverage ≥ 60%',
    'w2bi.step3.n': '03 · Independent Judgment',
    'w2bi.sources.h3': 'Metrics & Data Sources',
    'w2bi.sources.p': 'The metrics WIL produces are structured as below, and each metric is written after directly verifying the source data. Items whose evidence cannot be confirmed are marked unconfirmed and not scored.',
    'w2bi.sources.thMajor': 'Category', 'w2bi.sources.thMid': 'Sub-Category', 'w2bi.sources.thMetric': 'Metric', 'w2bi.sources.thSource': 'Source',
    'w2bi.sources.r1cat': 'Corporate Requirement Fit',
    'w2bi.sources.r1a': 'Work Environment', 'w2bi.sources.r1a.metric': 'Wifi · Private Workspace · Work-Support Equipment · Collaboration Facilities',
    'w2bi.sources.r1b': 'Stay Environment', 'w2bi.sources.r1b.metric': 'Room Quality · Experience Programs · Operating Hours',
    'w2bi.sources.r1c': 'Access & Process', 'w2bi.sources.r1c.metric': 'Transit Access · Commute Difficulty · Usage Process · Physical Security',
    'w2bi.sources.srcOnsite': 'Facility official operating info, on-site visit', 'w2bi.sources.srcOps': 'Facility official operating info, operator confirmation',
    'w2bi.sources.r2cat': 'Stay Performance',
    'w2bi.sources.r2a': 'Usage Status', 'w2bi.sources.r2a.metric': 'Nights stayed · per-facility usage pattern · corporate/individual usage share',
    'w2bi.sources.r2b': 'Repeat Visits', 'w2bi.sources.r2b.metric': 'Repeat-visit rate · long-stay share · B2B conversion rate',
    'w2bi.sources.srcDb': 'DearMonday booking/operations DB',
    'w2bi.sources.r3cat': 'Spending', 'w2bi.sources.planned2027': 'Planned 2027',
    'w2bi.sources.r3a': 'Actual Payments', 'w2bi.sources.r3a.metric': 'Spend per person per night · spending structure by industry',
    'w2bi.sources.srcCard': 'Card approval/settlement data linkage (consent-based)',
    'w2bi.sources.r3b': 'Ripple Effect', 'w2bi.sources.r3b.metric': 'Production-inducing effect · value-added-inducing effect',
    'w2bi.sources.srcBok': 'Bank of Korea Regional Input-Output Table',
    'w2bi.sources.r4a': 'User Satisfaction', 'w2bi.sources.r4a.mid': 'Stay Quality', 'w2bi.sources.r4a.metric': 'Work immersion · lodging satisfaction · local content satisfaction',
    'w2bi.sources.srcSurvey': 'Checkout survey',
    'w2bi.cta.h2': 'Diagnose Your Facility’s <em>Corporate Requirement Fit</em>',
    'w2bi.cta.p': 'A self-diagnosis applying the exact same 12-item, 100-point system used in the official diagnosis. From your answers alone, instantly see the W2BI total score, corporate workation fit, and which program types your facility matches.',
    'w2bi.cta.btn': 'Try Our W2BI Self-Diagnosis →',
    'w2bi.d1.n': '01 · Mandatory', 'w2bi.d1.score': 'Weight 5pt',
    'w2bi.d2.n': '02 · Mandatory', 'w2bi.d2.score': 'Weight 15pt',
    'w2bi.d3.n': '03 · Mandatory', 'w2bi.d3.score': 'Weight 5pt',
    'w2bi.d4.n': '04 · Mandatory', 'w2bi.d4.score': 'Weight 10pt',
    'w2bi.d5.n': '05 · Mandatory', 'w2bi.d5.score': 'Weight 10pt',
    'w2bi.d6.n': '06–12 · Recommended', 'w2bi.d6.label': 'Operating Hours · Security · Collaboration Facilities · Access & More', 'w2bi.d6.score': 'Weight 55pt',
    'common.overview': 'Overview', 'common.methodology': 'Methodology',
    'w2bi.progtypes.h2': '4 Program Types by <em>How Companies Use the Facility</em>',
    'w2bi.progtypes.p': 'Types are defined not by facility form, but by work continuity, collaboration style, and purpose of stay.',
    'w2bi.prog1.b': 'Business-Trip-Linked Work-Continuity', 'w2bi.prog1.p': 'An individual/small-group-focused type supporting work before and after a business trip and short stays.',
    'w2bi.prog2.b': 'Team-Building / Culture', 'w2bi.prog2.p': 'A team/group-focused type supporting workshops, culture improvement, and stronger collaboration.',
    'w2bi.prog3.b': 'Immersive Project / Deliverable-Focused', 'w2bi.prog3.p': 'A focused-work type for solving specific problems and for planning, development, and strategy work.',
    'w2bi.prog4.b': 'Regular Work / Welfare Retention', 'w2bi.prog4.p': 'A type combining flexible-work policy and welfare benefits for repeated use.',
    'w2bi.results.h2': 'W2BI Diagnosis Results',
    'datalab.h1': 'Long-Accumulated Real Workation Usage Data',
    'datalab.p': 'We accumulate and publish real data on workation usage and regional spending.',
    'datalab.h2': 'Market Conditions from <em>Two Perspectives</em>',
    'datalab.corp.title': 'Corporate Workation Status',
    'datalab.corp.desc': 'We plan to publish a structured view of corporate adoption stages, demand by industry and company size, and key barriers.',
    'datalab.reg.title': 'Regional Workation Market Status',
    'datalab.reg.desc': 'We plan to publish facility supply, program operations, and market changes by metro region, on a rolling basis.',
    'nav.about.vision': 'Vision & Goals', 'nav.about.fields': '4 Core Research Fields', 'nav.about.network': 'Partner Network',
    'nav.indexes.w2bi': 'Workation-to-Business Index', 'nav.indexes.wibi': 'Workation-in-Business Index',
    'nav.datalab.corp': 'Corporate Workation Status', 'nav.datalab.reg': 'Regional Workation Market Status',
    'nav.research.list': 'Research Reports',
    'nav.langAria': 'Select language', 'nav.menuAria': 'Menu',
    'table.vdPass': 'Corporate Workation Fit', 'table.vdFail': 'Needs Improvement', 'table.vdHold': 'Needs Further Review',
    'table.unitSeat': ' seats', 'table.notConfirmed': 'Not confirmed',
    'table.thFacility': 'Facility', 'table.thCapacity': 'Capacity', 'table.thIndex': 'W2BI Converted Index', 'table.thMandatory': 'Mandatory Req.',
    'table.lPass': 'Fit', 'table.lFail': 'Needs Improvement', 'table.lHold': 'Further Review', 'table.lAvg': 'Avg',
    'table.unitFacilities': ' facilities',
    'table.indexNote': 'The W2BI converted index is a provisional comparison metric (confirmed score ÷ scorable total)',
    'research.tabAll': 'All', 'research.statDone': 'Published', 'research.statPlan': 'Upcoming', 'research.download': 'Download PDF',
    'table.rank': 'Rank', 'table.facilityName': 'Workation Facility', 'table.officeCap': 'Office<br>Capacity',
    'w2bi.tab1.note.b': 'Diagnosis Criteria',
    'w2bi.tab1.note.p': '<b>The W2BI converted index</b> is not an absolute 100-point total, but a comparison metric — <b>confirmed score ÷ scorable total × 100</b>.\n          <b>Program types</b> are each judged independently; a facility may fit all 4, or none.\n          <b>V*</b> marks a tentative fit when the mandatory requirement is still under further review. The keyword in each type cell is the key evidence behind that judgment.',
    'w2bi.tab1.thBT': 'Business-Trip<br>Linked BT', 'w2bi.tab1.thTW': 'Team/Group<br>Workshop TW',
    'w2bi.tab1.thFP': 'Immersive<br>Project FP', 'w2bi.tab1.thRW': 'Regular<br>Work RW',
    'w2bi.tab1.roomUnconfirmed': '— room details unconfirmed',
    'w2bi.tab1.legendV': 'V = fits this type · V* = tentative fit',
    'w2bi.types.h2': 'Facilities Fitting Each <em>Program Type</em>',
    'w2bi.types.p': 'A high total score doesn’t mean a facility fits every program. Fit is re-tallied using only the items relevant to each type.',
    'w2bi.tab2.note.b': 'DearMonday-Operated Municipal Facilities',
    'w2bi.tab2.note.p': 'Facilities belonging to municipal workation support programs that DearMonday operates under commission or partnership. The same 12-item, program-type-fit system used for directly-operated locations applies here, grouped by program — click <b>+</b> to reveal the individual facilities under it by name.',
    'w2bi.tab3.note.b': 'About These Results',
    'w2bi.tab3.note.p': 'This W2BI diagnosis is not meant to rank individual facilities against each other — it is a reference for understanding what companies actually value when using workation, and for guiding improvement.<br>\n           Each facility was checked against its official website as of July 2026, and will be re-diagnosed periodically as information is updated.<br>\n           Only the metro region is named; results for individual facilities are published anonymously.<br>\n           Items that couldn’t be confirmed or lacked clear evidence were never scored arbitrarily.',
    'w2bi.tab1.label': 'DearMonday Directly-Operated', 'w2bi.tab1.sub': '1 metro region · 11 locations',
    'w2bi.tab2.label': 'DearMonday-Operated Municipal Facilities', 'w2bi.tab2.sub': '2 programs · 13 facilities diagnosed',
    'w2bi.tab3.label': 'Nationwide Municipal Facilities', 'w2bi.tab3.sub': '7 metro regions · 134 facilities diagnosed',
    'corp.h1': 'Corporate Workation <em>Status</em>', 'corp.p': 'Analyzes companies’ workation adoption stages and shifts in demand.', 'corp.soon': 'Publishing after data verification and taxonomy work.',
    'market.h1': 'Regional Workation <em>Market Status</em>', 'market.p': 'Analyzes facility supply and program-operation changes by metro region.', 'market.soon': 'Publishing after regional data verification and time-series work.',
    'about.field1.h4': 'Corporate Workation<br>Adoption Effect Research', 'about.field1.p': 'Quantifies work engagement, productivity, and talent-retention effects through stay-data analysis by job function and work type.',
    'about.field2.h4': 'Regional Economic<br>Impact Evidence', 'about.field2.p': 'Measures per-guest-night spending using real payment data, and calculates production-inducement effects using Bank of Korea regional industry-linkage coefficients.',
    'about.field3.h4': 'K-Workation<br>Standard Index Development', 'about.field3.p': 'Refines the original WIBI·W2BI indices and pursues academic output and global standards through joint academic research.',
    'about.field4.h4': 'Municipal Case Studies<br>&amp; Policy Guides', 'about.field4.p': 'Moves beyond the limits of headcount-driven subsidy policy, proposing policy-redesign guides based on per-person spending.',
    'about.whatwedo': 'What We Do',
    'about.work1.h4': 'Industry Trends', 'about.work1.p': 'Data-driven analysis of workation market trends and outlook',
    'about.work1.li1': 'Workation demand·supply trend analysis', 'about.work1.li2': 'Regular aggregation of facility operating metrics', 'about.work1.li3': 'Quarterly trend report publication',
    'about.work2.h4': 'Empirical Research', 'about.work2.p': 'In-depth empirical research on key workation issues',
    'about.work2.li1': 'Real-payment-based spending measurement', 'about.work2.li2': 'Regional economic production-inducement effect calculation', 'about.work2.li3': 'Joint research with academia and outside institutions',
    'about.work3.h4': 'Index Platform', 'about.work3.p': 'Provides a diagnosis/data platform usable by companies and local governments',
    'about.work3.li1': 'Operating the Workation-to-Business Index', 'about.work3.li2': 'Developing the Workation-in-Business Index', 'about.work3.li3': 'Program-type match determination',
    'about.work4.h4': 'Knowledge Network', 'about.work4.p': 'Operating an expert network for workation, tourism, and regional regeneration',
    'about.work4.li1': 'Hosting the Workation Data Forum', 'about.work4.li2': 'Regular seminars and workshops', 'about.work4.li3': 'Publishing academic papers and policy briefs',
    'about.net.dm': 'Workation usage data<br>platform·AI analytics team',
    'about.net.tdi': 'Korea Tourism Development Institute<br>WIBI·W2BI joint development',
    'about.net.dongduk': 'Dongduk Women’s University', 'about.net.dongduk.role': 'Prof. Heo Jun<br>Methodology · academic credibility',
    'about.net.kyonggi': 'Kyonggi University', 'about.net.kyonggi.role': 'Prof. Lee Byeongcheol<br>Statistical verification · ongoing refinement',
    'about.net.structure': 'Collaboration Structure',
    'about.net.p1': 'Based on its internal workation usage data, DearMonday co-develops the WIBI·W2BI diagnosis system with the <b>Korea Tourism Development Institute (TDI)</b>, and works broadly with a leading group of industry experts — continuously verifying and refining the system together with <b>Dongduk Women’s University and Kyonggi University</b>.',
    'about.net.p2': 'The resulting research output is disseminated through regular reports, the Workation Data Forum, academic papers, and municipal policy briefs.',
    'about.net.tdi.full': 'Korea Tourism Development Institute (TDI)', 'about.net.assoc': 'Tourism academic societies', 'about.net.public': 'Public research institutes',
    'about.net.dataTitle': 'Data Rights &amp; Security Principles',
    'about.net.data1': '· Ownership and management of raw booking, stay, and payment data rests with DearMonday.',
    'about.net.data2': '· Personal data is processed only in a local environment, with mandatory de-identification.',
    'about.net.data3': '· Disclosure is limited to averages, ratios, indices, and summary statistics; raw data and individual responses are never disclosed.',
    'about.net.out1': '1. Corporate Workation Activation', 'about.net.out2': '2. Workation Standard Refinement',
    'about.net.out3': '3. Tourism Policy Proposals', 'about.net.out4': '4. Publication in Leading Academic Journals',
    'modal.title': 'W2BI Self-Diagnosis',
    'modal.desc': 'Applies the exact same 12-item, 100-point system used in our official diagnosis. Your answers are never saved — everything is calculated locally in your browser.',
    'modal.close': 'Close', 'modal.capLabel': 'Office Capacity',
    'modal.capHint': 'seats — used for the Team/Group Workshop (TW) judgment (15+ required)',
    'modal.reqLabel': 'Mandatory Items · 5 · 45pt — Excluded from corporate matching if subtotal is below 33',
    'modal.recLabel': 'Recommended Items · 7 · 55pt',
    'modal.footHint': 'Please select all items, then click View Results.',
    'modal.reset': 'Reset', 'modal.viewResult': 'View Results',
    'modal.alertIncomplete': 'There are {n} unanswered items. Please answer all items.',
    'modal.fitOk': 'Fits', 'modal.fitFail': 'Mandatory requirements not met',
    'modal.fitCapFail': 'Capacity {cap} seats (below {req} required)',
    'modal.fitScoreFail': 'Fit {fit} (below threshold 80)',
    'modal.fitScorePrefix': 'Fit ',
    'modal.scoreTotalLabel': 'W2BI Total Score / 100', 'modal.reqSubtotalLabel': 'Mandatory Subtotal / 45',
    'modal.recSubtotalLabel': 'Recommended Subtotal / 55', 'modal.matchedTypesLabel': 'Matched Program Types / 4',
    'modal.verdictPass': 'Fits corporate workation — eligible for corporate matching. (Mandatory subtotal {req} ≥ 33)',
    'modal.verdictZeroFail': 'Improvement needed — {items} scored 0. Any item scoring 0 excludes this facility from corporate matching.',
    'modal.verdictScoreFail': 'Improvement needed — mandatory subtotal is {req}, {gap} points short of the 33-point threshold.',
    'modal.itemNumber': 'Item #{i}',
    'modal.problemLabel': 'Issue', 'modal.currentAnswerTemplate': "Current answer is '{picked}', which falls short of the top standard.",
    'modal.improveStandardLabel': 'Improvement Standard', 'modal.bestCaseLabel': 'Top-Standard Example',
    'modal.publicFacilityLabel': 'municipally operated facility',
    'modal.allTopStandardTitle': 'All items meet the top standard',
    'modal.allTopStandardDesc': 'Based on your current answers, no items need further improvement.',
    'modal.disclaimer': 'This self-diagnosis is a reference result based on your answers. The official W2BI diagnosis is finalized after an on-site visit and verification of operating data.',
    'modal.downloadPdf': 'Download Results as PDF',
    'modal.unconfirmed': 'Unconfirmed',
    'dash.loading': 'Loading data…', 'dash.error': 'Could not load data.',
    'dash.sourceLabel': 'Data Source', 'dash.sourceText': 'DearMonday platform booking data (aggregated after PII removal)',
    'dash.updatedLabel': 'Updated', 'dash.scheduleLabel': 'Next auto-refresh: every Monday 09:00 KST',
    'dash.unitReservations': ' bookings',
    'dash.reservationData': 'reservation data',
    'dash.corp.b2bShareLabel': 'B2B (Corporate) Share of All Bookings', 'dash.corp.peakLabel': 'Peak Month',
    'dash.corp.peakShareLabel': 'Peak Month Share', 'dash.corp.top3Label': 'Top-3 Months Share',
    'dash.corp.chartTitle': 'Monthly Workation Seasonality (Calendar Month, All Years Combined)',
    'dash.corp.chartSub': 'Share of each group’s (B2B / B2C) annual bookings falling in each calendar month, each group normalized to 100%',
    'dash.corp.b2bSeries': 'Corporate (B2B) Bookings', 'dash.corp.b2cSeries': 'Individual (B2C) Bookings',
    'dash.corp.prodTitle': 'Top Corporate-Booked Products (Ranked)', 'dash.corp.prodSub': 'Workation products ranked by share of corporate (B2B) bookings',
    'dash.corp.avgNightsB2BLabel': 'Avg. Nights per Guest · Company-Sponsored (B2B)',
    'dash.corp.avgNightsB2CLabel': 'Avg. Nights per Guest · Personal Expense (B2C)',
    'dash.corp.avgPaymentB2BLabel': 'Avg. Room+Office Spend per Guest (10K KRW) · Company-Sponsored (B2B)',
    'dash.corp.avgPaymentB2CLabel': 'Avg. Room+Office Spend per Guest (10K KRW) · Personal Expense (B2C)',
    'dash.unitNights': ' nights', 'dash.unitManwon': ' × 10K KRW',
    'dash.corp.basisLabel': 'Date Basis', 'dash.corp.basisUseDate': 'By Stay Date', 'dash.corp.basisPaymentDate': 'By Payment Date',
    'dash.corp.periodLabel': 'Period', 'dash.corp.periodAll': 'All Time', 'dash.corp.periodLast3m': 'Last 3 Months',
    'dash.corp.periodLast6m': 'Last 6 Months', 'dash.corp.periodLast12m': 'Last 12 Months',
    'dash.corp.cmp1Title': 'Average Stay Duration Comparison', 'dash.corp.cmp1Unit': 'Per Person (nights)',
    'dash.corp.cmp2Title': 'Average Office+Room Booking Cost Comparison', 'dash.corp.cmp2Unit': 'Per Person, Per Night (10K KRW)',
    'dash.corp.cmp3Title': 'Municipal Subsidy Program Participation Rate', 'dash.corp.cmp3Unit': 'Share of all bookings using a municipal subsidy product',
    'market.soon.tag': 'Data in Preparation',
    'dash.market.b2bShareLabel': 'B2B Share of All Bookings', 'dash.market.b2cShareLabel': 'B2C Share of All Bookings',
    'dash.market.topB2BLabel': 'Top B2B Region', 'dash.market.topB2CLabel': 'Top B2C Region',
    'dash.market.chartTitle': 'Regional Booking Share — B2B vs B2C', 'dash.market.chartSub': 'Share of each group’s (B2B / B2C) total bookings by region, each group normalized to 100%',
    'dash.market.tblRegion': 'Region', 'dash.market.tblRank': 'Overall Rank',
    'dash.market.tblB2BShare': 'Share within B2B', 'dash.market.tblB2CShare': 'Share within B2C',
    'dash.market.tblTitle': 'Regional Ranking'
  },
  ja: {
    'header.subscribe': '登録する',
    'footer.terms': '利用規約',
    'footer.privacy': '個人情報処理方針',
    'footer.links': 'DearMonday 関連リンク',
    'footer.platformLink': 'DearMondayプラットフォーム',
    'footer.bizNameLabel': '商号', 'footer.bizNameValue': '株式会社DearMonday',
    'footer.repLabel': '代表者', 'footer.repValue': 'キム・ジョンス、キム・ソンウ',
    'footer.bizRegLabel': '事業者登録番号', 'footer.ecommerceLabel': '通信販売業届出番号',
    'footer.addressLabel': '住所', 'footer.addressValue': 'ソウル特別市麻浦区百凡路31キル21 地上3階310号(孔徳洞、ソウル創業ハブ別館)',
    'footer.privacyOfficerLabel': '個人情報管理責任者', 'footer.privacyOfficerValue': 'キム・ソンウ (sungwoo.kim@dearmonday.io)',
    'home.hero.eyebrow': 'Workation Insight Lab・ワーケーション専門の民間研究所',
    'home.hero.h1': 'ワーケーションの価値を<em>データで証明</em>します',
    'home.hero.p': '韓国のワーケーション専門プラットフォームDearMondayは、市場初期から企業・個人・自治体など多様な顧客層のワーケーション利用データを蓄積してきました。自社直営拠点だけでなく、民間パートナー・自治体公共施設まで運営して蓄積したデータをもとに、独自のワーケーション指数を提案し、ワーケーションが生み出す企業効果と地域経済波及効果を定量的に実証します。',
    'home.hubs.eyebrow': 'ABOUT WORKATION INSIGHT LAB',
    'home.hubs.h2': 'WORKATION INSIGHT LABが<em>提供するもの</em>',
    'home.hubs.p': 'LABの紹介から独自の指数体系、データと発行レポートまで、中核的な研究資産をご提供します',
    'home.hub1.h3': 'LAB紹介',
    'home.hub1.p': 'WORKATION INSIGHT LABのビジョン、4大研究分野、パートナーネットワークをご紹介します',
    'home.hub1.li1': 'ビジョン',
    'home.hub1.li2': '4大中核研究分野',
    'home.hub1.li3': '業界パートナーネットワーク',
    'home.hub2.h3': '独自の指数体系',
    'home.hub2.p': 'ワーケーション施設が企業の要求事項をどれほど満たすか、企業がワーケーションをどれほど導入できるかを診断する2つの指数です。',
    'home.hub2.li1': 'Workation-to-Business Index',
    'home.hub2.li2': 'Workation-in-Business Index',
    'home.hub2.li3': '指数別の概要・方法論・結果',
    'home.hub3.h3': 'Workation DataLab',
    'home.hub3.p': '施設診断データとワーケーション研究に活用した資料・出典を一でご確認いただけます',
    'home.hub3.li1': '全国施設診断データ',
    'home.hub3.li2': '圈域別集計',
    'home.hub3.li3': '研究データ及び出典',
    'home.hub4.h3': '研究レポート',
    'home.hub4.p': 'WORKATION INSIGHT LABが発行した研究レポートと発行予定コンテンツをご確認いただけます',
    'home.hub4.li1': '指数開発・実証研究',
    'home.hub4.li2': '学術連携・データフォーラム',
    'home.hub4.li3': '登録する',
    'home.hub.go': '詳しく見る →',
    'home.diag.eyebrow': 'W2BI Self-Diagnosis',
    'home.diag.h2': '自社施設の<br><em>企業要求事項適合度</em>を診断してみましょう',
    'home.diag.p': '12項目・100点满点の診断体系をそのまま適用した自己診断です。項目に回答するだけでW2BI合計スコア、企業ワーケーションに適合するか、プログラムタイプ別の該当にも即座に確認できます。',
    'home.diag.btn': 'W2BI自己診断をやってみる →',
    'home.diag.d1': 'Wifi環境・情報セキュリティ',
    'home.diag.d2': '個人業務スペース',
    'home.diag.d3': '体験プログラム',
    'home.diag.d4': '客室の質',
    'home.diag.d5': '利用手続き',
    'home.diag.d6': '運営時間・セキュリティ・会議施設・アクセス　他',
    'indexes.h1': '業務中心のワーケーションに特化した指数体系',
    'indexes.p': 'ワーケーション施設が企業の要求事項をどれほど満たすか、企業がワーケーションをどれほど導入できるかをそれぞれ診断する2つの指数です。',
    'indexes.h2': 'WILの<em>2つの指数</em>',
    'indexes.sechead.p': '各指数ページで概要・検証方法論・診断結果を一連の流れで確認できます。',
    'indexes.w2bi.sub': 'Workation-to-Business Index',
    'indexes.w2bi.desc': '企業が施設を選ぶ際に確認する業務・滞在・運営条件を12項目で診断します。',
    'indexes.w2bi.li1': '概要と100点診断体系',
    'indexes.w2bi.li2': '部分確認採点及びタイプ別判定方法論',
    'indexes.w2bi.li3': '直営拠点・全国7圏域診断結果',
    'indexes.wibi.sub': 'Workation-in-Business Index',
    'indexes.wibi.desc': '組織制度・業務インフラ・職務適合性・構成員受容性を総合し、導入可能性と先行課題を確認します。',
    'indexes.wibi.li1': '企業導入意思決定の観点からの概要',
    'indexes.wibi.li2': '評価領域・検証・高度化方法論',
    'indexes.wibi.li3': '診断結果は近日公開予定',
    'indexes.go': 'ページを見る →',
    'wibi.h1': '企業の<em>ワーケーション導入可能性</em>指数',
    'wibi.p': '企業の実際の導入制限要因を5大評価軸で診断し、組織に合った段階別の導入経路を提示します。',
    'wibi.overview.p': 'WIBI(Workation-in-Business Index)は、企業がワーケーションを導入できる条件と障害要素を多基準意思決定方式で診断する100点指数です。企業規模・業種・職務・勤務形態・福利水準を先に分類した後5大領域を評価し、単純な可否判定ではなく、実行可能な導入経路と優先補完課題を提示します。',
    'wibi.domainA.b': 'A・業務環境・制度成熟度', 'wibi.domainA.p': '柔軟勤務制度、リモート遂行可能な職務、勤怠管理方式、関連内規を確認します。',
    'wibi.domainB.b': 'B・セキュリティ・ITインフラ', 'wibi.domainB.p': '外部システム接続、機器持ち出し、セキュリティ方針と業務機器の運用条件を診断します。',
    'wibi.domainC.b': 'C・費用・予算構造', 'wibi.domainC.p': '福利予算、会計処理、費用分担と政府支援活用の可能性を確認します。',
    'wibi.domainD.b': 'D・意思決定・組織文化', 'wibi.domainD.p': '承認段階、担当者の権限、経営陣の理解とパイロット実行意思を確認します。',
    'wibi.domainE.b': 'E・導入経験・情報水準', 'wibi.domainE.p': '外部業務経験、他社事例の調査、内部需要と試験運用の準備度を評価します。',
    'wibi.formula': 'WIBI = A(25) + B(20) + C(20) + D(20) + E(15) = 合計100点',
    'wibi.method.p': '先行研究、企業問い合わせ・ミーティングデータ、定量アンケートと深層インタビューを相互検証し、指数と導入モデルを高度化します。',
    'wibi.step1.h4': '企業プロファイルの反映', 'wibi.step1.p': '規模・業種・職務・勤務形態・福利水準により、同じ点数でも異なる制約と実行条件を持ちうることを反映します。',
    'wibi.step1.li1': '企業規模と決裁構造', 'wibi.step1.li2': '業種別セキュリティ感度', 'wibi.step1.li3': 'リモート遂行可能な職務の比率',
    'wibi.step1.n': '01・事前分類', 'wibi.step2.n': '02・定量診断', 'wibi.step3.n': '03・質的検証',
    'wibi.domainA.score': '25点', 'wibi.domainB.score': '20点', 'wibi.domainC.score': '20点', 'wibi.domainD.score': '20点', 'wibi.domainE.score': '15点',
    'wibi.stage5.badge': '構造的制約',
    'wibi.step2.h4': '5大領域・17項目', 'wibi.step2.p': '業務・制度25点、セキュリティ・IT20点、費用・予算20点、意思決定20点、経験・情報15点で導入可能性を診断します。',
    'wibi.step2.li1': '合計100点の構造', 'wibi.step2.li2': 'セキュリティ・リモート接続の失格条件を検討', 'wibi.step2.li3': '領域別ボトルネックを確認',
    'wibi.step3.h4': '点数の原因と条件の解釈', 'wibi.step3.p': '深層インタビューでなぜその点数になったのか、どんな条件が整えば導入可能かを確認し、オーダーメイドの導入経路を設計します。',
    'wibi.step3.li1': '成功事例分析', 'wibi.step3.li2': '組織のボトルネック特定', 'wibi.step3.li3': '再導入条件の探索',
    'wibi.stage.h2': '診断で終わらない<em>5段階導入モデル</em>',
    'wibi.stage.p': '低い点数は脱落ではなく、組織の抵抗を下げ導入経験を蓄積するための出発点として解釈します。',
    'wibi.stage1.h4': '即時実行', 'wibi.stage1.p': '柔軟勤務、経営陣の支持と予算が整っており、パイロットまたは正式導入をすぐに設計できます。',
    'wibi.stage2.h4': '条件付き実行', 'wibi.stage2.p': '1〜2つの不足領域のボトルネックを補完し、小規模な試験運用で導入します。',
    'wibi.stage3.h4': '導入検討', 'wibi.stage3.p': 'ワークショップ・出張連携型のブリッジプログラムで社内の実績と承認根拠を作ります。',
    'wibi.stage4.h4': '中長期課題', 'wibi.stage4.p': '制度・予算・経営陣の認識など構造的な基盤を先に整備した後、再診断します。',
    'wibi.stage5.h4': '潜在需要', 'wibi.stage5.p': 'ネットワーク分離や本社規定などの制約を明確にし、可能な職種・出張・チームビルディングの代案を探ります。',
    'wibi.results.h2': 'WIBI診断結果',
    'wibi.results.p': '企業への深層インタビューとパイロット検証を経て、領域別加重値と段階区間を補正した後公開します。',
    'wibi.results.tag': '評価項目・加重値を検証中',
    'wibi.cta.h3': '自社のワーケーション導入可能性を自己診断',
    'wibi.cta.p': '5大評価軸と17項目を基準に、組織の導入段階と優先課題を確認できる機能を準備しています。',
    'wibi.cta.btn': 'WIBI自己診断をやってみる →',
    'research.h1': 'WORKATION INSIGHT LAB <em>研究レポート</em>',
    'research.p': 'ワーケーション市場、企業利用現況及び導入効果、自治体貢献効果の実証、各種事例分析など多様なレポートを提供します。',
    'about.h1': '観光は今や訪問者数ではなく、<br><em>滞在・消費・転換のデータ</em>で設計されます',
    'about.p': 'WORKATION INSIGHT LABは<b>株式会社DearMonday</b>が運営するワーケーション専門の民間研究組織です<br>2024年から蓄積したB2B・B2C滞在データと全国ワーケーション施設の実証運営データを集大成し、<br>企業のワーケーション導入意思決定と自治体の政策設計に必要な客観的根拠を生産します。',
    'about.vision.h3': 'ワーケーションデータで拓く<br><em>K-Workation標準の国際的研究ハブ</em>',
    'about.vision.p': 'WILは国内初のワーケーション専門民間研究組織として、実証データに基づく指数体系と産学共同研究を通じ、ワーケーション産業の共通言語を作ります。',
    'about.axis1.b': 'Research', 'about.axis1.span': '実決済・滞在データに基づく<br>実用的・先制的な実証研究の遂行',
    'about.axis2.b': 'Index System', 'about.axis2.span': '需要者・供給者の両面を定量化する<br>独自の指数体系(WIBI・W2BI)の運用',
    'about.axis3.b': 'Networking', 'about.axis3.span': '学界・業界・自治体が共に参加する<br>年間定例データプラットフォームの構築',
    'about.vision.goal': '企業ワーケーション適合施設基準の確立と導入拡散・<em>地域経済波及効果の実証</em>・K-Workationグローバル標準の先導',
    'about.field.h2': '全国11の直営拠点、<br><em>合計100以上のパートナーワーケーション施設</em>',
    'about.field.p': 'DearMondayが直接構築したオフィスと客室を組み合わせたワーケーションパッケージだけでなく、DearMondayプラットフォームに掲載された全国の多様な民間・公共施設で発生する滞在・業務・消費データがWORKATION INSIGHT LAB研究の源泉です。',
    'about.stat1.b': '直営11拠点', 'about.stat1.span': 'DearMonday直接運営',
    'about.stat2.b': '民間/公共パートナー98拠点', 'about.stat2.span': '全国掲載ワーケーション施設',
    'about.stat3.b': '人口減少地域24拠点', 'about.stat3.span': '地域均衡発展連携',
    'about.stat4.b': '5,000件+', 'about.stat4.span': '累積利用データ',
    'about.stat5.b': '100件+', 'about.stat5.span': 'ワーケーション定期運営',
    'about.fields.h2': 'WILの<em>4大中核研究分野</em>',
    'about.fields.p': '企業の導入効果から地域経済実証、標準指数開発、政策ガイドまで、ワーケーション生態系全過程を研究対象とします。',
    'about.network.h2': '業界専門家<em>パートナーネットワーク構築</em>',
    'about.network.p': '民間データプラットフォームの速度と学界・研究機関の方法論・信頼性を組み合わせた相互補完的ガバナンスを運営します。',
    'w2bi.h1': 'ワーケーション施設の<em>企業要求事項満足指数</em>',
    'w2bi.p': '企業が実際に要求した条件を基準に、施設とプログラムの企業親和度及び適合タイプを診断します。',
    'w2bi.overview.p': 'W2BI(Workation-to-Business Index)は2022〜2026年の企業顧客の実際の利用・問い合わせデータから確認した要求事項を基準に、<br>自治体ワーケーション施設とプログラムを逆診断する企業親和指数です。<br>個別施設の優劣を決める順位表ではなく、<br>企業がワーケーションを導入する際に必要な条件を施設がどれほど満たしているかを確認し、改善優先順位とマッチング可能なプログラムタイプを提示します。',
    'w2bi.card1.b': '必須要求事項・45点', 'w2bi.card1.p': 'Wi-Fi・セキュリティ、個人業務施設、体験プログラム、客室品質、利用手続きを評価します。欠格項目は企業マッチング推薦可否に直接影響します。',
    'w2bi.card2.b': '推奨要求事項・55点', 'w2bi.card2.p': '運営時間、出入統制、会議施設、業務支援機器、交通アクセスと宿泊-オフィス間の移動条件を評価します。',
    'w2bi.card3.b': 'プログラムタイプマッチング', 'w2bi.card3.p': '総合点とは別に、出張連携、チーム/団体ワークショップ、没入プロジェクト、正規勤務タイプの適合性をそれぞれ判定します。',
    'w2bi.method.p': '検証可能な根拠のみを採点し、未確認情報を任意に点数化することはありません。',
    'w2bi.step1.h4': '研究と実際の顧客データの結合', 'w2bi.step1.p': 'KTO企業向けガイドと先行研究に、2022〜2026年の企業顧客の購買・問い合わせ・インタビューデータを照合し評価項目を構成します。',
    'w2bi.step1.li1': '必須要求事項5項目・45点', 'w2bi.step1.li2': '推奨要求事項7項目・55点',
    'w2bi.step1.n': '01・項目抽出',
    'w2bi.step2.h4': '根拠に基づく換算指数', 'w2bi.step2.p': '公式ウェブサイト、運営機関資料と現場実査で確認された項目のみを確定します。未確認項目は評価可能配点からも除外します。',
    'w2bi.formula': '換算指数 = 確定点数 ÷ 評価可能配点 × 100',
    'w2bi.step2.n': '02・部分確認原則',
    'w2bi.step3.h4': '必須要件とタイプ適合性の独立判定', 'w2bi.step3.p': '必須小計と0点項目を先に確認した後、出張連携、チームワークショップ、没入プロジェクト、正規勤務タイプをそれぞれ独立して判定します。',
    'w2bi.step3.li1': '必須33点以上かどうか', 'w2bi.step3.li2': 'タイプ適合度80以上・根拠確保率60%以上',
    'w2bi.step3.n': '03・独立判定',
    'w2bi.sources.h3': '指標及びデータ出所',
    'w2bi.sources.p': 'WILが算出する指標は下記のように構成され、各指標は原典データを直接確認して作成します。根拠が確認できない項目はスコアを付与せず未確認と表記します。',
    'w2bi.sources.thMajor': '大分類', 'w2bi.sources.thMid': '中分類', 'w2bi.sources.thMetric': '指標', 'w2bi.sources.thSource': '出所',
    'w2bi.sources.r1cat': '企業要求事項満足水準',
    'w2bi.sources.r1a': '業務環境', 'w2bi.sources.r1a.metric': 'Wifi・個人業務施設・業務支援機器・協業施設',
    'w2bi.sources.r1b': '滞在環境', 'w2bi.sources.r1b.metric': '客室品質・体験プログラム・運営時間',
    'w2bi.sources.r1c': 'アクセス・手続き', 'w2bi.sources.r1c.metric': '公共交通アクセス・通勤難易度・利用手続き・物理的セキュリティ',
    'w2bi.sources.srcOnsite': '施設公式運営情報、現場実査', 'w2bi.sources.srcOps': '施設公式運営情報、運営チーム確認',
    'w2bi.sources.r2cat': '滞在実績',
    'w2bi.sources.r2a': '利用現況', 'w2bi.sources.r2a.metric': '滞在泊数・施設別利用パターン・企業/個人利用比重',
    'w2bi.sources.r2b': '再訪問', 'w2bi.sources.r2b.metric': '再訪問率・長期滞在比率・B2B転換率',
    'w2bi.sources.srcDb': 'DearMonday予約・運営DB',
    'w2bi.sources.r3cat': '消費支出', 'w2bi.sources.planned2027': '2027年予定',
    'w2bi.sources.r3a': '実決済', 'w2bi.sources.r3a.metric': '1人1泊あたり消費支出額・業種別消費構造',
    'w2bi.sources.srcCard': 'カード承認・買入内訳連動(同意ベース)',
    'w2bi.sources.r3b': '波及効果', 'w2bi.sources.r3b.metric': '生産誘発効果・付加価値誘発効果',
    'w2bi.sources.srcBok': '韓国銀行地域産業連関表',
    'w2bi.sources.r4a': '需要者満足', 'w2bi.sources.r4a.mid': '滞在品質', 'w2bi.sources.r4a.metric': '業務没入度・宿泊満足度・地域コンテンツ満足度',
    'w2bi.sources.srcSurvey': 'チェックアウトアンケート',
    'w2bi.cta.h2': '当施設の<em>企業要求事項満足度</em>を診断してみましょう',
    'w2bi.cta.p': '実際の診断に使用する12項目・100点満点体系をそのまま適用した自己診断です。回答だけでW2BI総点、企業ワーケーション適合可否、プログラムタイプ別該当可否をすぐに確認できます。',
    'w2bi.cta.btn': '当施設のW2BI自己診断をしてみる →',
    'w2bi.d1.n': '01・必須', 'w2bi.d1.score': '加重値5点',
    'w2bi.d2.n': '02・必須', 'w2bi.d2.score': '加重値15点',
    'w2bi.d3.n': '03・必須', 'w2bi.d3.score': '加重値5点',
    'w2bi.d4.n': '04・必須', 'w2bi.d4.score': '加重値10点',
    'w2bi.d5.n': '05・必須', 'w2bi.d5.score': '加重値10点',
    'w2bi.d6.n': '06–12・推奨', 'w2bi.d6.label': '運営時間・セキュリティ・協業施設・アクセス他', 'w2bi.d6.score': '加重値55点',
    'common.overview': '概要', 'common.methodology': '方法論',
    'w2bi.progtypes.h2': '企業の利用方式による<em>4つのプログラムタイプ</em>',
    'w2bi.progtypes.p': '施設形態ではなく、業務連続性、協業方式と滞在目的を基準にタイプを区分します。',
    'w2bi.prog1.b': '出張連携業務継続型', 'w2bi.prog1.p': '出張前後の業務処理と短期滞在を支援する個人・小規模中心のタイプです。',
    'w2bi.prog2.b': 'チームビルディング・組織文化型', 'w2bi.prog2.p': 'ワークショップ、組織文化改善と協業強化を支援するチーム・団体中心のタイプです。',
    'w2bi.prog3.b': '没入プロジェクト・成果算出型', 'w2bi.prog3.p': '特定課題の解決と企画・開発・戦略立案のための集中勤務タイプです。',
    'w2bi.prog4.b': '正規勤務・福利リテンション型', 'w2bi.prog4.p': '柔軟勤務制度と福利政策を組み合わせ、反復的に利用するタイプです。',
    'w2bi.results.h2': 'W2BI診断結果',
    'datalab.h1': '長期間蓄積されたワーケーション実利用データ',
    'datalab.p': 'ワーケーション利用及び地域消費の実データを蓄積・公開します。',
    'datalab.h2': '2つの観点から見る<em>市場現況</em>',
    'datalab.corp.title': '企業ワーケーション現況',
    'datalab.corp.desc': '企業の導入段階、業種・規模別需要と主な障壁要因を構造化して公開する予定です。',
    'datalab.reg.title': '地域別ワーケーション市場現況',
    'datalab.reg.desc': '圏域別施設供給、プログラム運営と市場変化を順次公開する予定です。',
    'nav.about.vision': 'ビジョンと目標', 'nav.about.fields': '4大中核研究分野', 'nav.about.network': 'パートナーネットワーク',
    'nav.indexes.w2bi': 'Workation-to-Business Index', 'nav.indexes.wibi': 'Workation-in-Business Index',
    'nav.datalab.corp': '企業ワーケーション現況', 'nav.datalab.reg': '地域別ワーケーション市場現況',
    'nav.research.list': '研究レポート',
    'nav.langAria': '言語選択', 'nav.menuAria': 'メニュー',
    'table.vdPass': '企業ワーケーション適合', 'table.vdFail': '改善必要', 'table.vdHold': '追加確認必要',
    'table.unitSeat': '席', 'table.notConfirmed': '未確認',
    'table.thFacility': '施設', 'table.thCapacity': '定員', 'table.thIndex': 'W2BI換算指数', 'table.thMandatory': '必須要件',
    'table.lPass': '適合', 'table.lFail': '改善必要', 'table.lHold': '追加確認', 'table.lAvg': '平均',
    'table.unitFacilities': '施設',
    'table.indexNote': 'W2BI換算指数は確定点数÷評価可能配点の暫定比較指標',
    'research.tabAll': '全体', 'research.statDone': '発行完了', 'research.statPlan': '発行予定', 'research.download': 'PDFダウンロード',
    'table.rank': '順位', 'table.facilityName': 'ワーケーション施設', 'table.officeCap': 'オフィス<br>定員',
    'w2bi.tab1.note.b': '診断基準',
    'w2bi.tab1.note.p': '<b>W2BI換算指数</b>は100点満点の絶対総点ではなく、<b>確定点数÷評価可能配点×100</b>の比較指標です。\n          <b>プログラムタイプ</b>はタイプごとに独立して判定し、1つの施設が4つ全てに該当したり、1つも該当しない場合もあります。\n          <b>V*</b>は必須要件が追加確認必要な状態の場合の暫定該当表記です。各タイプ欄のキーワードは判定を分けた核心根拠です。',
    'w2bi.tab1.thBT': '出張連携<br>業務型 BT', 'w2bi.tab1.thTW': 'チーム/団体<br>ワークショップ型 TW',
    'w2bi.tab1.thFP': '没入<br>プロジェクト型 FP', 'w2bi.tab1.thRW': '正規<br>勤務型 RW',
    'w2bi.tab1.roomUnconfirmed': '— 客室情報未確認',
    'w2bi.tab1.legendV': 'V = タイプ該当・V* = 暫定該当',
    'w2bi.types.h2': 'プログラム<em>タイプ別該当施設</em>',
    'w2bi.types.p': '総合点が高い施設が全てのプログラムに適合するわけではありません。タイプ別の核心項目のみ再集計して判定しました。',
    'w2bi.tab2.note.b': 'DearMonday運営自治体施設診断',
    'w2bi.tab2.note.p': 'DearMondayが受託・協力運営する自治体ワーケーション支援事業所属の施設です。直営拠点と同じ12項目・プログラムタイプ判定体系を適用し、事業単位でグループ化して<b>+</b>ボタンを押すと所属する個別施設が実名で表示されます。',
    'w2bi.tab3.note.b': '診断結果案内',
    'w2bi.tab3.note.p': '本W2BI指数診断は個別施設の相対評価を目的とするものではなく、企業がワーケーションを利用する際に何を重視するかへの理解を深め、改善に活用できる参考資料です。<br>\n           各施設の2026年7月時点の公式ウェブサイトを参照しており、今後最新情報を定期的に確認し再診断します。<br>\n           広域単位の地域のみを明示し、個別施設に関する診断結果は匿名で公開します。<br>\n           診断時に確認できない、または明確な根拠がない項目は、確認前に任意に点数を付与していません。',
    'w2bi.tab1.label': 'DearMonday直営拠点', 'w2bi.tab1.sub': '1圏域・11施設',
    'w2bi.tab2.label': 'DearMonday運営自治体施設', 'w2bi.tab2.sub': '2事業・13施設診断完了',
    'w2bi.tab3.label': '全国自治体施設', 'w2bi.tab3.sub': '7圏域・134施設診断完了',
    'corp.h1': '企業ワーケーション<em>現況</em>', 'corp.p': '企業のワーケーション導入段階と需要の変化を分析します。', 'corp.soon': 'データ検証と分類体系の整備後に公開します。',
    'market.h1': '地域別ワーケーション<em>市場現況</em>', 'market.p': '圏域別施設供給とプログラム運営の変化を分析します。', 'market.soon': '地域データ検証と時系列整備後に公開します。',
    'about.field1.h4': '企業のワーケーション<br>導入効果研究', 'about.field1.p': '職種・業務タイプ別滞在データ分析により、業務没入度、生産性、人材維持効果を定量的に提示します。',
    'about.field2.h4': '地域経済<br>波及効果実証', 'about.field2.p': '実決済データで1人1泊あたりの消費支出を測定し、韓国銀行の地域産業連関係数で生産誘発効果を算出します。',
    'about.field3.h4': 'K-Workation<br>標準指数開発', 'about.field3.p': '独自指数WIBI・W2BIを高度化し、学界共同研究を通じて学術成果とグローバル標準を目指します。',
    'about.field4.h4': '自治体事例分析<br>&amp;政策ガイド', 'about.field4.p': '人員動員中心の支援金政策の限界を超え、1人当たり消費支出に基づく政策再編ガイドを提案します。',
    'about.whatwedo': '私たちが行うこと',
    'about.work1.h4': '産業動向', 'about.work1.p': 'データに基づくワーケーション市場動向及び展望分析',
    'about.work1.li1': 'ワーケーション需要・供給トレンド分析', 'about.work1.li2': '施設運営指標の定期集計', 'about.work1.li3': '四半期動向レポート発行',
    'about.work2.h4': '実証研究', 'about.work2.p': 'ワーケーションの主要課題に関する深化した実証研究',
    'about.work2.li1': '実決済ベースの消費支出実測', 'about.work2.li2': '地域経済生産誘発効果の算出', 'about.work2.li3': '学界・外部機関との共同研究',
    'about.work3.h4': '指数プラットフォーム', 'about.work3.p': '企業・自治体が活用可能な診断・データプラットフォームの提供',
    'about.work3.li1': 'ワーケーション施設の企業要求事項満足指数の運営', 'about.work3.li2': '企業のワーケーション導入可能性指数の開発', 'about.work3.li3': 'プログラムタイプ別マッチング判定',
    'about.work4.h4': '知識ネットワーク', 'about.work4.p': 'ワーケーション・観光・地域再生専門家ネットワークの運営',
    'about.work4.li1': 'ワーケーションデータフォーラムの開催', 'about.work4.li2': '定期セミナー及びワークショップ', 'about.work4.li3': '学術論文及び政策ブリーフの発表',
    'about.net.dm': 'ワーケーション利用データ<br>プラットフォーム・AI分析組織',
    'about.net.tdi': '韓国観光開発研究院<br>WIBI・W2BI共同開発',
    'about.net.dongduk': '同徳女子大学', 'about.net.dongduk.role': 'ホ・ジュン教授<br>方法論・学術的信頼性',
    'about.net.kyonggi': '京畿大学', 'about.net.kyonggi.role': 'イ・ビョンチョル教授<br>統計検証・継続的高度化',
    'about.net.structure': '協力構造',
    'about.net.p1': 'DearMondayは、社内のワーケーション利用データをもとに<b>韓国観光開発研究院(TDI)</b>とWIBI・W2BI診断体系を共同開発し、<b>同徳女子大学・京畿大学</b>とともに継続的な検証と高度化を進めるなど、業界最高水準の専門家集団と幅広く協業しています。',
    'about.net.p2': 'これによる研究成果は定期レポート、ワーケーションデータフォーラム、学術論文、自治体政策ブリーフとして発信されます。',
    'about.net.tdi.full': '韓国観光開発研究院(TDI)', 'about.net.assoc': '観光学会', 'about.net.public': '公共研究機関',
    'about.net.dataTitle': 'データ権利及びセキュリティ原則',
    'about.net.data1': '・予約・滞在・決済の原データの所有及び管理権限はDearMondayに帰属します。',
    'about.net.data2': '・個人情報はローカル環境でのみ処理し、非識別化を必須で適用します。',
    'about.net.data3': '・公開範囲は平均値・比率・指数・要約統計に限定し、原データと個人回答は非公開です。',
    'about.net.out1': '1. 企業ワーケーション活性化', 'about.net.out2': '2. ワーケーション標準の高度化',
    'about.net.out3': '3. 観光政策立案の提案', 'about.net.out4': '4. 世界的学術誌への論文掲載',
    'modal.title': 'W2BI自己診断',
    'modal.desc': '実際の診断に使用する12項目・100点満点体系をそのまま適用します。回答結果は保存されず、ブラウザ内でのみ計算されます。',
    'modal.close': '閉じる', 'modal.capLabel': 'オフィス定員',
    'modal.capHint': '席 — チーム/団体ワークショップ型(TW)判定に使用されます(15席以上必要)',
    'modal.reqLabel': '必須項目・5項目・45点 — 小計33点未満の場合、企業マッチング推薦対象から除外',
    'modal.recLabel': '推奨項目・7項目・55点',
    'modal.footHint': 'すべての項目を選択した後、結果を見るを押してください。',
    'modal.reset': 'リセット', 'modal.viewResult': '結果を見る',
    'modal.alertIncomplete': '未回答の項目が{n}個あります。すべての項目に回答してください。',
    'modal.fitOk': '該当', 'modal.fitFail': '必須要件未充足',
    'modal.fitCapFail': '定員{cap}席({req}席未満)',
    'modal.fitScoreFail': '適合度{fit}(基準80未満)',
    'modal.fitScorePrefix': '適合度 ',
    'modal.scoreTotalLabel': 'W2BI総点 / 100点', 'modal.reqSubtotalLabel': '必須小計 / 45点',
    'modal.recSubtotalLabel': '推奨小計 / 55点', 'modal.matchedTypesLabel': '該当プログラム類型 / 4',
    'modal.verdictPass': '企業ワーケーション適合－企業マッチング推薦対象です。(必須小計{req}点 ≥ 33点)',
    'modal.verdictZeroFail': '改善が必要－{items}が0点です。0点項目があると企業マッチング推薦対象から除外されます。',
    'modal.verdictScoreFail': '改善が必要－必須小計{req}点で、基準33点に{gap}点不足しています。',
    'modal.itemNumber': '{i}番項目',
    'modal.problemLabel': '問題点', 'modal.currentAnswerTemplate': '現在の回答は「{picked}」で、最高基準に未達です。',
    'modal.improveStandardLabel': '改善基準', 'modal.bestCaseLabel': '最高基準事例',
    'modal.publicFacilityLabel': '自治体運営施設',
    'modal.allTopStandardTitle': 'すべての項目が最高基準です',
    'modal.allTopStandardDesc': '現在の回答基準では追加改善が必要な項目はありません。',
    'modal.disclaimer': '本自己診断は回答に基づく参考結果です。公式W2BI診断は現場実査及び運営データ確認を経て確定されます。',
    'modal.downloadPdf': '結果をPDFでダウンロード',
    'modal.unconfirmed': '未確認',
    'dash.loading': 'データを読み込み中です…', 'dash.error': 'データを読み込めませんでした。',
    'dash.sourceLabel': 'データ出所', 'dash.sourceText': 'DearMondayプラットフォーム予約データ(個人情報除去後に集計)',
    'dash.updatedLabel': '更新', 'dash.scheduleLabel': '次回自動更新: 毎週月曜9:00(韓国時間)',
    'dash.unitReservations': '件',
    'dash.reservationData': '予約データ',
    'dash.corp.b2bShareLabel': '全予約中B2B(企業)の比重', 'dash.corp.peakLabel': '最多利用月',
    'dash.corp.peakShareLabel': '最多月比重', 'dash.corp.top3Label': '上位3ヶ月比重',
    'dash.corp.chartTitle': '月別ワーケーション利用季節性(暦月基準、年度統合)',
    'dash.corp.chartSub': '企業会員(B2B)・個人会員(B2C)それぞれの年間予約を100%とした場合の月別比重比較',
    'dash.corp.b2bSeries': '企業(B2B)予約', 'dash.corp.b2cSeries': '個人(B2C)予約',
    'dash.corp.prodTitle': '企業予約上位商品ランキング', 'dash.corp.prodSub': '企業会員(B2B)予約に占める比重が高いワーケーション商品順位',
    'dash.corp.avgNightsB2BLabel': '1人当たり平均宿泊日数・会社支援(B2B)',
    'dash.corp.avgNightsB2CLabel': '1人当たり平均宿泊日数・個人負担(B2C)',
    'dash.corp.avgPaymentB2BLabel': '1人当たり平均宿泊+オフィス決済額(万ウォン)・会社支援(B2B)',
    'dash.corp.avgPaymentB2CLabel': '1人当たり平均宿泊+オフィス決済額(万ウォン)・個人負担(B2C)',
    'dash.unitNights': '日', 'dash.unitManwon': '万ウォン',
    'dash.corp.basisLabel': '基準日', 'dash.corp.basisUseDate': '宿泊基準', 'dash.corp.basisPaymentDate': '決済基準',
    'dash.corp.periodLabel': '期間', 'dash.corp.periodAll': '全期間', 'dash.corp.periodLast3m': '直近3ヶ月',
    'dash.corp.periodLast6m': '直近6ヶ月', 'dash.corp.periodLast12m': '直近12ヶ月',
    'dash.corp.cmp1Title': '平均宿泊日数比較', 'dash.corp.cmp1Unit': '1人当たり(泊)',
    'dash.corp.cmp2Title': '平均オフィス+客室予約費用比較', 'dash.corp.cmp2Unit': '1人・1泊当たり（万ウォン）',
    'dash.corp.cmp3Title': '自治体支援参加比重', 'dash.corp.cmp3Unit': '全予約に占める自治体支援金商品利用比率',
    'market.soon.tag': 'データ整備中',
    'dash.market.b2bShareLabel': '全予約中B2Bの比重', 'dash.market.b2cShareLabel': '全予約中B2Cの比重',
    'dash.market.topB2BLabel': 'B2B最多利用地域', 'dash.market.topB2CLabel': 'B2C最多利用地域',
    'dash.market.chartTitle': '地域別予約比重－B2B vs B2C', 'dash.market.chartSub': '企業(B2B)・個人(B2C)それぞれの全予約を100%とした場合の地域別比重比較',
    'dash.market.tblRegion': '地域', 'dash.market.tblRank': '総合順位',
    'dash.market.tblB2BShare': 'B2B内比重', 'dash.market.tblB2CShare': 'B2C内比重',
    'dash.market.tblTitle': '地域別ランキング'
  },
  zh: {
    'header.subscribe': '订阅',
    'footer.terms': '使用条款',
    'footer.privacy': '隐私政策',
    'footer.links': 'DearMonday 相关链接',
    'footer.platformLink': 'DearMonday平台',
    'footer.bizNameLabel': '公司名称', 'footer.bizNameValue': 'DearMonday有限公司',
    'footer.repLabel': '代表人', 'footer.repValue': 'Jeongsu Kim、Sungwoo Kim',
    'footer.bizRegLabel': '营业执照注册号', 'footer.ecommerceLabel': '电子商务经营许可证号',
    'footer.addressLabel': '地址', 'footer.addressValue': '首尔特别市麻浦区百凡路31街21号 地上3层310号(孔德洞，首尔创业中心别馆)',
    'footer.privacyOfficerLabel': '个人信息管理负责人', 'footer.privacyOfficerValue': 'Sungwoo Kim (sungwoo.kim@dearmonday.io)',
    'home.hero.eyebrow': 'Workation Insight Lab · 工作度假专业民间研究所',
    'home.hero.h1': '用数据<em>证明工作度假的价值</em>',
    'home.hero.p': '韩国工作度假专业平台DearMonday，自市场萌芽期起便积累了企业、个人、地方政府等多样客户群体的工作度假使用数据。除直营设施外，还运营民间合作伙伴及地方政府公共设施，并基于这些数据积累提出独有的工作度假指数，以定量方式证明工作度假带来的企业效应与地区经济波及效应。',
    'home.hubs.eyebrow': 'ABOUT WORKATION INSIGHT LAB',
    'home.hubs.h2': 'WORKATION INSIGHT LAB<em>提供的内容</em>',
    'home.hubs.p': '从LAB介绍到独有指数体系、数据与发布报告，一站式提供核心研究资产',
    'home.hub1.h3': 'LAB简介',
    'home.hub1.p': '介绍WORKATION INSIGHT LAB的愿景、四大核心研究领域与合作网络',
    'home.hub1.li1': '愿景',
    'home.hub1.li2': '4大核心研究领域',
    'home.hub1.li3': '行业合作伙伴网络',
    'home.hub2.h3': '独有指数体系',
    'home.hub2.p': '分别诊断工作度假设施满足企业需求的程度，以及企业采纳工作度假的可能性的两大指数。',
    'home.hub2.li1': 'Workation-to-Business Index',
    'home.hub2.li2': 'Workation-in-Business Index',
    'home.hub2.li3': '各指数的概要·方法论·诊断结果',
    'home.hub3.h3': 'Workation DataLab',
    'home.hub3.p': '在这里可以确认设施诊断数据以及工作度假研究所使用的资料与出处',
    'home.hub3.li1': '全国设施诊断数据',
    'home.hub3.li2': '按都市圈汇总',
    'home.hub3.li3': '研究数据及出处',
    'home.hub4.h3': '研究报告',
    'home.hub4.p': '查看WORKATION INSIGHT LAB发布的研究报告及即将发布的内容',
    'home.hub4.li1': '指数开发·实证研究',
    'home.hub4.li2': '学术合作·数据论坛',
    'home.hub4.li3': '订阅',
    'home.hub.go': '查看详情 →',
    'home.diag.eyebrow': 'W2BI Self-Diagnosis',
    'home.diag.h2': '诊断我方设施<br>对<em>企业需求</em>的满足程度',
    'home.diag.p': '这是套用官方诊断所用12项、100分体系的自我诊断。仅需回答各项目，即可立即查看W2BI总分、是否符合企业工作度假需求，以及适配的项目类型。',
    'home.diag.btn': '试试W2BI自我诊断 →',
    'home.diag.d1': 'Wifi与信息安保',
    'home.diag.d2': '个人办公空间',
    'home.diag.d3': '体验项目',
    'home.diag.d4': '客房品质',
    'home.diag.d5': '使用流程',
    'home.diag.d6': '营业时间·安保·会议空间·交通等',
    'indexes.h1': '为<em>以办公为中心的工作度假</em>打造的指数体系',
    'indexes.p': '分别诊断工作度假设施满足企业需求的程度，以及企业采纳工作度假可能性的两大指数。',
    'indexes.h2': 'WIL的<em>两大指数</em>',
    'indexes.sechead.p': '各指数页面可以一次性查看概要、验证方法论与诊断结果。',
    'indexes.w2bi.sub': 'Workation-to-Business Index',
    'indexes.w2bi.desc': '以12项指标诊断企业选择设施时关注的办公、住宿、运营条件。',
    'indexes.w2bi.li1': '概要与100分诊断体系',
    'indexes.w2bi.li2': '部分确认评分及项目类型判定方法论',
    'indexes.w2bi.li3': '直营设施·全国7大都市圈诊断结果',
    'indexes.wibi.sub': 'Workation-in-Business Index',
    'indexes.wibi.desc': '综合组织制度、办公基础设施、职务适配性与员工接受度，评估导入可能性及优先课题。',
    'indexes.wibi.li1': '从企业导入决策视角出发的概要',
    'indexes.wibi.li2': '评估领域·验证·优化方法论',
    'indexes.wibi.li3': '诊断结果即将公开',
    'indexes.go': '查看页面 →',
    'wibi.h1': '企业<em>工作度假导入可能性</em>指数',
    'wibi.p': '以5大评估领域诊断企业导入工作度假时面临的实际制约，并提出适合该组织的分阶段导入路径。',
    'wibi.overview.p': 'WIBI(Workation-in-Business Index)是运用多准则决策模型，诊断企业导入工作度假所需条件与障碍因素的100分指数。先对企业规模·行业·职务·工作方式·福利水平进行分类，再评估5大领域——提供的不是简单的可否判定，而是可执行的导入路径与优先补充课题。',
    'wibi.domainA.b': 'A·办公环境·制度成熟度', 'wibi.domainA.p': '确认灵活办公制度、可远程执行的职务比例、考勤管理方式及相关内部规定。',
    'wibi.domainB.b': 'B·安保·IT基础设施', 'wibi.domainB.p': '诊断外部系统接入、设备携出、安保政策与办公设备运营条件。',
    'wibi.domainC.b': 'C·费用·预算结构', 'wibi.domainC.p': '查看福利预算、会计处理、费用分摊及政府支持利用可能性。',
    'wibi.domainD.b': 'D·决策·组织文化', 'wibi.domainD.p': '确认审批阶段、负责人权限、管理层理解程度及试点执行意愿。',
    'wibi.domainE.b': 'E·导入经验·信息水平', 'wibi.domainE.p': '评估外部办公经验、其他企业案例调研、内部需求及试点准备程度。',
    'wibi.formula': 'WIBI = A(25) + B(20) + C(20) + D(20) + E(15) = 总计100分',
    'wibi.method.p': '交叉验证先行研究、企业咨询·会议数据、定量问卷与深度访谈，持续优化指数与导入模型。',
    'wibi.step1.h4': '反映企业档案', 'wibi.step1.p': '反映规模·行业·职务·工作方式·福利水平不同，同一分数也可能对应不同的制约与执行条件。',
    'wibi.step1.li1': '企业规模与审批结构', 'wibi.step1.li2': '各行业安保敏感度', 'wibi.step1.li3': '可远程执行的职务比例',
    'wibi.step1.n': '01·预先分类', 'wibi.step2.n': '02·定量诊断', 'wibi.step3.n': '03·定性验证',
    'wibi.domainA.score': '25分', 'wibi.domainB.score': '20分', 'wibi.domainC.score': '20分', 'wibi.domainD.score': '20分', 'wibi.domainE.score': '15分',
    'wibi.stage5.badge': '结构性制约',
    'wibi.step2.h4': '5大领域·17项问题', 'wibi.step2.p': '以办公·制度(25分)、安保·IT(20分)、费用·预算(20分)、决策(20分)、经验·信息(15分)诊断导入可能性。',
    'wibi.step2.li1': '总计100分结构', 'wibi.step2.li2': '审查安保·远程接入的不合格条件', 'wibi.step2.li3': '确认各领域瓶颈',
    'wibi.step3.h4': '解读分数背后的原因与条件', 'wibi.step3.p': '通过深度访谈确认该分数产生的原因以及在何种条件下可以导入，从而设计定制化的导入路径。',
    'wibi.step3.li1': '成功案例分析', 'wibi.step3.li2': '锁定组织瓶颈', 'wibi.step3.li3': '探索再导入条件',
    'wibi.stage.h2': '诊断并非终点——<em>5阶段导入模型</em>',
    'wibi.stage.p': '低分并非被淘汰，而是降低组织抵触、积累导入经验的起点。',
    'wibi.stage1.h4': '立即执行', 'wibi.stage1.p': '灵活办公、管理层支持与预算均已具备，可立即设计试点或正式导入方案。',
    'wibi.stage2.h4': '有条件执行', 'wibi.stage2.p': '补足一两个薄弱领域的瓶颈后，以小规模试点方式导入。',
    'wibi.stage3.h4': '导入审议中', 'wibi.stage3.p': '通过工作坊或出差关联型桥接项目，积累内部案例与审批依据。',
    'wibi.stage4.h4': '中长期课题', 'wibi.stage4.p': '先完善制度·预算·管理层认知等结构性基础，再重新诊断。',
    'wibi.stage5.h4': '潜在需求', 'wibi.stage5.p': '明确网络隔离或总部规定等制约因素，探索可行的职种、出差或团队建设形式。',
    'wibi.results.h2': 'WIBI诊断结果',
    'wibi.results.p': '将在通过企业深度访谈和试点验证，完善各领域权重与阶段区间后公开。',
    'wibi.results.tag': '评估项目·权重验证中',
    'wibi.cta.h3': '自我诊断本公司的工作度假导入可能性',
    'wibi.cta.p': '正在准备一项功能，可依据5大评估领域与17项问题，确认组织的导入阶段与优先课题。',
    'wibi.cta.btn': '试试WIBI自我诊断 →',
    'research.h1': 'WORKATION INSIGHT LAB<em>研究报告</em>',
    'research.p': '提供关于工作度假市场、企业使用现况及导入效果、地方政府贡献效果实证、各类案例分析等多种报告。',
    'about.h1': '旅游不再以访客人数衡量——<br>而是以<em>停留、消费与转化数据</em>来设计',
    'about.p': 'WORKATION INSIGHT LAB是由<b>DearMonday股份公司</b>运营的工作度假专业民间研究组织。<br>基于自2024年积累的B2B·B2C停留数据以及全国工作度假设施的实证运营数据，<br>为企业的工作度假导入决策与地方政府的政策设计提供所需的客观依据。',
    'about.vision.h3': '以工作度假数据开启的<br><em>K-Workation标准</em>国际研究枢纽',
    'about.vision.p': 'WIL作为韩国首个工作度假专业民间研究组织，通过基于实证数据的指数体系与产学联合研究，构建工作度假产业的通用语言。',
    'about.axis1.b': 'Research', 'about.axis1.span': '基于真实支付与停留数据的<br>实用性·前瞻性实证研究',
    'about.axis2.b': 'Index System', 'about.axis2.span': '运营量化需求方与供给方两端的<br>独有指数体系(WIBI·W2BI)',
    'about.axis3.b': 'Networking', 'about.axis3.span': '与学界、产业界、地方政府共同构建的<br>年度定期数据平台',
    'about.vision.goal': '确立并推广符合企业需求的工作度假设施标准·<em>证明地区经济波及效应</em>·引领K-Workation全球标准',
    'about.field.h2': '全国11家直营设施，<br>共计<em>100余家合作工作度假设施</em>',
    'about.field.p': '除DearMonday直接构建的办公与客房结合型工作度假套餐外，DearMonday平台上线的全国各类民间及公共设施所产生的停留、办公、消费数据，正是WORKATION INSIGHT LAB研究的源泉。',
    'about.stat1.b': '11家直营设施', 'about.stat1.span': 'DearMonday直接运营',
    'about.stat2.b': '98家民间/公共合作设施', 'about.stat2.span': '全国上线工作度假设施',
    'about.stat3.b': '24个人口流失地区', 'about.stat3.span': '联动地区均衡发展',
    'about.stat4.b': '5,000+件', 'about.stat4.span': '累计使用数据',
    'about.stat5.b': '100+', 'about.stat5.span': '定期运营的工作度假设施',
    'about.fields.h2': 'WIL的<em>4大核心研究领域</em>',
    'about.fields.p': '从企业导入效果到地区经济实证、标准指数开发、政策指南，我们研究工作度假生态系统的全过程。',
    'about.network.h2': '构建行业<em>专家合作网络</em>',
    'about.network.p': '我们运营一种互补型治理模式，将民间数据平台的速度与学界·研究机构的方法论及公信力相结合。',
    'w2bi.h1': '工作度假设施的<em>企业需求满足指数</em>',
    'w2bi.p': '以企业实际提出的要求为基准，诊断设施与项目的企业友好程度及适配类型。',
    'w2bi.overview.p': 'W2BI(Workation-to-Business Index)是以2022~2026年企业客户实际使用与咨询数据中确认的需求为基准，<br>对地方政府工作度假设施与项目进行逆向诊断的企业友好指数。<br>它并非用于比较各设施优劣的排名表，<br>而是确认设施在多大程度上满足企业导入工作度假所需的条件，并提出改进优先事项与可匹配的项目类型。',
    'w2bi.card1.b': '必需要求事项·45分', 'w2bi.card1.p': '评估Wi-Fi·安保、个人办公空间、体验项目、客房品质、使用流程。不合格项目将直接影响是否推荐企业匹配。',
    'w2bi.card2.b': '推荐要求事项·55分', 'w2bi.card2.p': '评估营业时间、出入管制、会议设施、办公支持设备、交通可达性以及住宿-办公室间的移动条件。',
    'w2bi.card3.b': '项目类型匹配', 'w2bi.card3.p': '与总分无关，分别判定出差关联、团队/团体工作坊、沉浸式项目、正式办公类型的适配性。',
    'w2bi.method.p': '仅对可验证的依据进行评分，未确认的信息绝不会被随意计分。',
    'w2bi.step1.h4': '结合研究与实际客户数据', 'w2bi.step1.p': '将KTO企业定制指南与先行研究，对照2022~2026年企业客户的购买·咨询·访谈数据，构成评估项目。',
    'w2bi.step1.li1': '5项必需要求事项·45分', 'w2bi.step1.li2': '7项推荐要求事项·55分',
    'w2bi.step1.n': '01·提取项目',
    'w2bi.step2.h4': '基于依据的换算指数', 'w2bi.step2.p': '仅确定通过官方网站、运营机构资料及现场实地考察确认的项目。未确认项目也将从可评估配点中排除。',
    'w2bi.formula': '换算指数 = 确定分数 ÷ 可评估配点 × 100',
    'w2bi.step2.n': '02·部分确认原则',
    'w2bi.step3.h4': '独立判定必需要件与类型适配性', 'w2bi.step3.p': '先确认必需项小计与0分项目，再分别独立判定出差关联、团队工作坊、沉浸式项目、正式办公类型。',
    'w2bi.step3.li1': '必需项小计是否达到33分以上', 'w2bi.step3.li2': '类型适配度80以上·依据确认率60%以上',
    'w2bi.step3.n': '03·独立判定',
    'w2bi.sources.h3': '指标及数据来源',
    'w2bi.sources.p': 'WIL计算的指标构成如下，各指标均通过直接核实原始数据编写。无法确认依据的项目不予评分，标记为未确认。',
    'w2bi.sources.thMajor': '大分类', 'w2bi.sources.thMid': '中分类', 'w2bi.sources.thMetric': '指标', 'w2bi.sources.thSource': '来源',
    'w2bi.sources.r1cat': '企业需求满足水平',
    'w2bi.sources.r1a': '办公环境', 'w2bi.sources.r1a.metric': 'Wifi·个人办公设施·办公支持设备·协作设施',
    'w2bi.sources.r1b': '停留环境', 'w2bi.sources.r1b.metric': '客房品质·体验项目·营业时间',
    'w2bi.sources.r1c': '交通·流程', 'w2bi.sources.r1c.metric': '公共交通可达性·通勤难度·使用流程·物理安全',
    'w2bi.sources.srcOnsite': '设施官方运营信息、现场考察', 'w2bi.sources.srcOps': '设施官方运营信息、运营团队确认',
    'w2bi.sources.r2cat': '停留业绩',
    'w2bi.sources.r2a': '使用现况', 'w2bi.sources.r2a.metric': '停留间夜数·各设施使用模式·企业/个人使用占比',
    'w2bi.sources.r2b': '回访', 'w2bi.sources.r2b.metric': '回访率·长期停留比例·B2B转化率',
    'w2bi.sources.srcDb': 'DearMonday预订·运营数据库',
    'w2bi.sources.r3cat': '消费支出', 'w2bi.sources.planned2027': '计划2027年',
    'w2bi.sources.r3a': '实际支付', 'w2bi.sources.r3a.metric': '人均每晚消费支出额·各行业消费结构',
    'w2bi.sources.srcCard': '刷卡授权·结算数据联动(基于同意)',
    'w2bi.sources.r3b': '带动效应', 'w2bi.sources.r3b.metric': '生产诱发效应·附加值诱发效应',
    'w2bi.sources.srcBok': '韩国银行地区产业关联表',
    'w2bi.sources.r4a': '需求方满意度', 'w2bi.sources.r4a.mid': '停留品质', 'w2bi.sources.r4a.metric': '办公投入度·住宿满意度·当地内容满意度',
    'w2bi.sources.srcSurvey': '退房问卷',
    'w2bi.cta.h2': '诊断本设施的<em>企业需求满足度</em>',
    'w2bi.cta.p': '完全套用正式诊断所用的12项、满分100分体系的自我诊断。仅凭作答即可立即确认W2BI总分、是否适合企业工作度假、以及各项目类型的匹配情况。',
    'w2bi.cta.btn': '试试本设施的W2BI自我诊断 →',
    'w2bi.d1.n': '01·必需', 'w2bi.d1.score': '权重5分',
    'w2bi.d2.n': '02·必需', 'w2bi.d2.score': '权重15分',
    'w2bi.d3.n': '03·必需', 'w2bi.d3.score': '权重5分',
    'w2bi.d4.n': '04·必需', 'w2bi.d4.score': '权重10分',
    'w2bi.d5.n': '05·必需', 'w2bi.d5.score': '权重10分',
    'w2bi.d6.n': '06–12·推荐', 'w2bi.d6.label': '营业时间·安全·协作设施·可达性等', 'w2bi.d6.score': '权重55分',
    'common.overview': '概述', 'common.methodology': '方法论',
    'w2bi.progtypes.h2': '依企业使用方式划分的<em>4大项目类型</em>',
    'w2bi.progtypes.p': '类型划分并非依据设施形态，而是依据办公连续性、协作方式与停留目的。',
    'w2bi.prog1.b': '出差关联办公连续型', 'w2bi.prog1.p': '支持出差前后办公处理及短期停留的个人·小规模为主的类型。',
    'w2bi.prog2.b': '团队建设·组织文化型', 'w2bi.prog2.p': '支持工作坊、组织文化改善及协作强化的团队·团体为主的类型。',
    'w2bi.prog3.b': '沉浸式项目·成果产出型', 'w2bi.prog3.p': '为解决特定课题、进行企划·开发·战略制定而设的集中办公类型。',
    'w2bi.prog4.b': '正式办公·福利留存型', 'w2bi.prog4.p': '结合灵活办公制度与福利政策，用于反复使用的类型。',
    'w2bi.results.h2': 'W2BI诊断结果',
    'datalab.h1': '长期积累的工作度假实际使用数据',
    'datalab.p': '我们积累并公开工作度假使用及地区消费的实际数据。',
    'datalab.h2': '两大视角下的<em>市场现况</em>',
    'datalab.corp.title': '企业工作度假现况',
    'datalab.corp.desc': '我们计划公开结构化呈现的企业导入阶段、各行业·规模需求及主要障碍因素。',
    'datalab.reg.title': '地区工作度假市场现况',
    'datalab.reg.desc': '我们计划按都市圈依次公开设施供给、项目运营及市场变化情况。',
    'nav.about.vision': '愿景与目标', 'nav.about.fields': '4大核心研究领域', 'nav.about.network': '合作伙伴网络',
    'nav.indexes.w2bi': 'Workation-to-Business Index', 'nav.indexes.wibi': 'Workation-in-Business Index',
    'nav.datalab.corp': '企业工作度假现况', 'nav.datalab.reg': '地区工作度假市场现况',
    'nav.research.list': '研究报告',
    'nav.langAria': '选择语言', 'nav.menuAria': '菜单',
    'table.vdPass': '企业工作度假适合', 'table.vdFail': '需要改善', 'table.vdHold': '需要进一步确认',
    'table.unitSeat': '座', 'table.notConfirmed': '未确认',
    'table.thFacility': '设施', 'table.thCapacity': '定员', 'table.thIndex': 'W2BI换算指数', 'table.thMandatory': '必需要件',
    'table.lPass': '适合', 'table.lFail': '需要改善', 'table.lHold': '需进一步确认', 'table.lAvg': '平均',
    'table.unitFacilities': '家',
    'table.indexNote': 'W2BI换算指数是确定分数÷可评估配点得出的暂定比较指标',
    'research.tabAll': '全部', 'research.statDone': '已发布', 'research.statPlan': '即将发布', 'research.download': '下载PDF',
    'table.rank': '排名', 'table.facilityName': '工作度假设施', 'table.officeCap': '办公室<br>定员',
    'w2bi.tab1.note.b': '诊断标准',
    'w2bi.tab1.note.p': '<b>W2BI换算指数</b>并非满分100分的绝对总分，而是<b>确定分数÷可评估配点×100</b>得出的比较指标。<br>          <b>项目类型</b>各自独立判定，一个设施可能符合全部4种类型，也可能一种都不符合。<br>          <b>V*</b>表示必需要件仍处于需进一步确认状态时的暂定适配标记。各类型栏中的关键词是判定所依据的核心证据。',
    'w2bi.tab1.thBT': '出差关联<br>办公型 BT', 'w2bi.tab1.thTW': '团队/团体<br>工作坊型 TW',
    'w2bi.tab1.thFP': '沉浸式<br>项目型 FP', 'w2bi.tab1.thRW': '正式<br>办公型 RW',
    'w2bi.tab1.roomUnconfirmed': '— 客房信息未确认',
    'w2bi.tab1.legendV': 'V = 符合该类型 · V* = 暂定符合',
    'w2bi.types.h2': '符合各<em>项目类型</em>的设施',
    'w2bi.types.p': '总分高并不代表该设施适合所有项目。适配度是仅以各类型相关项目重新统计得出的。',
    'w2bi.tab2.note.b': 'DearMonday运营的地方政府设施',
    'w2bi.tab2.note.p': '这些设施属于DearMonday受托或以合作方式运营的地方政府工作度假支持项目。此处套用与直营设施相同的12项目·项目类型适配体系，并按项目分组——点击<b>+</b>即可展开其下属各设施的实名信息。',
    'w2bi.tab3.note.b': '关于本结果',
    'w2bi.tab3.note.p': '本W2BI指数诊断并非用于对各设施进行相对评价，而是帮助理解企业使用工作度假时真正重视的因素，并作为改善参考的资料。<br>\n           各设施均参照截至2026年7月的官方网站信息，未来将定期确认最新信息并重新诊断。<br>\n           仅标注所属都市圈，各设施的诊断结果以匿名方式公开。<br>\n           诊断时无法确认或缺乏明确依据的项目，在确认前不会被随意赋分。',
    'w2bi.tab1.label': 'DearMonday直营设施', 'w2bi.tab1.sub': '1个都市圈·11家设施',
    'w2bi.tab2.label': 'DearMonday运营地方政府设施', 'w2bi.tab2.sub': '2个项目·13家设施已诊断',
    'w2bi.tab3.label': '全国地方政府设施', 'w2bi.tab3.sub': '7个都市圈·134家设施已诊断',
    'corp.h1': '企业工作度假<em>现况</em>', 'corp.p': '分析企业的工作度假导入阶段与需求变化。', 'corp.soon': '将在数据验证与分类体系整理完成后公开。',
    'market.h1': '地区工作度假<em>市场现况</em>', 'market.p': '分析各都市圈的设施供给与项目运营变化。', 'market.soon': '将在地区数据验证与时间序列整理完成后公开。',
    'about.field1.h4': '企业工作度假<br>导入效果研究', 'about.field1.p': '通过按职种·业务类型分析停留数据，定量呈现办公投入度、生产力及人才留存效果。',
    'about.field2.h4': '地区经济<br>波及效果实证', 'about.field2.p': '以真实支付数据测算人均每晚消费支出，并利用韩国银行地区产业关联系数计算生产诱发效果。',
    'about.field3.h4': 'K-Workation<br>标准指数开发', 'about.field3.p': '优化独有指数WIBI·W2BI，并通过学界联合研究追求学术成果与全球标准。',
    'about.field4.h4': '地方政府案例分析<br>&amp;政策指南', 'about.field4.p': '超越以人数招募为中心的补贴政策局限，提出基于人均消费支出的政策改革指南。',
    'about.whatwedo': '我们所做的事',
    'about.work1.h4': '行业动向', 'about.work1.p': '基于数据的工作度假市场动向及展望分析',
    'about.work1.li1': '工作度假需求·供给趋势分析', 'about.work1.li2': '设施运营指标定期汇总', 'about.work1.li3': '发布季度动向报告',
    'about.work2.h4': '实证研究', 'about.work2.p': '针对工作度假主要议题的深度实证研究',
    'about.work2.li1': '基于真实支付的消费支出实测', 'about.work2.li2': '计算地区经济生产诱发效果', 'about.work2.li3': '与学界·外部机构联合研究',
    'about.work3.h4': '指数平台', 'about.work3.p': '为企业·地方政府提供可用的诊断·数据平台',
    'about.work3.li1': '运营工作度假设施企业需求满足指数', 'about.work3.li2': '开发企业工作度假导入可能性指数', 'about.work3.li3': '各项目类型匹配判定',
    'about.work4.h4': '知识网络', 'about.work4.p': '运营工作度假·旅游·地区振兴专家网络',
    'about.work4.li1': '举办工作度假数据论坛', 'about.work4.li2': '定期研讨会及工作坊', 'about.work4.li3': '发表学术论文及政策简报',
    'about.net.dm': '工作度假使用数据<br>平台·AI分析组织',
    'about.net.tdi': '韩国观光开发研究院<br>WIBI·W2BI联合开发',
    'about.net.dongduk': '同德女子大学', 'about.net.dongduk.role': '许俊教授<br>方法论·学术公信力',
    'about.net.kyonggi': '京畿大学', 'about.net.kyonggi.role': '李炳哲教授<br>统计验证·持续优化',
    'about.net.structure': '合作结构',
    'about.net.p1': 'DearMonday基于内部工作度假使用数据，与<b>韩国观光开发研究院(TDI)</b>联合开发WIBI·W2BI诊断体系，并与<b>同德女子大学·京畿大学</b>持续进行验证与优化，与业界顶尖专家群体展开广泛合作。',
    'about.net.p2': '由此产生的研究成果通过定期报告、工作度假数据论坛、学术论文及地方政府政策简报进行传播。',
    'about.net.tdi.full': '韩国观光开发研究院(TDI)', 'about.net.assoc': '旅游学会', 'about.net.public': '公共研究机构',
    'about.net.dataTitle': '数据权利及安全原则',
    'about.net.data1': '· 预订·停留·结算原始数据的所有权及管理权限归DearMonday所有。',
    'about.net.data2': '· 个人信息仅在本地环境处理，并必须进行去标识化处理。',
    'about.net.data3': '· 公开范围仅限平均值·比率·指数·汇总统计，原始数据及个人回答不予公开。',
    'about.net.out1': '1. 企业工作度假活性化', 'about.net.out2': '2. 工作度假标准优化',
    'about.net.out3': '3. 提出旅游政策建议', 'about.net.out4': '4. 在世界级学术期刊发表论文',
    'modal.title': 'W2BI自我诊断',
    'modal.desc': '完全套用官方诊断所用的12项、100分体系。回答结果不会被保存，仅在浏览器内进行计算。',
    'modal.close': '关闭', 'modal.capLabel': '办公室定员',
    'modal.capHint': '座 — 用于团队/团体工作坊型(TW)判定(需15座以上)',
    'modal.reqLabel': '必需项目·5项·45分 — 小计低于33分时将被排除在企业匹配推荐之外',
    'modal.recLabel': '推荐项目·7项·55分',
    'modal.footHint': '请选择所有项目后点击查看结果。',
    'modal.reset': '重置', 'modal.viewResult': '查看结果',
    'modal.alertIncomplete': '还有{n}个项目未作答，请回答所有项目。',
    'modal.fitOk': '符合', 'modal.fitFail': '未满足必需条件',
    'modal.fitCapFail': '定员{cap}座(低于{req}座要求)',
    'modal.fitScoreFail': '适配度{fit}(低于基准80)',
    'modal.fitScorePrefix': '适配度 ',
    'modal.scoreTotalLabel': 'W2BI总分 / 100分', 'modal.reqSubtotalLabel': '必需项小计 / 45分',
    'modal.recSubtotalLabel': '推荐项小计 / 55分', 'modal.matchedTypesLabel': '符合的项目类型 / 4',
    'modal.verdictPass': '符合企业工作度假标准－属于企业匹配推荐对象。(必需项小计{req}分 ≥ 33分)',
    'modal.verdictZeroFail': '需要改善－{items}为0分。存在0分项目将被排除在企业匹配推荐之外。',
    'modal.verdictScoreFail': '需要改善－必需项小计为{req}分，距33分基准还差{gap}分。',
    'modal.itemNumber': '第{i}项',
    'modal.problemLabel': '问题点', 'modal.currentAnswerTemplate': "当前回答为'{picked}'，未达到最高标准。",
    'modal.improveStandardLabel': '改善标准', 'modal.bestCaseLabel': '最高标准案例',
    'modal.publicFacilityLabel': '地方政府运营设施',
    'modal.allTopStandardTitle': '所有项目均达到最高标准',
    'modal.allTopStandardDesc': '按当前回答，没有需要进一步改善的项目。',
    'modal.disclaimer': '本自我诊断为基于回答的参考结果。正式W2BI诊断需经过现场调研及运营数据核实后确定。',
    'modal.downloadPdf': '下载PDF结果',
    'modal.unconfirmed': '未确认',
    'dash.loading': '正在加载数据…', 'dash.error': '数据加载失败。',
    'dash.sourceLabel': '数据来源', 'dash.sourceText': 'DearMonday平台预订数据(去除个人信息后汇总)',
    'dash.updatedLabel': '更新时间', 'dash.scheduleLabel': '下次自动更新：每周一09:00(韩国时间)',
    'dash.unitReservations': '单',
    'dash.reservationData': '预订数据',
    'dash.corp.b2bShareLabel': '全部预订中B2B(企业)占比', 'dash.corp.peakLabel': '最多使用月份',
    'dash.corp.peakShareLabel': '最多月份占比', 'dash.corp.top3Label': '前三月份占比',
    'dash.corp.chartTitle': '各月工作度假使用季节性(按日历月，合并各年度)',
    'dash.corp.chartSub': '将企业会员(B2B)、个人会员(B2C)各自的年度预订量视为100%时的月度占比对比',
    'dash.corp.b2bSeries': '企业(B2B)预订', 'dash.corp.b2cSeries': '个人(B2C)预订',
    'dash.corp.prodTitle': '企业预订热门产品排行', 'dash.corp.prodSub': '按企业(B2B)预订占比排序的工作度假产品排行',
    'dash.corp.avgNightsB2BLabel': '人均平均住宿天数·公司支持(B2B)',
    'dash.corp.avgNightsB2CLabel': '人均平均住宿天数·个人自费(B2C)',
    'dash.corp.avgPaymentB2BLabel': '人均平均住宿+办公室支付金额(万韩元)·公司支持(B2B)',
    'dash.corp.avgPaymentB2CLabel': '人均平均住宿+办公室支付金额(万韩元)·个人自费(B2C)',
    'dash.unitNights': '天', 'dash.unitManwon': '万韩元',
    'dash.corp.basisLabel': '基准日', 'dash.corp.basisUseDate': '住宿基准', 'dash.corp.basisPaymentDate': '支付基准',
    'dash.corp.periodLabel': '期间', 'dash.corp.periodAll': '全部期间', 'dash.corp.periodLast3m': '最近3个月',
    'dash.corp.periodLast6m': '最近6个月', 'dash.corp.periodLast12m': '最近12个月',
    'dash.corp.cmp1Title': '平均住宿天数对比', 'dash.corp.cmp1Unit': '人均(晚)',
    'dash.corp.cmp2Title': '平均办公室+客房预订费用对比', 'dash.corp.cmp2Unit': '每人每晚（万韩元）',
    'dash.corp.cmp3Title': '地方政府补贴参与占比', 'dash.corp.cmp3Unit': '在全部预订中使用地方政府补贴商品的比例',
    'market.soon.tag': '数据整理中',
    'dash.market.b2bShareLabel': '全部预订中B2B占比', 'dash.market.b2cShareLabel': '全部预订中B2C占比',
    'dash.market.topB2BLabel': 'B2B最多使用地区', 'dash.market.topB2CLabel': 'B2C最多使用地区',
    'dash.market.chartTitle': '各地区预订占比——B2B与B2C对比', 'dash.market.chartSub': '将企业(B2B)、个人(B2C)各自的全部预订视为100%时的地区占比对比',
    'dash.market.tblRegion': '地区', 'dash.market.tblRank': '综合排名',
    'dash.market.tblB2BShare': 'B2B内占比', 'dash.market.tblB2CShare': 'B2C内占比',
    'dash.market.tblTitle': '各地区排行'
  }
};

function getLang(){
  const saved = localStorage.getItem('wil_lang');
  if (saved) return saved;
  const supported = ['ko','en','ja','zh'];
  const sys = ((navigator.language || navigator.userLanguage || 'ko').split('-')[0]).toLowerCase();
  return supported.includes(sys) ? sys : 'ko';
}

/* 정적 마크업(data-i18n)이 아니라 JS가 매번 새로 그리는 동적 콘텐츠(표·모달 등)에서 쓰는 조회 함수.
   ko이거나 키가 없으면 null을 반환하므로, 호출부에서 `t('key') || '한국어 기본값'` 형태로 사용한다 */
function t(key){ const lang = getLang(); if (lang === 'ko') return null; return (I18N[lang] && I18N[lang][key]) || null; }

/* 동적 렌더 함수(renderMunicipalGroups 등)가 언어 전환 시 자기 자신을 다시 그리도록 등록하는 콜백 목록 */
const I18N_RERENDERS = [];

function applyLang(lang){
  localStorage.setItem('wil_lang', lang);
  const dict = I18N[lang];
  /* 동적 렌더 함수(모달·표 등)를 먼저 다시 그려야, 그 결과로 새로 생긴 data-i18n
     엘리먼트도 아래 정적 스왑 단계에서 함께 번역된다(순서를 반대로 하면 새로 그려진
     엘리먼트는 이번 호출에서 번역되지 못하고 다음 언어 전환까지 원문으로 남는다) */
  I18N_RERENDERS.forEach(fn => { try { fn(); } catch(e){} });
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict && dict[key]) el.textContent = dict[key];
    else if (!dict) el.textContent = el.getAttribute('data-i18n-ko') || el.textContent;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict && dict[key]) el.innerHTML = dict[key];
    else if (!dict) el.innerHTML = el.getAttribute('data-i18n-ko-html') || el.innerHTML;
  });
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    el.getAttribute('data-i18n-attr').split(';').forEach(pair => {
      const [attr, key] = pair.split(':');
      if (dict && dict[key]) el.setAttribute(attr, dict[key]);
      else if (!dict) { const ko = el.getAttribute('data-i18n-ko-' + attr); if (ko) el.setAttribute(attr, ko); }
    });
  });
  document.documentElement.lang = lang === 'ko' ? 'ko' : lang;
  const btn = document.getElementById('langLabel');
  if (btn) btn.textContent = lang === 'ko' ? 'KOR' : lang === 'en' ? 'ENG' : lang === 'ja' ? 'JPN' : 'CHN';
  document.querySelectorAll('.lang-menu button').forEach(b =>
    b.classList.toggle('on', b.getAttribute('data-lang') === lang));
}

function mountLangSwitch(){
  const sel = document.getElementById('langsel');
  if (!sel) return;
  document.querySelectorAll('[data-i18n]').forEach(el => { if (!el.hasAttribute('data-i18n-ko')) el.setAttribute('data-i18n-ko', el.textContent); });
  document.querySelectorAll('[data-i18n-html]').forEach(el => { if (!el.hasAttribute('data-i18n-ko-html')) el.setAttribute('data-i18n-ko-html', el.innerHTML); });
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    el.getAttribute('data-i18n-attr').split(';').forEach(pair => {
      const attr = pair.split(':')[0];
      if (!el.hasAttribute('data-i18n-ko-' + attr)) el.setAttribute('data-i18n-ko-' + attr, el.getAttribute(attr) || '');
    });
  });
  document.getElementById('langBtn').onclick = e => { e.stopPropagation(); sel.classList.toggle('open'); };
  sel.querySelectorAll('.lang-menu button').forEach(b => {
    b.onclick = e => { e.stopPropagation(); applyLang(b.getAttribute('data-lang')); sel.classList.remove('open'); };
  });
  document.addEventListener('click', () => sel.classList.remove('open'));
  applyLang(getLang());
}
const S3 = 'https://dearmonday-prod-public.s3.ap-northeast-2.amazonaws.com/branch/';
/* ── KW: 자치체/직영점 결과 표에 반복 등장하는 판정 키워드 사전 (동적 렌더 전용, data-i18n 미적용 영역)
   trK(kr) 로 조회. 없으면 원문(한국어) 그대로 반환 — 실존 지명은 로마자 표기, 판정 문구는 의미 번역. ── */
const KW = {
'15석 · 회의실 예약 X':['15 seats · no meeting room booking','15席・会議室予約不可','15座·无法预约会议室'],
'15석 · 회의실·장비':['15 seats · meeting room·equipment','15席・会議室・機器','15座·会议室·设备'],
'15석·회의실':['15 seats·meeting room','15席・会議室','15座·会议室'],
'15석·회의실·장비':['15 seats·meeting room·equipment','15席・会議室・機器','15座·会议室·设备'],
'18석 · 엑스포권 숙소':['18 seats · Expo-area lodging','18席・エキスポ圏宿泊','18座·世博园区住宿'],
'20석 · 동일 호텔':['20 seats · same hotel','20席・同一ホテル','20座·同一酒店'],
'20석·회의실':['20 seats·meeting room','20席・会議室','20座·会议室'],
'22석·회의실·폰부스':['22 seats·meeting room·phone booth','22席・会議室・電話ブース','22座·会议室·电话亭'],
'24h · 전 좌석 모니터':['24h · monitor at every seat','24時間・全席モニター','24小时·全座位配显示器'],
'24h · 회의실 2개':['24h · 2 meeting rooms','24時間・会議室2室','24小时·2个会议室'],
'24h 미운영':['not open 24h','24時間営業なし','非24小时运营'],
'24h 미운영 · 미팅룸 X':['not open 24h · no meeting room','24時間営業なし・会議室なし','非24小时运营·无会议室'],
'24h 운영':['24h operation','24時間営業','24小时运营'],
'24석·회의실':['24 seats·meeting room','24席・会議室','24座·会议室'],
'25석 · 8인 협업석':['25 seats · 8-person collab area','25席・8人用コラボ席','25座·8人协作席'],
'25석·회의실':['25 seats·meeting room','25席・会議室','25座·会议室'],
'30석 · 체험 프로그램':['30 seats · experience program','30席・体験プログラム','30座·体验项目'],
'30석 · 회의실·장비':['30 seats · meeting room·equipment','30席・会議室・機器','30座·会议室·设备'],
'30석·회의실':['30 seats·meeting room','30席・会議室','30座·会议室'],
'40객실+ · 셀프세탁':['40+ rooms · self-laundry','40室以上・セルフランドリー','40间以上客房·自助洗衣'],
'40석·회의실':['40 seats·meeting room','40席・会議室','40座·会议室'],
'44석·회의실·장비':['44 seats·meeting room·equipment','44席・会議室・機器','44座·会议室·设备'],
'45석 · 회의실·체험':['45 seats · meeting room·experience','45席・会議室・体験','45座·会议室·体验'],
'45석·회의실':['45 seats·meeting room','45席・会議室','45座·会议室'],
'46석 · 회의실·장비':['46 seats · meeting room·equipment','46席・会議室・機器','46座·会议室·设备'],
'50석 · 회의실·복합기':['50 seats · meeting room·copier','50席・会議室・複合機','50座·会议室·复合机'],
'50석·회의실':['50 seats·meeting room','50席・会議室','50座·会议室'],
'5성급 · 뷔페':['5-star · buffet','5つ星・ビュッフェ','5星级·自助餐'],
'60석 · 회의실·장비':['60 seats · meeting room·equipment','60席・会議室・機器','60座·会议室·设备'],
'64석 · 회의실·체험':['64 seats · meeting room·experience','64席・会議室・体験','64座·会议室·体验'],
'75석 · 미팅룸 수 미확인':['75 seats · meeting room count unconfirmed','75席・会議室数未確認','75座·会议室数量未确认'],
'90석 · 회의실·체험':['90 seats · meeting room·experience','90席・会議室・体験','90座·会议室·体验'],
'Wi-Fi · 교통 미확인':['Wi-Fi · transit unconfirmed','Wi-Fi・交通未確認','Wi-Fi·交通未确认'],
'Wi-Fi · 물리 보안 미확인':['Wi-Fi · physical security unconfirmed','Wi-Fi・物理セキュリティ未確認','Wi-Fi·物理安保未确认'],
'Wi-Fi · 보안 · 운영시간':['Wi-Fi · security · hours','Wi-Fi・セキュリティ・営業時間','Wi-Fi·安保·营业时间'],
'Wi-Fi · 보안 미확인':['Wi-Fi · security unconfirmed','Wi-Fi・セキュリティ未確認','Wi-Fi·安保未确认'],
'Wi-Fi · 산간 교통':['Wi-Fi · mountain-area transit','Wi-Fi・山間交通','Wi-Fi·山区交通'],
'Wi-Fi · 산간 교통 미확인':['Wi-Fi · mountain-area transit unconfirmed','Wi-Fi・山間交通未確認','Wi-Fi·山区交通未确认'],
'Wi-Fi · 산악 교통':['Wi-Fi · mountain transit','Wi-Fi・山岳交通','Wi-Fi·山地交通'],
'Wi-Fi · 숙소 이동 미확인':['Wi-Fi · lodging commute unconfirmed','Wi-Fi・宿泊施設移動未確認','Wi-Fi·住宿往返未确认'],
'Wi-Fi · 운영 09~18시':['Wi-Fi · open 09:00–18:00','Wi-Fi・営業9〜18時','Wi-Fi·营业09:00–18:00'],
'Wi-Fi · 운영 시간 미확인':['Wi-Fi · operating hours unconfirmed','Wi-Fi・営業時間未確認','Wi-Fi·营业时间未确认'],
'Wi-Fi · 운영시간 미확인':['Wi-Fi · operating hours unconfirmed','Wi-Fi・営業時間未確認','Wi-Fi·营业时间未确认'],
'Wi-Fi · 장비 · 보안 미확인':['Wi-Fi · equipment · security unconfirmed','Wi-Fi・機器・セキュリティ未確認','Wi-Fi·设备·安保未确认'],
'Wi-Fi · 장시간 운영 미달':['Wi-Fi · extended hours not met','Wi-Fi・長時間営業未達','Wi-Fi·长时间营业未达标'],
'Wi-Fi · 전용좌석 미확인':['Wi-Fi · dedicated seat unconfirmed','Wi-Fi・専用席未確認','Wi-Fi·专用座位未确认'],
'Wi-Fi · 지역교통 제한':['Wi-Fi · limited local transit','Wi-Fi・地域交通制限','Wi-Fi·当地交通受限'],
'Wi-Fi · 해안 외곽':['Wi-Fi · coastal outskirts','Wi-Fi・海岸外れ','Wi-Fi·海岸边缘地区'],
'Wi-Fi 미확인':['Wi-Fi unconfirmed','Wi-Fi未確認','Wi-Fi未确认'],
'Wi-Fi 미확인 · 필수 미달':['Wi-Fi unconfirmed · mandatory not met','Wi-Fi未確認・必須未達','Wi-Fi未确认·未达必需项'],
'Wi-Fi 보안 · 장비 미확인':['Wi-Fi security · equipment unconfirmed','Wi-Fiセキュリティ・機器未確認','Wi-Fi安保·设备未确认'],
'Wi-Fi·보안':['Wi-Fi·security','Wi-Fi・セキュリティ','Wi-Fi·安保'],
'Wi-Fi·보안 미확인':['Wi-Fi·security unconfirmed','Wi-Fi・セキュリティ未確認','Wi-Fi·安保未确认'],
'Wi-Fi·보안·운영시간':['Wi-Fi·security·hours','Wi-Fi・セキュリティ・営業時間','Wi-Fi·安保·营业时间'],
'Wi-Fi·운영시간':['Wi-Fi·hours','Wi-Fi・営業時間','Wi-Fi·营业时间'],
'Wi-Fi·장비 미확인':['Wi-Fi·equipment unconfirmed','Wi-Fi・機器未確認','Wi-Fi·设备未确认'],
'개방형 회의공간':['open-plan meeting space','オープン型会議スペース','开放式会议空间'],
'개인 업무좌석 기준 미달':['personal workspace standard not met','個人業務席基準未達','个人办公席位未达标'],
'개인업무 좌석 · 보안 미확인':['personal work seat · security unconfirmed','個人業務席・セキュリティ未確認','个人办公席·安保未确认'],
'객실 1실 · 회의실 X':['1 room · no meeting room','客室1室・会議室なし','1间客房·无会议室'],
'객실 22실 · 회의실 미확인':['22 rooms · meeting room unconfirmed','客室22室・会議室未確認','22间客房·会议室未确认'],
'객실 2실 · 지역교통 제한':['2 rooms · limited local transit','客室2室・地域交通制限','2间客房·当地交通受限'],
'객실 4실':['4 rooms','客室4室','4间客房'],
'객실 4실 · 복합기 미확인':['4 rooms · copier unconfirmed','客室4室・複合機未確認','4间客房·复合机未确认'],
'객실 · 교통 미확인':['room · transit unconfirmed','客室・交通未確認','客房·交通未确认'],
'객실 · 미팅룸 미확인':['room · meeting room unconfirmed','客室・会議室未確認','客房·会议室未确认'],
'객실 · 숙소 이동 미확인':['room · lodging commute unconfirmed','客室・宿泊施設移動未確認','客房·住宿往返未确认'],
'객실 기준 · 절차 미달':['room standard · procedure not met','客室基準・手続き未達','客房标准·流程未达标'],
'객실 세탁·주방 완비':['room laundry·kitchen fully equipped','客室洗濯・キッチン完備','客房洗衣·厨房齐全'],
'객실 정보 미확인':['room details unconfirmed','客室情報未確認','客房信息未确认'],
'객실 품질 미확인':['room quality unconfirmed','客室品質未確認','客房品质未确认'],
'객실과 같은 건물':['same building as room','客室と同じ建物','与客房同楼'],
'거제 남부 교통':['South Geoje transit','巨済南部交通','巨济南部交通'],
'고객대기실형 · Wi-Fi 미확인':['waiting-room type · Wi-Fi unconfirmed','客待合室型・Wi-Fi未確認','客户等候室型·Wi-Fi未确认'],
'광역교통 · 숙소 이동':['regional transit · lodging commute','広域交通・宿泊施設移動','区域交通·住宿往返'],
'교통 · 객실 품질 한계':['transit · room quality limits','交通・客室品質限界','交通·客房品质有限'],
'교통 · 운영시간 미확인':['transit · hours unconfirmed','交通・営業時間未確認','交通·营业时间未确认'],
'근거 확보율 0%':['evidence coverage 0%','根拠確保率0%','证据确认率0%'],
'근거 확보율 17%':['evidence coverage 17%','根拠確保率17%','证据确认率17%'],
'근거 확보율 23%':['evidence coverage 23%','根拠確保率23%','证据确认率23%'],
'근거 확보율 25%':['evidence coverage 25%','根拠確保率25%','证据确认率25%'],
'근거 확보율 33%':['evidence coverage 33%','根拠確保率33%','证据确认率33%'],
'근거 확보율 38%':['evidence coverage 38%','根拠確保率38%','证据确认率38%'],
'근거 확보율 46%':['evidence coverage 46%','根拠確保率46%','证据确认率46%'],
'근거 확보율 50%':['evidence coverage 50%','根拠確保率50%','证据确认率50%'],
'근거 확보율 58%':['evidence coverage 58%','根拠確保率58%','证据确认率58%'],
'김녕 해안 외곽':['Gimnyeong coastal outskirts','キムニョン海岸外れ','金宁海岸边缘地区'],
'농촌 외곽·Wi-Fi':['rural outskirts·Wi-Fi','農村外れ・Wi-Fi','农村边缘地区·Wi-Fi'],
'농촌 외곽·숙박 3실':['rural outskirts·3 rooms','農村外れ・宿泊3室','农村边缘地区·3间客房'],
'대규모 회의·숙박':['large-scale meeting·lodging','大規模会議・宿泊','大型会议·住宿'],
'도서 교통 · 숙박 품질':['island transit · lodging quality','島嶼交通・宿泊品質','岛屿交通·住宿品质'],
'도서 접근 · Wi-Fi 미확인':['island access · Wi-Fi unconfirmed','島嶼アクセス・Wi-Fi未確認','岛屿交通·Wi-Fi未确认'],
'도심·82석':['city center·82 seats','都心・82席','市中心·82座'],
'동일 건물 90실':['same building, 90 rooms','同一建物90室','同楼90间客房'],
'동일 건물 · 24h':['same building · 24h','同一建物・24時間','同楼·24小时'],
'동일 부지 · Wi-Fi':['same site · Wi-Fi','同一敷地・Wi-Fi','同一场地·Wi-Fi'],
'동일 부지 · 온라인 신청':['same site · online application','同一敷地・オンライン申請','同一场地·在线申请'],
'모니터 미확인':['monitor unconfirmed','モニター未確認','显示器未确认'],
'모니터·Wi-Fi 미확인':['monitor·Wi-Fi unconfirmed','モニター・Wi-Fi未確認','显示器·Wi-Fi未确认'],
'물리 보안 미확인':['physical security unconfirmed','物理セキュリティ未確認','物理安保未确认'],
'미팅룸 X':['no meeting room','会議室なし','无会议室'],
'미팅룸 X · 12석':['no meeting room · 12 seats','会議室なし・12席','无会议室·12座'],
'미팅룸 X · 8석':['no meeting room · 8 seats','会議室なし・8席','无会议室·8座'],
'미팅룸 X · 정원 10석':['no meeting room · capacity 10','会議室なし・定員10席','无会议室·定员10座'],
'미팅룸 · 장비 미확인':['meeting room · equipment unconfirmed','会議室・機器未確認','会议室·设备未确认'],
'미팅룸형 · Wi-Fi 미확인':['meeting-room type · Wi-Fi unconfirmed','会議室型・Wi-Fi未確認','会议室型·Wi-Fi未确认'],
'보안 · 운영시간 미확인':['security · hours unconfirmed','セキュリティ・営業時間未確認','安保·营业时间未确认'],
'보안 · 장시간 운영 미달':['security · extended hours not met','セキュリティ・長時間営業未達','安保·长时间营业未达标'],
'보안·운영시간':['security·hours','セキュリティ・営業時間','安保·营业时间'],
'복합기·미팅룸 X':['copier·no meeting room','複合機・会議室なし','复合机·无会议室'],
'사계 해안 외곽':['Sagye coastal outskirts','サゲ海岸外れ','沙溪海岸边缘地区'],
'산간 교통 · 운영시간 미확인':['mountain-area transit · hours unconfirmed','山間交通・営業時間未確認','山区交通·营业时间未确认'],
'산간 교통·Wi-Fi':['mountain-area transit·Wi-Fi','山間交通・Wi-Fi','山区交通·Wi-Fi'],
'산악권 교통':['mountain-region transit','山岳圏交通','山区交通'],
'산악권 교통 · 운영 09~18시':['mountain-region transit · open 09:00–18:00','山岳圏交通・営業9〜18時','山区交通·营业09:00–18:00'],
'산악권 교통 · 운영시간 미확인':['mountain-region transit · hours unconfirmed','山岳圏交通・営業時間未確認','山区交通·营业时间未确认'],
'산악권 교통 · 절차 미확인':['mountain-region transit · procedure unconfirmed','山岳圏交通・手続き未確認','山区交通·流程未确认'],
'상시 전용좌석 미달':['always-on dedicated seat not met','常時専用席未達','常设专用座位未达标'],
'상시 좌석관리 미확인':['ongoing seat management unconfirmed','常時席管理未確認','常态座位管理未确认'],
'서류 절차 · 장시간 운영 미달':['paperwork · extended hours not met','書類手続き・長時間営業未達','书面流程·长时间营业未达标'],
'서류 제출 · 숙소 이동':['paperwork submission · lodging commute','書類提出・宿泊施設移動','提交材料·住宿往返'],
'서류·증빙사진 절차':['paperwork·proof-photo procedure','書類・証明写真手続き','材料·凭证照片流程'],
'서류·카드키 절차':['paperwork·keycard procedure','書類・カードキー手続き','材料·门卡流程'],
'선박 접근 · Wi-Fi 미확인':['boat access · Wi-Fi unconfirmed','船舶アクセス・Wi-Fi未確認','船舶交通·Wi-Fi未确认'],
'선박 접근 · 섬 교통 제한':['boat access · limited island transit','船舶アクセス・島交通制限','船舶交通·岛内交通受限'],
'세미나실형 · Wi-Fi 미확인':['seminar-room type · Wi-Fi unconfirmed','セミナー室型・Wi-Fi未確認','研讨室型·Wi-Fi未确认'],
'센터·숙소 이동':['center·lodging commute','センター・宿泊施設移動','中心·住宿往返'],
'수영장·워시가든 무료':['free pool·wash garden','プール・ウォッシュガーデン無料','免费泳池·洗涤花园'],
'숙박 3실':['3 rooms','宿泊3室','3间客房'],
'숙박 5실 · 지역교통 제한':['5 rooms · limited local transit','宿泊5室・地域交通制限','5间客房·当地交通受限'],
'숙박 수용력 · 지역교통 제한':['lodging capacity · limited local transit','宿泊収容力・地域交通制限','住宿容量·当地交通受限'],
'숙박 품질 0점':['lodging quality score 0','宿泊品質0点','住宿品质0分'],
'숙박 품질 · 지역교통 제한':['lodging quality · limited local transit','宿泊品質・地域交通制限','住宿品质·当地交通受限'],
'숙소 이동 · Wi-Fi 미확인':['lodging commute · Wi-Fi unconfirmed','宿泊施設移動・Wi-Fi未確認','住宿往返·Wi-Fi未确认'],
'숙소 이동 · 보안 미확인':['lodging commute · security unconfirmed','宿泊施設移動・セキュリティ未確認','住宿往返·安保未确认'],
'숙소 이동 · 서류 절차':['lodging commute · paperwork','宿泊施設移動・書類手続き','住宿往返·材料流程'],
'숙소 이동 · 운영시간 미확인':['lodging commute · hours unconfirmed','宿泊施設移動・営業時間未確認','住宿往返·营业时间未确认'],
'숙소 이동·Wi-Fi':['lodging commute·Wi-Fi','宿泊施設移動・Wi-Fi','住宿往返·Wi-Fi'],
'숙소 품질 편차':['lodging quality varies','宿泊品質のばらつき','住宿品质参差不齐'],
'숙소 품질 편차 · 지역교통':['lodging quality varies · local transit','宿泊品質のばらつき・地域交通','住宿品质参差不齐·当地交通'],
'숙소별 이동시간 미확인':['per-lodging commute time unconfirmed','宿泊施設別移動時間未確認','各住宿往返时间未确认'],
'신경주역 KTX 2시간':['Singyeongju Sta. KTX 2h','新慶州駅KTX2時間','新庆州站KTX 2小时'],
'안덕면 교통':['Andeok-myeon transit','アンドク面交通','安德面交通'],
'업무 장비 · 숙소 이동':['work equipment · lodging commute','業務機器・宿泊施設移動','办公设备·住宿往返'],
'업무 장비 미확인':['work equipment unconfirmed','業務機器未確認','办公设备未确认'],
'업무 장비 제한':['limited work equipment','業務機器制限','办公设备有限'],
'업무공간·숙소 분리':['workspace·lodging separate','業務空間・宿泊施設分離','办公空间·住宿分离'],
'연계 숙소 없음':['no linked lodging','連携宿泊施設なし','无配套住宿'],
'오피스 도보 10분':['10-min walk to office','オフィス徒歩10分','步行10分钟至办公室'],
'오피스·숙소 주소 분리':['office·lodging different addresses','オフィス・宿泊施設住所分離','办公室·住宿地址不同'],
'외곽 교통 · Wi-Fi 미확인':['outskirts transit · Wi-Fi unconfirmed','外れ交通・Wi-Fi未確認','郊区交通·Wi-Fi未确认'],
'외곽 교통 · 운영시간 미확인':['outskirts transit · hours unconfirmed','外れ交通・営業時間未確認','郊区交通·营业时间未确认'],
'운영 08~23시':['open 08:00–23:00','営業8〜23時','营业08:00–23:00'],
'운영 09~18시':['open 09:00–18:00','営業9〜18時','营业09:00–18:00'],
'운영 09~18시 · 미팅룸 X':['open 09:00–18:00 · no meeting room','営業9〜18時・会議室なし','营业09:00–18:00·无会议室'],
'운영 09~18시 · 숙소 이동':['open 09:00–18:00 · lodging commute','営業9〜18時・宿泊施設移動','营业09:00–18:00·住宿往返'],
'운영 09~18시 · 해안 교통':['open 09:00–18:00 · coastal transit','営業9〜18時・海岸交通','营业09:00–18:00·海岸交通'],
'운영 09~22시':['open 09:00–22:00','営業9〜22時','营业09:00–22:00'],
'운영 10~21시 · Wi-Fi':['open 10:00–21:00 · Wi-Fi','営業10〜21時・Wi-Fi','营业10:00–21:00·Wi-Fi'],
'운영시간 · 개인좌석 미확인':['hours · personal seat unconfirmed','営業時間・個人席未確認','营业时间·个人座位未确认'],
'운영시간 · 보안 미확인':['hours · security unconfirmed','営業時間・セキュリティ未確認','营业时间·安保未确认'],
'운영시간 미확인':['hours unconfirmed','営業時間未確認','营业时间未确认'],
'운영시간·보안':['hours·security','営業時間・セキュリティ','营业时间·安保'],
'운영시간·보안 미확인':['hours·security unconfirmed','営業時間・セキュリティ未確認','营业时间·安保未确认'],
'일부 숙소 이동':['partial lodging commute','一部宿泊施設移動','部分住宿往返'],
'장비 · 보안 · 운영시간':['equipment · security · hours','機器・セキュリティ・営業時間','设备·安保·营业时间'],
'장비 · 보안 · 운영시간 미확인':['equipment · security · hours unconfirmed','機器・セキュリティ・営業時間未確認','设备·安保·营业时间未确认'],
'장비 · 보안 미확인':['equipment · security unconfirmed','機器・セキュリティ未確認','设备·安保未确认'],
'장비 · 숙소 이동 미확인':['equipment · lodging commute unconfirmed','機器・宿泊施設移動未確認','设备·住宿往返未确认'],
'장비 · 회의실 최신정보 부족':['equipment · meeting room info outdated','機器・会議室の最新情報不足','设备·会议室信息不全'],
'장비 미확인':['equipment unconfirmed','機器未確認','设备未确认'],
'장비 충실 · 숙박 품질 한계':['equipment adequate · lodging quality limited','機器充実・宿泊品質限界','设备齐全·住宿品质有限'],
'장비·Wi-Fi 미확인':['equipment·Wi-Fi unconfirmed','機器・Wi-Fi未確認','设备·Wi-Fi未确认'],
'장비·보안':['equipment·security','機器・セキュリティ','设备·安保'],
'장비·보안 미확인':['equipment·security unconfirmed','機器・セキュリティ未確認','设备·安保未确认'],
'장비·운영시간':['equipment·hours','機器・営業時間','设备·营业时间'],
'장시간 운영 미확인':['extended hours unconfirmed','長時間営業未確認','长时间营业未确认'],
'적합':['Fit','適合','适合'],
'전 좌석 27인치':['27" monitor at every seat','全席27インチ','全座位27英寸显示器'],
'전 좌석 모션데스크':['motorized desk at every seat','全席昇降デスク','全座位升降桌'],
'전용좌석 · 운영시간 미확인':['dedicated seat · hours unconfirmed','専用席・営業時間未確認','专用座位·营业时间未确认'],
'정원 10석':['Capacity 10','定員10席','定员10座'],
'정원 10석 · Wi-Fi 미확인':['Capacity 10 · Wi-Fi unconfirmed','定員10席・Wi-Fi未確認','定员10座·Wi-Fi未确认'],
'정원 10석 · 객실 미확인':['Capacity 10 · room unconfirmed','定員10席・客室未確認','定员10座·客房未确认'],
'정원 10석 · 산간 교통':['Capacity 10 · mountain-area transit','定員10席・山間交通','定员10座·山区交通'],
'정원 10석 · 외곽 교통':['Capacity 10 · outskirts transit','定員10席・外れ交通','定员10座·郊区交通'],
'정원 10석 · 해안 외곽':['Capacity 10 · coastal outskirts','定員10席・海岸外れ','定员10座·海岸边缘地区'],
'정원 10석 · 회의실 X':['Capacity 10 · no meeting room','定員10席・会議室なし','定员10座·无会议室'],
'정원 10석·Wi-Fi':['Capacity 10·Wi-Fi','定員10席・Wi-Fi','定员10座·Wi-Fi'],
'정원 10석·교통':['Capacity 10·transit','定員10席・交通','定员10座·交通'],
'정원 11석':['Capacity 11','定員11席','定员11座'],
'정원 12석':['Capacity 12','定員12席','定员12座'],
'정원 13석':['Capacity 13','定員13席','定员13座'],
'정원 14석':['Capacity 14','定員14席','定员14座'],
'정원 4석 · Wi-Fi 미확인':['Capacity 4 · Wi-Fi unconfirmed','定員4席・Wi-Fi未確認','定员4座·Wi-Fi未确认'],
'정원 4석 · 회의실 X':['Capacity 4 · no meeting room','定員4席・会議室なし','定员4座·无会议室'],
'정원 5석':['Capacity 5','定員5席','定员5座'],
'정원 5석 · Wi-Fi 미확인':['Capacity 5 · Wi-Fi unconfirmed','定員5席・Wi-Fi未確認','定员5座·Wi-Fi未确认'],
'정원 5석 · 회의실 X':['Capacity 5 · no meeting room','定員5席・会議室なし','定员5座·无会议室'],
'정원 6석 · Wi-Fi 미확인':['Capacity 6 · Wi-Fi unconfirmed','定員6席・Wi-Fi未確認','定员6座·Wi-Fi未确认'],
'정원 6석 · 회의실 X':['Capacity 6 · no meeting room','定員6席・会議室なし','定员6座·无会议室'],
'정원 7석 · 운영시간 미확인':['Capacity 7 · hours unconfirmed','定員7席・営業時間未確認','定员7座·营业时间未确认'],
'정원 7석 · 회의실 X':['Capacity 7 · no meeting room','定員7席・会議室なし','定员7座·无会议室'],
'정원 8석':['Capacity 8','定員8席','定员8座'],
'정원 8석 · Wi-Fi 미확인':['Capacity 8 · Wi-Fi unconfirmed','定員8席・Wi-Fi未確認','定员8座·Wi-Fi未确认'],
'정원 8석·구좌 외곽':['Capacity 8·Gujwa outskirts','定員8席・グジュア外れ','定员8座·旧左郊区'],
'정원 8석·남원 외곽':['Capacity 8·Namwon outskirts','定員8席・南元外れ','定员8座·南元郊区'],
'정원 8석·장비 없음':['Capacity 8·no equipment','定員8席・機器なし','定员8座·无设备'],
'정원 9석':['Capacity 9','定員9席','定员9座'],
'정원 9석·숙소 이동':['Capacity 9·lodging commute','定員9席・宿泊施設移動','定员9座·住宿往返'],
'제주시 도심·15석':['Jeju City center·15 seats','済州市都心・15席','济州市市中心·15座'],
'제주시 도심·장비':['Jeju City center·equipment','済州市都心・機器','济州市市中心·设备'],
'조식 예약 · 24h':['breakfast booking · 24h','朝食予約・24時間','早餐预约·24小时'],
'조식·프런트 미확인':['breakfast·front desk unconfirmed','朝食・フロント未確認','早餐·前台未确认'],
'조천읍 교통':['Jocheon-eup transit','ジョチョン邑交通','朝天邑交通'],
'좌석관리 · Wi-Fi 미확인':['seat management · Wi-Fi unconfirmed','席管理・Wi-Fi未確認','座位管理·Wi-Fi未确认'],
'좌석관리 · 회의실 미확인':['seat management · meeting room unconfirmed','席管理・会議室未確認','座位管理·会议室未确认'],
'지역교통 · 숙박 품질':['local transit · lodging quality','地域交通・宿泊品質','当地交通·住宿品质'],
'지역교통 · 숙소 이동':['local transit · lodging commute','地域交通・宿泊施設移動','当地交通·住宿往返'],
'지역교통 · 운영시간 미확인':['local transit · hours unconfirmed','地域交通・営業時間未確認','当地交通·营业时间未确认'],
'지역교통 제한':['limited local transit','地域交通制限','当地交通受限'],
'지역교통 제한 · 객실 18실':['limited local transit · 18 rooms','地域交通制限・客室18室','当地交通受限·18间客房'],
'지하 1층 동일 건물':['same building, basement 1','地下1階同一建物','同楼地下一层'],
'진주 외곽·Wi-Fi':['Jinju outskirts·Wi-Fi','晋州外れ・Wi-Fi','晋州郊区·Wi-Fi'],
'참가신청서·증빙사진 절차':['application form·proof-photo procedure','参加申請書・証明写真手続き','参加申请表·凭证照片流程'],
'창원 외곽·Wi-Fi':['Changwon outskirts·Wi-Fi','昌原外れ・Wi-Fi','昌原郊区·Wi-Fi'],
'청풍면 외곽 · 절차 미확인':['Cheongpung-myeon outskirts · procedure unconfirmed','チョンプン面外れ・手続き未確認','青风面郊区·流程未确认'],
'체험 프로그램 X':['no experience program','体験プログラムなし','无体验项目'],
'카페형 · Wi-Fi 미확인':['cafe-type · Wi-Fi unconfirmed','カフェ型・Wi-Fi未確認','咖啡厅型·Wi-Fi未确认'],
'카페형 · 보안 · 운영시간':['cafe-type · security · hours','カフェ型・セキュリティ・営業時間','咖啡厅型·安保·营业时间'],
'카페형 · 운영 09~18시':['cafe-type · open 09:00–18:00','カフェ型・営業9〜18時','咖啡厅型·营业09:00–18:00'],
'카페형 · 해안 외곽':['cafe-type · coastal outskirts','カフェ型・海岸外れ','咖啡厅型·海岸边缘地区'],
'카페형 · 휴무일 다수':['cafe-type · frequently closed','カフェ型・休業日多数','咖啡厅型·休息日较多'],
'캠핑 숙소 · 센터 이동':['camping lodging · center commute','キャンプ宿泊・センター移動','露营住宿·中心往返'],
'캠핑 숙소 · 예약체계 미확인':['camping lodging · booking system unconfirmed','キャンプ宿泊・予約体系未確認','露营住宿·预约系统未确认'],
'캠핑장 · Wi-Fi 미확인':['campsite · Wi-Fi unconfirmed','キャンプ場・Wi-Fi未確認','露营地·Wi-Fi未确认'],
'터미널 5분 · 6층':['5-min to terminal · 6th floor','ターミナル5分・6階','距客运站5分钟·6层'],
'피트니스 · 셀프빨래방':['fitness · self-service laundromat','フィットネス・セルフランドリー','健身房·自助洗衣房'],
'필수 요건 미충족':['mandatory requirement not met','必須要件未達','未达必需条件'],
'한경면 외곽':['Hangyeong-myeon outskirts','ハンギョン面外れ','翰京面郊区'],
'해안 외곽 · Wi-Fi 미확인':['coastal outskirts · Wi-Fi unconfirmed','海岸外れ・Wi-Fi未確認','海岸边缘地区·Wi-Fi未确认'],
'해안 외곽 · 운영 09~18시':['coastal outskirts · open 09:00–18:00','海岸外れ・営業9〜18時','海岸边缘地区·营业09:00–18:00'],
'해안 외곽·Wi-Fi':['coastal outskirts·Wi-Fi','海岸外れ・Wi-Fi','海岸边缘地区·Wi-Fi'],
'해안 외곽·숙소 이동':['coastal outskirts·lodging commute','海岸外れ・宿泊施設移動','海岸边缘地区·住宿往返'],
'호텔 1층 · 24h':['hotel 1F · 24h','ホテル1階・24時間','酒店1层·24小时'],
'호텔 30석·회의실':['hotel, 30 seats·meeting room','ホテル30席・会議室','酒店30座·会议室'],
'호텔 내 숙박':['lodging within hotel','ホテル内宿泊','酒店内住宿'],
'회의실 1개 (15석)':['1 meeting room (15 seats)','会議室1室(15席)','1个会议室(15座)'],
'회의실 X':['no meeting room','会議室なし','无会议室'],
'회의실 X · 보안 미확인':['no meeting room · security unconfirmed','会議室なし・セキュリティ未確認','无会议室·安保未确认'],
'회의실 X · 운영 09~18시':['no meeting room · open 09:00–18:00','会議室なし・営業9〜18時','无会议室·营业09:00–18:00'],
'회의실 X · 장비 제한':['no meeting room · limited equipment','会議室なし・機器制限','无会议室·设备有限'],
'회의실 · 객실 품질 한계':['meeting room · room quality limits','会議室・客室品質限界','会议室·客房品质有限'],
'회의실 · 복합기 미확인':['meeting room · copier unconfirmed','会議室・複合機未確認','会议室·复合机未确认'],
'회의실 · 빔프로젝터':['meeting room · projector','会議室・プロジェクター','会议室·投影仪'],
'회의실 · 장비 미확인':['meeting room · equipment unconfirmed','会議室・機器未確認','会议室·设备未确认'],
'회의실 미확인':['meeting room unconfirmed','会議室未確認','会议室未确认'],
'회의실 수 · 예약 미확인':['meeting room count · booking unconfirmed','会議室数・予約未確認','会议室数量·预约未确认'],
'회의실 수 미확인':['meeting room count unconfirmed','会議室数未確認','会议室数量未确认'],
'회의실·장비 X':['no meeting room·equipment','会議室・機器なし','无会议室·设备'],
'회의실형 · Wi-Fi 미확인':['meeting-room type · Wi-Fi unconfirmed','会議室型・Wi-Fi未確認','会议室型·Wi-Fi未确认'],
'해당 시설 없음':['no facilities match','該当施設なし','暂无符合条件设施'],
'1월':['Jan','1月','1月'],'2월':['Feb','2月','2月'],'3월':['Mar','3月','3月'],'4월':['Apr','4月','4月'],
'5월':['May','5月','5月'],'6월':['Jun','6月','6月'],'7월':['Jul','7月','7月'],'8월':['Aug','8月','8月'],
'9월':['Sep','9月','9月'],'10월':['Oct','10月','10月'],'11월':['Nov','11月','11月'],'12월':['Dec','12月','12月']
};
Object.assign(KW, {
/* 직영점(BRANCHES) 명칭·지역·부제 */
'DearMonday 경주 라한셀렉트호텔점':['DearMonday Gyeongju Lahan Select Hotel','DearMonday 慶州ラハンセレクトホテル店','DearMonday 庆州拉韩精选酒店店'],
'DearMonday 경주 체스터톤스호텔점':['DearMonday Gyeongju Chestertons Hotel','DearMonday 慶州チェスタートンズホテル店','DearMonday 庆州切斯特顿酒店店'],
'DearMonday 제주 마레보비치호텔점':['DearMonday Jeju Mare Beach Hotel','DearMonday 済州マレボビーチホテル店','DearMonday 济州玛雷海滩酒店店'],
'DearMonday 시흥 르컬렉티브점':['DearMonday Siheung Le Collective','DearMonday 始興ルコレクティブ店','DearMonday 始兴Le Collective店'],
'DearMonday 경주 춘추관점':['DearMonday Gyeongju Chunchugwan','DearMonday 慶州春秋館店','DearMonday 庆州春秋馆店'],
'DearMonday 제주 풀빌라소랑점':['DearMonday Jeju Pool Villa Sorang','DearMonday 済州プールヴィラソラン店','DearMonday 济州泳池别墅Sorang店'],
'DearMonday 시흥 어반스테이 거북섬점':['DearMonday Siheung Urbanstay Geobuk Island','DearMonday 始興アーバンステイ亀島店','DearMonday 始兴Urbanstay龟岛店'],
'DearMonday 어반스테이 당진터미널점':['DearMonday Urbanstay Dangjin Terminal','DearMonday アーバンステイ唐津ターミナル店','DearMonday Urbanstay唐津客运站店'],
'DearMonday 해남126 호텔점':['DearMonday Haenam126 Hotel','DearMonday 海南126ホテル店','DearMonday 海南126酒店店'],
'DearMonday 춘천 남이섬 호텔 정관루점':['DearMonday Chuncheon Nami Island Jeonggwanru Hotel','DearMonday 春川南怡島ホテル・チョングァンル店','DearMonday 春川南怡岛酒店井观楼店'],
'DearMonday 제주 소노캄 제주점':['DearMonday Jeju Sono Calm Jeju','DearMonday 済州ソノカム済州店','DearMonday 济州索诺卡姆济州店'],
'경상북도 경주시':['Gyeongju, Gyeongsangbuk-do','慶尚北道慶州市','庆尚北道庆州市'],
'제주도 제주시':['Jeju City, Jeju-do','済州道済州市','济州道济州市'],
'경기도 시흥시':['Siheung, Gyeonggi-do','京畿道始興市','京畿道始兴市'],
'충청남도 당진시':['Dangjin, Chungcheongnam-do','忠清南道唐津市','忠清南道唐津市'],
'전라남도 해남군':['Haenam, Jeollanam-do','全羅南道海南郡','全罗南道海南郡'],
'강원도 춘천시':['Chuncheon, Gangwon-do','江原道春川市','江原道春川市'],
'제주도 서귀포시':['Seogwipo, Jeju-do','済州道西帰浦市','济州道西归浦市'],
'5성 호텔 프리미엄 오피스':['5-star hotel premium office','5つ星ホテルのプレミアムオフィス','5星级酒店高端办公室'],
'경주 중심지 신규 호텔':['New hotel in central Gyeongju','慶州中心部の新規ホテル','庆州市中心新开酒店'],
'곽지해변 애월 오션뷰':['Ocean view near Gwakji Beach, Aewol','クァクチ海水浴場・涯月オーシャンビュー','涯月郭支海滩海景'],
'서울 근교 웨이브파크':['Wave Park near Seoul','ソウル近郊ウェーブパーク','首尔近郊冲浪公园'],
'황리단길 독채 한옥':['Private hanok on Hwangnidan-gil','皇理団キル一棟貸し韓屋','皇理团街独栋韩屋'],
'제주 풀빌라 워케이션':['Jeju pool-villa workation','済州プールヴィラワーケーション','济州泳池别墅式工作度假'],
'탁 트인 바다 조망':['Open ocean view','開けた海の眺望','开阔海景'],
'24석 최대 규모 오피스':['Largest office, 24 seats','24席の最大規模オフィス','24座最大规模办公室'],
'서해 석양 파노라마':['West Sea sunset panorama','西海夕日パノラマ','西海夕阳全景'],
'남이섬 한옥 호텔':['Nami Island hanok hotel','南怡島韓屋ホテル','南怡岛韩屋酒店'],
'표선 바다와 맞닿은 곳':['Right on Pyoseon Beach','表善の海に面した場所','紧邻表善海边'],
/* DM_MUNICIPAL_GROUPS 사업명·시설명·출처 */
'농식품부 농촌형 워케이션':['MAFRA Rural-Type Workation','農林畜産食品部 農村型ワーケーション','农林畜产食品部 农村型工作度假'],
'가평 워케이션':['Gapyeong Workation','加平ワーケーション','加平工作度假'],
'정읍 송죽마을':['Jeongeup Songjuk Village','井邑ソンジュク村','井邑松竹村'],
'홍천 무네미마을':['Hongcheon Munemi Village','洪川ムネミ村','洪川无泥美村'],
'상주 객주촌':['Sangju Gaekju Village','尚州客主村','尚州客主村'],
'강릉 오션그레이트':['Gangneung Ocean Great','江陵オーシャングレート','江陵Ocean Great'],
'영천 한의마을':['Yeongcheon Hanui (Herbal Medicine) Village','永川ハニ村(漢方村)','永川韩医村'],
'남원 혼불체험관':['Namwon Honbul Experience Center','南原ホンブル体験館','南原魂火体验馆'],
'공주 힐스포레':['Gongju Hills Forest','公州ヒルズフォーレ','公州Hills Forest'],
'남해 오피스 닻':['Namhae Office Anchor','南海オフィス・タッ','南海Office锚'],
'곡성 러스틱타운':['Gokseong Rustic Town','谷城ラスティックタウン','谷城Rustic Town'],
'이천 산수유마을':['Icheon Sansuyu (Cornel) Village','利川サンスユ村(山茱萸村)','利川山茱萸村'],
'가평 호텔자라':['Gapyeong Hotel Jara','加平ホテルジャラ','加平Jara酒店'],
'가평 원스테이 쁘띠':['Gapyeong Onestay Petit','加平ワンステイプティ','加平Onestay Petit'],
'가평 W지우리조트':['Gapyeong W-Jiu Resort','加平Wジウリゾート','加平W智友度假村'],
'농림축산식품부 농촌 워케이션 사업 공식 발표 + 디어먼데이 예약 페이지 + 시설 공식/관광공사 정보':['MAFRA Rural Workation Program official announcement + DearMonday booking page + facility official site/KTO info','農林畜産食品部 農村ワーケーション事業公式発表 + DearMonday予約ページ + 施設公式/観光公社情報','农林畜产食品部 农村工作度假项目官方公告 + DearMonday预订页面 + 设施官网/韩国观光公社信息'],
'가평군 워케이션 공식 협력 숙박시설 목록 + 자라섬 워케이션센터 공식 안내 + 디어먼데이 예약 페이지':['Gapyeong County official partner lodging list + Jara Island Workation Center official guide + DearMonday booking page','加平郡ワーケーション公式協力宿泊施設リスト + チャラソムワーケーションセンター公式案内 + DearMonday予約ページ','加平郡工作度假官方合作住宿设施名单 + Jara岛工作度假中心官方指南 + DearMonday预订页面'],
/* 전국 지자체 광역권명(익명 표기) + 출처 */
'인천/경기권':['Incheon/Gyeonggi Region','仁川・京畿圏','仁川/京畿圈'],
'강원권':['Gangwon Region','江原圏','江原圈'],
'충청권':['Chungcheong Region','忠清圏','忠清圈'],
'전라권':['Jeolla Region','全羅圏','全罗圈'],
'대구/경북권':['Daegu/Gyeongbuk Region','大邱・慶北圏','大邱/庆北圈'],
'부산/울산/경남권':['Busan/Ulsan/Gyeongnam Region','釜山・蔚山・慶南圏','釜山/蔚山/庆南圈'],
'제주권':['Jeju Region','済州圏','济州圈'],
'시설':['Facility','施設','设施'],
'한국관광공사 2025 디렉토리북 · 시설 공식 웹사이트':['KTO 2025 Directory Book · facility official website','韓国観光公社2025ディレクトリブック・施設公式ウェブサイト','韩国观光公社2025年名录手册·设施官网'],
'한국관광공사 2025 디렉토리북 · 2026 제주 워케이션 공식 공고 · 시설 공식 웹사이트':['KTO 2025 Directory Book · 2026 Jeju Workation official notice · facility official website','韓国観光公社2025ディレクトリブック・2026済州ワーケーション公式公告・施設公式ウェブサイト','韩国观光公社2025年名录手册·2026济州工作度假官方公告·设施官网'],
/* 프로그램 유형(TYPES) 및 유형 카드 부속 문구 */
'출장 연계 업무형':['Business-Trip-Linked Work','出張連携業務型','出差关联办公型'],
'개인·소규모 출장 기반 단기 업무 워케이션':['Short-term work workation based on individual/small-group business trips','個人・小規模出張ベースの短期業務ワーケーション','以个人/小规模出差为基础的短期办公工作度假'],
'대중교통 접근성 · 출퇴근 난이도 · 개인 업무 시설 · Wifi · 이용 절차 · 운영 시간 · 지역 내 교통':['Transit access · Commute difficulty · Private workspace · Wifi · Usage process · Operating hours · Local transit','公共交通アクセス・通勤難易度・個人業務施設・Wifi・利用手続き・営業時間・地域内交通','公共交通可达性·通勤难度·个人办公设施·Wifi·使用流程·营业时间·当地交通'],
'팀/단체 워크샵형':['Team/Group Workshop','チーム/団体ワークショップ型','团队/团体工作坊型'],
'팀 단위 오프라인 협업 및 워크샵 집중':['Team-based offline collaboration and workshop focus','チーム単位のオフライン協業とワークショップに集中','以团队为单位的线下协作与工作坊集中型'],
'협업 시설 · 개인 업무 시설 · 객실 품질 · 체험 프로그램 · 이용 절차 · 출퇴근 난이도 · 업무 지원 장비':['Collaboration facilities · Private workspace · Room quality · Experience programs · Usage process · Commute difficulty · Work-support equipment','協業施設・個人業務施設・客室品質・体験プログラム・利用手続き・通勤難易度・業務支援機器','协作设施·个人办公设施·客房品质·体验项目·使用流程·通勤难度·办公支持设备'],
'정원 15석 이상만 해당':['Only fits capacity 15+','定員15席以上のみ該当','仅限定员15座以上'],
'몰입 프로젝트형':['Immersive Project','没入プロジェクト型','沉浸式项目型'],
'스프린트·집중 개발·프로젝트 완수형 체류':['Sprint-style, focused-development, project-completion stays','スプリント・集中開発・プロジェクト完遂型の滞在','冲刺式·集中开发·项目完成型停留'],
'개인 업무 시설 · 운영 시간 · Wifi · 업무 지원 장비 · 출퇴근 난이도 · 물리적 보안 · 협업 시설':['Private workspace · Operating hours · Wifi · Work-support equipment · Commute difficulty · Physical security · Collaboration facilities','個人業務施設・営業時間・Wifi・業務支援機器・通勤難易度・物理的セキュリティ・協業施設','个人办公设施·营业时间·Wifi·办公支持设备·通勤难度·物理安保·协作设施'],
'정규 근무형':['Regular Work','正規勤務型','正式办公型'],
'월 단위 분산 근무·리텐션 복지형 장기 체류':['Monthly distributed work, welfare-retention long-term stays','月単位の分散勤務・リテンション福利型長期滞在','按月分散办公·留存福利型长期停留'],
'객실 품질 · 운영 시간 · 이용 절차 · 지역 내 교통 · 체험 프로그램 · 대중교통 접근성 · 개인 업무 시설':['Room quality · Operating hours · Usage process · Local transit · Experience programs · Transit access · Private workspace','客室品質・営業時間・利用手続き・地域内交通・体験プログラム・公共交通アクセス・個人業務施設','客房品质·营业时间·使用流程·当地交通·体验项目·公共交通可达性·个人办公设施'],
'판정 항목':['Judgment Criteria','判定項目','判定项目'],
'해당':['Fits','該当','符合']
});
/* DataLab 대시보드: 광역 시·도 지역명 (REGION_ORDER, build_dashboard_data.py) */
Object.assign(KW, {
'서울특별시':['Seoul','ソウル特別市','首尔特别市'],
'경기도':['Gyeonggi-do','京畿道','京畿道'],
'인천광역시':['Incheon','仁川広域市','仁川广域市'],
'강원특별자치도':['Gangwon State','江原特別自治道','江原特别自治道'],
'충청남도':['Chungcheongnam-do','忠清南道','忠清南道'],
'충청북도':['Chungcheongbuk-do','忠清北道','忠清北道'],
'대전광역시':['Daejeon','大田広域市','大田广域市'],
'전라남도':['Jeollanam-do','全羅南道','全罗南道'],
'전북특별자치도':['Jeonbuk State','全北特別自治道','全北特别自治道'],
'광주광역시':['Gwangju','光州広域市','光州广域市'],
'경상북도':['Gyeongsangbuk-do','慶尚北道','庆尚北道'],
'대구광역시':['Daegu','大邱広域市','大邱广域市'],
'경상남도':['Gyeongsangnam-do','慶尚南道','庆尚南道'],
'부산광역시':['Busan','釜山広域市','釜山广域市'],
'울산광역시':['Ulsan','蔚山広域市','蔚山广域市'],
'제주도':['Jeju-do','済州道','济州道'],
'기타':['Other','その他','其他'],
'미확인':['Unconfirmed','未確認','未确认']
});
/* 자가진단 모달(QUESTIONS) 12개 문항 · 4개 선택지 — index/w2bi 등 여러 페이지 공용 모달 */
Object.assign(KW, {
'Wifi 환경 및 정보 보안':['Wifi Environment & Information Security','Wifi環境及び情報セキュリティ','Wifi环境及信息安全'],
'Wifi 자체를 제공하지 않음':['No Wifi provided at all','Wifiそのものを提供しない','完全不提供Wifi'],
'공용 Wifi만 제공':['Shared Wifi only','共用Wifiのみ提供','仅提供公共Wifi'],
'워케이션 전용 Wifi 제공':['Dedicated workation Wifi provided','ワーケーション専用Wifi提供','提供工作度假专用Wifi'],
'전용 Wifi + 기업 보안 요건(망분리 등) 지원 가능':['Dedicated Wifi + can support corporate security requirements (network segregation, etc.)','専用Wifi＋企業セキュリティ要件(ネットワーク分離等)対応可能','专用Wifi+可支持企业安全要求(网络隔离等)'],
'개인 업무 시설':['Private Workspace','個人業務施設','个人办公设施'],
'카페·로비 등 재고 관리·예약이 불가한 유사 업무공간':['Cafe/lobby-type space only, no seat inventory or booking management','カフェ・ロビー等、在庫管理・予約ができない類似業務空間','咖啡厅·大堂等无法进行库存管理·预约的类似办公空间'],
'전용 오피스는 있으나 좌석 관리 체계 없음':['Dedicated office exists but no seat management system','専用オフィスはあるが座席管理体系なし','有专用办公室但无座位管理体系'],
'사무실 수준 개인 좌석 + 정원 기반 관리':['Office-grade private seating + capacity-based management','オフィス水準の個人座席＋定員ベース管理','办公室级个人座位+按定员管理'],
'좌석 재고·예약 시스템이 자동 연동됨':['Seat inventory and booking system auto-integrated','座席在庫・予約システムが自動連動','座位库存·预约系统自动联动'],
'체험 프로그램':['Experience Programs','体験プログラム','体验项目'],
'업무 시간 중 체험 참가가 필수인 형태':['Participation mandatory during work hours','業務時間中の体験参加が必須の形態','工作时间内必须参加体验项目'],
'업무 외 시간 운영 프로그램 1개':['1 program offered outside work hours','業務外時間運営プログラム1個','工作时间外运营1个项目'],
'업무 외 시간 운영 프로그램 2개 이상':['2+ programs offered outside work hours','業務外時間運営プログラム2個以上','工作时间外运营2个以上项目'],
'2개 이상 + 사전 예약·결제 시스템 제공':['2+ programs + advance booking/payment system','2個以上＋事前予約・決済システム提供','2个以上项目+提供预约·支付系统'],
'객실 품질':['Room Quality','客室品質','客房品质'],
'공용 욕실·기본 침구만 (도미토리·캠핑장 등)':['Shared bathroom, basic bedding only (dormitory/camping, etc.)','共用浴室・基本寝具のみ(ドミトリー・キャンプ場等)','仅公用浴室·基本床品(多人间·露营地等)'],
'개인 욕실 + 기본 어메니티 구비':['Private bathroom + basic amenities','個人浴室＋基本アメニティ完備','独立浴室+配备基础用品'],
'호텔급 객실 (비데·욕조·다양한 타입)':['Hotel-grade room (bidet, bathtub, various types)','ホテル級客室(ビデ・浴槽・多様なタイプ)','酒店级客房(智能马桶·浴缸·多种房型)'],
'관광공사 3성 이상 (조식·부대시설·프런트·방음)':['KTO 3-star or above (breakfast, amenities, front desk, soundproofing)','観光公社3つ星以上(朝食・付帯施設・フロント・防音)','韩国观光公社3星级以上(早餐·配套设施·前台·隔音)'],
'이용 절차':['Usage Process','利用手続き','使用流程'],
'지원정책 없음 / 개인별 선별·환급 절차':['No support policy / individual screening & reimbursement process','支援政策なし／個人別選別・払戻手続き','无支持政策/个人筛选·报销流程'],
'개인 온라인 예약만 가능':['Individual online booking only','個人オンライン予約のみ可能','仅可个人在线预订'],
'기업 신청 가능 + 지원금 신청서 전산화':['Corporate application possible + digitized subsidy application','企業申請可能＋支援金申請書電算化','可企业申请+补贴申请书电子化'],
'기업 전용 절차 + 지원금·예약 통합 전산화 (출력·스캔 제로)':['Corporate-dedicated process + fully digitized subsidy/booking (zero printing/scanning)','企業専用手続き＋支援金・予約統合電算化(印刷・スキャンゼロ)','企业专用流程+补贴·预订一体化电子化(零打印·扫描)'],
'운영 시간':['Operating Hours','運営時間','营业时间'],
'9~6시만 운영, 주말·공휴일 미운영':['9-6 only, closed weekends/holidays','9~6時のみ運営、週末・祝日休業','仅9点至6点营业，周末·节假日不营业'],
'평일 연장 운영 (~22시)':['Extended weekday hours (until 22:00)','平日延長運営(~22時)','工作日延长营业(至22点)'],
'08~23시 등 장시간 운영':['Long hours, e.g. 08:00-23:00','08~23時等長時間運営','08点至23点等长时间营业'],
'24시간 연중 상시 운영':['Open 24/7 year-round','24時間年中無休運営','24小时全年无休营业'],
'물리적 보안':['Physical Security','物理的セキュリティ','物理安全'],
'출입 통제 체계·CCTV 없음':['No access control or CCTV','入退室管理体系・CCTVなし','无门禁管理体系·CCTV'],
'CCTV만 운영':['CCTV only','CCTVのみ運営','仅运营CCTV'],
'출입 통제 + CCTV 운영':['Access control + CCTV','入退室管理＋CCTV運営','门禁管理+CCTV'],
'출입 통제 + 예약 연동 + 방문자 전산 관리 + CCTV 녹화 보관':['Access control + booking integration + digital visitor management + CCTV recording archive','入退室管理＋予約連動＋来訪者電算管理＋CCTV録画保管','门禁管理+预约联动+访客电子化管理+CCTV录像存档'],
'협업 시설 (미팅룸)':['Collaboration Facilities (Meeting Rooms)','協業施設(ミーティングルーム)','协作设施(会议室)'],
'미팅룸 미제공':['No meeting room','ミーティングルーム未提供','不提供会议室'],
'미팅룸은 있으나 좌석 대비 부족':['Meeting room exists but insufficient for seat count','ミーティングルームはあるが座席数に対し不足','有会议室但相对座位数不足'],
'좌석 10석당 1개 확보 + 기본 시설':['1 room per 10 seats + basic facilities','座席10席あたり1室確保＋基本施設','每10个座位配备1间+基础设施'],
'좌석 10석당 1개 + 기본 시설 + 예약 관리 시스템':['1 per 10 seats + basic facilities + booking management system','座席10席あたり1室＋基本施設＋予約管理システム','每10个座位1间+基础设施+预约管理系统'],
'업무 지원 장비 및 시설':['Work-Support Equipment & Facilities','業務支援機器及び施設','办公支持设备及设施'],
'장비·시설 미제공':['No equipment or facilities','機器・施設未提供','不提供设备·设施'],
'모니터 정도만 제공':['Monitor only','モニター程度のみ提供','仅提供显示器'],
'모니터 + 복합기 + 탕비실':['Monitor + multifunction printer + pantry','モニター＋複合機＋給湯室','显示器+复合打印机+茶水间'],
'전 좌석 모니터 + 보관함 + 복합기 + 탕비실 + 폰부스':['Monitor at every seat + lockers + multifunction printer + pantry + phone booth','全座席モニター＋保管庫＋複合機＋給湯室＋フォンブース','全部座位配显示器+储物柜+复合打印机+茶水间+电话亭'],
'대중 교통 접근성':['Public Transit Access','公共交通アクセス','公共交通可达性'],
'자차 이동만 가능':['Car access only','自家用車移動のみ可能','仅可自驾抵达'],
'시외버스 등 제한적 접근':['Limited access via intercity bus, etc.','市外バス等限定的アクセス','仅可通过市际客车等有限方式抵达'],
'KTX·종합터미널 연계 가능':['KTX/bus terminal connection available','KTX・総合ターミナル連携可能','可衔接KTX·综合客运站'],
'KTX + 지역 내 이동 30분 이내':['KTX + within 30 min local transfer','KTX＋地域内移動30分以内','KTX+当地转乘30分钟以内'],
'지역 내 대중 교통':['Local Public Transit','地域内公共交通','当地公共交通'],
'버스·택시 이용이 현실적으로 불가':['Bus/taxi use practically unavailable','バス・タクシー利用が実質的に不可能','实际上无法使用公交·出租车'],
'제한적 (배차 간격·운행 시간 제약)':['Limited (infrequent, restricted hours)','限定的(配車間隔・運行時間制約)','有限(发车间隔·运营时间受限)'],
'버스·택시 원활하게 이용 가능':['Bus/taxi readily available','バス・タクシーを円滑に利用可能','可顺畅使用公交·出租车'],
'버스·택시·지역 모빌리티 등 다양한 수단 운영':['Various options: bus, taxi, local mobility services, etc.','バス・タクシー・地域モビリティ等多様な手段運営','运营公交·出租车·当地出行等多种方式'],
'출퇴근 난이도 (숙소↔오피스)':['Commute Difficulty (Lodging ↔ Office)','通勤難易度(宿泊↔オフィス)','通勤难度(住宿↔办公室)'],
'수단 무관 30분 이상 소요':['30+ min regardless of transport','手段問わず30分以上所要','无论何种方式均需30分钟以上'],
'차량 10~30분 소요':['10-30 min by vehicle','車両10~30分所要','车程10至30分钟'],
'도보 10분 이내':['Within 10 min walk','徒歩10分以内','步行10分钟以内'],
'동일 건물·동일 부지 (도보 거리)':['Same building/same site (walking distance)','同一建物・同一敷地(徒歩圏内)','同一栋楼·同一场地(步行距离)']
});

function trK(kr){
  if (kr == null) return kr;
  const lang = getLang();
  if (lang === 'ko') return kr;
  const idx = lang === 'en' ? 0 : lang === 'ja' ? 1 : 2;
  const hit = KW[kr];
  if (hit) return hit[idx];
  /* 지역명 접두어 + " 시설 " + 번호 패턴(예: "인천/경기권 시설 01")을 분해해 번역 */
  const m = /^(.+) 시설 (\d+)$/.exec(kr);
  if (m && KW[m[1]]) return `${KW[m[1]][idx]} ${KW['시설'][idx]} ${m[2]}`;
  return kr;
}
const BRANCHES = [
  {n:'DearMonday 경주 라한셀렉트호텔점', r:'경상북도 경주시', cap:25, got:61, den:70, vd:'pass',
   tag:'5성 호텔 프리미엄 오피스', img:'assets/hero-indexes-clean.webp',
   ty:[['V','동일 건물 · 24h'],['V','25석 · 8인 협업석'],['V','전 좌석 27인치'],['V','5성급 · 뷔페']]},
  {n:'DearMonday 경주 체스터톤스호텔점', r:'경상북도 경주시', cap:11, got:61, den:70, vd:'pass',
   tag:'경주 중심지 신규 호텔', img:S3+'thumbnail/20250425_105427_04607886-7627-4b9e-a9e4-72ee89e9bf4a-%EC%99%B8%EB%B6%80%20(1).jpg',
   ty:[['V','동일 건물 · 24h'],[null,'정원 11석'],['V','24h · 전 좌석 모니터'],['V','수영장·워시가든 무료']]},
  {n:'DearMonday 제주 마레보비치호텔점', r:'제주도 제주시', cap:11, got:64, den:75, vd:'pass',
   tag:'곽지해변 애월 오션뷰', img:S3+'thumbnail/20250924_115523_97085817-6adb-479d-9894-06d2ec4296be-%EB%A7%88%EB%A0%88%EB%B3%B4%EB%B9%84%EC%B9%98%ED%98%B8%ED%85%94%20%EC%99%B8%EA%B4%80%20(3).jpg',
   ty:[['V','지하 1층 동일 건물'],[null,'정원 11석'],['V','회의실 · 빔프로젝터'],['V','40객실+ · 셀프세탁']]},
  {n:'DearMonday 시흥 르컬렉티브점', r:'경기도 시흥시', cap:15, got:61, den:75, vd:'pass',
   tag:'서울 근교 웨이브파크', img:S3+'images/3_20240913021849_thumb.jpg',
   ty:[['V','객실과 같은 건물'],['V','15석 · 회의실 예약 X'],['V','24h · 전 좌석 모니터'],['V','조식 예약 · 24h']]},
  {n:'DearMonday 경주 춘추관점', r:'경상북도 경주시', cap:11, got:68, den:85, vd:'pass',
   tag:'황리단길 독채 한옥', img:S3+'thumbnail/20250428_104941_d99619de-f1dc-4037-8a29-995ded7ca978-39_20240405153033_0_default.jpg',
   ty:[['V','신경주역 KTX 2시간'],[null,'정원 11석'],['V','전 좌석 모션데스크'],[null,'조식·프런트 미확인']]},
  {n:'DearMonday 제주 풀빌라소랑점', r:'제주도 제주시', cap:14, got:59, den:75, vd:'pass',
   tag:'제주 풀빌라 워케이션', img:S3+'thumbnail/20250425_111140_7c97a9f2-9bbd-4c15-9e46-251ac8d4b19d-9_20250312160100_0_svc.jpg',
   ty:[[null,'운영 08~23시'],[null,'정원 14석'],[null,'개방형 회의공간'],[null,'24h 미운영']]},
  {n:'DearMonday 시흥 어반스테이 거북섬점', r:'경기도 시흥시', cap:15, got:58, den:75, vd:'pass',
   tag:'탁 트인 바다 조망', img:S3+'thumbnail/20260210_122627_67f11ad6-01b2-4c23-ad09-92e6c7d12f44-%EC%8B%9C%ED%9D%A5%20%EC%96%B4%EB%B0%98%EC%8A%A4%ED%85%8C%EC%9D%B4%20%EA%B1%B0%EB%B6%81%EC%84%AC_%EC%A0%84%EA%B2%BD.jpg',
   ty:[['V','24h 운영'],[null,'회의실 1개 (15석)'],[null,'오피스 도보 10분'],['V','객실 세탁·주방 완비']]},
  {n:'DearMonday 어반스테이 당진터미널점', r:'충청남도 당진시', cap:24, got:58, den:75, vd:'hold',
   tag:'24석 최대 규모 오피스', img:S3+'thumbnail/20260507_104910_896fdc4d-c871-4527-8bfc-9b8b8e50fac8-_STL9624%20(1).jpg',
   ty:[['V*','터미널 5분 · 6층'],[null,'객실 정보 미확인'],['V*','24h · 회의실 2개'],[null,'체험 프로그램 X']]},
  {n:'DearMonday 해남126 호텔점', r:'전라남도 해남군', cap:8, got:57, den:75, vd:'pass',
   tag:'서해 석양 파노라마', img:S3+'thumbnail/20250829_153914_018f0a79-b8d0-4eb0-9805-1edc03401db6-%ED%95%B4%EB%82%A8%20126%20%EC%A0%84%EA%B2%BD%201.jpg',
   ty:[['V','호텔 1층 · 24h'],[null,'미팅룸 X · 8석'],[null,'미팅룸 X'],['V','피트니스 · 셀프빨래방']]},
  {n:'DearMonday 춘천 남이섬 호텔 정관루점', r:'강원도 춘천시', cap:12, got:46, den:65, vd:'hold',
   tag:'남이섬 한옥 호텔', img:S3+'thumbnail/20251104_155334_e6e70f1a-5865-4b17-b5cb-115ff817d72f-STL08526%20(1).jpg',
   ty:[[null,'운영 09~22시'],[null,'미팅룸 X · 12석'],[null,'24h 미운영 · 미팅룸 X'],[null,'객실 정보 미확인']]},
  {n:'DearMonday 제주 소노캄 제주점', r:'제주도 서귀포시', cap:12, got:49, den:70, vd:'fail',
   tag:'표선 바다와 맞닿은 곳', img:S3+'thumbnail/20260112_142926_0c09df99-bbe2-448a-beab-e0bc54434fcb-%EC%86%8C%EB%85%B8%EC%BA%84%20%EC%A0%9C%EC%A3%BC.jpg',
   ty:[[null,'필수 요건 미충족'],[null,'미팅룸 X'],[null,'복합기·미팅룸 X'],[null,'필수 요건 미충족']]}
];

/* 전국 지자체 시설 - 광역 단위 지역 A 1차 테스트 진단
   출처: 한국관광공사 2025 디렉토리북 pp.5-11 + 시설 공식 웹사이트 (2026-07-29 확인)
   공개 화면에서는 시설명을 광역지자체별 익명 코드로 표기한다. */
const RAW_MUNICIPAL_GROUPS = [
  {name:'광역 단위 지역 A', date:'2026.07.29', source:'한국관광공사 2025 디렉토리북 · 시설 공식 웹사이트',
   summary:{total:9, pass:0, fail:5, hold:4, avg:55.2}, facilities:[
    {n:'광역 단위 지역 A-1', cap:60, idx:64.6, vd:'hold', ty:[[null,'Wi-Fi · 숙소 이동 미확인'],[null,'객실 품질 미확인'],[null,'Wi-Fi · 물리 보안 미확인'],[null,'객실 · 숙소 이동 미확인']]},
    {n:'광역 단위 지역 A-2', cap:75, idx:54.0, vd:'fail', ty:[[null,'필수 요건 미충족'],[null,'75석 · 미팅룸 수 미확인'],[null,'Wi-Fi · 운영 시간 미확인'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 A-3', cap:20, idx:54.3, vd:'hold', ty:[[null,'Wi-Fi · 교통 미확인'],[null,'객실 · 미팅룸 미확인'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'객실 · 교통 미확인']]},
    {n:'광역 단위 지역 A-4', cap:20, idx:60.0, vd:'hold', ty:[[null,'Wi-Fi · 운영시간 미확인'],[null,'객실 · 미팅룸 미확인'],[null,'장비 · 보안 미확인'],[null,'객실 · 교통 미확인']]},
    {n:'광역 단위 지역 A-5', cap:15, idx:61.7, vd:'fail', ty:[[null,'필수 요건 미충족'],[null,'객실 기준 · 절차 미달'],[null,'Wi-Fi · 운영시간 미확인'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 A-6', cap:15, idx:68.0, vd:'fail', ty:[[null,'필수 요건 미충족'],[null,'미팅룸 · 장비 미확인'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 A-7', cap:10, idx:50.0, vd:'hold', ty:[[null,'Wi-Fi · 교통 미확인'],[null,'정원 10석 · 객실 미확인'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'객실 · 교통 미확인']]},
    {n:'광역 단위 지역 A-8', cap:10, idx:42.0, vd:'fail', ty:[[null,'필수 요건 미충족'],[null,'미팅룸 X · 정원 10석'],[null,'운영 09~18시 · 미팅룸 X'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 A-9', cap:30, idx:42.0, vd:'fail', ty:[[null,'필수 요건 미충족'],[null,'객실 품질 미확인'],[null,'Wi-Fi 보안 · 장비 미확인'],[null,'필수 요건 미충족']]}
  ]},
  {name:'광역 단위 지역 B', date:'2026.07.29', source:'한국관광공사 2025 디렉토리북 · 시설 공식 웹사이트',
   summary:{total:4, pass:2, fail:2, hold:0, avg:66.9}, facilities:[
    {n:'광역 단위 지역 B-1', cap:30, idx:80.0, vd:'pass', ty:[['V','동일 부지 · Wi-Fi'],['V','30석 · 체험 프로그램'],[null,'보안 · 운영시간 미확인'],['V','동일 부지 · 온라인 신청']]},
    {n:'광역 단위 지역 B-2', cap:10, idx:66.2, vd:'pass', ty:[[null,'교통 · 운영시간 미확인'],[null,'정원 10석'],[null,'보안 · 운영시간 미확인'],[null,'교통 · 객실 품질 한계']]},
    {n:'광역 단위 지역 B-3', cap:24, idx:61.3, vd:'fail', ty:[[null,'Wi-Fi 미확인 · 필수 미달'],[null,'체험 프로그램 X'],[null,'장비 · 보안 미확인'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 B-4', cap:30, idx:60.0, vd:'fail', ty:[[null,'Wi-Fi · 운영시간 미확인'],[null,'회의실 X'],[null,'회의실 X · 보안 미확인'],[null,'필수 요건 미충족']]}
   ]},
  {name:'광역 단위 지역 C', date:'2026.07.29', source:'한국관광공사 2025 디렉토리북 · 시설 공식 웹사이트',
   summary:{total:3, pass:1, fail:1, hold:1, avg:59.4}, facilities:[
    {n:'광역 단위 지역 C-1', cap:20, idx:50.8, vd:'fail', ty:[[null,'도서 접근 · Wi-Fi 미확인'],[null,'회의실 · 장비 미확인'],[null,'보안 · 운영시간 미확인'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 C-2', cap:20, idx:63.1, vd:'hold', ty:[[null,'Wi-Fi · 운영시간 미확인'],[null,'회의실 수 · 예약 미확인'],[null,'보안 · 운영시간 미확인'],[null,'숙소별 이동시간 미확인']]},
    {n:'광역 단위 지역 C-3', cap:50, idx:64.4, vd:'pass', ty:[[null,'운영 09~18시'],[null,'회의실 수 미확인'],[null,'보안 · 장시간 운영 미달'],[null,'숙소 이동 · 서류 절차']]}
   ]},
  {name:'광역 단위 지역 D', date:'2026.07.29', source:'한국관광공사 2025 디렉토리북 · 시설 공식 웹사이트',
   summary:{total:7, pass:1, fail:6, hold:0, avg:62.0}, facilities:[
    {n:'광역 단위 지역 D-1', cap:10, idx:60.0, vd:'fail', ty:[[null,'Wi-Fi · 운영시간 미확인'],[null,'정원 10석'],[null,'장비 · 보안 미확인'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 D-2', cap:20, idx:58.8, vd:'fail', ty:[[null,'카페형 · 운영 09~18시'],[null,'회의실 X'],[null,'회의실 X · 보안 미확인'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 D-3', cap:4, idx:58.7, vd:'fail', ty:[[null,'정원 4석 · Wi-Fi 미확인'],[null,'정원 4석 · 회의실 X'],[null,'장비 · 보안 미확인'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 D-4', cap:50, idx:61.3, vd:'fail', ty:[[null,'카페형 · Wi-Fi 미확인'],[null,'회의실 X'],[null,'장비 · 보안 미확인'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 D-5', cap:30, idx:70.0, vd:'pass', ty:[[null,'운영 09~18시'],['V','30석 · 회의실·장비'],[null,'보안 · 장시간 운영 미달'],[null,'서류·증빙사진 절차']]},
    {n:'광역 단위 지역 D-6', cap:20, idx:65.3, vd:'fail', ty:[[null,'카페형 · Wi-Fi 미확인'],[null,'회의실 X'],[null,'장비 · 보안 미확인'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 D-7', cap:16, idx:60.0, vd:'fail', ty:[[null,'산악권 교통 · 운영 09~18시'],[null,'회의실 X'],[null,'장비 · 보안 미확인'],[null,'필수 요건 미충족']]}
   ]},
  {name:'광역 단위 지역 E', date:'2026.07.29', source:'한국관광공사 2025 디렉토리북 · 시설 공식 웹사이트',
   summary:{total:6, pass:1, fail:4, hold:1, avg:64.1}, facilities:[
    {n:'광역 단위 지역 E-1', cap:30, idx:66.7, vd:'pass', ty:[[null,'운영 09~18시 · 숙소 이동'],[null,'캠핑 숙소 · 예약체계 미확인'],[null,'보안 · 장시간 운영 미달'],[null,'캠핑 숙소 · 센터 이동']]},
    {n:'광역 단위 지역 E-2', cap:13, idx:63.5, vd:'hold', ty:[[null,'Wi-Fi · 보안 미확인'],[null,'정원 13석'],[null,'Wi-Fi · 장비 · 보안 미확인'],[null,'Wi-Fi · 지역교통 제한']]},
    {n:'광역 단위 지역 E-3', cap:10, idx:68.9, vd:'fail', ty:[[null,'정원 10석 · 외곽 교통'],[null,'정원 10석'],[null,'물리 보안 미확인'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 E-4', cap:5, idx:64.7, vd:'fail', ty:[[null,'정원 5석 · 회의실 X'],[null,'정원 5석 · 회의실 X'],[null,'회의실 X · 보안 미확인'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 E-5', cap:6, idx:55.3, vd:'fail', ty:[[null,'카페형 · 휴무일 다수'],[null,'정원 6석 · 회의실 X'],[null,'회의실 X · 운영 09~18시'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 E-6', cap:13, idx:65.3, vd:'fail', ty:[[null,'Wi-Fi · 운영시간 미확인'],[null,'정원 13석'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'필수 요건 미충족']]}
   ]},
  {name:'광역 단위 지역 F', date:'2026.07.29', source:'한국관광공사 2025 디렉토리북 · 시설 공식 웹사이트',
   summary:{total:14, pass:3, fail:5, hold:6, avg:68.2}, facilities:[
    {n:'광역 단위 지역 F-1', cap:35, idx:62.2, vd:'fail', ty:[[null,'운영 09~18시'],[null,'장비 · 회의실 최신정보 부족'],[null,'보안 · 장시간 운영 미달'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 F-2', cap:50, idx:77.5, vd:'pass', ty:[[null,'운영시간 · 보안 미확인'],['V','50석 · 회의실·복합기'],[null,'운영시간 · 보안 미확인'],[null,'운영시간 미확인']]},
    {n:'광역 단위 지역 F-3', cap:12, idx:73.8, vd:'hold', ty:[[null,'고객대기실형 · Wi-Fi 미확인'],[null,'정원 12석'],[null,'장비 · 보안 · 운영시간'],[null,'Wi-Fi · 전용좌석 미확인']]},
    {n:'광역 단위 지역 F-4', cap:20, idx:73.8, vd:'hold', ty:[[null,'Wi-Fi · 운영시간 미확인'],[null,'회의실 · 장비 미확인'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'전용좌석 · 운영시간 미확인']]},
    {n:'광역 단위 지역 F-5', cap:15, idx:69.2, vd:'hold', ty:[[null,'외곽 교통 · Wi-Fi 미확인'],[null,'회의실 · 장비 미확인'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'전용좌석 · 운영시간 미확인']]},
    {n:'광역 단위 지역 F-6', cap:40, idx:63.1, vd:'fail', ty:[[null,'Wi-Fi · 운영시간 미확인'],[null,'회의실 · 장비 미확인'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 F-7', cap:150, idx:63.1, vd:'fail', ty:[[null,'Wi-Fi · 운영시간 미확인'],[null,'좌석관리 · 회의실 미확인'],[null,'Wi-Fi · 장비 · 보안 미확인'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 F-8', cap:15, idx:63.1, vd:'fail', ty:[[null,'Wi-Fi · 운영시간 미확인'],[null,'회의실 · 장비 미확인'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 F-9', cap:55, idx:63.1, vd:'fail', ty:[[null,'Wi-Fi · 운영시간 미확인'],[null,'객실 22실 · 회의실 미확인'],[null,'Wi-Fi · 장비 · 보안 미확인'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 F-10', cap:52, idx:62.7, vd:'hold', ty:[[null,'Wi-Fi · 운영시간 미확인'],[null,'회의실 · 복합기 미확인'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'숙소 품질 편차 · 지역교통']]},
    {n:'광역 단위 지역 F-11', cap:20, idx:75.4, vd:'hold', ty:[[null,'Wi-Fi · 운영시간 미확인'],['V*','20석 · 동일 호텔'],[null,'장비 · 보안 · 운영시간'],[null,'Wi-Fi · 운영시간 미확인']]},
    {n:'광역 단위 지역 F-12', cap:64, idx:67.5, vd:'pass', ty:[[null,'숙소 이동 · 운영시간 미확인'],[null,'보안 · 운영시간 미확인'],[null,'보안 · 운영시간 미확인'],[null,'오피스·숙소 주소 분리']]},
    {n:'광역 단위 지역 F-13', cap:45, idx:73.3, vd:'pass', ty:[[null,'산악권 교통'],['V','45석 · 회의실·체험'],[null,'물리 보안 미확인'],[null,'지역교통 제한']]},
    {n:'광역 단위 지역 F-14', cap:10, idx:66.7, vd:'hold', ty:[[null,'Wi-Fi · 운영시간 미확인'],[null,'정원 10석'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'산악권 교통 · 절차 미확인']]}
   ]},
  {name:'광역 단위 지역 G', date:'2026.07.29', source:'한국관광공사 2025 디렉토리북 · 시설 공식 웹사이트',
   summary:{total:2, pass:0, fail:0, hold:2, avg:67.6}, facilities:[
    {n:'광역 단위 지역 G-1', cap:12, idx:67.1, vd:'hold', ty:[[null,'Wi-Fi · 운영시간 미확인'],[null,'정원 12석'],[null,'Wi-Fi · 장비 · 보안 미확인'],[null,'산악권 교통 · 운영시간 미확인']]},
    {n:'광역 단위 지역 G-2', cap:45, idx:68.0, vd:'hold', ty:[[null,'Wi-Fi · 운영시간 미확인'],[null,'운영시간 · 보안 미확인'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'청풍면 외곽 · 절차 미확인']]}
   ]},
  {name:'광역 단위 지역 H', date:'2026.07.29', source:'한국관광공사 2025 디렉토리북 · 시설 공식 웹사이트',
   summary:{total:13, pass:2, fail:1, hold:10, avg:67.3}, facilities:[
    {n:'광역 단위 지역 H-1', cap:20, idx:70.7, vd:'pass', ty:[[null,'Wi-Fi · 운영시간 미확인'],[null,'회의실 미확인'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'숙소 이동 · 운영시간 미확인']]},
    {n:'광역 단위 지역 H-2', cap:30, idx:69.2, vd:'hold', ty:[[null,'카페형 · Wi-Fi 미확인'],[null,'회의실 · 장비 미확인'],[null,'카페형 · 보안 · 운영시간'],[null,'외곽 교통 · 운영시간 미확인']]},
    {n:'광역 단위 지역 H-3', cap:50, idx:64.0, vd:'hold', ty:[[null,'Wi-Fi · 산간 교통 미확인'],[null,'객실 4실 · 복합기 미확인'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'숙박 수용력 · 지역교통 제한']]},
    {n:'광역 단위 지역 H-4', cap:12, idx:61.3, vd:'hold', ty:[[null,'Wi-Fi · 산간 교통 미확인'],[null,'정원 12석'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'객실 2실 · 지역교통 제한']]},
    {n:'광역 단위 지역 H-5', cap:20, idx:68.6, vd:'hold', ty:[[null,'Wi-Fi · 운영시간 미확인'],[null,'회의실 X'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'숙소 이동 · 운영시간 미확인']]},
    {n:'광역 단위 지역 H-6', cap:28, idx:66.7, vd:'hold', ty:[[null,'도서 접근 · Wi-Fi 미확인'],[null,'회의실 X · 장비 제한'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'선박 접근 · 섬 교통 제한']]},
    {n:'광역 단위 지역 H-7', cap:30, idx:72.0, vd:'pass', ty:[[null,'Wi-Fi · 운영시간 미확인'],[null,'숙소 이동 · 보안 미확인'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'광역교통 · 숙소 이동']]},
    {n:'광역 단위 지역 H-8', cap:5, idx:58.5, vd:'fail', ty:[[null,'정원 5석 · Wi-Fi 미확인'],[null,'정원 5석 · 회의실 X'],[null,'장비 · 보안 · 운영시간 미확인'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 H-9', cap:7, idx:72.9, vd:'hold', ty:[[null,'정원 7석 · 운영시간 미확인'],[null,'정원 7석 · 회의실 X'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'외곽 교통 · 운영시간 미확인']]},
    {n:'광역 단위 지역 H-10', cap:6, idx:68.6, vd:'hold', ty:[[null,'정원 6석 · Wi-Fi 미확인'],[null,'정원 6석 · 회의실 X'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'외곽 교통 · 운영시간 미확인']]},
    {n:'광역 단위 지역 H-11', cap:10, idx:65.7, vd:'hold', ty:[[null,'정원 10석 · Wi-Fi 미확인'],[null,'정원 10석 · 회의실 X'],[null,'장비 · 보안 · 운영시간 미확인'],[null,'외곽 교통 · 운영시간 미확인']]},
    {n:'광역 단위 지역 H-12', cap:8, idx:73.3, vd:'hold', ty:[[null,'미팅룸형 · Wi-Fi 미확인'],[null,'정원 8석'],[null,'개인업무 좌석 · 보안 미확인'],[null,'운영시간 · 개인좌석 미확인']]},
    {n:'광역 단위 지역 H-13', cap:15, idx:64.0, vd:'hold', ty:[[null,'해안 외곽 · Wi-Fi 미확인'],[null,'숙소 이동 · 운영시간 미확인'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'지역교통 · 숙소 이동']]}
   ]},
  {name:'광역 단위 지역 I', date:'2026.07.29', source:'한국관광공사 2025 디렉토리북 · 시설 공식 웹사이트',
   summary:{total:15, pass:2, fail:8, hold:5, avg:63.8}, facilities:[
    {n:'광역 단위 지역 I-1', cap:64, idx:78.7, vd:'pass', ty:[[null,'Wi-Fi · 운영시간 미확인'],['V','64석 · 회의실·체험'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'산간 교통 · 운영시간 미확인']]},
    {n:'광역 단위 지역 I-2', cap:179, idx:65.3, vd:'fail', ty:[[null,'회의실형 · Wi-Fi 미확인'],[null,'상시 전용좌석 미달'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 I-3', cap:40, idx:70.8, vd:'hold', ty:[[null,'선박 접근 · Wi-Fi 미확인'],[null,'회의실 · 객실 품질 한계'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'도서 교통 · 숙박 품질']]},
    {n:'광역 단위 지역 I-4', cap:50, idx:64.0, vd:'fail', ty:[[null,'Wi-Fi · 운영시간 미확인'],[null,'장비 · 숙소 이동 미확인'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 I-5', cap:50, idx:65.7, vd:'fail', ty:[[null,'Wi-Fi · 운영시간 미확인'],[null,'장비 · 숙소 이동 미확인'],[null,'Wi-Fi · 장비 · 보안 미확인'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 I-6', cap:55, idx:60.0, vd:'fail', ty:[[null,'좌석관리 · Wi-Fi 미확인'],[null,'회의실 · 장비 미확인'],[null,'Wi-Fi · 장비 · 보안 미확인'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 I-7', cap:10, idx:56.0, vd:'fail', ty:[[null,'정원 10석 · 산간 교통'],[null,'정원 10석'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 I-8', cap:40, idx:55.4, vd:'fail', ty:[[null,'Wi-Fi · 산간 교통'],[null,'회의실 · 장비 미확인'],[null,'Wi-Fi · 장비 · 보안 미확인'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 I-9', cap:20, idx:66.3, vd:'pass', ty:[[null,'운영 09~18시 · 해안 교통'],[null,'숙소 이동 · Wi-Fi 미확인'],[null,'Wi-Fi · 장시간 운영 미달'],[null,'서류·카드키 절차']]},
    {n:'광역 단위 지역 I-10', cap:46, idx:72.0, vd:'hold', ty:[[null,'Wi-Fi · 운영시간 미확인'],['V*','46석 · 회의실·장비'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'숙소 품질 편차 · 지역교통']]},
    {n:'광역 단위 지역 I-11', cap:30, idx:62.7, vd:'hold', ty:[[null,'Wi-Fi · 산간 교통'],[null,'보안 · 운영시간 미확인'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'지역교통 제한 · 객실 18실']]},
    {n:'광역 단위 지역 I-12', cap:50, idx:64.3, vd:'hold', ty:[[null,'Wi-Fi · 산악 교통'],[null,'업무 장비 미확인'],[null,'Wi-Fi · 장비 · 보안 미확인'],[null,'지역교통 · 숙박 품질']]},
    {n:'광역 단위 지역 I-13', cap:50, idx:72.9, vd:'hold', ty:[[null,'Wi-Fi · 운영시간 미확인'],[null,'업무 장비 · 숙소 이동'],[null,'Wi-Fi · 장비 · 보안 미확인'],[null,'서류 제출 · 숙소 이동']]},
    {n:'광역 단위 지역 I-14', cap:100, idx:58.6, vd:'fail', ty:[[null,'세미나실형 · Wi-Fi 미확인'],[null,'개인 업무좌석 기준 미달'],[null,'Wi-Fi · 장비 · 보안 미확인'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 I-15', cap:30, idx:44.6, vd:'fail', ty:[[null,'카페형 · Wi-Fi 미확인'],[null,'객실 1실 · 회의실 X'],[null,'장비 · 보안 · 운영시간 미확인'],[null,'필수 요건 미충족']]}
   ]},
  {name:'광역 단위 지역 J', date:'2026.07.29', source:'한국관광공사 2025 디렉토리북 · 시설 공식 웹사이트',
   summary:{total:12, pass:2, fail:5, hold:5, avg:67.0}, facilities:[
    {n:'광역 단위 지역 J-1', cap:18, idx:76.5, vd:'hold', ty:[[null,'Wi-Fi · 보안 미확인'],['V*','18석 · 엑스포권 숙소'],[null,'Wi-Fi · 운영 09~18시'],[null,'서류 절차 · 장시간 운영 미달']]},
    {n:'광역 단위 지역 J-2', cap:30, idx:75.3, vd:'pass', ty:[[null,'Wi-Fi · 운영 09~18시'],['V','30석 · 회의실·장비'],[null,'Wi-Fi · 장시간 운영 미달'],[null,'센터·숙소 이동']]},
    {n:'광역 단위 지역 J-3', cap:90, idx:77.8, vd:'pass', ty:[[null,'물리 보안 미확인'],['V','90석 · 회의실·체험'],['V','운영 10~21시 · Wi-Fi'],[null,'참가신청서·증빙사진 절차']]},
    {n:'광역 단위 지역 J-4', cap:15, idx:72.0, vd:'hold', ty:[[null,'Wi-Fi · 산악 교통'],['V*','15석 · 회의실·장비'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'지역교통 · 운영시간 미확인']]},
    {n:'광역 단위 지역 J-5', cap:8, idx:74.7, vd:'hold', ty:[[null,'정원 8석 · Wi-Fi 미확인'],[null,'정원 8석'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'지역교통 · 운영시간 미확인']]},
    {n:'광역 단위 지역 J-6', cap:60, idx:68.0, vd:'hold', ty:[[null,'Wi-Fi · 해안 외곽'],['V*','60석 · 회의실·장비'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'지역교통 · 운영시간 미확인']]},
    {n:'광역 단위 지역 J-7', cap:18, idx:68.6, vd:'fail', ty:[[null,'Wi-Fi · 운영시간 미확인'],[null,'회의실 X'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 J-8', cap:15, idx:65.3, vd:'fail', ty:[[null,'캠핑장 · Wi-Fi 미확인'],[null,'장비 충실 · 숙박 품질 한계'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 J-9', cap:40, idx:58.9, vd:'fail', ty:[[null,'해안 외곽 · 운영 09~18시'],[null,'숙소 품질 편차'],[null,'보안 · 장시간 운영 미달'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 J-10', cap:200, idx:64.0, vd:'fail', ty:[[null,'Wi-Fi · 운영시간 미확인'],[null,'상시 좌석관리 미확인'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 J-11', cap:13, idx:51.4, vd:'hold', ty:[[null,'해안 외곽 · Wi-Fi 미확인'],[null,'정원 13석'],[null,'장비 · 보안 · 운영시간 미확인'],[null,'숙박 5실 · 지역교통 제한']]},
    {n:'광역 단위 지역 J-12', cap:20, idx:51.4, vd:'fail', ty:[[null,'카페형 · 해안 외곽'],[null,'회의실 X'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'필수 요건 미충족']]}
   ]},
  {name:'광역 단위 지역 K', date:'2026.07.29', source:'한국관광공사 2025 디렉토리북 · 시설 공식 웹사이트',
   summary:{total:2, pass:0, fail:1, hold:1, avg:65.8}, facilities:[
    {n:'광역 단위 지역 K-1', cap:37, idx:68.6, vd:'fail', ty:[[null,'카페형 · Wi-Fi 미확인'],[null,'회의실 X'],[null,'장비 · 보안 · 운영시간'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 K-2', cap:10, idx:62.9, vd:'hold', ty:[[null,'정원 10석 · 해안 외곽'],[null,'정원 10석'],[null,'Wi-Fi · 보안 · 운영시간'],[null,'숙박 품질 · 지역교통 제한']]}
   ]},
  {name:'광역 단위 지역 L', date:'2026.07.29', source:'한국관광공사 2025 디렉토리북 · 시설 공식 웹사이트',
   summary:{total:33, pass:1, fail:6, hold:26, avg:63.3}, facilities:[
    {n:'광역 단위 지역 L-1',cap:34,idx:72.0,vd:'pass',ty:[[null,'거제 남부 교통'],[null,'회의실 X'],[null,'운영시간·보안 미확인'],[null,'장시간 운영 미확인']]},
    {n:'광역 단위 지역 L-2',cap:15,idx:68.0,vd:'hold',ty:[[null,'Wi-Fi 미확인'],['V*','15석·회의실'],[null,'운영시간·보안'],[null,'Wi-Fi·운영시간']]},
    {n:'광역 단위 지역 L-3',cap:20,idx:64.0,vd:'hold',ty:[[null,'산간 교통·Wi-Fi'],['V*','20석·회의실'],[null,'운영시간·보안'],[null,'지역교통 제한']]},
    {n:'광역 단위 지역 L-4',cap:5,idx:56.0,vd:'fail',ty:[[null,'정원 5석'],[null,'정원 5석'],[null,'Wi-Fi·보안'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 L-5',cap:40,idx:64.0,vd:'hold',ty:[[null,'산간 교통·Wi-Fi'],['V*','40석·회의실'],[null,'운영시간·보안'],[null,'지역교통 제한']]},
    {n:'광역 단위 지역 L-6',cap:10,idx:64.0,vd:'hold',ty:[[null,'정원 10석·교통'],[null,'정원 10석'],[null,'Wi-Fi·보안'],[null,'운영시간 미확인']]},
    {n:'광역 단위 지역 L-7',cap:20,idx:64.0,vd:'hold',ty:[[null,'해안 외곽·Wi-Fi'],['V*','20석·회의실'],[null,'운영시간·보안'],[null,'지역교통 제한']]},
    {n:'광역 단위 지역 L-8',cap:8,idx:57.3,vd:'fail',ty:[[null,'정원 8석'],[null,'정원 8석'],[null,'Wi-Fi·보안'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 L-9',cap:20,idx:65.3,vd:'hold',ty:[[null,'농촌 외곽·Wi-Fi'],['V*','20석·회의실'],[null,'모니터 미확인'],[null,'운영시간·보안']]},
    {n:'광역 단위 지역 L-10',cap:8,idx:55.4,vd:'fail',ty:[[null,'정원 8석·장비 없음'],[null,'정원 8석'],[null,'회의실·장비 X'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 L-11',cap:10,idx:62.9,vd:'hold',ty:[[null,'정원 10석·Wi-Fi'],[null,'정원 10석'],[null,'보안·운영시간'],[null,'지역교통 제한']]},
    {n:'광역 단위 지역 L-12',cap:24,idx:62.9,vd:'hold',ty:[[null,'Wi-Fi·장비 미확인'],['V*','24석·회의실'],[null,'장비·보안'],[null,'운영시간 미확인']]},
    {n:'광역 단위 지역 L-13',cap:9,idx:53.3,vd:'fail',ty:[[null,'정원 9석·숙소 이동'],[null,'정원 9석'],[null,'Wi-Fi·보안'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 L-14',cap:50,idx:64.0,vd:'hold',ty:[[null,'농촌 외곽·Wi-Fi'],['V*','50석·회의실'],[null,'운영시간·보안'],[null,'지역교통 제한']]},
    {n:'광역 단위 지역 L-15',cap:28,idx:58.6,vd:'hold',ty:[[null,'해안 외곽·숙소 이동'],[null,'회의실 X'],[null,'Wi-Fi·보안'],[null,'업무공간·숙소 분리']]},
    {n:'광역 단위 지역 L-16',cap:40,idx:64.0,vd:'hold',ty:[[null,'해안 외곽·Wi-Fi'],['V*','40석·회의실'],[null,'운영시간·보안'],[null,'지역교통 제한']]},
    {n:'광역 단위 지역 L-17',cap:20,idx:64.0,vd:'hold',ty:[[null,'해안 외곽·Wi-Fi'],['V*','20석·회의실'],[null,'운영시간·보안'],[null,'지역교통 제한']]},
    {n:'광역 단위 지역 L-18',cap:68,idx:66.2,vd:'hold',ty:[[null,'숙소 이동·Wi-Fi'],[null,'회의실 X'],[null,'장비·보안 미확인'],[null,'업무공간·숙소 분리']]},
    {n:'광역 단위 지역 L-19',cap:45,idx:62.7,vd:'fail',ty:[[null,'농촌 외곽·Wi-Fi'],['V*','45석·회의실'],[null,'운영시간·보안'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 L-20',cap:30,idx:64.0,vd:'hold',ty:[[null,'산간 교통·Wi-Fi'],['V*','30석·회의실'],[null,'운영시간·보안'],[null,'지역교통 제한']]},
    {n:'광역 단위 지역 L-21',cap:40,idx:61.3,vd:'hold',ty:[[null,'농촌 외곽·Wi-Fi'],['V*','40석·회의실'],[null,'모니터 미확인'],[null,'운영시간·보안']]},
    {n:'광역 단위 지역 L-22',cap:40,idx:64.0,vd:'hold',ty:[[null,'산간 교통·Wi-Fi'],['V*','40석·회의실'],[null,'운영시간·보안'],[null,'지역교통 제한']]},
    {n:'광역 단위 지역 L-23',cap:30,idx:68.0,vd:'hold',ty:[[null,'진주 외곽·Wi-Fi'],['V*','30석·회의실'],[null,'운영시간·보안'],[null,'객실 4실']]},
    {n:'광역 단위 지역 L-24',cap:10,idx:64.0,vd:'hold',ty:[[null,'정원 10석·교통'],[null,'정원 10석'],[null,'Wi-Fi·보안'],[null,'운영시간 미확인']]},
    {n:'광역 단위 지역 L-25',cap:30,idx:72.0,vd:'hold',ty:[[null,'Wi-Fi·보안 미확인'],['V*','호텔 30석·회의실'],[null,'장비·운영시간'],[null,'호텔 내 숙박']]},
    {n:'광역 단위 지역 L-26',cap:15,idx:64.0,vd:'hold',ty:[[null,'농촌 외곽·Wi-Fi'],['V*','15석·회의실'],[null,'운영시간·보안'],[null,'지역교통 제한']]},
    {n:'광역 단위 지역 L-27',cap:15,idx:69.3,vd:'hold',ty:[[null,'창원 외곽·Wi-Fi'],['V*','15석·회의실·장비'],[null,'운영시간·보안'],[null,'지역교통 제한']]},
    {n:'광역 단위 지역 L-28',cap:30,idx:58.6,vd:'fail',ty:[[null,'농촌 외곽·숙박 3실'],[null,'장비 미확인'],[null,'Wi-Fi·보안'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 L-29',cap:40,idx:64.0,vd:'hold',ty:[[null,'산간 교통·Wi-Fi'],['V*','40석·회의실'],[null,'운영시간·보안'],[null,'지역교통 제한']]},
    {n:'광역 단위 지역 L-30',cap:40,idx:64.0,vd:'hold',ty:[[null,'산간 교통·Wi-Fi'],['V*','40석·회의실'],[null,'운영시간·보안'],[null,'지역교통 제한']]},
    {n:'광역 단위 지역 L-31',cap:10,idx:61.3,vd:'hold',ty:[[null,'정원 10석·교통'],[null,'정원 10석'],[null,'모니터·Wi-Fi 미확인'],[null,'운영시간·보안']]},
    {n:'광역 단위 지역 L-32',cap:20,idx:62.7,vd:'hold',ty:[[null,'산간 교통·Wi-Fi'],['V*','20석·회의실'],[null,'모니터 미확인'],[null,'운영시간·보안']]},
    {n:'광역 단위 지역 L-33',cap:30,idx:64.0,vd:'hold',ty:[[null,'산간 교통·Wi-Fi'],['V*','30석·회의실'],[null,'운영시간·보안'],[null,'객실 4실']]}
   ]},
  {name:'광역 단위 지역 M', date:'2026.07.29', source:'한국관광공사 2025 디렉토리북 · 2026 제주 워케이션 공식 공고 · 시설 공식 웹사이트',
   summary:{total:14, pass:2, fail:7, hold:5, avg:70.9}, facilities:[
    {n:'광역 단위 지역 M-1',cap:8,idx:68.6,vd:'fail',ty:[[null,'정원 8석'],[null,'정원 8석'],[null,'장비·Wi-Fi 미확인'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 M-2',cap:15,idx:74.7,vd:'hold',ty:[['V*','제주시 도심·15석'],[null,'업무 장비 제한'],[null,'Wi-Fi·보안·운영시간'],[null,'운영시간 미확인']]},
    {n:'광역 단위 지역 M-3',cap:8,idx:64.3,vd:'fail',ty:[[null,'정원 8석·구좌 외곽'],[null,'정원 8석'],[null,'장비·Wi-Fi 미확인'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 M-4',cap:20,idx:80.0,vd:'hold',ty:[['V*','제주시 도심·장비'],['V*','20석·회의실'],[null,'운영시간·보안'],[null,'Wi-Fi 미확인']]},
    {n:'광역 단위 지역 M-5',cap:82,idx:84.0,vd:'pass',ty:[['V','도심·82석'],['V','대규모 회의·숙박'],[null,'운영시간·보안'],['V','동일 건물 90실']]},
    {n:'광역 단위 지역 M-6',cap:18,idx:66.7,vd:'fail',ty:[[null,'한경면 외곽'],[null,'숙박 3실'],[null,'Wi-Fi·보안'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 M-7',cap:50,idx:72.7,vd:'fail',ty:[[null,'연계 숙소 없음'],[null,'숙박 품질 0점'],[null,'Wi-Fi·보안·운영시간'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 M-8',cap:44,idx:76.0,vd:'pass',ty:[[null,'안덕면 교통'],['V','44석·회의실·장비'],[null,'Wi-Fi·보안·운영시간'],[null,'지역교통 제한']]},
    {n:'광역 단위 지역 M-9',cap:22,idx:73.3,vd:'hold',ty:[[null,'조천읍 교통'],['V*','22석·회의실·폰부스'],[null,'Wi-Fi·보안·운영시간'],[null,'지역교통 제한']]},
    {n:'광역 단위 지역 M-10',cap:36,idx:81.8,vd:'fail',ty:[[null,'연계 숙소 없음'],[null,'숙박 품질 0점'],[null,'Wi-Fi·보안·운영시간'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 M-11',cap:8,idx:60.0,vd:'fail',ty:[[null,'정원 8석·남원 외곽'],[null,'정원 8석'],[null,'Wi-Fi·보안'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 M-12',cap:8,idx:60.0,vd:'fail',ty:[[null,'정원 8석'],[null,'정원 8석'],[null,'Wi-Fi·보안'],[null,'필수 요건 미충족']]},
    {n:'광역 단위 지역 M-13',cap:25,idx:68.0,vd:'hold',ty:[[null,'사계 해안 외곽'],['V*','25석·회의실'],[null,'Wi-Fi·보안·운영시간'],[null,'일부 숙소 이동']]},
    {n:'광역 단위 지역 M-14',cap:19,idx:62.9,vd:'hold',ty:[[null,'김녕 해안 외곽'],[null,'회의실 X'],[null,'Wi-Fi·보안·운영시간'],[null,'업무공간·숙소 분리']]}
   ]}
];

/* 행정구역 13개를 기업의 실제 이동·운영 단위인 7개 광역권으로 통합한다.
   원본 진단값은 보존하고 개별 시설명만 권역별 일련번호로 다시 익명화한다. */
const MUNICIPAL_GROUPS = [
  ['인천/경기권', ['C','E']],
  ['강원권', ['F']],
  ['충청권', ['G','H']],
  ['전라권', ['I','J']],
  ['대구/경북권', ['B','K']],
  ['부산/울산/경남권', ['A','D','L']],
  ['제주권', ['M']]
].map(([name, codes]) => {
  const groups = codes.map(code => RAW_MUNICIPAL_GROUPS.find(g => g.name.endsWith(` ${code}`)));
  const facilities = groups.flatMap(g => g.facilities).map((f, i) => ({
    ...f, vd:(f.vd === 'hold' && f.idx >= 80 ? 'pass' : f.vd), n:`${name} 시설 ${String(i + 1).padStart(2, '0')}`
  }));
  const total = facilities.length;
  return {
    name, date:'2026.07.29',
    source:[...new Set(groups.map(g => g.source))].join(' · '),
    summary:{
      total,
      pass:facilities.filter(f => f.vd === 'pass').length,
      fail:facilities.filter(f => f.vd === 'fail').length,
      hold:facilities.filter(f => f.vd === 'hold').length,
      avg:Math.round(groups.reduce((sum, g) => sum + g.summary.avg * g.summary.total, 0) / total * 10) / 10
    }, facilities
  };
});

/* DearMonday 운영 지자체 시설 - 농식품부 농촌형 워케이션(10) + 가평 워케이션(3)
   출처: 각 사업 공식 발표·디어먼데이 예약 페이지·지자체 공식 협력 숙소 목록 (2026-07-29 확인)
   가평 3개소는 '자라섬 워케이션센터'를 공동 오피스로 이용하는 구조 — 업무 관련 항목은
   센터 기준 공통 적용, 객실 품질은 숙소별 개별 평가, 나머지 항목은 두 정보를 조합해 판정. */
const DM_MUNICIPAL_GROUPS = [
  {name:'농식품부 농촌형 워케이션', date:'2026.07.29', source:'농림축산식품부 농촌 워케이션 사업 공식 발표 + 디어먼데이 예약 페이지 + 시설 공식/관광공사 정보',
   summary:{total:10, pass:1, fail:4, hold:5, avg:56.8}, facilities:[
    {n:'정읍 송죽마을', cap:0, idx:48.9, vd:'fail', ty:[[null,'필수 요건 미충족'], [null,'필수 요건 미충족'], [null,'필수 요건 미충족'], [null,'필수 요건 미충족']]},
    {n:'홍천 무네미마을', cap:0, idx:53.3, vd:'fail', ty:[[null,'필수 요건 미충족'], [null,'필수 요건 미충족'], [null,'필수 요건 미충족'], [null,'필수 요건 미충족']]},
    {n:'상주 객주촌', cap:0, idx:42.9, vd:'hold', ty:[[null,'근거 확보율 23%'], [null,'근거 확보율 33%'], [null,'근거 확보율 17%'], [null,'근거 확보율 38%']]},
    {n:'강릉 오션그레이트', cap:15, idx:60.0, vd:'hold', ty:[[null,'근거 확보율 38%'], [null,'근거 확보율 50%'], [null,'근거 확보율 33%'], [null,'근거 확보율 38%']]},
    {n:'영천 한의마을', cap:10, idx:64.3, vd:'fail', ty:[[null,'필수 요건 미충족'], [null,'필수 요건 미충족'], [null,'필수 요건 미충족'], [null,'필수 요건 미충족']]},
    {n:'남원 혼불체험관', cap:0, idx:33.3, vd:'hold', ty:[[null,'근거 확보율 38%'], [null,'근거 확보율 25%'], [null,'근거 확보율 0%'], [null,'근거 확보율 46%']]},
    {n:'공주 힐스포레', cap:0, idx:62.9, vd:'hold', ty:[[null,'근거 확보율 23%'], [null,'근거 확보율 50%'], [null,'근거 확보율 17%'], [null,'근거 확보율 38%']]},
    {n:'남해 오피스 닻', cap:24, idx:82.7, vd:'pass', ty:[['V','적합'], ['V','적합'], ['V','적합'], ['V','적합']]},
    {n:'곡성 러스틱타운', cap:41, idx:61.8, vd:'fail', ty:[[null,'필수 요건 미충족'], [null,'필수 요건 미충족'], [null,'필수 요건 미충족'], [null,'필수 요건 미충족']]},
    {n:'이천 산수유마을', cap:0, idx:57.5, vd:'hold', ty:[[null,'근거 확보율 38%'], [null,'근거 확보율 58%'], [null,'근거 확보율 17%'], [null,'근거 확보율 46%']]}
  ]},
  {name:'가평 워케이션', date:'2026.07.29', source:'가평군 워케이션 공식 협력 숙박시설 목록 + 자라섬 워케이션센터 공식 안내 + 디어먼데이 예약 페이지',
   summary:{total:3, pass:0, fail:3, hold:0, avg:56.0}, facilities:[
    {n:'가평 호텔자라', cap:0, idx:62.5, vd:'fail', ty:[[null,'필수 요건 미충족'], [null,'필수 요건 미충족'], [null,'필수 요건 미충족'], [null,'필수 요건 미충족']]},
    {n:'가평 원스테이 쁘띠', cap:0, idx:43.1, vd:'fail', ty:[[null,'필수 요건 미충족'], [null,'필수 요건 미충족'], [null,'필수 요건 미충족'], [null,'필수 요건 미충족']]},
    {n:'가평 W지우리조트', cap:0, idx:62.4, vd:'fail', ty:[[null,'필수 요건 미충족'], [null,'필수 요건 미충족'], [null,'필수 요건 미충족'], [null,'필수 요건 미충족']]}
  ]},
];

const TYPES = [
  {c:'BT', n:'출장 연계 업무형', d:'개인·소규모 출장 기반 단기 업무 워케이션',
   k:'대중교통 접근성 · 출퇴근 난이도 · 개인 업무 시설 · Wifi · 이용 절차 · 운영 시간 · 지역 내 교통', items:[10,12,2,1,5,6,11]},
  {c:'TW', n:'팀/단체 워크샵형', d:'팀 단위 오프라인 협업 및 워크샵 집중',
   k:'협업 시설 · 개인 업무 시설 · 객실 품질 · 체험 프로그램 · 이용 절차 · 출퇴근 난이도 · 업무 지원 장비',
   items:[8,2,4,3,5,12,9], cap:15, note:'정원 15석 이상만 해당'},
  {c:'FP', n:'몰입 프로젝트형', d:'스프린트·집중 개발·프로젝트 완수형 체류',
   k:'개인 업무 시설 · 운영 시간 · Wifi · 업무 지원 장비 · 출퇴근 난이도 · 물리적 보안 · 협업 시설', items:[2,6,1,9,12,7,8]},
  {c:'RW', n:'정규 근무형', d:'월 단위 분산 근무·리텐션 복지형 장기 체류',
   k:'객실 품질 · 운영 시간 · 이용 절차 · 지역 내 교통 · 체험 프로그램 · 대중교통 접근성 · 개인 업무 시설', items:[4,6,5,11,3,10,2]}
];

const QUESTIONS = [
  {id:1, req:1, w:5,  t:'Wifi 환경 및 정보 보안', o:[
    ['Wifi 자체를 제공하지 않음', 0],['공용 Wifi만 제공', 2],['워케이션 전용 Wifi 제공', 3],
    ['전용 Wifi + 기업 보안 요건(망분리 등) 지원 가능', 5]]},
  {id:2, req:1, w:15, t:'개인 업무 시설', o:[
    ['카페·로비 등 재고 관리·예약이 불가한 유사 업무공간', 0],['전용 오피스는 있으나 좌석 관리 체계 없음', 7],
    ['사무실 수준 개인 좌석 + 정원 기반 관리', 12],['좌석 재고·예약 시스템이 자동 연동됨', 15]]},
  {id:3, req:1, w:5,  t:'체험 프로그램', o:[
    ['업무 시간 중 체험 참가가 필수인 형태', 0],['업무 외 시간 운영 프로그램 1개', 3],
    ['업무 외 시간 운영 프로그램 2개 이상', 4],['2개 이상 + 사전 예약·결제 시스템 제공', 5]]},
  {id:4, req:1, w:10, t:'객실 품질', o:[
    ['공용 욕실·기본 침구만 (도미토리·캠핑장 등)', 0],['개인 욕실 + 기본 어메니티 구비', 6],
    ['호텔급 객실 (비데·욕조·다양한 타입)', 8],['관광공사 3성 이상 (조식·부대시설·프런트·방음)', 10]]},
  {id:5, req:1, w:10, t:'이용 절차', o:[
    ['지원정책 없음 / 개인별 선별·환급 절차', 0],['개인 온라인 예약만 가능', 5],
    ['기업 신청 가능 + 지원금 신청서 전산화', 8],['기업 전용 절차 + 지원금·예약 통합 전산화 (출력·스캔 제로)', 10]]},
  {id:6, req:0, w:10, t:'운영 시간', o:[
    ['9~6시만 운영, 주말·공휴일 미운영', 1],['평일 연장 운영 (~22시)', 5],
    ['08~23시 등 장시간 운영', 6],['24시간 연중 상시 운영', 10]]},
  {id:7, req:0, w:10, t:'물리적 보안', o:[
    ['출입 통제 체계·CCTV 없음', 1],['CCTV만 운영', 4],
    ['출입 통제 + CCTV 운영', 7],['출입 통제 + 예약 연동 + 방문자 전산 관리 + CCTV 녹화 보관', 10]]},
  {id:8, req:0, w:5,  t:'협업 시설 (미팅룸)', o:[
    ['미팅룸 미제공', 1],['미팅룸은 있으나 좌석 대비 부족', 3],
    ['좌석 10석당 1개 확보 + 기본 시설', 4],['좌석 10석당 1개 + 기본 시설 + 예약 관리 시스템', 5]]},
  {id:9, req:0, w:5,  t:'업무 지원 장비 및 시설', o:[
    ['장비·시설 미제공', 1],['모니터 정도만 제공', 2],
    ['모니터 + 복합기 + 탕비실', 4],['전 좌석 모니터 + 보관함 + 복합기 + 탕비실 + 폰부스', 5]]},
  {id:10, req:0, w:10, t:'대중 교통 접근성', o:[
    ['자차 이동만 가능', 1],['시외버스 등 제한적 접근', 5],
    ['KTX·종합터미널 연계 가능', 7],['KTX + 지역 내 이동 30분 이내', 10]]},
  {id:11, req:0, w:5,  t:'지역 내 대중 교통', o:[
    ['버스·택시 이용이 현실적으로 불가', 1],['제한적 (배차 간격·운행 시간 제약)', 3],
    ['버스·택시 원활하게 이용 가능', 4],['버스·택시·지역 모빌리티 등 다양한 수단 운영', 5]]},
  {id:12, req:0, w:10, t:'출퇴근 난이도 (숙소↔오피스)', o:[
    ['수단 무관 30분 이상 소요', 1],['차량 10~30분 소요', 5],
    ['도보 10분 이내', 7],['동일 건물·동일 부지 (도보 거리)', 10]]}
];

const SELF_EXAMPLES = {
  dm:['경주 라한셀렉트호텔점','경주 라한셀렉트호텔점','제주 마레보비치호텔점','경주 라한셀렉트호텔점','경주 라한셀렉트호텔점','경주 체스터톤스호텔점','경주 라한셀렉트호텔점','제주 마레보비치호텔점','경주 라한셀렉트호텔점','시흥 르컬렉티브점','경주 춘추관점','경주 라한셀렉트호텔점'],
  public:['남해 오피스 닻','남해 오피스 닻','공주 힐스포레','가평 W지우리조트','남해 오피스 닻','남해 오피스 닻','남해 오피스 닻','남해 오피스 닻','남해 오피스 닻','가평 호텔자라','남해 오피스 닻','남해 오피스 닻']
};

/* ── 헤더/네비 스캐폴딩: 각 페이지 <div id="wilHeader" data-active="..."></div> 자리에 삽입 ── */
function mountHeader(active){
  const menus = [
    {href:'about.html', key:'about', label:'ABOUT', mega:{h:'ABOUT', items:[
      ['about.html#vision','비전과 목표','nav.about.vision'],['about.html#fields','4대 연구 분야','nav.about.fields'],['about.html#network','협력 네트워크','nav.about.network']]}},
    {href:'indexes.html', key:'indexes', label:'INDEXES', mega:{h:'INDEXES', items:[
      ['w2bi.html','워케이션 시설의 기업 요구사항 만족 지수','nav.indexes.w2bi'],
      ['wibi.html','기업의 워케이션 도입 가능성 지수','nav.indexes.wibi']]}},
    {href:'datalab.html', key:'datalab', label:'DATALAB', mega:{h:'DATALAB', items:[
      ['corporate-workation-status.html','기업 워케이션 현황','nav.datalab.corp'],['regional-workation-market.html','지역별 워케이션 시장 현황','nav.datalab.reg']]}} ,
    {href:'research.html', key:'research', label:'RESEARCH', mega:{h:'RESEARCH', items:[
      ['research.html#list','연구보고서','nav.research.list']]}}
  ];
  const nav = menus.map(m => `<a href="${m.href}" class="${m.key === active ? 'on' : ''}">${m.label}</a>`).join('');
  const mega = menus.map(m => `<div><h6>${m.h ? '' : ''}${m.mega.h}</h6><ul>${
    m.mega.items.map(([href, label, i18nKey]) =>
      href === '#' ? `<li><a onclick="openSelf()"${i18nKey ? ` data-i18n="${i18nKey}"` : ''}>${label.replace('__SELF__', '')}</a></li>`
                   : `<li><a href="${href}"${i18nKey ? ` data-i18n="${i18nKey}"` : ''}>${label}</a></li>`).join('')
  }</ul></div>`).join('');

  document.getElementById('wilHeader').innerHTML = `
  <header>
    <div class="hbar">
      <a href="index.html" class="brand">
        <img class="brand-mark-full" src="assets/wil-main-logo.png?v=202607311505" alt="DearMonday Workation Insight Lab">
      </a>
      <nav class="nav" id="nav">${nav}</nav>
      <div class="hact">
        <div class="langsel" id="langsel">
          <button class="lang-btn" id="langBtn" type="button" aria-haspopup="true" aria-expanded="false" aria-label="언어 선택" data-i18n-attr="aria-label:nav.langAria">
            <span id="langLabel">KOR</span><svg class="lang-caret" width="9" height="6" viewBox="0 0 9 6" aria-hidden="true"><path d="M1 1l3.5 3.5L8 1" stroke="currentColor" stroke-width="1.4" fill="none" stroke-linecap="round"/></svg>
          </button>
          <ul class="lang-menu">
            <li><button type="button" data-lang="ko">한국어</button></li>
            <li><button type="button" data-lang="en">English</button></li>
            <li><button type="button" data-lang="ja">日本語</button></li>
            <li><button type="button" data-lang="zh">中文</button></li>
          </ul>
        </div>
        <button class="burger" id="burger" aria-label="메뉴" data-i18n-attr="aria-label:nav.menuAria">☰</button>
      </div>
    </div>
    <div class="mega"><div class="mega-in">${mega}</div></div>
  </header>`;

  const burger = document.getElementById('burger');
  const nv = document.getElementById('nav');
  burger.onclick = () => nv.classList.toggle('open');
  nv.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nv.classList.remove('open')));
  mountLangSwitch();
}

/* ── Footer: DearMonday 관련 링크 드롭다운 포함, 압축형 1단 구성 ── */
function mountFooter(){
  document.getElementById('wilFooter').innerHTML = `
  <footer>
    <div class="container">
      <div class="f-row">
        <div class="f-brand">
          <img class="f-brand-full" src="assets/wil-footer-logo.png?v=202607311505" alt="DearMonday Workation Insight Lab">
        </div>
        <div class="f-act">
          <a href="https://dearmonday.io/common/terms" target="_blank" rel="noopener" data-i18n="footer.terms">이용약관</a>
          <a href="https://dearmonday.io/common/privacy" target="_blank" rel="noopener" data-i18n="footer.privacy">개인정보 처리방침</a>
          <div class="dd" id="dmDD">
            <button class="dd-btn" id="dmDDBtn"><span data-i18n="footer.links">디어먼데이 관련 링크</span> <i>▾</i></button>
            <div class="dd-menu">
              <a href="https://dearmonday.io" target="_blank" rel="noopener"><span data-i18n="footer.platformLink">디어먼데이 플랫폼</span> <em>↗</em></a>
              <a href="https://www.youtube.com/@dearmonday" target="_blank" rel="noopener">YouTube <em>↗</em></a>
              <a href="https://www.instagram.com/dear.monday.official" target="_blank" rel="noopener">Instagram <em>↗</em></a>
              <a href="https://blog.naver.com/dear_monday" target="_blank" rel="noopener">Naver Blog <em>↗</em></a>
            </div>
          </div>
        </div>
      </div>
      <div class="f-legal">
        <b data-i18n="footer.bizNameLabel">상호명</b> <span data-i18n="footer.bizNameValue">주식회사 디어먼데이</span> <b data-i18n="footer.repLabel">대표자</b> <span data-i18n="footer.repValue">김정수, 김성우</span>
        <b data-i18n="footer.bizRegLabel">사업자등록번호</b> 544-81-02720 <b data-i18n="footer.ecommerceLabel">통신판매업신고번호</b> 2024-서울중구-0166호
        <b data-i18n="footer.addressLabel">주소</b> <span data-i18n="footer.addressValue">서울특별시 마포구 백범로 31길, 21 지상 3층 310호 (공덕동, 서울창업허브 별관)</span>
        <b data-i18n="footer.privacyOfficerLabel">개인정보 관리책임자</b> <span data-i18n="footer.privacyOfficerValue">김성우 (sungwoo.kim@dearmonday.io)</span>
        <span style="margin-left:auto">Copyright ⓒ 2026 DearMonday. All rights reserved.</span>
      </div>
    </div>
  </footer>`;
  const dd = document.getElementById('dmDD');
  document.getElementById('dmDDBtn').onclick = e => { e.stopPropagation(); dd.classList.toggle('open'); };
  document.addEventListener('click', () => dd.classList.remove('open'));
  mountLangSwitch();
}

/* ── 히어로/배너 쇼케이스 슬라이더 (여러 페이지 공용) ── */
function mountShowcase(elId, dotsId, pickIdx){
  const sc = document.getElementById(elId), dots = document.getElementById(dotsId);
  if (!sc) return;
  pickIdx.forEach((p, i) => {
    const b = BRANCHES[p], f = document.createElement('figure');
    if (i === 0) f.className = 'on';
    f.innerHTML = `<img src="${b.img}" alt="${b.n}" decoding="async" onerror="this.style.display='none'">
      <figcaption><span class="sc-tag">${b.r}</span>
      <div class="sc-name">${b.n.replace('DearMonday ', '')}</div>
      <div class="sc-meta">${b.tag} · 오피스 ${b.cap}석</div></figcaption>`;
    sc.insertBefore(f, dots);
    if (dots) {
      const d = document.createElement('i');
      if (i === 0) d.className = 'on';
      d.onclick = () => show(i);
      dots.appendChild(d);
    }
  });
  const figs = sc.querySelectorAll('figure'), ds = dots ? dots.querySelectorAll('i') : [];
  let cur = 0, timer = setInterval(next, 5200);
  function show(n){
    cur = n;
    figs.forEach((f, i) => f.classList.toggle('on', i === n));
    ds.forEach((d, i) => d.classList.toggle('on', i === n));
    clearInterval(timer); timer = setInterval(next, 5200);
  }
  function next(){ show((cur + 1) % figs.length); }
}

/* ── W2BI 자가 진단 모달 마운트 (모든 페이지 공용) ── */
function mountSelfModal(_isRerender){
  const req = QUESTIONS.filter(q => q.req), rec = QUESTIONS.filter(q => !q.req);
  const mk = q => `<div class="q">
      <div class="qt"><b>${q.id}. ${trK(q.t)}</b></div>
      <div class="opts">${q.o.map(([lb, sc]) =>
        `<label class="opt"><input type="radio" name="q${q.id}" value="${sc}">
         <span>${trK(lb)}</span></label>`).join('')}</div>
    </div>`;
  document.getElementById('wilModal').innerHTML = `
  <div class="modal" id="selfModal">
    <div class="mbox">
      <div class="mhead">
        <div>
          <h3 data-i18n="modal.title">W2BI 자가 진단</h3>
          <p data-i18n="modal.desc">실제 진단에 사용하는 12개 항목·100점 만점 체계를 그대로 적용합니다.
             응답 결과는 저장되지 않으며 브라우저 안에서만 계산됩니다.</p>
        </div>
        <button class="mclose" onclick="closeSelf()" aria-label="닫기" data-i18n-attr="aria-label:modal.close">✕</button>
      </div>
      <div class="mbody">
        <div class="cap-row">
          <label for="capIn" data-i18n="modal.capLabel">오피스 정원</label>
          <input type="number" id="capIn" value="12" min="1" max="200">
          <small data-i18n="modal.capHint">석 — 팀/단체 워크샵형(TW) 판정에 사용됩니다 (15석 이상 필요)</small>
        </div>
        <div id="qWrap">
          <div class="qlabel" data-i18n="modal.reqLabel">필수 항목 · 5개 · 45점 — 소계 33점 미만 시 기업 매칭 추천 대상 제외</div>
          ${req.map(mk).join('')}
          <div class="qlabel" data-i18n="modal.recLabel">권장 항목 · 7개 · 55점</div>
          ${rec.map(mk).join('')}
        </div>
        <div class="result" id="selfResult"></div>
      </div>
      <div class="mfoot">
        <span style="font-size:12px;color:var(--mute)" data-i18n="modal.footHint">모든 항목을 선택한 후 결과 보기를 눌러주세요.</span>
        <div style="display:flex;gap:10px">
          <button class="btn-line" style="border-color:var(--line);color:var(--body)" onclick="resetSelf()" data-i18n="modal.reset">초기화</button>
          <button class="btn-fill" onclick="calcSelf(true)" data-i18n="modal.viewResult">결과 보기</button>
        </div>
      </div>
    </div>
  </div>`;
  document.getElementById('selfModal').addEventListener('click', e => { if (e.target.id === 'selfModal') closeSelf(); });
  if (!_isRerender) I18N_RERENDERS.push(() => mountSelfModal(true));
}

function getScores(){
  const s = {};
  QUESTIONS.forEach(q => {
    const el = document.querySelector(`input[name="q${q.id}"]:checked`);
    s[q.id] = el ? +el.value : 0;
  });
  return s;
}

function calcSelf(scroll){
  const s = getScores();
  const missing = QUESTIONS.filter(q => !document.querySelector(`input[name="q${q.id}"]:checked`));
  if (missing.length) {
    alert((t('modal.alertIncomplete') || '미응답 문항이 {n}개 있습니다. 모든 문항에 응답해 주세요.').replace('{n}', missing.length));
    return;
  }
  const cap = +document.getElementById('capIn').value || 0;
  const reqSum = [1,2,3,4,5].reduce((a, i) => a + s[i], 0);
  const recSum = [6,7,8,9,10,11,12].reduce((a, i) => a + s[i], 0);
  const total = reqSum + recSum;
  const zero = [1,2,3,4,5].filter(i => s[i] === 0);
  const pass = zero.length === 0 && reqSum >= 33;

  const tRes = TYPES.map(ty => {
    const got = ty.items.reduce((a, i) => a + s[i], 0);
    const den = ty.items.reduce((a, i) => a + QUESTIONS.find(q => q.id === i).w, 0);
    const fit = den ? Math.round(got / den * 1000) / 10 : 0;
    const capOk = !ty.cap || cap >= ty.cap;
    const ok = pass && fit >= 80 && capOk;
    let why = t('modal.fitOk') || '적합';
    if (!pass) why = t('modal.fitFail') || '필수 요건 미충족';
    else if (!capOk) why = (t('modal.fitCapFail') || '정원 {cap}석 ({req}석 미만)').replace('{cap}', cap).replace('{req}', ty.cap);
    else if (fit < 80) why = (t('modal.fitScoreFail') || '적합도 {fit} (기준 80 미만)').replace('{fit}', fit);
    return {...ty, fit, ok, why};
  });

  const box = document.getElementById('selfResult');
  const improve = QUESTIONS.filter(q => s[q.id] < q.w).map(q => {
    const picked = q.o.find(([, score]) => score === s[q.id]);
    const best = q.o[q.o.length - 1][0];
    const pickedLabel = picked ? trK(picked[0]) : (t('modal.unconfirmed') || '미확인');
    return `<div class="improve-item"><h5>${q.id}. ${trK(q.t)}</h5>
      <p><b>${t('modal.problemLabel')||'문제 지점'}</b> ${(t('modal.currentAnswerTemplate')||"현재 응답은 '{picked}'으로 최고 기준에 미달합니다.").replace('{picked}', pickedLabel)}<br>
      <b>${t('modal.improveStandardLabel')||'개선 기준'}</b> ${trK(best)}<br>
      <b>${t('modal.bestCaseLabel')||'최고 기준 사례'}</b> <a href="https://dearmonday.io/branch/list?useCount=0" target="_blank" rel="noopener">${trK('DearMonday ' + SELF_EXAMPLES.dm[q.id - 1])}</a> · ${t('modal.publicFacilityLabel')||'지자체 운영 시설'} ${trK(SELF_EXAMPLES.public[q.id - 1])}</p></div>`;
  }).join('');
  box.className = 'result on';
  box.innerHTML = `
    <div class="res-top">
      <div><b>${total}</b><span>${t('modal.scoreTotalLabel')||'W2BI 총점 / 100점'}</span></div>
      <div><b>${reqSum}</b><span>${t('modal.reqSubtotalLabel')||'필수 소계 / 45점'}</span></div>
      <div><b>${recSum}</b><span>${t('modal.recSubtotalLabel')||'권장 소계 / 55점'}</span></div>
      <div><b>${tRes.filter(t2 => t2.ok).length}</b><span>${t('modal.matchedTypesLabel')||'해당 프로그램 유형 / 4'}</span></div>
    </div>
    <div class="res-verdict ${pass ? 'pass' : 'fail'}">
      ${pass
        ? (t('modal.verdictPass') || '기업 워케이션 적합 — 기업 매칭 추천 대상입니다. (필수 소계 {req}점 ≥ 33점)').replace('{req}', reqSum)
        : zero.length
          ? (t('modal.verdictZeroFail') || '개선 필요 — {items}이 0점입니다. 0점 항목이 있으면 기업 매칭 추천 대상에서 제외됩니다.').replace('{items}', zero.map(i => (t('modal.itemNumber')||'{i}번 항목').replace('{i}', i)).join(', '))
          : (t('modal.verdictScoreFail') || '개선 필요 — 필수 소계 {req}점으로 기준 33점에 {gap}점 부족합니다.').replace('{req}', reqSum).replace('{gap}', 33 - reqSum)}
    </div>
    <div class="res-types">
      ${tRes.map(t3 => `<div class="rt ${t3.ok ? 'ok' : 'no'}">
        <div class="mark">${t3.ok ? 'V' : '–'}</div><b>${trK(t3.n)}</b>
        <span>${t3.ok ? (t('modal.fitScorePrefix')||'적합도 ') + t3.fit : t3.why}</span>
      </div>`).join('')}
    </div>
    <div class="improve-list">
      ${improve || `<div class="improve-item"><h5>${t('modal.allTopStandardTitle')||'모든 항목이 최고 기준입니다'}</h5><p>${t('modal.allTopStandardDesc')||'현재 응답 기준으로 추가 개선이 필요한 항목이 없습니다.'}</p></div>`}
    </div>
    <p style="margin-top:14px;font-size:11.5px;color:var(--mute);line-height:1.6">
      ${t('modal.disclaimer')||'본 자가 진단은 응답 기반 참고 결과입니다. 공식 W2BI 진단은 현장 실사 및 운영 데이터 확인을 거쳐 확정됩니다.'}
    </p>
    <button class="btn-fill pdf-btn" onclick="downloadSelfPDF()">${t('modal.downloadPdf')||'결과를 PDF로 다운로드'}</button>`;
  if (scroll) box.scrollIntoView({behavior:'smooth', block:'nearest'});
}
function downloadSelfPDF(){ window.print(); }
function resetSelf(){
  document.querySelectorAll('#qWrap input[type=radio]').forEach(r => r.checked = false);
  document.getElementById('capIn').value = 12;
  document.getElementById('selfResult').className = 'result';
}
function openSelf(){ document.getElementById('selfModal').classList.add('on'); document.body.style.overflow = 'hidden'; }
function closeSelf(){ document.getElementById('selfModal').classList.remove('on'); document.body.style.overflow = ''; }
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSelf(); });

/* 화면 표기 원칙: 약칭 WIL은 풀어 쓰고 문장 종결 마침표는 노출하지 않는다 */
function normalizeVisibleCopy(root = document.body){
  if (!root) return;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node => {
    if (node.parentElement && /^(SCRIPT|STYLE|NOSCRIPT)$/.test(node.parentElement.tagName)) return;
    const next = node.nodeValue.replace(/\bWIL\b/g, 'WORKATION INSIGHT LAB').replace(/\.(?=\s|$)/g, '');
    if (next !== node.nodeValue) node.nodeValue = next;
  });
}
document.addEventListener('DOMContentLoaded', () => {
  document.title = document.title.replace(/\bWIL\b/g, 'WORKATION INSIGHT LAB');
  normalizeVisibleCopy();
  new MutationObserver(changes => changes.forEach(change => change.addedNodes.forEach(node => {
    if (node.nodeType === Node.TEXT_NODE) {
      const next = node.nodeValue.replace(/\bWIL\b/g, 'WORKATION INSIGHT LAB').replace(/\.(?=\s|$)/g, '');
      if (next !== node.nodeValue) node.nodeValue = next;
    } else if (node.nodeType === Node.ELEMENT_NODE) normalizeVisibleCopy(node);
  }))).observe(document.body, {childList:true, subtree:true});
});

/* ── 사업/지역별 그룹 아코디언 렌더링 (직영점 탭·전국 지자체 탭 공용) ──
   groups: [{name, date, source, summary:{total,pass,fail,hold,avg}, facilities:[{n,cap,idx,vd,ty}]}]
   containerId의 요소에 렌더링하고, 클릭 시 펼침/접힘 동작까지 바인딩한다. */
function renderMunicipalGroups(groups, containerId, countLabel, _isRerender){
  const VD = {pass:[t('table.vdPass') || '기업 워케이션 적합','v-pass'], fail:[t('table.vdFail') || '개선 필요','v-fail'], hold:[t('table.vdHold') || '추가 확인 필요','v-hold']};
  const typeCodes = ['BT','TW','FP','RW'];
  const unitSuffix = t('table.unitSeat') || '석';
  const notConfirmed = t('table.notConfirmed') || '확인 안 됨';
  const thFacility = t('table.thFacility') || '시설', thCapacity = t('table.thCapacity') || '정원',
        thIndex = t('table.thIndex') || 'W2BI 환산지수', thMandatory = t('table.thMandatory') || '필수 요건';
  const lPass = t('table.lPass') || '적합', lFail = t('table.lFail') || '개선 필요', lHold = t('table.lHold') || '추가 확인', lAvg = t('table.lAvg') || '평균';
  const countSuffix = t('table.unitFacilities') || countLabel || '개소';
  const sourceSuffix = t('table.indexNote') || 'W2BI 환산지수는 확정 점수 ÷ 평가 가능 배점의 잠정 비교 지표';
  const host = document.getElementById(containerId);
  if (!host) return;
  host.innerHTML = groups.map((g, gi) => `
    <section class="municipal-group">
      <button class="municipal-head" type="button" aria-expanded="false" aria-controls="${containerId}-panel-${gi}">
        <span class="municipal-plus" aria-hidden="true">+</span>
        <span class="municipal-title"><b>${trK(g.name)}</b><small>${g.summary.total}${countSuffix}</small></span>
        <span class="municipal-stats">
          <em class="stat-pass">${lPass} ${g.summary.pass}</em><em class="stat-fail">${lFail} ${g.summary.fail}</em><em class="stat-hold">${lHold} ${g.summary.hold}</em><em>${lAvg} ${g.summary.avg.toFixed(1)}</em>
        </span>
      </button>
      <div class="municipal-panel" id="${containerId}-panel-${gi}" hidden>
        <div class="tablewrap municipal-tablewrap">
          <table class="scoretable municipal-table">
            <thead><tr><th>${thFacility}</th><th class="c">${thCapacity}</th><th>${thIndex}</th><th class="c">${thMandatory}</th>${typeCodes.map(c => `<th class="c ty">${c}</th>`).join('')}</tr></thead>
            <tbody>${g.facilities.map(f => `
              <tr><td><div class="bname">${trK(f.n)}</div></td><td class="c">${f.cap ? f.cap + unitSuffix : notConfirmed}</td>
              <td><span class="bar municipal-bar"><i><b style="width:${f.idx}%"></b></i><em>${f.idx.toFixed(1)}</em></span></td>
              <td class="c"><span class="${VD[f.vd][1]}">${VD[f.vd][0]}</span></td>
              ${f.ty.map(([mk, kw]) => `<td class="tyc">${
                mk ? `<span class="v${mk === 'V*' ? ' tent' : ''}">${mk}</span><span class="kw good">${trK(kw)}</span>`
                   : `<span class="x">–</span><span class="kw">${trK(kw)}</span>`
              }</td>`).join('')}</tr>`).join('')}
            </tbody>
          </table>
        </div>
        <p class="municipal-source">${trK(g.source)} · ${sourceSuffix}</p>
      </div>
    </section>`).join('');

  host.addEventListener('click', e => {
    const btn = e.target.closest('.municipal-head');
    if (!btn) return;
    const panel = document.getElementById(btn.getAttribute('aria-controls'));
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    panel.hidden = open;
  });

  if (!_isRerender) I18N_RERENDERS.push(() => renderMunicipalGroups(groups, containerId, countLabel, true));
}

/* ── 스크롤 스파이(같은 페이지 섹션 이동 시) ── */
function mountSpy(ids){
  const nav = [...document.querySelectorAll('#nav a')];
  const secs = ids.map(i => document.querySelector(i)).filter(Boolean);
  if (!secs.length) return;
  const spy = () => {
    const y = window.scrollY + 180;
    let cur = -1;
    secs.forEach((s, i) => { if (s.offsetTop <= y) cur = i; });
  };
  window.addEventListener('scroll', spy, {passive:true}); spy();
}
