import type { Action } from '@/types'

// Demo Diet action data for Japan Promise Tracker.
// Excerpts marked [DEMO SUMMARY / PARAPHRASE] are simplified for demo purposes.
// For real deployment, connect to National Diet Library API or kokkai.ndl.go.jp.
// TODO: Replace with real Diet proceedings API data ingestion here.
export const actions: Action[] = [
  // ── Kishida ──────────────────────────────────────────────
  {
    id: 'act-kishida-1',
    politicianId: 'pol-kishida',
    date: '2022-01-17',
    actionType: 'Plenary speech',
    title: 'Policy speech: New Capitalism framework announced',
    excerptJa:
      '【デモ要旨・要約】「成長と分配の好循環」を核とする新しい資本主義を推進し、賃上げ企業への税制支援、スタートアップ育成、デジタル・グリーン投資を拡大する。',
    summaryEn:
      '[Demo summary] Policy speech announcing New Capitalism framework, including tax incentives for wage-raising companies, startup support measures, and investment in digital and green transformation.',
    issueArea: 'Economy',
    stance: 'Supportive',
    sourceLabel: 'Diet Plenary Session, 208th Diet, January 2022',
    sourceUrl: 'https://kokkai.ndl.go.jp/',
  },
  {
    id: 'act-kishida-2',
    politicianId: 'pol-kishida',
    date: '2022-12-16',
    actionType: 'Press statement',
    title: 'National Security Strategy revision announced — defense spending to 2% of GDP',
    excerptJa:
      '【デモ要旨・要約】新たな国家安全保障戦略、国家防衛戦略、防衛力整備計画を閣議決定。防衛費をGDP比2%へ段階的に引き上げ、反撃能力（スタンド・オフ防衛能力）を保有する。',
    summaryEn:
      '[Demo summary] Cabinet decision on new National Security Strategy, National Defense Strategy, and Defense Buildup Plan. Defense spending to be raised to 2% of GDP over five years; Japan to acquire counterstrike capability.',
    issueArea: 'Defense / Security',
    stance: 'Supportive',
    sourceLabel: 'Cabinet Decision, December 2022; PM Press Conference',
    sourceUrl: 'https://www.cas.go.jp/jp/siryou/221216anzenhoshou.html',
  },
  {
    id: 'act-kishida-3',
    politicianId: 'pol-kishida',
    date: '2021-10-08',
    actionType: 'Plenary speech',
    title: 'Capital gains tax review quietly shelved in policy speech',
    excerptJa:
      '【デモ要旨・要約】所信表明演説では「成長と分配」を強調したが、金融所得課税強化への具体的な言及はなく、市場からの批判を受けて事実上見送りの方向が示された。',
    summaryEn:
      '[Demo summary] In inaugural policy speech, stressed "growth and distribution" but made no specific reference to strengthening capital gains taxation — signalling a retreat from earlier campaign remarks after market reaction.',
    issueArea: 'Tax',
    stance: 'Mixed',
    sourceLabel: 'PM Policy Speech, 205th Diet, October 2021',
    sourceUrl: 'https://kokkai.ndl.go.jp/',
  },
  {
    id: 'act-kishida-4',
    politicianId: 'pol-kishida',
    date: '2023-02-10',
    actionType: 'Bill submission',
    title: 'GX Promotion Bill submitted — nuclear restart and long-term operation framework',
    excerptJa:
      '【デモ要旨・要約】GX推進法案を国会提出。原子力発電所の60年超運転を可能にする制度改正と、GX経済移行債を活用したグリーン投資を盛り込む。',
    summaryEn:
      '[Demo summary] GX Promotion Bill submitted to Diet, enabling nuclear plant operations beyond 60 years and establishing Green Transformation bonds to fund green investment.',
    issueArea: 'Energy',
    stance: 'Supportive',
    sourceLabel: '211th Diet, Bill No. 36, February 2023',
    sourceUrl: 'https://kokkai.ndl.go.jp/',
  },

  // ── Izumi (CDP) ──────────────────────────────────────────
  {
    id: 'act-izumi-1',
    politicianId: 'pol-izumi',
    date: '2022-03-15',
    actionType: 'Committee question',
    title: 'Budget Committee: questioned income wall reform timeline',
    excerptJa:
      '【デモ要旨・要約】予算委員会にて、政府の「年収の壁」対策が不十分であるとして、控除見直しの具体的工程と財源提示を求めた。',
    summaryEn:
      '[Demo summary] In Budget Committee, challenged government on inadequate "income wall" reform progress, demanding a specific timeline and funding source for deduction restructuring.',
    issueArea: 'Childcare / Family',
    stance: 'Opposing',
    sourceLabel: 'Budget Committee, 208th Diet, March 2022',
    sourceUrl: 'https://kokkai.ndl.go.jp/',
  },
  {
    id: 'act-izumi-2',
    politicianId: 'pol-izumi',
    date: '2022-12-20',
    actionType: 'Plenary speech',
    title: 'Plenary: opposed defense spending hike as procedurally illegitimate',
    excerptJa:
      '【デモ要旨・要約】衆議院本会議にて、防衛費倍増の財源や中身を国会で十分に議論せず閣議決定のみで進めることは民主主義の観点から問題だと主張した。',
    summaryEn:
      '[Demo summary] In plenary session, argued that pushing defense spending doubling through cabinet decision without adequate Diet deliberation is procedurally problematic from a democratic standpoint.',
    issueArea: 'Defense / Security',
    stance: 'Opposing',
    sourceLabel: 'HoR Plenary, 210th Diet, December 2022',
    sourceUrl: 'https://kokkai.ndl.go.jp/',
  },
  {
    id: 'act-izumi-3',
    politicianId: 'pol-izumi',
    date: '2023-05-11',
    actionType: 'Bill submission',
    title: 'Child support enhancement bill co-submitted',
    excerptJa:
      '【デモ要旨・要約】子育て支援の抜本的強化と待機児童解消を目的とした法案を野党共同で提出。保育士の処遇改善と施設拡充を柱とする。',
    summaryEn:
      '[Demo summary] Co-submitted opposition bill to fundamentally strengthen childcare support and eliminate nursery waitlists, with childcare worker pay increases and facility expansion as core provisions.',
    issueArea: 'Childcare / Family',
    stance: 'Supportive',
    sourceLabel: '211th Diet, Opposition Bill, May 2023',
    sourceUrl: 'https://kokkai.ndl.go.jp/',
  },
  {
    id: 'act-izumi-4',
    politicianId: 'pol-izumi',
    date: '2022-05-30',
    actionType: 'Committee question',
    title: 'Finance Committee: proposed financial income surtax amendment',
    excerptJa:
      '【デモ要旨・要約】財務金融委員会で金融所得への課税強化を求める質疑を行い、税制の水平的公平性の観点から累進制強化を訴えた。',
    summaryEn:
      '[Demo summary] In Finance Committee, argued for strengthening progressive taxation on financial income, citing horizontal equity concerns.',
    issueArea: 'Tax',
    stance: 'Supportive',
    sourceLabel: 'Finance Committee, 208th Diet, May 2022',
    sourceUrl: 'https://kokkai.ndl.go.jp/',
  },

  // ── Nishimura ─────────────────────────────────────────────
  {
    id: 'act-nishimura-1',
    politicianId: 'pol-nishimura',
    date: '2022-07-14',
    actionType: 'Press statement',
    title: 'Announced accelerated nuclear restart process amid energy crisis',
    excerptJa:
      '【デモ要旨・要約】ロシアのウクライナ侵攻に伴うエネルギー危機に対応するため、安全確認済みの原発について再稼働手続きを加速する方針を表明。',
    summaryEn:
      '[Demo summary] Announced acceleration of restart procedures for safety-cleared nuclear plants in response to energy crisis triggered by Russia\'s invasion of Ukraine.',
    issueArea: 'Energy',
    stance: 'Supportive',
    sourceLabel: 'METI Press Conference, July 2022',
    sourceUrl: 'https://www.meti.go.jp/',
  },
  {
    id: 'act-nishimura-2',
    politicianId: 'pol-nishimura',
    date: '2023-05-31',
    actionType: 'Bill submission',
    title: 'GX Decarbonization Power Bill — extended nuclear operations framework',
    excerptJa:
      '【デモ要旨・要約】GX脱炭素電源法案を国会提出。原発の60年超運転、新増設・リプレースの検討、次世代革新炉の開発を盛り込み、エネルギー安定供給と脱炭素を両立させる枠組みを整備する。',
    summaryEn:
      '[Demo summary] GX Decarbonization Power Bill submitted, enabling nuclear operations beyond 60 years, considering new construction and replacement, and supporting next-generation reactor development — balancing energy security with decarbonisation.',
    issueArea: 'Energy',
    stance: 'Supportive',
    sourceLabel: '211th Diet, METI Bill, May 2023',
    sourceUrl: 'https://kokkai.ndl.go.jp/',
  },
  {
    id: 'act-nishimura-3',
    politicianId: 'pol-nishimura',
    date: '2022-10-04',
    actionType: 'Plenary speech',
    title: 'Announced economic security measures and semiconductor support',
    excerptJa:
      '【デモ要旨・要約】経済産業大臣として、半導体産業支援や重要物資のサプライチェーン強靱化など経済安保政策の推進を表明。',
    summaryEn:
      '[Demo summary] As METI Minister, announced economic security measures including semiconductor industry support and supply chain resilience for critical materials.',
    issueArea: 'Economy',
    stance: 'Supportive',
    sourceLabel: '210th Diet METI ministerial statement, October 2022',
    sourceUrl: 'https://kokkai.ndl.go.jp/',
  },

  // ── Tamaki (DPFP) ─────────────────────────────────────────
  {
    id: 'act-tamaki-1',
    politicianId: 'pol-tamaki',
    date: '2023-11-10',
    actionType: 'Plenary speech',
    title: 'Demanded government reform the 103-man income wall urgently',
    excerptJa:
      '【デモ要旨・要約】衆議院本会議にて、103万円の壁が非正規労働者・とくに女性の就労意欲を著しく損なっているとして、基礎控除と給与所得控除の抜本見直しを強く求めた。',
    summaryEn:
      '[Demo summary] In plenary session, forcefully demanded urgent reform of the ¥1.03 million income wall, arguing it significantly disincentivises non-regular workers — particularly women — from increasing earnings.',
    issueArea: 'Tax',
    stance: 'Supportive',
    sourceLabel: 'HoR Plenary, 212th Diet, November 2023',
    sourceUrl: 'https://kokkai.ndl.go.jp/',
  },
  {
    id: 'act-tamaki-2',
    politicianId: 'pol-tamaki',
    date: '2024-11-15',
    actionType: 'Committee question',
    title: 'Post-election: negotiated 103-man wall reform with LDP-Komeito coalition',
    excerptJa:
      '【デモ要旨・要約】2024年衆院選で議席を大幅に増やしたDPFPが与党と政策協議を開始。103万円の壁を178万円に引き上げる方向で協議が進んでいることが報道された。',
    summaryEn:
      '[Demo summary] Following significant seat gains in October 2024 election, DPFP entered policy negotiations with the LDP-Komeito coalition. Reports indicated discussions on raising the income threshold from ¥1.03M to ¥1.78M were underway.',
    issueArea: 'Tax',
    stance: 'Supportive',
    sourceLabel: 'Post-election coalition talks, November 2024 (media reports)',
    sourceUrl: '#demo',
  },
  {
    id: 'act-tamaki-3',
    politicianId: 'pol-tamaki',
    date: '2023-05-18',
    actionType: 'Written question',
    title: 'Written question on educational fee burden for families',
    excerptJa:
      '【デモ要旨・要約】高校・大学の授業料や教育費が家庭の経済的負担を増大させているとして、無償化拡大の具体的工程を示すよう政府に質問主意書を提出。',
    summaryEn:
      '[Demo summary] Submitted written question calling on government to provide a concrete roadmap for expanding tuition-free education, citing growing financial burden on families.',
    issueArea: 'Education',
    stance: 'Supportive',
    sourceLabel: 'Written Question, 211th Diet, May 2023',
    sourceUrl: 'https://kokkai.ndl.go.jp/',
  },

  // ── Yamamoto (Reiwa) ─────────────────────────────────────
  {
    id: 'act-yamamoto-1',
    politicianId: 'pol-yamamoto',
    date: '2022-07-28',
    actionType: 'Plenary speech',
    title: 'Upper House speech: consumption tax abolition is the only real crisis response',
    excerptJa:
      '【デモ要旨・要約】物価高騰対策として最も効果的なのは消費税の廃止であり、現政府の給付金政策では不十分だと主張した。',
    summaryEn:
      '[Demo summary] Argued in plenary that abolishing the consumption tax is the most effective response to the cost-of-living crisis, and that the government\'s cash transfer approach is insufficient.',
    issueArea: 'Tax',
    stance: 'Opposing',
    sourceLabel: 'HoC Plenary, 210th Diet, July 2022',
    sourceUrl: 'https://kokkai.ndl.go.jp/',
  },
  {
    id: 'act-yamamoto-2',
    politicianId: 'pol-yamamoto',
    date: '2023-03-24',
    actionType: 'Bill submission',
    title: 'Basic income bill submitted to Upper House',
    excerptJa:
      '【デモ要旨・要約】全国民に月7万円を給付するベーシックインカム法案を参議院に提出し、既存の社会保障給付との整合性についても説明した。',
    summaryEn:
      '[Demo summary] Submitted Basic Income Bill to the Upper House, proposing monthly ¥70,000 universal payments and explaining compatibility with existing social security transfers.',
    issueArea: 'Social Welfare',
    stance: 'Supportive',
    sourceLabel: '211th Diet, Reiwa Bill, March 2023',
    sourceUrl: 'https://kokkai.ndl.go.jp/',
  },
  {
    id: 'act-yamamoto-3',
    politicianId: 'pol-yamamoto',
    date: '2022-09-05',
    actionType: 'Committee question',
    title: 'Questioned government on disability accessibility in Diet proceedings',
    excerptJa:
      '【デモ要旨・要約】国会内の障害者アクセシビリティ改善と、重度障害者が議員活動を行える制度整備を求めた。',
    summaryEn:
      '[Demo summary] Questioned government on improving disability accessibility in Diet facilities and establishing legal frameworks enabling lawmakers with severe disabilities to fully participate.',
    issueArea: 'Social Welfare',
    stance: 'Supportive',
    sourceLabel: 'HoC Committee, 210th Diet, September 2022',
    sourceUrl: 'https://kokkai.ndl.go.jp/',
  },

  // ── Renho (CDP – Upper House) ────────────────────────────
  {
    id: 'act-renho-1',
    politicianId: 'pol-renho',
    date: '2022-10-20',
    actionType: 'Committee question',
    title: 'Challenged government on opacity of COVID-era spending reviews',
    excerptJa:
      '【デモ要旨・要約】コロナ禍で急増した補正予算について、行政事業レビューが十分に機能していないとして、事業評価の透明化と公開を求めた。',
    summaryEn:
      '[Demo summary] Challenged government on inadequate administrative review of COVID-era supplementary budget spending, demanding greater transparency and public disclosure of programme evaluations.',
    issueArea: 'Political Reform',
    stance: 'Opposing',
    sourceLabel: 'HoC Committee, 210th Diet, October 2022',
    sourceUrl: 'https://kokkai.ndl.go.jp/',
  },
  {
    id: 'act-renho-2',
    politicianId: 'pol-renho',
    date: '2023-04-14',
    actionType: 'Plenary speech',
    title: 'Plenary: challenged government on gender pay gap and political representation',
    excerptJa:
      '【デモ要旨・要約】男女間の賃金格差が依然大きく、政治分野での女性参画も進んでいないとして、クオータ制の導入や実質的な処遇改善策を求めた。',
    summaryEn:
      '[Demo summary] In plenary session, challenged government on persistent gender pay gap and slow progress on women\'s political representation, calling for quota systems and substantive equal pay measures.',
    issueArea: 'Social Welfare',
    stance: 'Opposing',
    sourceLabel: 'HoC Plenary, 211th Diet, April 2023',
    sourceUrl: 'https://kokkai.ndl.go.jp/',
  },
  {
    id: 'act-renho-3',
    politicianId: 'pol-renho',
    date: '2022-06-08',
    actionType: 'Written question',
    title: 'Written question on administrative DX project cost transparency',
    excerptJa:
      '【デモ要旨・要約】マイナンバーカード関連事業など行政DX推進事業のコスト構造と民間委託の実態について、詳細な資料開示を求める質問主意書を提出。',
    summaryEn:
      '[Demo summary] Submitted written question demanding detailed cost disclosures for administrative DX projects including My Number card programmes, and examining private sector outsourcing practices.',
    issueArea: 'Political Reform',
    stance: 'Opposing',
    sourceLabel: 'Written Question, 208th Diet, June 2022',
    sourceUrl: 'https://kokkai.ndl.go.jp/',
  },

  // ── Edano (CDP) ──────────────────────────────────────────
  {
    id: 'act-edano-1',
    politicianId: 'pol-edano',
    date: '2022-02-25',
    actionType: 'Committee question',
    title: 'Challenged energy minister on nuclear restart safety timeline',
    excerptJa:
      '【デモ要旨・要約】経産委員会にて、原発再稼働の安全審査の実態と事故時の対応体制について政府に詳細な説明を求め、核エネルギーへの依存継続を批判した。',
    summaryEn:
      '[Demo summary] In Economy, Trade and Industry Committee, demanded detailed explanation of nuclear restart safety review process and accident response preparedness, criticising continued nuclear dependence.',
    issueArea: 'Energy',
    stance: 'Opposing',
    sourceLabel: 'METI Committee, 208th Diet, February 2022',
    sourceUrl: 'https://kokkai.ndl.go.jp/',
  },
  {
    id: 'act-edano-2',
    politicianId: 'pol-edano',
    date: '2022-12-22',
    actionType: 'Plenary speech',
    title: 'Plenary: opposed constitutionalising emergency clause',
    excerptJa:
      '【デモ要旨・要約】自民党が検討する憲法改正の緊急事態条項について、行政権の肥大化と権力濫用のリスクを指摘し、現行法制での対応を主張した。',
    summaryEn:
      '[Demo summary] In plenary, objected to LDP\'s proposed constitutional emergency power clause, warning of executive power expansion and abuse risks, arguing current laws are sufficient.',
    issueArea: 'Constitutional Reform',
    stance: 'Opposing',
    sourceLabel: 'HoR Plenary, 210th Diet, December 2022',
    sourceUrl: 'https://kokkai.ndl.go.jp/',
  },
  {
    id: 'act-edano-3',
    politicianId: 'pol-edano',
    date: '2023-03-17',
    actionType: 'Bill submission',
    title: 'Renewable Energy Priority Bill co-submitted',
    excerptJa:
      '【デモ要旨・要約】原子力に依存せず再生可能エネルギーを最優先とするエネルギー基本計画の改定を求める法案を野党共同で提出。',
    summaryEn:
      '[Demo summary] Co-submitted opposition bill calling for revision of the Basic Energy Plan to prioritise renewables without nuclear reliance.',
    issueArea: 'Energy',
    stance: 'Supportive',
    sourceLabel: '211th Diet, Opposition Bill, March 2023',
    sourceUrl: 'https://kokkai.ndl.go.jp/',
  },
  {
    id: 'act-edano-4',
    politicianId: 'pol-edano',
    date: '2023-06-09',
    actionType: 'Vote',
    title: 'Voted against GX Decarbonization Power Bill (nuclear extension)',
    excerptJa:
      '【デモ要旨・要約】GX脱炭素電源法案（原発60年超運転等を含む）に反対票を投じた。',
    summaryEn:
      '[Demo summary] Voted against GX Decarbonization Power Bill, which included enabling nuclear plant operations beyond 60 years.',
    issueArea: 'Energy',
    stance: 'Opposing',
    sourceLabel: 'HoR Vote Record, 211th Diet, June 2023',
    sourceUrl: 'https://kokkai.ndl.go.jp/',
  },

  // ── Koike ─────────────────────────────────────────────────
  {
    id: 'act-koike-1',
    politicianId: 'pol-koike',
    date: '2022-04-01',
    actionType: 'Press statement',
    title: 'Tokyo DX Vision 2030 announced',
    excerptJa:
      '【デモ要旨・要約】東京都知事として「東京デジタルビジョン」を発表。行政手続きの完全オンライン化とAI・データ活用による都市サービス高度化を宣言した。',
    summaryEn:
      '[Demo summary] As Tokyo Governor, announced Tokyo Digital Vision 2030: complete online migration of administrative procedures, and AI/data-driven enhancement of city services.',
    issueArea: 'Digital / Tech Policy',
    stance: 'Supportive',
    sourceLabel: 'Tokyo Metropolitan Government Press Release, April 2022',
    sourceUrl: '#demo',
  },
  {
    id: 'act-koike-2',
    politicianId: 'pol-koike',
    date: '2023-09-18',
    actionType: 'Plenary speech',
    title: 'Advocated for Tokyo\'s Zero Emission targets in Diet',
    excerptJa:
      '【デモ要旨・要約】衆議院で東京都が推進するゼロエミッション東京戦略を紹介し、太陽光・EV普及政策が全国展開可能なモデルであることを訴えた。',
    summaryEn:
      '[Demo summary] In Diet session, presented Tokyo\'s Zero Emission Strategy as a replicable national model, emphasising solar energy and EV adoption policies.',
    issueArea: 'Environment',
    stance: 'Supportive',
    sourceLabel: 'HoR Plenary, 212th Diet, September 2023',
    sourceUrl: 'https://kokkai.ndl.go.jp/',
  },

  // ── Hayashi ───────────────────────────────────────────────
  {
    id: 'act-hayashi-1',
    politicianId: 'pol-hayashi',
    date: '2022-04-29',
    actionType: 'Press statement',
    title: 'Coordinated G7 Russia sanctions and announced additional support for Ukraine',
    excerptJa:
      '【デモ要旨・要約】外務大臣として、G7・EU・米国と連携したロシアへの追加制裁と、ウクライナへの財政・人道支援の拡充を発表した。',
    summaryEn:
      '[Demo summary] As Foreign Minister, announced additional Russia sanctions coordinated with G7/EU/US, and expanded financial and humanitarian support for Ukraine.',
    issueArea: 'Foreign Policy',
    stance: 'Supportive',
    sourceLabel: 'MOFA Press Release, April 2022',
    sourceUrl: 'https://www.mofa.go.jp/',
  },
  {
    id: 'act-hayashi-2',
    politicianId: 'pol-hayashi',
    date: '2023-05-18',
    actionType: 'Plenary speech',
    title: 'G7 Hiroshima Summit: presented Japan\'s vision for free and open Indo-Pacific',
    excerptJa:
      '【デモ要旨・要約】G7広島サミットに向け、自由で開かれたインド太平洋構想の推進と、法の支配に基づく国際秩序の維持を訴えた。',
    summaryEn:
      '[Demo summary] In advance of G7 Hiroshima Summit, articulated Japan\'s vision for a Free and Open Indo-Pacific and the importance of maintaining a rules-based international order.',
    issueArea: 'Foreign Policy',
    stance: 'Supportive',
    sourceLabel: 'HoR Foreign Affairs Committee, 211th Diet, May 2023',
    sourceUrl: 'https://kokkai.ndl.go.jp/',
  },
]
