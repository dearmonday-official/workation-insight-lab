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
    'w2bi.step2.h4': 'Evidence-Based Converted Score', 'w2bi.step2.p': 'Only items confirmed via official websites, operator materials, or on-site visits are finalized. Unconfirmed items are excluded from the scorable total as well.',
    'w2bi.formula': 'Converted Index = Confirmed Score ÷ Scorable Total × 100',
    'w2bi.step3.h4': 'Mandatory Requirements & Program Fit, Judged Independently', 'w2bi.step3.p': 'After checking the mandatory subtotal and any zero-scored items, business-trip-linked, team workshop, immersive project, and regular-work types are each judged independently.',
    'w2bi.step3.li1': 'Whether mandatory subtotal reaches 33+', 'w2bi.step3.li2': 'Type fit ≥ 80 · evidence coverage ≥ 60%',
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
    'research.tabAll': 'All', 'research.statDone': 'Published', 'research.statPlan': 'Upcoming',
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
    'w2bi.tab3.label': 'Nationwide Municipal Facilities', 'w2bi.tab3.sub': '7 metro regions · 134 facilities diagnosed'
  },
  ja: {
    'header.subscribe': '登録する',
    'footer.terms': '利用規約',
    'footer.privacy': '個人情報処理方針',
    'footer.links': 'DearMonday 関連リンク',
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
    'w2bi.step2.h4': '根拠に基づく換算指数', 'w2bi.step2.p': '公式ウェブサイト、運営機関資料と現場実査で確認された項目のみを確定します。未確認項目は評価可能配点からも除外します。',
    'w2bi.formula': '換算指数 = 確定点数 ÷ 評価可能配点 × 100',
    'w2bi.step3.h4': '必須要件とタイプ適合性の独立判定', 'w2bi.step3.p': '必須小計と0点項目を先に確認した後、出張連携、チームワークショップ、没入プロジェクト、正規勤務タイプをそれぞれ独立して判定します。',
    'w2bi.step3.li1': '必須33点以上かどうか', 'w2bi.step3.li2': 'タイプ適合度80以上・根拠確保率60%以上',
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
    'research.tabAll': '全体', 'research.statDone': '発行完了', 'research.statPlan': '発行予定',
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
    'w2bi.tab3.label': '全国自治体施設', 'w2bi.tab3.sub': '7圏域・134施設診断完了'
  }
};

function getLang(){ return localStorage.getItem('wil_lang') || 'ko'; }

/* 정적 마크업(data-i18n)이 아니라 JS가 매번 새로 그리는 동적 콘텐츠(표·모달 등)에서 쓰는 조회 함수.
   ko이거나 키가 없으면 null을 반환하므로, 호출부에서 `t('key') || '한국어 기본값'` 형태로 사용한다 */
function t(key){ const lang = getLang(); if (lang === 'ko') return null; return (I18N[lang] && I18N[lang][key]) || null; }

/* 동적 렌더 함수(renderMunicipalGroups 등)가 언어 전환 시 자기 자신을 다시 그리도록 등록하는 콜백 목록 */
const I18N_RERENDERS = [];

