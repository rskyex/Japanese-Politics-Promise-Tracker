import type { Promise } from '@/types'

// Demo promise data for Japan Promise Tracker.
// rawTextJa fields marked [DEMO SUMMARY] are paraphrased/simplified for demo purposes.
// summaryEn fields are English translations/summaries.
// Source URLs reference real public documents where available; otherwise labelled as demo.
export const promises: Promise[] = [
  // ── Kishida ──────────────────────────────────────────────
  {
    id: 'prm-kishida-1',
    politicianId: 'pol-kishida',
    electionYear: 2021,
    title: 'New Capitalism: redistribution alongside growth',
    rawTextJa:
      '【デモ要約】成長と分配の好循環を実現する「新しい資本主義」を推進し、賃上げや投資拡大によって国民全体の所得を底上げする。',
    summaryEn:
      'Promote "New Capitalism" — a virtuous cycle of growth and redistribution — raising household incomes through wage growth support and expanded investment in human capital and innovation.',
    issueArea: 'Economy',
    salience: 'High',
    promiseType: 'Manifesto pledge',
    sourceLabel: 'LDP 2021 Policy Platform (J-File 2021)',
    sourceUrl: 'https://www.jimin.jp/election/results/sen_shu49/',
  },
  {
    id: 'prm-kishida-2',
    politicianId: 'pol-kishida',
    electionYear: 2021,
    title: 'Defense spending review and strengthened deterrence',
    rawTextJa:
      '【デモ要約】安全保障環境の変化に対応し、防衛力を根本的に強化する。防衛費のGDP比2%を念頭に検討を進める。',
    summaryEn:
      'Fundamentally strengthen Japan\'s defense capability in response to a deteriorating security environment, with a view to increasing defense spending toward 2% of GDP.',
    issueArea: 'Defense / Security',
    salience: 'High',
    promiseType: 'Campaign speech',
    sourceLabel: 'LDP 2021 Election Platform',
    sourceUrl: 'https://www.jimin.jp/election/results/sen_shu49/',
  },
  {
    id: 'prm-kishida-3',
    politicianId: 'pol-kishida',
    electionYear: 2021,
    title: 'Raise capital gains and financial income tax',
    rawTextJa:
      '【デモ要約】金融所得課税の強化を検討し、分配政策の財源の一つとする。',
    summaryEn:
      'Consider strengthening taxation of financial and capital gains income as part of distributional reform funding.',
    issueArea: 'Tax',
    salience: 'Medium',
    promiseType: 'Campaign speech',
    sourceLabel: 'Kishida campaign remarks, September 2021',
    sourceUrl: '#demo',
  },
  {
    id: 'prm-kishida-4',
    politicianId: 'pol-kishida',
    electionYear: 2021,
    title: 'Nuclear energy policy: safety-first restart pathway',
    rawTextJa:
      '【デモ要約】安全性が確認された原発の再稼働を進めつつ、再生可能エネルギーの最大限活用を推進する。',
    summaryEn:
      'Advance restarts of nuclear plants whose safety has been confirmed while maximising renewable energy deployment.',
    issueArea: 'Energy',
    salience: 'Medium',
    promiseType: 'Manifesto pledge',
    sourceLabel: 'LDP 2021 Policy Platform',
    sourceUrl: 'https://www.jimin.jp/election/results/sen_shu49/',
  },

  // ── Izumi (CDP) ──────────────────────────────────────────
  {
    id: 'prm-izumi-1',
    politicianId: 'pol-izumi',
    electionYear: 2021,
    title: 'Eliminate household income tax thresholds harming secondary earners',
    rawTextJa:
      '【デモ要約】配偶者控除など「年収の壁」を見直し、働く意欲を阻害する制度を抜本的に改革する。',
    summaryEn:
      'Abolish or restructure income thresholds (the "income wall") such as spousal deductions that discourage secondary earners — particularly women — from increasing work hours.',
    issueArea: 'Childcare / Family',
    salience: 'High',
    promiseType: 'Manifesto pledge',
    sourceLabel: 'CDP 2021 Election Manifesto',
    sourceUrl: 'https://cdp-japan.jp/election2021/',
  },
  {
    id: 'prm-izumi-2',
    politicianId: 'pol-izumi',
    electionYear: 2021,
    title: 'Oppose defense budget expansion without democratic debate',
    rawTextJa:
      '【デモ要約】防衛費の急激な増額は、国会での十分な審議なしに進めるべきでない。財源と政策目的を国民に丁寧に説明すべきだ。',
    summaryEn:
      'Oppose rapid defense budget expansion without thorough Diet deliberation. The government must clearly explain funding sources and policy rationale to citizens.',
    issueArea: 'Defense / Security',
    salience: 'High',
    promiseType: 'Election debate',
    sourceLabel: 'CDP party debate, October 2021',
    sourceUrl: '#demo',
  },
  {
    id: 'prm-izumi-3',
    politicianId: 'pol-izumi',
    electionYear: 2021,
    title: 'Expand childcare support and reduce nursery waitlists',
    rawTextJa:
      '【デモ要約】待機児童ゼロを達成し、保育の質と量を大幅に拡充する。',
    summaryEn:
      'Eliminate nursery waiting lists and significantly expand both the quantity and quality of childcare provision.',
    issueArea: 'Childcare / Family',
    salience: 'High',
    promiseType: 'Manifesto pledge',
    sourceLabel: 'CDP 2021 Election Manifesto',
    sourceUrl: 'https://cdp-japan.jp/election2021/',
  },
  {
    id: 'prm-izumi-4',
    politicianId: 'pol-izumi',
    electionYear: 2021,
    title: 'Reintroduce income tax progressivity for high earners',
    rawTextJa:
      '【デモ要約】高所得者への課税強化と再分配の強化により、格差の縮小を実現する。',
    summaryEn:
      'Strengthen progressive income taxation for high earners to reduce inequality and fund social investment.',
    issueArea: 'Tax',
    salience: 'Medium',
    promiseType: 'Manifesto pledge',
    sourceLabel: 'CDP 2021 Election Manifesto',
    sourceUrl: 'https://cdp-japan.jp/election2021/',
  },

  // ── Nishimura (LDP – Energy/Economy) ─────────────────────
  {
    id: 'prm-nishimura-1',
    politicianId: 'pol-nishimura',
    electionYear: 2021,
    title: 'Green Transformation (GX) — decarbonize while securing energy supply',
    rawTextJa:
      '【デモ要約】グリーントランスフォーメーション（GX）を推進し、脱炭素社会の実現と産業競争力の強化を両立させる。',
    summaryEn:
      'Drive Green Transformation (GX) — transitioning to a decarbonised economy while maintaining industrial competitiveness and energy supply security.',
    issueArea: 'Energy',
    salience: 'High',
    promiseType: 'Party platform',
    sourceLabel: 'LDP GX Policy Framework 2022',
    sourceUrl: '#demo',
  },
  {
    id: 'prm-nishimura-2',
    politicianId: 'pol-nishimura',
    electionYear: 2021,
    title: 'Accelerate digital transformation of Japanese industry',
    rawTextJa:
      '【デモ要約】デジタル化の遅れた産業分野でDXを加速し、生産性向上と新産業創出を実現する。',
    summaryEn:
      'Accelerate digital transformation (DX) across lagging industrial sectors to raise productivity and create new industries.',
    issueArea: 'Digital / Tech Policy',
    salience: 'Medium',
    promiseType: 'Party platform',
    sourceLabel: 'LDP DX Strategy 2021',
    sourceUrl: '#demo',
  },
  {
    id: 'prm-nishimura-3',
    politicianId: 'pol-nishimura',
    electionYear: 2021,
    title: 'Support SME wage increases through subsidy programs',
    rawTextJa:
      '【デモ要約】中小企業における賃上げを助成金や補助金で後押しし、最低賃金の引上げにも対応できる体制を整える。',
    summaryEn:
      'Support wage increases in small and medium enterprises through subsidy programs, enabling compliance with minimum wage hikes.',
    issueArea: 'Economy',
    salience: 'Medium',
    promiseType: 'Party platform',
    sourceLabel: 'LDP SME Policy Platform 2021',
    sourceUrl: '#demo',
  },

  // ── Tamaki (DPFP) ─────────────────────────────────────────
  {
    id: 'prm-tamaki-1',
    politicianId: 'pol-tamaki',
    electionYear: 2021,
    title: 'Reform the 103-man-wall income threshold to remove work disincentives',
    rawTextJa:
      '【デモ要約】年収103万円の壁を見直し、パートや非正規労働者が安心して収入を増やせるようにする。',
    summaryEn:
      'Reform the ¥1.03 million annual income threshold (the "103-man wall") to remove the disincentive for part-time and non-regular workers — especially women — to earn more.',
    issueArea: 'Tax',
    salience: 'High',
    promiseType: 'Manifesto pledge',
    sourceLabel: 'DPFP 2021 Election Manifesto',
    sourceUrl: '#demo',
  },
  {
    id: 'prm-tamaki-2',
    politicianId: 'pol-tamaki',
    electionYear: 2021,
    title: 'Raise the basic income tax deduction to support working households',
    rawTextJa:
      '【デモ要約】基礎控除を大幅に引き上げ、低中所得者の手取り収入を増やす。',
    summaryEn:
      'Significantly raise the basic income tax deduction to increase take-home pay for low- and middle-income households.',
    issueArea: 'Tax',
    salience: 'High',
    promiseType: 'Manifesto pledge',
    sourceLabel: 'DPFP 2021 Election Manifesto',
    sourceUrl: '#demo',
  },
  {
    id: 'prm-tamaki-3',
    politicianId: 'pol-tamaki',
    electionYear: 2021,
    title: 'Expand free education from high school through university',
    rawTextJa:
      '【デモ要約】高校から大学まで教育の無償化を段階的に拡大し、教育格差を縮小する。',
    summaryEn:
      'Expand tuition-free education from high school through university in stages to reduce educational inequality.',
    issueArea: 'Education',
    salience: 'Medium',
    promiseType: 'Manifesto pledge',
    sourceLabel: 'DPFP 2021 Election Manifesto',
    sourceUrl: '#demo',
  },

  // ── Yamamoto (Reiwa) ─────────────────────────────────────
  {
    id: 'prm-yamamoto-1',
    politicianId: 'pol-yamamoto',
    electionYear: 2022,
    title: 'Abolish consumption tax to stimulate domestic demand',
    rawTextJa:
      '【デモ要約】消費税を廃止し、内需拡大と家計支援を実現する。',
    summaryEn:
      'Abolish the consumption tax entirely to stimulate domestic demand and support household finances.',
    issueArea: 'Tax',
    salience: 'High',
    promiseType: 'Manifesto pledge',
    sourceLabel: 'Reiwa Shinsengumi 2022 Upper House Election Manifesto',
    sourceUrl: '#demo',
  },
  {
    id: 'prm-yamamoto-2',
    politicianId: 'pol-yamamoto',
    electionYear: 2022,
    title: 'Emergency universal basic income during cost-of-living crisis',
    rawTextJa:
      '【デモ要約】物価高騰に対応するため、全国民への緊急給付金を支給するとともに、将来的なベーシックインカム導入を目指す。',
    summaryEn:
      'Provide emergency universal cash transfers in response to the cost-of-living crisis, as a step toward introducing a permanent basic income scheme.',
    issueArea: 'Social Welfare',
    salience: 'High',
    promiseType: 'Manifesto pledge',
    sourceLabel: 'Reiwa 2022 Upper House Election Manifesto',
    sourceUrl: '#demo',
  },
  {
    id: 'prm-yamamoto-3',
    politicianId: 'pol-yamamoto',
    electionYear: 2022,
    title: 'Eliminate barriers for people with disabilities in the Diet and society',
    rawTextJa:
      '【デモ要約】障害者が国会や社会で完全に参加できるよう、法制度と実態の両面から障壁を取り除く。',
    summaryEn:
      'Remove structural barriers — legal and practical — preventing people with disabilities from full participation in the Diet and broader society.',
    issueArea: 'Social Welfare',
    salience: 'High',
    promiseType: 'Manifesto pledge',
    sourceLabel: 'Reiwa founding platform and 2022 manifesto',
    sourceUrl: '#demo',
  },

  // ── Renho (CDP – Upper House) ────────────────────────────
  {
    id: 'prm-renho-1',
    politicianId: 'pol-renho',
    electionYear: 2022,
    title: 'Strengthen administrative review and fiscal accountability',
    rawTextJa:
      '【デモ要約】行政事業レビューを強化し、税金の無駄遣いをなくす取り組みを推進する。',
    summaryEn:
      'Strengthen administrative programme review processes to eliminate wasteful government spending and improve fiscal accountability.',
    issueArea: 'Political Reform',
    salience: 'High',
    promiseType: 'Manifesto pledge',
    sourceLabel: 'CDP 2022 Upper House Election Manifesto',
    sourceUrl: '#demo',
  },
  {
    id: 'prm-renho-2',
    politicianId: 'pol-renho',
    electionYear: 2022,
    title: 'Advance gender equality in political representation and workplace',
    rawTextJa:
      '【デモ要約】政治分野・経済分野での女性活躍推進と、実質的なジェンダー平等の実現を目指す。',
    summaryEn:
      'Advance substantive gender equality in political representation and workplace participation, moving beyond surface-level "women\'s advancement" policies.',
    issueArea: 'Social Welfare',
    salience: 'High',
    promiseType: 'Manifesto pledge',
    sourceLabel: 'CDP 2022 Upper House Election Manifesto',
    sourceUrl: '#demo',
  },

  // ── Edano (CDP) ──────────────────────────────────────────
  {
    id: 'prm-edano-1',
    politicianId: 'pol-edano',
    electionYear: 2021,
    title: 'Phase out nuclear energy with a clear timeline',
    rawTextJa:
      '【デモ要約】原発ゼロを明確な工程表のもとで実現し、再生可能エネルギーへの移行を加速させる。',
    summaryEn:
      'Achieve a nuclear-free Japan under a clear phaseout timeline, accelerating the transition to renewable energy.',
    issueArea: 'Energy',
    salience: 'High',
    promiseType: 'Manifesto pledge',
    sourceLabel: 'CDP 2021 Election Manifesto',
    sourceUrl: 'https://cdp-japan.jp/election2021/',
  },
  {
    id: 'prm-edano-2',
    politicianId: 'pol-edano',
    electionYear: 2021,
    title: 'Enact constitutional constraints on emergency powers',
    rawTextJa:
      '【デモ要約】緊急事態条項の憲法への明記には反対し、現行の法制度での対応を原則とする。',
    summaryEn:
      'Oppose constitutionalising emergency power clauses; insist on handling emergencies within existing legal frameworks to prevent executive overreach.',
    issueArea: 'Constitutional Reform',
    salience: 'High',
    promiseType: 'Manifesto pledge',
    sourceLabel: 'CDP 2021 Election Manifesto',
    sourceUrl: 'https://cdp-japan.jp/election2021/',
  },

  // ── Koike (LDP) ──────────────────────────────────────────
  {
    id: 'prm-koike-1',
    politicianId: 'pol-koike',
    electionYear: 2021,
    title: 'Advance Tokyo\'s digital transformation as a model for Japan',
    rawTextJa:
      '【デモ要約】東京都のデジタル化を全国の先進事例とし、行政DXと市民サービスの向上を実現する。',
    summaryEn:
      'Position Tokyo as a national model for digital government transformation, improving administrative efficiency and citizen services.',
    issueArea: 'Digital / Tech Policy',
    salience: 'High',
    promiseType: 'Campaign speech',
    sourceLabel: 'Koike re-election platform, Tokyo 2020',
    sourceUrl: '#demo',
  },
  {
    id: 'prm-koike-2',
    politicianId: 'pol-koike',
    electionYear: 2021,
    title: 'Lead Japan\'s environmental policy through urban innovation',
    rawTextJa:
      '【デモ要約】東京発の環境イノベーションを通じて、日本全体の脱炭素・環境政策をリードする。',
    summaryEn:
      'Lead Japan\'s environmental and decarbonisation policy through urban innovation, positioning Tokyo as a green city model.',
    issueArea: 'Environment',
    salience: 'Medium',
    promiseType: 'Party platform',
    sourceLabel: 'LDP Tokyo Member Policy Statement',
    sourceUrl: '#demo',
  },
]
