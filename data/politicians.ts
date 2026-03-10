import type { Politician } from '@/types'

// Demo politician data for Japan Promise Tracker.
// Names and party affiliations reflect real public figures as of 2024.
// Bios are simplified summaries for demo/research purposes only.
// Profile images use placeholder avatars from a public source.
export const politicians: Politician[] = [
  {
    id: 'pol-kishida',
    name: 'Fumio Kishida',
    nameJa: '岸田文雄',
    party: 'ldp',
    chamber: 'House of Representatives',
    district: 'Hiroshima 1st District',
    house: 'HoR',
    profileImage: '/avatars/placeholder-male.svg',
    bio:
      'Fumio Kishida served as Prime Minister from October 2021 to October 2024. A moderate within the LDP\'s Kochikai faction, he campaigned on "New Capitalism" — a growth-and-redistribution framework — while also overseeing a significant expansion of Japan\'s defense posture following the 2022 National Security Strategy review.',
    issueTags: ['Economy', 'Defense / Security', 'Foreign Policy', 'Tax'],
  },
  {
    id: 'pol-izumi',
    name: 'Kenta Izumi',
    nameJa: '泉健太',
    party: 'cdp',
    chamber: 'House of Representatives',
    district: 'Kyoto 3rd District',
    house: 'HoR',
    profileImage: '/avatars/placeholder-male.svg',
    bio:
      'Kenta Izumi has led the Constitutional Democratic Party since 2021. He has focused on building the CDP as a credible opposition force, emphasizing household income support, gender equality, and constitutional scrutiny of defense expansion. He served as a member of the Lower House Budget Committee.',
    issueTags: ['Social Welfare', 'Childcare / Family', 'Constitutional Reform', 'Economy'],
  },
  {
    id: 'pol-nishimura',
    name: 'Yasutoshi Nishimura',
    nameJa: '西村康稔',
    party: 'ldp',
    chamber: 'House of Representatives',
    district: 'Hyogo 9th District',
    house: 'HoR',
    profileImage: '/avatars/placeholder-male.svg',
    bio:
      'Yasutoshi Nishimura served as Minister of Economy, Trade and Industry (2022–2023). He was responsible for managing the energy transition response after Russia\'s invasion of Ukraine and oversaw nuclear restarts and Green Transformation (GX) legislation.',
    issueTags: ['Energy', 'Economy', 'Digital / Tech Policy'],
  },
  {
    id: 'pol-hayashi',
    name: 'Yoshimasa Hayashi',
    nameJa: '林芳正',
    party: 'ldp',
    chamber: 'House of Representatives',
    district: 'Yamaguchi 3rd District',
    house: 'HoR',
    profileImage: '/avatars/placeholder-male.svg',
    bio:
      'Yoshimasa Hayashi served as Foreign Minister (2021–2023) and later as Chief Cabinet Secretary. He represents the LDP\'s moderate, internationalist wing and has focused on alliance management, ODA strategy, and diplomatic engagement with the Global South.',
    issueTags: ['Foreign Policy', 'Defense / Security', 'Regional Revitalization'],
  },
  {
    id: 'pol-edano',
    name: 'Yukio Edano',
    nameJa: '枝野幸男',
    party: 'cdp',
    chamber: 'House of Representatives',
    district: 'Saitama 5th District',
    house: 'HoR',
    profileImage: '/avatars/placeholder-male.svg',
    bio:
      'Yukio Edano is a senior CDP lawmaker and former Chief Cabinet Secretary. He has been a consistent advocate for constitutional constraints on executive power, transparent policymaking, and a shift away from nuclear energy. He stepped down from CDP leadership in 2021 following an election defeat.',
    issueTags: ['Constitutional Reform', 'Energy', 'Political Reform'],
  },
  {
    id: 'pol-tamaki',
    name: 'Yuichiro Tamaki',
    nameJa: '玉木雄一郎',
    party: 'dpfp',
    chamber: 'House of Representatives',
    district: 'Kagawa 2nd District',
    house: 'HoR',
    profileImage: '/avatars/placeholder-male.svg',
    bio:
      'Yuichiro Tamaki leads the Democratic Party for the People and has positioned himself as a populist reformer focused on wage growth, income tax relief, and reducing the burden on working households. The DPFP gained significant seats in the 2024 election on a "103-man wall" income threshold reform platform.',
    issueTags: ['Tax', 'Economy', 'Social Welfare', 'Childcare / Family'],
  },
  {
    id: 'pol-matsui',
    name: 'Ichiro Matsui',
    nameJa: '松井一郎',
    party: 'nippon-ishin',
    chamber: 'House of Representatives',
    district: 'Osaka 1st District',
    house: 'HoR',
    profileImage: '/avatars/placeholder-male.svg',
    bio:
      'Ichiro Matsui was a founding figure of Nippon Ishin no Kai and former Osaka Governor. He championed fiscal efficiency, administrative reform, and the Osaka Expo 2025. He retired from politics in 2023 but his platform shaped Ishin\'s core policy identity.',
    issueTags: ['Political Reform', 'Regional Revitalization', 'Economy'],
  },
  {
    id: 'pol-yamamoto',
    name: 'Taro Yamamoto',
    nameJa: '山本太郎',
    party: 'reiwa',
    chamber: 'House of Councillors',
    district: 'Proportional Representation',
    house: 'HoC',
    profileImage: '/avatars/placeholder-male.svg',
    bio:
      'Taro Yamamoto founded Reiwa Shinsengumi in 2019 and has consistently advocated for aggressive fiscal expansion, debt-financed social spending, and disability rights. He has submitted multiple bills and written questions challenging austerity-oriented fiscal policy.',
    issueTags: ['Social Welfare', 'Tax', 'Economy', 'Healthcare'],
  },
  {
    id: 'pol-koike',
    name: 'Yuriko Koike',
    nameJa: '小池百合子',
    party: 'ldp',
    chamber: 'House of Representatives',
    district: 'Tokyo 10th District',
    house: 'HoR',
    profileImage: '/avatars/placeholder-female.svg',
    bio:
      'Yuriko Koike is a senior LDP lawmaker and Governor of Tokyo (since 2016). In her national Diet career she served as Defense Minister and Environment Minister. She has advocated for women\'s leadership, urban environmental policy, and Tokyo\'s digital transformation.',
    issueTags: ['Environment', 'Digital / Tech Policy', 'Defense / Security'],
  },
  {
    id: 'pol-renho',
    name: 'Renho',
    nameJa: 'れんほう',
    party: 'cdp',
    chamber: 'House of Councillors',
    district: 'Tokyo PR / Tokyo Constituency',
    house: 'HoC',
    profileImage: '/avatars/placeholder-female.svg',
    bio:
      'Renho (single name) is a senior CDP lawmaker in the Upper House. She became nationally prominent through the Democratic Party\'s "event screening" (jigyo shiwake) exercises and has continued to press for administrative transparency, gender equality, and fiscal accountability.',
    issueTags: ['Political Reform', 'Social Welfare', 'Childcare / Family'],
  },
]