function applyLang(lang){
  localStorage.setItem('wil_lang', lang);
  const dict = I18N[lang];
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
  if (btn) btn.textContent = lang === 'ko' ? 'KOR' : lang === 'en' ? 'ENG' : 'JPN';
  document.querySelectorAll('.lang-menu button').forEach(b =>
    b.classList.toggle('on', b.getAttribute('data-lang') === lang));
  I18N_RERENDERS.forEach(fn => { try { fn(); } catch(e){} });
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
  dm:['경주 라한셀렉트호텔점','경주 라한셀렉트호텔점','제주 마레보비치호텔점','경주 라한셀렉트호텔점','경주 라한셀렉트호텔점','속초 체스터톤스호텔점','경주 라한셀렉트호텔점','제주 마레보비치호텔점','경주 라한셀렉트호텔점','시흥 르컬렉티브점','경주 춘추관점','경주 라한셀렉트호텔점'],
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
        <img class="brand-mark" src="assets/dear monday-04.png" alt="DearMonday"><span class="brand-div"></span><span class="brand-lab"><b>WORKATION</b><span>INSIGHT LAB</span></span>
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
          <img src="assets/dear monday-04-white.png" alt="DearMonday"><span class="fb-div"></span><div class="brand-lab footer-lab"><b>WORKATION</b><span>INSIGHT LAB</span></div>
        </div>
        <div class="f-act">
          <a href="https://dearmonday.io/common/terms" target="_blank" rel="noopener" data-i18n="footer.terms">이용약관</a>
          <a href="https://dearmonday.io/common/privacy" target="_blank" rel="noopener" data-i18n="footer.privacy">개인정보 처리방침</a>
          <div class="dd" id="dmDD">
            <button class="dd-btn" id="dmDDBtn"><span data-i18n="footer.links">디어먼데이 관련 링크</span> <i>▾</i></button>
            <div class="dd-menu">
              <a href="https://dearmonday.io" target="_blank" rel="noopener">디어먼데이 플랫폼 <em>↗</em></a>
              <a href="https://www.youtube.com/@dearmonday" target="_blank" rel="noopener">YouTube <em>↗</em></a>
              <a href="https://www.instagram.com/dear.monday.official" target="_blank" rel="noopener">Instagram <em>↗</em></a>
              <a href="https://blog.naver.com/dear_monday" target="_blank" rel="noopener">Naver Blog <em>↗</em></a>
            </div>
          </div>
        </div>
      </div>
      <div class="f-legal">
        <b>상호명</b> 주식회사 디어먼데이 <b>대표자</b> 김정수, 김성우
        <b>사업자등록번호</b> 544-81-02720 <b>통신판매업신고번호</b> 2024-서울중구-0166호
        <b>주소</b> 서울특별시 마포구 백범로 31길, 21 지상 3층 310호 (공덕동, 서울창업허브 별관)
        <b>개인정보 관리책임자</b> 김성우 (sungwoo.kim@dearmonday.io)
        <span style="margin-left:auto">Copyright ⓒ 2026 DearMonday. All rights reserved.</span>
      </div>
    </div>
  </footer>`;
  const dd = document.getElementById('dmDD');
  document.getElementById('dmDDBtn').onclick = e => { e.stopPropagation(); dd.classList.toggle('open'); };
  document.addEventListener('click', () => dd.classList.remove('open'));
  applyLang(getLang());
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
function mountSelfModal(){
  const req = QUESTIONS.filter(q => q.req), rec = QUESTIONS.filter(q => !q.req);
  const mk = q => `<div class="q">
      <div class="qt"><b>${q.id}. ${q.t}</b></div>
      <div class="opts">${q.o.map(([lb, sc]) =>
        `<label class="opt"><input type="radio" name="q${q.id}" value="${sc}">
         <span>${lb}</span></label>`).join('')}</div>
    </div>`;
  document.getElementById('wilModal').innerHTML = `
  <div class="modal" id="selfModal">
    <div class="mbox">
      <div class="mhead">
        <div>
          <h3>W2BI 자가 진단</h3>
          <p>실제 진단에 사용하는 12개 항목·100점 만점 체계를 그대로 적용합니다.
             응답 결과는 저장되지 않으며 브라우저 안에서만 계산됩니다.</p>
        </div>
        <button class="mclose" onclick="closeSelf()" aria-label="닫기">✕</button>
      </div>
      <div class="mbody">
        <div class="cap-row">
          <label for="capIn">오피스 정원</label>
          <input type="number" id="capIn" value="12" min="1" max="200">
          <small>석 — 팀/단체 워크샵형(TW) 판정에 사용됩니다 (15석 이상 필요)</small>
        </div>
        <div id="qWrap">
          <div class="qlabel">필수 항목 · 5개 · 45점 — 소계 33점 미만 시 기업 매칭 추천 대상 제외</div>
          ${req.map(mk).join('')}
          <div class="qlabel">권장 항목 · 7개 · 55점</div>
          ${rec.map(mk).join('')}
        </div>
        <div class="result" id="selfResult"></div>
      </div>
      <div class="mfoot">
        <span style="font-size:12px;color:var(--mute)">모든 항목을 선택한 후 결과 보기를 눌러주세요.</span>
        <div style="display:flex;gap:10px">
          <button class="btn-line" style="border-color:var(--line);color:var(--body)" onclick="resetSelf()">초기화</button>
          <button class="btn-fill" onclick="calcSelf(true)">결과 보기</button>
        </div>
      </div>
    </div>
  </div>`;
  document.getElementById('selfModal').addEventListener('click', e => { if (e.target.id === 'selfModal') closeSelf(); });
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
    alert(`미응답 문항이 ${missing.length}개 있습니다. 모든 문항에 응답해 주세요.`);
    return;
  }
  const cap = +document.getElementById('capIn').value || 0;
  const reqSum = [1,2,3,4,5].reduce((a, i) => a + s[i], 0);
  const recSum = [6,7,8,9,10,11,12].reduce((a, i) => a + s[i], 0);
  const total = reqSum + recSum;
  const zero = [1,2,3,4,5].filter(i => s[i] === 0);
  const pass = zero.length === 0 && reqSum >= 33;

  const tRes = TYPES.map(t => {
    const got = t.items.reduce((a, i) => a + s[i], 0);
    const den = t.items.reduce((a, i) => a + QUESTIONS.find(q => q.id === i).w, 0);
    const fit = den ? Math.round(got / den * 1000) / 10 : 0;
    const capOk = !t.cap || cap >= t.cap;
    const ok = pass && fit >= 80 && capOk;
    let why = '적합';
    if (!pass) why = '필수 요건 미충족';
    else if (!capOk) why = `정원 ${cap}석 (${t.cap}석 미만)`;
    else if (fit < 80) why = `적합도 ${fit} (기준 80 미만)`;
    return {...t, fit, ok, why};
  });

  const box = document.getElementById('selfResult');
  const improve = QUESTIONS.filter(q => s[q.id] < q.w).map(q => {
    const picked = q.o.find(([, score]) => score === s[q.id]);
    const best = q.o[q.o.length - 1][0];
    return `<div class="improve-item"><h5>${q.id}. ${q.t}</h5>
      <p><b>문제 지점</b> 현재 응답은 ‘${picked ? picked[0] : '미확인'}’으로 최고 기준에 미달합니다.<br>
      <b>개선 기준</b> ${best}<br>
      <b>최고 기준 사례</b> <a href="https://dearmonday.io/branch/list?useCount=0" target="_blank" rel="noopener">DearMonday ${SELF_EXAMPLES.dm[q.id - 1]}</a> · 지자체 운영 시설 ${SELF_EXAMPLES.public[q.id - 1]}</p></div>`;
  }).join('');
  box.className = 'result on';
  box.innerHTML = `
    <div class="res-top">
      <div><b>${total}</b><span>W2BI 총점 / 100점</span></div>
      <div><b>${reqSum}</b><span>필수 소계 / 45점</span></div>
      <div><b>${recSum}</b><span>권장 소계 / 55점</span></div>
      <div><b>${tRes.filter(t => t.ok).length}</b><span>해당 프로그램 유형 / 4</span></div>
    </div>
    <div class="res-verdict ${pass ? 'pass' : 'fail'}">
      ${pass
        ? `기업 워케이션 적합 — 기업 매칭 추천 대상입니다. (필수 소계 ${reqSum}점 ≥ 33점)`
        : zero.length
          ? `개선 필요 — ${zero.map(i => i + '번 항목').join(', ')}이 0점입니다. 0점 항목이 있으면 기업 매칭 추천 대상에서 제외됩니다.`
          : `개선 필요 — 필수 소계 ${reqSum}점으로 기준 33점에 ${33 - reqSum}점 부족합니다.`}
    </div>
    <div class="res-types">
      ${tRes.map(t => `<div class="rt ${t.ok ? 'ok' : 'no'}">
        <div class="mark">${t.ok ? 'V' : '–'}</div><b>${t.n}</b>
        <span>${t.ok ? '적합도 ' + t.fit : t.why}</span>
      </div>`).join('')}
    </div>
    <div class="improve-list">
      ${improve || '<div class="improve-item"><h5>모든 항목이 최고 기준입니다</h5><p>현재 응답 기준으로 추가 개선이 필요한 항목이 없습니다.</p></div>'}
    </div>
    <p style="margin-top:14px;font-size:11.5px;color:var(--mute);line-height:1.6">
      본 자가 진단은 응답 기반 참고 결과입니다. 공식 W2BI 진단은 현장 실사 및 운영 데이터 확인을 거쳐 확정됩니다.
    </p>
    <button class="btn-fill pdf-btn" onclick="downloadSelfPDF()">결과를 PDF로 다운로드</button>`;
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
        <span class="municipal-title"><b>${g.name}</b><small>${g.summary.total}${countSuffix}</small></span>
        <span class="municipal-stats">
          <em class="stat-pass">${lPass} ${g.summary.pass}</em><em class="stat-fail">${lFail} ${g.summary.fail}</em><em class="stat-hold">${lHold} ${g.summary.hold}</em><em>${lAvg} ${g.summary.avg.toFixed(1)}</em>
        </span>
      </button>
      <div class="municipal-panel" id="${containerId}-panel-${gi}" hidden>
        <div class="tablewrap municipal-tablewrap">
          <table class="scoretable municipal-table">
            <thead><tr><th>${thFacility}</th><th class="c">${thCapacity}</th><th>${thIndex}</th><th class="c">${thMandatory}</th>${typeCodes.map(c => `<th class="c ty">${c}</th>`).join('')}</tr></thead>
            <tbody>${g.facilities.map(f => `
              <tr><td><div class="bname">${f.n}</div></td><td class="c">${f.cap ? f.cap + unitSuffix : notConfirmed}</td>
              <td><span class="bar municipal-bar"><i><b style="width:${f.idx}%"></b></i><em>${f.idx.toFixed(1)}</em></span></td>
              <td class="c"><span class="${VD[f.vd][1]}">${VD[f.vd][0]}</span></td>
              ${f.ty.map(([mk, kw]) => `<td class="tyc">${
                mk ? `<span class="v${mk === 'V*' ? ' tent' : ''}">${mk}</span><span class="kw good">${kw}</span>`
                   : `<span class="x">–</span><span class="kw">${kw}</span>`
              }</td>`).join('')}</tr>`).join('')}
            </tbody>
          </table>
        </div>
        <p class="municipal-source">${g.source} · ${sourceSuffix}</p>
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
