import { Film, StillImage } from './types';

export const DIRECTOR_INFO = {
  name: "NAMGUNG GEON",
  koreanName: "남궁 건",
  title: "Film Director & Cinematographer",
  tagline: "Stories with Strong Visual Identity",
  email: "southkeyn99@naver.com",
  phone: "010-8284-6424",
  instagram: "www.instagram.com/n_geon",
  youtube: "www.youtube.com/@소질소",
  vimeo: "vimeo.com/namgunggeon",
  profileImage: "https://search.pstatic.net/common?type=b&size=3000&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2FprofileImg%2Fd1c4b775-c5a5-435d-a4ba-c3d99f33a3da.jpg",
  bio: `시각적 스타일과 감정의 흐름을 중시하는 감독이자 촬영감독.
  영화적 미장센을 통해 이야기의 본질을 탐구합니다.`,
  awards: [
    "제 4회 경기도예술영화제 대상 (아부지)",
    "24년 11회 목포국도1호선독립영화제 도움닫기 작품상 (도애의 시간)",
    "제 3회 죽서 AI 영화제 장려상 수상 (마지막 명령)",
    "2023 볼리 공모전 특별상 수상작 (학의로에서 안녕)"
  ]
};

export const FILMS: Film[] = [
  // Directing Works
  {
    id: 'f2026_1',
    title: "지영이 찾기",
    year: "2026",
    role: "Director / Writer",
    runtime: "Pre-production",
    genre: "Drama",
    synopsis: "2026년 제작 예정.",
    aspectRatio: "TBD",
    posterUrl: "https://placehold.co/600x900/0a0a0a/444444/png?text=Coming+Soon",
    stillUrls: [],
    awards: [],
    crew: [
      { role: "연출", name: "남궁건" },
      { role: "조연출", name: "이시영" },
      { role: "라인피디", name: "김지현" },
      { role: "촬영감독", name: "고은지" },
      { role: "촬영부", name: "김나연" },
      { role: "조명감독", name: "윤찬우" },
      { role: "동시녹음", name: "이신희" }
    ],
    cast: [
      { role: "재성", name: "박현" },
      { role: "지영", name: "박예나" },
      { role: "수빈", name: "신아진" }
    ]
  },
  {
    id: 'f2025_2',
    title: "아부지 (Panic Disorder)",
    year: "2025",
    role: "Director / Writer",
    runtime: "27min 20sec",
    genre: "Drama, Thriller",
    synopsis: `어릴적 아버지의 폭력으로 집을 나온 이후, 공황장애를 얻게 된 현수.
    20년만에 누나의 부탁으로 치매에 걸린 아버지를 돌보게 된다.`,
    aspectRatio: "1.85:1",
    posterUrl: "https://postfiles.pstatic.net/MjAyNTEyMTNfMTIx/MDAxNzY1NjMyMzkyNzQ0.UCdSO4yUwrI_rYk5Ks0cX2LqOzvCePEwIf6HwftxEI0g.42OXJv4VWBA32EJQH12r8EMTFPzdaBxjwpa0Da8I7lsg.JPEG/3.jpg?type=w3840",
    posterObjectPosition: "25% center",
    stillUrls: [
      "https://postfiles.pstatic.net/MjAyNTEyMTNfMyAg/MDAxNzY1NjMyMzkyNjg3.tjcyaLooyqUfS_yjpW94h1gO8jKBya88qxyH6VqlLPQg.UjXaFqnX6IsYM8oSJSs960tUp1jqAJIBik1rCu58X4og.JPEG/1.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTNfMTUx/MDAxNzY1NjMyMzkyNzM3.Q4Wz111QOzjBdxKpdE2cddK2HUWZABH_VQSVeYTus8Ag.BNItPZHVXqc81JfvLRgnvTRUvNn78BFTcATtSJAV53sg.JPEG/2.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTNfMTIx/MDAxNzY1NjMyMzkyNzQ0.UCdSO4yUwrI_rYk5Ks0cX2LqOzvCePEwIf6HwftxEI0g.42OXJv4VWBA32EJQH12r8EMTFPzdaBxjwpa0Da8I7lsg.JPEG/3.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTNfOTQg/MDAxNzY1NjMyMzkyNzU3.S2zL7M5epOT0CxAxw40dT3Lq3T9YsU17WtZtg6_o0YYg.dKYHA2pgnW8ZMpkYLySVvir071zaoZVfFheIbz0i0kIg.JPEG/4.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTNfMTk0/MDAxNzY1NjMyMzkyNzY4.qGMXRH7uhj6tpI_iG9iWjP44If2ojH2tdV3UzZ44N6Ig.ImRJwctv8JvQQ3kXLuKawpfGRxOcSLX0_yWZ50zAwWIg.JPEG/5.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTNfMjI4/MDAxNzY1NjMyMzkyNzYy.-Omq9mjv5g_AEUTeo05OOJHcrxG_Q4L9kKnvl2MZH_cg.87oGp9QkXT_3XgG0DhrX3UAxxN2fZvYlaKhejfN1gvUg.JPEG/6.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTNfNSAg/MDAxNzY1NjMyMzkzNDM3.4aS7aLRfIv1LlA-soVIU5k6NhksCAzuDL7DzmBo-9M8g.U5j5TJcl1Hbe_ybCgAmLidch0aerPuKVmuT4tZLgIrIg.JPEG/7.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTNfMTM3/MDAxNzY1NjMyMzkzNDM3.GZxywavdVB1dhVBrR6XHvP4_pM3GkcTnfCZxN6_TRVIg.ar9AWL6gM0YsjkDtkxolPyjaDaUB0DMBt6IameQEkFEg.JPEG/9.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTNfMjQ0/MDAxNzY1NjMyMzkzNDU4.DgKrT2d2GZa5AxuDi7UaKVFBWklZdsDkL3RgVvmrQWAg.wLTU-9vFJgc010ROm4S9v2WZ_nbHBDcTFp8J9b7_g50g.JPEG/10.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTNfMTAy/MDAxNzY1NjMyMzkzNDgy.9AlQx-pejzdKl86T5S_iy7nQ3nzS32yJS2mgk2kSQZAg.Fm1QBt6r0PQw244PaLQMMAWOJP_KQnJ8tL_QySaOhP0g.JPEG/11.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTNfNTkg/MDAxNzY1NjMyMzkzOTM0.h6nJZchfbupPA2WfjOv8lU7smR6DgvODxQ6sIFL9r6Ag.WTciZT4_7rVSVZbWtvRmCnPizCKfVUwqoi8o4zEu2gwg.JPEG/12.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTNfNTAg/MDAxNzY1NjMyMzk0MDIy.A-mqLb8hIMGIIphZkzu_qDCed8lHe_pz1muQoyWmKZIg.m6Hh7VdVlKurY8_eYIQurwthScyGqS0gfGMzAaANZ48g.JPEG/13.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTNfMjE3/MDAxNzY1NjMyMzk0MDU1.M_-FAiMfPfnZH03XXPvSDKadarvKvsh4SAnGT7WFmpQg.sf5uHZX2HfwpOIao7AFv-MXkWsb311grUWz-Gwzigv4g.JPEG/14.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTNfNzEg/MDAxNzY1NjMyMzk0MDY3.vLWffz3oNQfKBEmNOOG6xqSC9V9GbJEFLDSeNGwohesg.sRIvM8uelRP-2q3KeEDIH-AD5wXxzt9MDvsFsDyEsbcg.JPEG/15.jpg?type=w3840"
    ],
    awards: [
      "제 4회 경기도예술영화제 대상",
      "24년 명필름 단편스쿨 수료작",
      "제 3회 UFO 영화제 초청상영"
    ]
  },
  {
    id: 'f2025_1',
    title: "마지막 명령 (The Last Command)",
    year: "2025",
    role: "Director / Writer",
    runtime: "4min 32sec",
    genre: "SF",
    isAi: true,
    synopsis: `AI가 탑재된 전투기 조종사 노아 브릭스는 기체 이상으로 도심 추락 위기에 처한다. 수백 명의 민간인을 살리기 위해, AI는 그의 희생을 요구한다`,
    aspectRatio: "2.35:1",
    posterUrl: "https://postfiles.pstatic.net/MjAyNTEyMTRfNDEg/MDAxNzY1NjQwMTQ0OTY0.rNqxJqkb68PEyGV_Gwk8P6j2CkkutWJjQmlK38PfbREg.JHNjb-xMY5H-8O-PM9s0AIgFMyYK2hxF_MhB3os1DJsg.JPEG/마지막_명령_세로_썸네일.jpg?type=w3840",
    stillUrls: [
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMjI5/MDAxNzY1NjQwMDYzMzY2.mK6hqyKE7z6f4WXrrSFnuvLmVokgklLrqow7QDMYfjYg.l3vdEnVX3kVxZjOucRZveJ-1gi3-3ri2JPJTLUvrA0Qg.JPEG/IMG_9087.JPG?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMTQ3/MDAxNzY1NjQwMDYzNDI4.HFHv98XBck3KxsMHhWvax9gu0aTlVnM9IIWNcrQGWDog.XAnDlG0ZHbCZtkeqNhAoQxX2vyQZBwtzT1Y-iHAuj_Eg.JPEG/IMG_9088.JPG?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMTE2/MDAxNzY1NjQwMDYzNDA1.Tm42tSkKf7ZylD1Yr7NGk8UXMf74AyHrzOtP4GYiEQMg.KVZun6DRkFv6Azsc5KK2LeR50hVJuqONyI6hAS3Z9Ukg.JPEG/IMG_9089.JPG?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMTQw/MDAxNzY1NjQwMDYzNDEw.-7s1zpbB8ozhEBe5QSJljAWn0iseoQNGNBKGjIbw_4sg.U9vkCciCWz3dJxEe2vTdkx1uvSvGlI3D0DIUAac9QL8g.JPEG/IMG_9090.JPG?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfNjcg/MDAxNzY1NjQwMDYzNDE1.S8sAO-U_Oi33EcsE3wj98R9FzHtUS4xQ9a_TMF-A_UAg.xAXW7UMQdYsfA6AkMvcus_koixWn5k-Clxu9alw53dYg.JPEG/IMG_9091.JPG?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMTEx/MDAxNzY1NjQwMDYzNDM2.cfJllawXf4QkDuE1sBpppWELmkKC7i4Q_s4iSeIxLeUg.ixzcs-r2AlDAUV5YU9ak_DBgPctBtCrkYEvLvjVDs30g.JPEG/IMG_9092.JPG?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfOTEg/MDAxNzY1NjQwMDYzOTI3.xe9slx6urVz6L0y-dOEgseLxp9n6z-9Eiis54QWGvY4g.dS2jbE5Ndh72xwsqlClnIjLyE_p553HSJI40z5TnxFQg.JPEG/IMG_9093.JPG?type=w3840"
    ],
    awards: [
      "제 5회 금천패션영화제 경쟁작",
      "제 3회 죽서 AI 영화제 장려상 수상"
    ]
  },
  {
    id: 'f2024_1',
    title: "도애의 시간 (Minmotion Syndrome)",
    year: "2024",
    role: "Director / Writer",
    runtime: "20min 10sec",
    genre: "Fantasy, Thriller",
    synopsis: `“죽은 사람 무덤 앞에서 춤을 추면, 그 사람의 영혼을 부를 수 있대.”
    지애는 아버지의 무덤 앞에서 탭 댄스를 추려고 한다. 도애는 그런 언니가 미쳤다고만 생각했다.`,
    aspectRatio: "2:1",
    posterUrl: "https://postfiles.pstatic.net/MjAyNTEyMTNfMjg3/MDAxNzY1NjM2MDc4NTQx.sPoOjQ4PUwnxyc-0G6D63l4HLqhZ4nUYPIGz_uJ6WwMg.aBHR2AFHLiRCFe7vjFqUtWqgGkphfsW7UQptJ0kLXNog.JPEG/도애의_시간_포스터.jpg?type=w3840",
    stillUrls: [
      "https://postfiles.pstatic.net/MjAyNTEyMTNfMTE4/MDAxNzY1NjM1OTk4Nzgy.LO0WqKsnFdZ2B5M1bFEr_9ZSrjCEB5L1YxF0aV6EQMkg.SkY30j64nctaVW4tRR_zObjwvfbKyrV39thIqHhKT7Ig.JPEG/스크린샷_2025-12-13_오후_11.16.42.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTNfMTEz/MDAxNzY1NjM1OTk4Nzk2.CBa4TDSe31jqzdwPyTH3Es1xISZkqLHhDNfmyIcnJVsg.0qdLfsYi7ytBdsRCEtr8-Rf-LHlYHulPyTn8qd-GqS8g.JPEG/스크린샷_2025-12-13_오후_11.17.05.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTNfOTAg/MDAxNzY1NjM1OTk4ODEx.t927xtulwoEAwNkyhZkPuOrRTlNiyLuef-cVSA_8ijog.Fjzrhzn8lWDV_kWus6gR2k4vlFy0CyIZb6NzB7AzJ4og.JPEG/스크린샷_2025-12-13_오후_11.17.34.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTNfMTIz/MDAxNzY1NjM1OTk4ODEw.oLRuguuvQbsEzusZw6k-TIRNBkqAZi0HvUJ7R_SFrowg.yVbaDmAKvggVbneBtsaNCgsUmf3_1hXO0MLx_SVm_7Qg.JPEG/스크린샷_2025-12-13_오후_11.17.51.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTNfNjIg/MDAxNzY1NjM1OTk4ODA2.-6KTY03BFiqyeo8NBkpXhb9gT_nS13TqKunRx074jvcg.AMm8I2mGLuJ3GKzsFQUu7svgaJJUH4uDFcqpUrKvALIg.JPEG/스크린샷_2025-12-13_오후_11.18.18.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTNfMjcz/MDAxNzY1NjM1OTk4ODA2.-6KTY03BFiqyeo8NBkpXhb9gT_nS13TqKunRx074jvcg.AMm8I2mGLuJ3GKzsFQUu7svgaJJUH4uDFcqpUrKvALIg.JPEG/스크린샷_2025-12-13_오후_11.18.18.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTNfMjcz/MDAxNzY1NjM1OTk4ODA5.nIjrcG47zF--KiPnnCHxQnqoyvBbmZ741ttTfvvDjHYg.3lgWbQv7tIjUW5JrL-QYhZeu9WGQPER0Vh9ZeJ_hFRgg.JPEG/스크린샷_2025-12-13_오후_11.19.15.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTNfMTcg/MDAxNzY1NjM1OTk5MjA4.MTdTlcF75dNdhygANdkrFuucgJwe1w9jT4mo5mvpgmwg.eiDpirXWYglUrVbUfYVht2r7saSKsQJUtfHnlVSqmesg.JPEG/스크린샷_2025-12-13_오후_11.20.16.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTNfMjk2/MDAxNzY1NjM1OTk5MjA1.GL1ztwu4HBJpASl10565eQqdorQoW3xJoC9L7KvNfGUg.MSTa1X-3Bejs-S_d9kPJc4bwqiFOjP_QKTrTQcmRP0Qg.JPEG/스크린샷_2025-12-13_오후_11.20.43.jpg?type=w3840"
    ],
    awards: [
      "경기갭이어프로그램 지원작",
      "24년 11회 목포국도1호선독립영화제 도움닫기 작품상",
      "2024 김해시민영화제 초청상영",
      "제 1회 느림독립영화제 입상"
    ]
  },
  {
    id: 'f2024_2',
    title: "친절한 바바야가 (The Kind Baba Yaga)",
    year: "2024",
    role: "Director / Writer",
    runtime: "4min 32sec",
    genre: "Horror, Drama",
    isAi: true,
    synopsis: `처음 할머니를 만나러 간 소년은 엄마에게 들은 마귀할멈 ‘바바야가’ 이야기 때문에 무서운 악몽을 꾼다. 
    하지만 실제로 만난 할머니는 다정하고 따뜻한 모습으로 소년을 맞이한다.`,
    aspectRatio: "16:9",
    posterUrl: "https://postfiles.pstatic.net/MjAyNTEyMTRfMjMw/MDAxNzY1NjQxMzk5Nzc3.T3W8JPlJrAnBPz_vWOnX90nc50vAhIvz3goYQl_lMHAg.yT9GESYHOC-CNVchQAn9977A6kHA6v78RIQx79kyRdsg.JPEG/IMG_8623.jpg?type=w3840",
    stillUrls: [
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMTU0/MDAxNzY1NjQxMzk5Nzc2.L4i9TQJpvHSI15q3-2O3NaEB8r-fUSDtgK2R0cprgmMg.qVHBfOER61SB1zK2HYP3akd6oLUmeQWEqhqXTMXgN-Ag.JPEG/IMG_8620.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMjI4/MDAxNzY1NjQxMzk5NzU3.yj1meF8Ay-1qYbeRKBdnp0vz_MBCc4E05h-Qzwzzqc4g.ArQ3TXGkG_OzzFnldKdUTqRSx8UkbUkE1pzNt94GBCog.JPEG/IMG_8619.jpg?type=f100_webp",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfNTkg/MDAxNzY1NjQxMzk5Nzg5.E6iMYHurisR5dWDN9S2oD7QrkIdn29rPWvDkKl9gy04g.9dIeUFzu7ZPcHQeIrJwXfLGARM23GjnS0TrRYfLZfZIg.JPEG/IMG_8621.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMTg1/MDAxNzY1NjQxMzk5Nzg4.BmrjtuSu7YBT37wCv4VxyPtllwBAz4Ltymz0H18czuIg.1s0mUKRhUoZTNbx4Bsfnq84cIjLvv5QtBYtMGMD8mpkg.JPEG/IMG_8622.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMjMw/MDAxNzY1NjQxMzk5Nzc3.T3W8JPlJrAnBPz_vWOnX90nc50vAhIvz3goYQl_lMHAg.yT9GESYHOC-CNVchQAn9977A6kHA6v78RIQx79kyRdsg.JPEG/IMG_8623.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMTk4/MDAxNzY1NjQxMzk5ODAw.Fk59l-MZ2pMoSq4Lk81BfHs1EaCEUOdK4rkr_aqJkQYg.ZhQNg-iCCfd13roXrlM8jpaDSHfZ8IpFpYAOgFJFMDYg.JPEG/IMG_8624.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMTk3/MDAxNzY1NjQxNDAwMjEy.WGg8rydPxB-2CJQ2rTg3SLE7_zCexYoKyfO5l0IXr94g.Qx1vXet1pfeUMHFKv2qyT4ZQj0GqxzJ_PSQQBDFufq8g.JPEG/IMG_8625.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMzIg/MDAxNzY1NjQxNDAwMjE3.BLpLCgp50YXS0jP5ulQw9WuHbnhWcLaO9lmfvcDORJUg.V5NZNMfFWBUk60J4Lz7yotNcTrPZXxPVEIddae_Jx2Ig.JPEG/IMG_8626.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMjA5/MDAxNzY1NjQxNDAwMjc2.AMGIN8Y152AnQ7UbVpipWIkLGtQOX_L-c9UAvz7ZHNsg.1fMbMpz2UCmVId1JgJ25Nnwxkkv1yOHh0NerD1uyi5og.JPEG/IMG_8628.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMjE5/MDAxNzY1NjQxNDAwMzc3.tm1bEotHD0PZAH4WpErM1EsgPKW8DFnMigF1BUBEZxsg.keUS_599Gz8lrEWdSjNng9cgDJ8AVaHBHtJJzo-K_mgg.JPEG/IMG_8631.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMTI2/MDAxNzY1NjQxNDAwNjQ0.9Lefwu-tN3PdxcZ-AmlqMgyVmtwuMM5Lma1xe5h5L4Ag.NcFqSNYW1DaNY3cqltyVbAvJPmfgrbtT5UR5z05UrI4g.JPEG/IMG_8632.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMzQg/MDAxNzY1NjQxNDAwNjkx.fI8gBVNakPrpD60K88zPNt7OHeWc6XzSUEKH6DZLecwg.4rICWQgnOpg-CHOWYG5B6hfNR7DPbPVL_RnkeWr3V8Qg.JPEG/IMG_8633.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMTQ5/MDAxNzY1NjQxNDAwNzE4.Tyl7-pddw3zTWlxnHSs8mZLHcyT8qjT5fMP9DPD-cMIg.3vQJWxRARijtMBUVTZ6sNCW9PCFOq1rHWDW4XMnYud8g.JPEG/IMG_8634.jpg?type=w3840"
    ]
  },
  {
    id: 'f2023_1',
    title: "그린비치",
    year: "2023",
    role: "Director / Writer / Cinematographer",
    runtime: "63min 47sec",
    genre: "Mystery",
    productionNote: "백일안에 백만원으로 백분짜리 장편영화 찍기 프로젝트",
    synopsis: `해변에서 녹색 페인트를 뒤집어쓰고 실종된 의문의 여자 '서이서'
    세영은 해변에서 그녀가 버린 필름을 우연히 발견한다.
    그리고 그녀의 존재가 궁금해진 세영은 이서를 찾기 위해  필름 안에 들어 있던 사진들을 전시하기로 결심한다.
    세영은 사진전에 찾아온 이서의 전 애인 동우와 절친 해주를 인터뷰하며 이서가 어떤 사람이었는지를 묻는다.
    그런데 동우와 해주가 회상하는 이서는 마치 다른 사람인 듯 매우 다르다.
    대체 서이서는 어떤 사람이었을까. 세영이 혼란스러워 할 때쯤 진짜 서이서가 사진전에 찾아오는데...`,
    aspectRatio: "2.35:1",
    posterUrl: "https://postfiles.pstatic.net/MjAyNTEyMTRfOCAg/MDAxNzY1NjQwNDg4MDUx.qHB-LPbVrzqNB5HdvVzPxgMkRIEGW4-UOAByzxsJ4vQg.HycVjqTJF5rQAgzvFr2nkBJs6lZs1P_VRQ31y7JCRuUg.JPEG/909cebc7b461ab8cc478552aff6132d50bf7ae16.JPG?type=w3840",
    stillUrls: [
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMjY2/MDAxNzY1NjQwMzg2MjAw.3qiGBPAQUpDCjxqo2RmOwxFNBP5g9OZVjtKcJq_Sil4g.lLOmeA5ofoRJmcWSbJUIU23Y5wETJm7rAXxUNsC5MTUg.JPEG/스크린샷_2023-07-10_오후_6.01.45.jpeg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfNTUg/MDAxNzY1NjQwMzgxNjEy.17CeSALIA5hXUuf2r5HV4Jm0PBAE-g-3GlIJP6MeScQg.rv_61YHNY_GvCPxZmKCYoqC7TxkkX3bug09ktBnxugwg.JPEG/스크린샷_2023-07-10_오후_6.01.56.jpeg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfNTUg/MDAxNzY1NjQwMzc2NDIz.7OQD4kgSRZYyta2kTU87ZmXD3LB9z-hbmgoiRRCTrMog.GZxmKgynanh749aua14FefD-N4EG6Di4CoKhbZJRVQAg.JPEG/스크린샷_2023-07-10_오후_5.58.34.jpeg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfNTMg/MDAxNzY1NjQwMzcyODg1.8mnJ9U6XrySRPtdIXEAF2kd4oQal423J0afEQQ7i5W0g.8-65e41AQm7rFHtpTgH2DwYvNT4GPdZRa2wrhcilmUIg.JPEG/스크린샷_2023-07-10_오후_5.58.00.jpeg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMjI0/MDAxNzY1NjQwMzY4MjI5.LgZM_IUO8md46_NwPooh59bKVS0smpyCfkBUpKR_LrMg.4UTpClplkBQNSpikfbw_c_XeYxMn6ClARFiqM3QvbX0g.JPEG/스크린샷_2023-07-10_오후_6.06.14.jpeg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMjgg/MDAxNzY1NjQwMzY0NDEw.B5IGGdctuWYBK1_2CxKPPOTcBUHcn0_G67mPNrfP3GMg.4R5uFUV8dQRVV2WiewSUDHUKnOpr7aLc9HTJogNQ11wg.JPEG/스크린샷_2023-07-10_오후_5.59.39.jpeg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMjk5/MDAxNzY1NjQwMzU5ODgy.MjEcxzU6THt8yEB_n76inyn3HqB8JprgoQNxOMIFmZEg.EMf8E3ZujYp0M1uQiuMKC_zDROPd1DKieYxftbOu5Ckg.JPEG/스크린샷_2023-07-10_오후_6.07.06.jpeg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMTMz/MDAxNzY1NjQwMzU0NjQ4.6WYVAZ-Bh4IEFewoS0Ntvo4g8Jy8umMvZISZbcu49HQg.KpqB4ttZT8MOr01TMSTrwhYrnWdNH-LclNpBduB4nSUg.JPEG/스크린샷_2023-07-10_오후_6.01.11.jpeg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMjA2/MDAxNzY1NjQwMzQ5MzY1.6kqhs6Kibi-cBHEuOoyftmnRtkS7lIHGSudVLNRV8G0g.jkYfPwii2pL6Fc38hXjsXeSeszyivNL0jRh4cF25GRkg.JPEG/스크린샷_2023-07-10_오후_6.03.24.jpeg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMTQ1/MDAxNzY1NjQwMzQyODAy.gyTWoT50xSKm3LrurUOSHCNtw8cYcbxbbKRqgG_cVgsg.Pd_CicKpwSTmEjCRqLX6o2pXVdTEtsHfu8J9O3w6zicg.JPEG/스크린샷_2023-07-10_오후_6.04.39.jpeg?type=w3840"
    ],
    awards: ["프로젝트 백백백", "한국영상자료원 상영"]
  },
  {
    id: 'f2023_2',
    title: "겨울바람 (Winter Wind)",
    year: "2023",
    role: "Director / Writer",
    runtime: "18min 16sec",
    genre: "Drama",
    synopsis: `1주년, 2주년, 3주년... 선제와 이수는 늘 한강에서 자전거를 타곤 했다.
    4주년인 오늘도 그들은 한강에 가기로 약속한다. 
    하지만 거부할 수 없는 제안으로 둘의 4주년은 흔들리게 된다.`,
    aspectRatio: "2.35:1",
    posterUrl: "https://postfiles.pstatic.net/MjAyNTEyMTRfMTIy/MDAxNzY1NjQwNzE1MzQy.Yk20vfORxHjxIOjgZr-AH1LFJx1xwLmTCeDVE6wqgB0g.ZZNACXDRjeRHwf8U-q9reTfZaC4n0yqtVZl3kDeY3YEg.JPEG/스크린샷_2023-07-10_오후_5.53.49.jpeg?type=w3840",
    stillUrls: [
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMTIy/MDAxNzY1NjQwNzE1MzQy.Yk20vfORxHjxIOjgZr-AH1LFJx1xwLmTCeDVE6wqgB0g.ZZNACXDRjeRHwf8U-q9reTfZaC4n0yqtVZl3kDeY3YEg.JPEG/스크린샷_2023-07-10_오후_5.53.49.jpeg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMjA4/MDAxNzY1NjQwNzE1MzAz.yQ3bKLwEIB6kRceTEUpeg1sm-qEWuYOBAQFQTd56GIwg.vjUhm4AUcuVQsrmeDgl2XuGL2fjDYgAkLwbvc8TGXhIg.JPEG/스크린샷_2023-07-10_오후_5.53.39.jpeg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMTgy/MDAxNzY1NjQwNzE1MzQ0.zdb0eQFzoWSbt5zkIf8JVpJn4XNYnZ38PkppipOJ_Hkg.YbyBvY0uIKFzMjOy9oYaYuO9pMZfj7C8_FuoxOENqG8g.JPEG/스크린샷_2023-07-10_오후_5.54.14.jpeg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMjk0/MDAxNzY1NjQwNzE1MzI2.FIk8zw2zvfM4eOaWbko08GWpW2xU5Ee3j0_9KjUd84Ag.l1FxIRIACAbfojIaA3gZMsBYW8Ivl4GFX4EcwCN849wg.JPEG/스크린샷_2023-07-10_오후_5.55.01.jpeg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMTM1/MDAxNzY1NjQwNzE1MzQz.RjPzUxrbRIn1MvTZSWldoUdHVVDS6DEJJEGBolYm06Qg.pTD2zlmpul58eyqr3qg1qGzRwlPlOFOfi4F_3ee-TXMg.JPEG/스크린샷_2023-07-10_오후_5.56.10.jpeg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfNTgg/MDAxNzY1NjQwNzE1MzI5.KxtGg3BlgYY5GIBaNHGl3M-JTNOATj5bVFWiYMLcOR4g.cm6F-hOSzQYX9qll9UsNgQ9MdHv5EMCpLS7AhQKY6yog.JPEG/스크린샷_2023-07-10_오후_5.55.41.jpeg?type=w3840"
    ]
  },
  {
    id: 'f2022_1',
    title: "학의로에서 안녕",
    year: "2022",
    role: "Director / Writer",
    runtime: "5min",
    genre: "SF",
    isAi: true,
    synopsis: `남자는 여자를 사랑했다. 그녀가 AI라는 사실을 알기 전까지는.`,
    aspectRatio: "16:9",
    posterUrl: "https://postfiles.pstatic.net/MjAyNTEyMTRfODAg/MDAxNzY1NjQwOTEwMTY0.8_9sugu7YcmD0IdfEsHTCD0QVZeA9vSkH90QwqzkbTEg.-WB6F4YGXZz99DpUN1tUGCgA06vQj2d0kZYxtOcNsLAg.JPEG/스크린샷_2023-07-10_오후_5.52.03.jpeg?type=w3840",
    stillUrls: [
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMTk3/MDAxNzY1NjQwOTEwMTQy.se4tUnqYyZwsPfvdBabHJyMRfnULJrUikISCjC-36M0g.yUiPFkMo2AolQUO_XgXFE96OX9Wl2kD1u2An0qeIsrUg.JPEG/스크린샷_2023-07-10_오후_5.51.31.jpeg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfODAg/MDAxNzY1NjQwOTEwMTY0.8_9sugu7YcmD0IdfEsHTCD0QVZeA9vSkH90QwqzkbTEg.-WB6F4YGXZz99DpUN1tUGCgA06vQj2d0kZYxtOcNsLAg.JPEG/스크린샷_2023-07-10_오후_5.52.03.jpeg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfNjYg/MDAxNzY1NjQwOTEwMTgw.tJlUub-VRXSVkstaO3DH757u9NtqQQroKHEXuobbdd0g.U4sWlgOszPBmOafvRDrbbOXV_MV8Ta4Cu44IjPmjuLMg.JPEG/스크린샷_2023-07-10_오후_5.52.20.jpeg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMjM3/MDAxNzY1NjQwOTEwMTg1.op8baFd3lnJKw0tUKlsjMo5PKcDL0z6BtQrtaxjb1jgg.Lah4jvn_H_nG6cJTwyMHk9dvykbEcdCnd4zeuH8oqZcg.JPEG/스크린샷_2023-07-10_오후_5.52.32.jpeg?type=w3840"
    ]
  },
  {
    id: 'f2022_2',
    title: "주연배우계약서",
    year: "2022",
    role: "Director",
    runtime: "18min 6sec",
    genre: "Mystery, Thriller",
    synopsis: `유명한 영화배우가 되고 싶은 수현은 오디션을 보지만 잘 되지 않는다. 술집에서 오디션 봤던 영화의 작가를 발견한 수현은, 그녀의 마음을 사서 역할을 얻고자 한다. 하지만 결국 도착한 촬영장에는 끔찍한 일들만 그를 기다리고 있었다.`,
    aspectRatio: "2.35:1",
    posterUrl: "https://postfiles.pstatic.net/MjAyNTEyMTRfMzMg/MDAxNzY1NjQwOTM4Nzcy.9MILgFEVNZS_qKYWIZaonhUQQCtRyonS2re-jQY8nUog.dGBb5gNFmzqlTRNkMVEllJWfGSeopL8goDlxKeRlMAkg.JPEG/스크린샷_2023-07-10_오후_5.40.06.jpeg?type=w3840",
    stillUrls: [
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMzMg/MDAxNzY1NjQwOTM4Nzcy.9MILgFEVNZS_qKYWIZaonhUQQCtRyonS2re-jQY8nUog.dGBb5gNFmzqlTRNkMVEllJWfGSeopL8goDlxKeRlMAkg.JPEG/스크린샷_2023-07-10_오후_5.40.06.jpeg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMjk4/MDAxNzY1NjQwOTM4NzQx.k9p_YpyV4VRXCdTte45pkjt-Xv5dlr8YfHiW1BB-Pegg.721keLsw3CrcSZ_0yiYQSbX3HQOpr88zKp0u-Mz7Mqsg.JPEG/스크린샷_2023-07-10_오후_5.41.07.jpeg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfNjMg/MDAxNzY1NjQwOTM4NzUw.GCoL81ZyRXn819GbF0tDNtek_stcS6SUkhcm75E2zFkg.KlYOUl3N_2NJ1xoY0_NanXk4x7sSnUgm21PsMY8LFegg.JPEG/스크린샷_2023-07-10_오후_5.42.02.jpeg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfOCAg/MDAxNzY1NjQwOTM4NzYx.i3XttpQMtCDLLmK2aUli0ALabAPw4bkLaWIYPwtswnQg.-Y14i6Ib3yW_PZXJgF7nsvLASvenTAmB2Xi6C7ySlnwg.JPEG/스크린샷_2023-07-10_오후_5.43.58.jpeg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMjUx/MDAxNzY1NjQwOTM4ODMy.efsEPQfxUzOin3PcmOqBnolLdX6zCwNBGUd8ZiBct34g.QUj_vkfv6CBeNqSE79DGw5c73WI31EIKjmvJNh1wrVQg.JPEG/스크린샷_2023-07-10_오후_5.45.29.jpeg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMjgg/MDAxNzY1NjQwOTM4ODM4.59SLGPev62sNmGdh2NYeESrJRNa6-ChhSQ1xMph7lDkg.T9aOlu1lhzHVr1cSCPQ6XUWw0C6jI6MZDCxnss9t1FEg.JPEG/스크린샷_2023-07-10_오후_5.45.53.jpeg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMzUg/MDAxNzY1NjQwOTM5MzMx.IYUT6-fFn-3vfzETldBT0-i5AaLHFOO6HA-UxkhMeQYg.YM1wlJdxb-9cdgQcZ4j9c-G34hPC1J4hZQs5pDQ0im4g.JPEG/스크린샷_2023-07-10_오후_5.47.08.jpeg?type=w3840"
    ]
  },
  {
    id: 'f2022_3',
    title: "EAST",
    year: "2022",
    role: "Director / Writer",
    runtime: "22min",
    genre: "Drama",
    synopsis: `“시 같은 이야기는 아무도 안 봐. 기.승.전.결이 있어야지.”
    운 좋게 초단편 소설을 기고할 기회를 얻은 현은 자신의 오랜 꿈이 담긴 시 수첩을 집어 던져버린다. 현의 소설이 시 같아서 재미없다는 편집장의 지속적인 피드백 때문이다.
    “누구나 가슴 속에 묵직한 돌을 품고 산데.”
    자신의 오랜 꿈, 사회복지사가 된 선우는 할머니 할아버지들에게 점점 차가워지는 자신을 발견하며 자꾸만 커져가는 응어리를 해소하지 못하고 우울증을 앓는다.
    한 때 자신의 꿈을 이야기하며 희망을 공유했던 현과 선우는 같은 집에 살지만 이제 더이상 대화하지 않는다. 서로에게 속삭였던 이상적인 미래와 현재의 괴리가 자꾸만 그들을 멀어지게 한다.`,
    aspectRatio: "2.35:1",
    posterUrl: "https://postfiles.pstatic.net/MjAyNTEyMTRfMjM2/MDAxNzY1NjQxNjk3OTMy._fRb9JilfjOXA7W80zaA-pzJ-q5HVnb-_qwzPgJ3Y0og.MNPsnnsYdT2KfHGM9gDK2ltfFTs3-0XM3drq4Fr1WWUg.JPEG/스크린샷_2023-07-10_오후_5.37.32.jpeg?type=w580",
    stillUrls: [
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMjY2/MDAxNzY1NjQxMjA2MTE4.P1n8SlGnc863N54S9cvM7UHuwu7j5qz17nkGkHEEXfwg.CryF9xwbd6rLm40NdnO3fmFMvWt3U6gALz3L9YRc-Pwg.JPEG/스크린샷_2023-07-10_오후_5.33.02.jpeg?type=w3840", // Updated 1st still
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMjU0/MDAxNzY1NjQxMjA2MTEz.WAyuaShhM70RUFiTSX2gLcY83RPvY-TPJDpGJnjXtu8g.ieuJrXxAWP92lxfDROjp43dOCRQm4hc-c9eChmECFMIg.JPEG/스크린샷_2023-07-10_오후_5.35.52.jpeg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMjQ1/MDAxNzY1NjQxMjA2MTMz.7gyofGfcy2VzdfS0nzdzyDHqY2wxeP7qeagvlGkTMC8g.hKw-JuZt8_mEOud6dDdB-yqcpntw5_4Idq4Nwr1h1Mwg.JPEG/스크린샷_2023-07-10_오후_5.36.20.jpeg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMjc0/MDAxNzY1NjQxMjA2MTIz.q8ehWPDCL45TLhXXsEURxIhMAnc65ql4RpIk7Tk_sMsg.msVAdClXUaXpLnuB31VweS_G1qoE5aA2qDRgYh5pYBIg.JPEG/스크린샷_2023-07-10_오후_5.36.39.jpeg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMTQ4/MDAxNzY1NjQxMjA2MTM1.lneA9JEC9EhQ9yEpNf_TnByMexQ_7mYQJx6KdrVVpQcg.trPNwq1B15vpDY5Qc-_6VEUQmqs9WxLc_DjXmCbWpGMg.JPEG/스크린샷_2023-07-10_오후_5.37.32.jpeg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMjAx/MDAxNzY1NjQxMjA2MTM0.pR1gDhSztp442-76Q7OCgbldS8z3xNqx_HtUR2ZGXhAg.3wwo2TmSVxGLWhEb7bjYydIadjWi-4mjebajxGq4q8cg.JPEG/스크린샷_2023-07-10_오후_5.38.54.jpeg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMTQ4/MDAxNzY1NjQxMjA2NjA0.f8FJiBOA9fIFTczx7goMAFE933izfIFBI7tdbYKDg8Ag.FQE-3J3RfB-FHW9rSa2WdIC9fTPBCo2ygxZiKbCExoIg.JPEG/스크린샷_2023-07-10_오후_5.39.04.jpeg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMTIx/MDAxNzY1NjQxMjA2NjE0.VKB_ApPksMm2vXw3Xw2qwA29I7rHE1kqfJBN10eptFkg.PcbCWdISi9Joa4NKimKnAQ5OE3INY-YHPNDUx1xJbw0g.JPEG/스크린샷_2023-07-10_오후_5.39.42.jpeg?type=w3840"
    ]
  },
  {
    id: 'f2019',
    title: "나는 프랑스로 갈 거야",
    year: "2019",
    role: "Director / Writer",
    runtime: "18min 20sec",
    genre: "Drama",
    synopsis: `글을 쓰고 싶고, 프랑스로 떠나고 싶다는 막연한 꿈을 품은 연수와 수연은 
    매일 같은 방, 같은 침대에서 꿈만 꾸며 하루를 보낸다.
    무엇이 두려운지도 모른 채 사랑의 뒤에 숨어, 각자의 꿈을 미뤄온 두 사람.
    떠나는 선택과 남는 선택이 갈라지는 순간, 멈춰 있던 시간은 비로소 움직이기 시작한다.`,
    aspectRatio: "2.35:1",
    posterUrl: "https://postfiles.pstatic.net/MjAyNTEyMTRfMjgy/MDAxNzY1NjQzNTQ0ODY0.i84pekppvthEf0UMo_VWc8xQIM4CnmQRcXQlOvoqbNYg.mEqwMJGE_9cBBn7nS_xz9AfhNHpZ1MAYhdtSuLaf8o8g.JPEG/KakaoTalk_Photo_2022-01-04-12-31-49.jpeg?type=w580",
    stillUrls: [
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMTg5/MDAxNzY1NjQxMTc4MTMx.Fm8yFR6b5fFz6QOxB32tkgPgth-sawgxfMDyxsYbZ9sg.V2_FWvfp4gLdOYslxbOmrsSxeKhoFnpAYdvN5ZrFiMsg.JPEG/스크린샷_2023-07-10_오후_5.47.49.jpeg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfNjgg/MDAxNzY1NjQxMTc4MTU5.IKmrJ31EOeZOITwv0Fjj86mQUDM5zag0oew_8zTiXoog.Q7xPfLJD2BEEl4Ov10KtW2KzYREbaUS22E9z8HbCjCkg.JPEG/스크린샷_2023-07-10_오후_5.48.25.jpeg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMiAg/MDAxNzY1NjQxMTc4MTQ3.0I7V1GWs1WQNoE7McLGB_nDcc0ldGn6eMkPYAg4pHkcg.xvfMck0k6-TVZVh0dIgHBW9phbdpb7Mg8rrIKjSpH94g.JPEG/스크린샷_2023-07-10_오후_5.49.33.jpeg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMjE4/MDAxNzY1NjQxMTc4MTQ3.0I7V1GWs1WQNoE7McLGB_nDcc0ldGn6eMkPYAg4pHkcg.xvfMck0k6-TVZVh0dIgHBW9phbdpb7Mg8rrIKjSpH94g.JPEG/스크린샷_2023-07-10_오후_5.49.33.jpeg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMTA0/MDAxNzY1NjQxMTc4MTYz.KiRhjqGqvL0rlGgFcDvf2-1b3JlYEOvVX8HNcBe6Iy8g.v2JWF79ZsTSKgAezCnb7OPT85UrgWPvBg-u09G1H75gg.JPEG/스크린샷_2023-07-10_오후_5.50.08.jpeg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMjIz/MDAxNzY1NjQxMTc4MTU5.GwiKxqOkzOeykf0axhFsZGZsfdH4AVzdFeXX0UGkkMQg.OPvH8uo_-VBGYj8vj9BjcrRphP8M5UWSfcw_1HG_deIg.JPEG/스크린샷_2023-07-10_오후_5.50.39.jpeg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMjQy/MDAxNzY1NjQxMTc4NjIx.hce2skmlHynuEqxEc_qhhpq_Vhb3lyUk0lQb-UtH28Ug.zC9JT7vg3i9cE0zw0_Wp7bcG56LF8cvBzLnUhojOe6Eg.JPEG/스크린샷_2023-07-10_오후_5.50.50.jpeg?type=w3840"
    ]
  },

  // Cinematography Works
  {
    id: 'cin_2023_new1',
    title: "MAN IN DRESS",
    year: "2022",
    role: "Cinematographer / Editor / DI",
    runtime: "3min 46sec",
    genre: "Fashion",
    synopsis: "",
    aspectRatio: "2.35:1",
    posterUrl: "https://postfiles.pstatic.net/MjAyNTEyMTRfMTA2/MDAxNzY1NjkwNTQ0ODMx.8f0CQJKR6leGkyItB7FjPzf3oPGDP25w1QjS8KAmpz0g.PEAwICIkJdPidbTpk2ALuM2jV2IU8Txi87sqpVt1x6gg.JPEG/스크린샷_2025-12-14_오후_2.29.25.jpg?type=w3840",
    stillUrls: [
        "https://postfiles.pstatic.net/MjAyNTEyMTRfMTA2/MDAxNzY1NjkwNTQ0ODMx.8f0CQJKR6leGkyItB7FjPzf3oPGDP25w1QjS8KAmpz0g.PEAwICIkJdPidbTpk2ALuM2jV2IU8Txi87sqpVt1x6gg.JPEG/스크린샷_2025-12-14_오후_2.29.25.jpg?type=w3840",
        "https://postfiles.pstatic.net/MjAyNTEyMTRfMjI1/MDAxNzY1NjkwNTQ0ODU3.PSds7L2JQZkKhW_Q7KdTALE7r6BHTsxXm_QCSNjrOikg.CLwrmWA2zFDqOnNylPuPiXVRoq5-HdmnzSCvMY0WG70g.JPEG/스크린샷_2025-12-14_오후_2.29.41.jpg?type=w3840",
        "https://postfiles.pstatic.net/MjAyNTEyMTRfMTg5/MDAxNzY1NjkwNTQ0ODUy.BM2eSNMjSIJQfItIHMjUYHuKphVODJCWoA7uIahtEeIg.PWn8S-B8T03JJ5JHH3289kqNV1JAmHnMDpUeQIv9F5og.JPEG/스크린샷_2025-12-14_오후_2.31.08.jpg?type=w3840",
        "https://postfiles.pstatic.net/MjAyNTEyMTRfMTkg/MDAxNzY1NjkwNTQ1MzE0.P15pdvPmU7B1hTFF7okngSYwpZgVWtOsgF8J-imYIPQg.NOlnUBnau5nzs6fv5NNZ4Zib94W2Bu8BON5y6rBGO_og.JPEG/스크린샷_2025-12-14_오후_2.33.04.jpg?type=w3840",
        "https://postfiles.pstatic.net/MjAyNTEyMTRfMTdm/MDAxNzY1NjkwNTQ0ODcw.MBkiZixXJF_bzxGKYz8lQdaCwf7zw44_93dUSd94gnsg.2N6SpgB7_uUIoIBBy1mo4jBXnjcy2jmTBGsr7_UYG7Qg.JPEG/스크린샷_2025-12-14_오후_2.30.26.jpg?type=w3840",
        "https://postfiles.pstatic.net/MjAyNTEyMTRfOTgg/MDAxNzY1NjkwNTQ0ODU2.XIHnsQgUa2kafEttkkRv_kxROdiRm1Pt0vIweo3A670g.WLwcLu5JQB6NdWO1kA3VBWZqmprFDNc5oahJjUao-iMg.JPEG/스크린샷_2025-12-14_오후_2.30.43.jpg?type=w3840",
        "https://postfiles.pstatic.net/MjAyNTEyMTRfMjQz/MDAxNzY1NjkwNTQ0ODY4.I-CnfuE7wUaEE6oXkOV5RklfQf3gU-3bNpvQ4VQPnrcg.NiMB-xS0bKjM7-ysRYxCCyERApPiVn6txn_M2Efq2VUg.JPEG/스크린샷_2025-12-14_오후_2.30.52.jpg?type=w3840"
    ]
  },
  {
    id: 'cin_2023_new2',
    title: "사라짐을 기억하는 사라지는 ㅁ",
    year: "2023",
    role: "Cinematographer / Editor / DI",
    runtime: "7min 26sec",
    genre: "Dance",
    synopsis: "",
    aspectRatio: "4:3",
    posterUrl: "https://postfiles.pstatic.net/MjAyNTEyMTRfMTEw/MDAxNzY1Njg4OTAyMTQ2.38DRXFWxxsEyPBU_QBA0GpEEe7vu9tGblveeV3y0SfQg.OCwShbFstWG5FjxSSRixX2Xqj-BEC7iMLNMR3IM-Go8g.JPEG/스크린샷_2025-12-14_오후_2.02.30.jpg?type=w3840",
    stillUrls: [
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMTcy/MDAxNzY1Njg4OTAxNTU3.Er0JE7DdWXvLx4dED5O6ccda1wkTseK6giKUhWsGbKgg._d5NR0vrvl4pntBZfLt--ZRWTeW7QI2vEXK_H0fuCPIg.JPEG/스크린샷_2025-12-14_오후_1.56.14.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMjk0/MDAxNzY1Njg4OTAxNjQw.iJY0LrkBtLKVWwLRfnL5qgjYTu64TKycz9TeC2j_IYog.oaya5k6AlYuoTzCMDtstB2yPpujSX6bYhMFrKzpnRqAg.JPEG/스크린샷_2025-12-14_오후_1.57.10.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMjAz/MDAxNzY1Njg4OTAxNjY2.9T5OA62UEsGEY5Q1FF811t4pDMvI-jeWGa7uqFMA2Oog.29fKTbZ6rvi5NbnZ-XWGE324pawk2wftD_pzR4p-3Ygg.JPEG/스크린샷_2025-12-14_오후_1.58.38.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfNiAg/MDAxNzY1Njg4OTAxNjQz.wKjWD9zO_q24worG1zvSgyPMhid1by9mPsGlh4l20q4g.b-YgzVA4fP4jwx8ORT1p7lW7iJrN0lmvFNuHXLHch7og.JPEG/스크린샷_2025-12-14_오후_1.59.31.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMTAg/MDAxNzY1Njg4OTAxNjgw.-fGWy7xkSCJAv5taO_9ZVM-eaChRwJ7KOObVK4NTpH8g.7NyhUBMhr3sRJWoujTE0c0lgMDevxQquwWCqLSDhTEkg.JPEG/스크린샷_2025-12-14_오후_1.59.43.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMTEw/MDAxNzY1Njg4OTAyMTQ2.38DRXFWxxsEyPBU_QBA0GpEEe7vu9tGblveeV3y0SfQg.OCwShbFstWG5FjxSSRixX2Xqj-BEC7iMLNMR3IM-Go8g.JPEG/스크린샷_2025-12-14_오후_2.02.30.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMjgy/MDAxNzY1Njg4OTAxNjU4.SM9qbKzko2UN5-xUW3ipL-MP44SYI8M5g4cEGGpcUyYg.U_Qr56hFswhYOJReS2jsL52JLoL9SDS06AMODM0_ldEg.JPEG/스크린샷_2025-12-14_오후_2.00.42.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMjEx/MDAxNzY1Njg4OTAyMjI5.S9HPnoRuJ2cdpb8-TCduojDxGqrdTiamYF3-OjJfppUg.8ute_SDYi7aXlv6ijSpBT0nuHxPoza7odPiSh8fY8Pwg.JPEG/스크린샷_2025-12-14_오후_2.02.53.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMjc5/MDAxNzY1Njg4OTAyMjU2.7FoNzTacBxYGnDyP-ZVlF8tSgAdRvxJ-FCd8TCKkC5Ag.ARB8WLJNvoxS0cu8J79X3OWoCF4J7UbLxOkM6xIQxT0g.JPEG/스크린샷_2025-12-14_오후_2.03.20.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMTA1/MDAxNzY1Njg4OTAyMjg3.Zk0qpZ7sm-XWp_rGT7He72k9KIfGoeH1i1ijSX1AKyEg.hHAiqcK4y_AUBxq_F4K20H1EBUwYsP1fAhTbcEKKrgog.JPEG/스크린샷_2025-12-14_오후_2.03.28.jpg?type=w3840"
    ]
  },
  {
    id: 'cin_2022_1',
    title: "복채 (Karma)",
    year: "2022",
    role: "Cinematographer / Editor / DI",
    runtime: "14min 27sec",
    genre: "Mystery, Thriller",
    synopsis: `사람의 운명을 파괴하는 살인자, 사람의 운명을 예측하는 역술가. 정체를 숨긴 두 사람이 철학관에서 만난다. 
    경찰의 신분으로 위장한 살인자, 살인 사건을 목격한 역술가, 두 사람의 극적인 조우에서 살아남을 사람은 누구인가.`,
    posterUrl: "https://postfiles.pstatic.net/MjAyNTEyMTRfNzMg/MDAxNzY1Njg3OTE3NDU1.hh7cel-yA7_edX73UVdGpk5NYsOBtpM50-M4OgP6d2og.yykElkCBdRO0rp6Mb99FTcL_l6IO82gJP6E6R481eN8g.JPEG/스크린샷_2025-12-14_오후_1.40.59.jpg?type=w3840",
    stillUrls: [
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMjAy/MDAxNzY1Njg3OTE3MzY0.wT6H4wasYB0Ucc5PMhueUqJms4T-NrDbwnccEu-SfMMg.sOo4mCXzGH3ADZAg1YRkGJFEup9DrFyfeXQHWseVwwgg.JPEG/스크린샷_2025-12-14_오후_1.39.54(2).jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMjgw/MDAxNzY1Njg3OTE3NDE0.80SvlXETRUI5GvP-ZHxK0uf06WbU5nqSrqbToZDBpkIg.cf3xTkmMB4m4teRH8w4a8LHFNzQb-fv2Z5d8jXL6_WQg.JPEG/스크린샷_2025-12-14_오후_1.40.49.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfNzMg/MDAxNzY1Njg3OTE3NDU1.hh7cel-yA7_edX73UVdGpk5NYsOBtpM50-M4OgP6d2og.yykElkCBdRO0rp6Mb99FTcL_l6IO82gJP6E6R481eN8g.JPEG/스크린샷_2025-12-14_오후_1.40.59.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfODcg/MDAxNzY1Njg3OTE3NDMx.8V4Y4Wxv-uOgU1si01eazsYF00Hu206Z4i-uAinzfyQg.gZTIWqb74-UrlGC_qNxOQ5i_v20kCf96L9qTZwUrWMgg.JPEG/스크린샷_2025-12-14_오후_1.41.07.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMjI3/MDAxNzY1Njg3OTE3NDQx.VZN4s5sQDwn9rjZxvTTjrEz-YsHmVqiObRI7oj8OE08g.GHjxyFKsDBgrdavUyFgb00yLDle3Cg8m2WP_ZBHedacg.JPEG/스크린샷_2025-12-14_오후_1.41.57.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMjY4/MDAxNzY1Njg3OTE3NDI5.Vx44ZUx2rY5GDkJw9db1-rHK8TBvUMq1jKIB91i9kZsg.mFnTUm86a8r-W7jkMSotp1YWLPE-n6TUvjRfM0aBRPog.JPEG/스크린샷_2025-12-14_오후_1.42.33.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMTc2/MDAxNzY1Njg3OTE3OTg2.5-tbzw3vflZt7_hWrRMvj6sByNLIYXZ550i3t70yCkEg.E0D6Q2BsCwnYYdlBftHNT_rbaPHmq5HBPq09rtLvlyUg.JPEG/스크린샷_2025-12-14_오후_1.43.33.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMTA0/MDAxNzY1Njg3OTE4MDgx.2tagsJxat1g7VtjnGpUc8Ja99p3WGwvUTrTVHywZbLMg.Lj_WxGrBKNnOKnJH3CZ5nwvoqHkehGXWdZTMQYqgiX8g.JPEG/스크린샷_2025-12-14_오후_1.44.02.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMTAg/MDAxNzY1Njg3OTE4MDc5._k9Bzl95WzSz9OCTKvHZLcANXHWd2MDmkxA1AFTh6s0g.SsEuT5PFUqg5-yWBzBn6UuB_dYVJ1YkCifoTw6poLrwg.JPEG/스크린샷_2025-12-14_오후_1.47.51.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMjgz/MDAxNzY1Njg3OTE4MTEz.OgJkjN--nKpCgb_DAUURmvq6taHs7tE65s9VIGRrQRAg.Xo4o3gIF5Md15mf3zrGyBtOiGBkApDNa8N8sDd8MFUkg.JPEG/스크린샷_2025-12-14_오후_1.49.50.jpg?type=w3840"
    ],
    awards: ["제 28회 부천국제판타스틱영화제 단편경쟁", "제 23회 피렌체한국영화제 Shorts부문 상영작"]
  },
  {
    id: 'cin_2022_2',
    title: "노이즈캔슬링 (Noise Cancelling)",
    year: "2022",
    role: "Cinematographer / Editor / DI",
    runtime: "10min 36sec",
    genre: "Drama",
    synopsis: `바깥의 소리로부터 멀어지고 싶었던 지온이 해수를 만나게 되면서, 진정으로 필요한 소리에 대해 깨닫게 되는 이야기`,
    posterUrl: "https://postfiles.pstatic.net/MjAyNTEyMTRfMTky/MDAxNzY1Njg5ODMwMDc3.3tn8o2bigpKm8Y5bbP1c93INgc5iw_ROBXbMkBxv91cg.7zXox65S3ZHEckcumCqdZhWGF2JzsLM1JMmlJg6-YqYg.JPEG/스크린샷_2025-12-14_오후_2.19.18.jpg?type=w3840",
    stillUrls: [
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMjg5/MDAxNzY1Njg5ODI5MzYy.-m4eXjwqkCG4-svj88Bv5-FfKgp80djtERxn4TL4iSAg.6WaS6xIEyIoLh74hNkcgr98qHfuNOTn__G7BD8FOs6wg.JPEG/스크린샷_2025-12-14_오후_2.12.26(2).jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMjA5/MDAxNzY1Njg5ODI5NDE4.FxZTfZ1iVL82Rao8_ZRH2w9EWn1ZElBJvpVX6xNblA0g.hLNMFc9095UUJMBN_mJXgIRMlxIM69JJ75LEyTk4rGYg.JPEG/스크린샷_2025-12-14_오후_2.13.43.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMjU3/MDAxNzY1Njg5ODI5NDM3.ZlkR3tCuF148nk6xDhM3vDewcP9OwbwuxgMoWqrcEKsg.NFObQJqtl6ObtPe8Ucws1EnDlsxZ_7ffyQDWlugo-oQg.JPEG/스크린샷_2025-12-14_오후_2.14.42.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfNDUg/MDAxNzY1Njg5ODI5NDE0.jzet428oVzh0NGDB-f1p3RBYvpI9hvf2-OfskMjxCJ0g.cPCEcsyT3SUbfE6dC53mKf1-LD73jpe1VG83TIoeQ-gg.JPEG/스크린샷_2025-12-14_오후_2.14.58.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMTY0/MDAxNzY1Njg5ODI5NDIz.-SWOvYY36tHl1wSNlQmSr7PpckAO6YNomTkxRlMt7FAg._ko-I7hihv0smhbfqTxRCZjiIDBvewvMj045AWJO0_Eg.JPEG/스크린샷_2025-12-14_오후_2.15.15.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMTMz/MDAxNzY1Njg5ODI5NDI5.6FBm8PdeqrlCcgwyDDbkkbCqtvtbQ9g6Z4-xH6qnWjQg.U-tJHj1-i2PeDurHhU_s1bTwB5iQz4ivGoG6kE93j7Yg.JPEG/스크린샷_2025-12-14_오후_2.15.46.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMTQ2/MDAxNzY1Njg5ODMwMDMz.342HIoD5GxYHRF6XiGs-p6ogNkcizCyN3GfH0CO1DOUg.DUKq6O-Ge3uMev5pbUrPoZaRVGu76zSRetZ_y73DLc0g.JPEG/스크린샷_2025-12-14_오후_2.16.35.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfOTY/MDAxNzY1Njg5ODMwMDc4.LttsdbfrwKH1CcY7rAGnV-hUUEsvaneJJqTSE-r8-P8g.ZtSt9wzD5DCfRDtPV-tfkQRlZURsr7cdAN7-AY2Zy5Yg.JPEG/스크린샷_2025-12-14_오후_2.18.21.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfNzQg/MDAxNzY1Njg5ODMwMDYy.IAKiGrmbtVs_UPee9vxMbtl0oHZf_Yd4C1tRF2QSgB0g.3Yxo-Q5UxbrqUJCA6KUV7XQWRheVXwDV-Qo-qUBtqdog.JPEG/스크린샷_2025-12-14_오후_2.19.00.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMTky/MDAxNzY1Njg5ODMwMDc3.3tn8o2bigpKm8Y5bbP1c93INgc5iw_ROBXbMkBxv91cg.7zXox65S3ZHEckcumCqdZhWGF2JzsLM1JMmlJg6-YqYg.JPEG/스크린샷_2025-12-14_오후_2.19.18.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMTkw/MDAxNzY1Njg5ODMwMjM4.XCll2lLkK3D7kr30O5ojNMu2t8NoGECOoSKb1AJuS70g.Jrh3TpMWWdijY3aiVJTPoTyP5b-C-MXD--vwb3IUYswg.JPEG/스크린샷_2025-12-14_오후_2.19.33.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMjI0/MDAxNzY1Njg5ODMwNjU2._2pPsKyhsesWlEixwAmRKPTDqpLRAf-fAT3SXkLDGHIg.tfl2ZIcvXnR_wviWkZKTeu-kZNi5y78eoYDDQQPRMKAg.JPEG/스크린샷_2025-12-14_오후_2.19.59.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMjEw/MDAxNzY1Njg5ODMwNjg2.nTum4aG4RWP6CIMDGqObuGI2-fJxJnedKy25EmmJ7a4g.cYYQYd17c7SHgVJqalAxrx5z6ZlL9toaPH-J8tzjWZcg.JPEG/스크린샷_2025-12-14_오후_2.20.24.jpg?type=w3840",
      "https://postfiles.pstatic.net/MjAyNTEyMTRfMTQ2/MDAxNzY1Njg5ODMwODE1.NNPXwX3jea9u0Ffnf1l_26uwzAsXhwHDSfAPFg3OSo0g.LJ5tQpGZj1lEbFUXZ_BJoIl3ohPUaW5eTUKlvbAf7WYg.JPEG/스크린샷_2025-12-14_오후_2.20.49.jpg?type=w3840"
    ],
    awards: ["2025 완주 아동권리영화제 우수상 수상"]
  },

  // Staff Works
  {
    id: 'st_2022_1',
    title: "긴 길 (The Long Road)",
    year: "2022",
    role: "Gaffer",
    runtime: "Feature",
    genre: "Drama",
    synopsis: "독립 장편 영화 조명 감독.",
    posterUrl: "https://picsum.photos/400/600?random=501",
    stillUrls: ["https://picsum.photos/800/450?random=601"]
  },
  {
    id: 'st_2021_1',
    title: "Night Out",
    year: "2021",
    role: "Assistant Director",
    runtime: "Short",
    genre: "Comedy",
    synopsis: "현장 진행 및 스케줄 관리.",
    posterUrl: "https://picsum.photos/400/600?random=502",
    stillUrls: ["https://picsum.photos/800/450?random=602"]
  }
];

// Helper to flatten stills for the archive
const getAllFilmStills = (): StillImage[] => {
  const allStills: { url: string; title: string; year: number; originalIndex: number }[] = [];
  
  // Collect all valid stills
  FILMS.forEach((film, filmIndex) => {
    if (film.stillUrls && film.stillUrls.length > 0) {
        film.stillUrls.forEach(url => {
            // Filter out placeholder images
            if (!url.includes('picsum.photos') && !url.includes('placehold.co')) {
                allStills.push({
                    url: url,
                    title: film.title,
                    year: parseInt(film.year) || 0,
                    originalIndex: filmIndex
                });
            }
        });
    }
  });

  // Sort by Year (Descending), then by Original Film Index (Ascending to keep relative order)
  allStills.sort((a, b) => {
    if (b.year !== a.year) {
      return b.year - a.year; // Newer years first
    }
    return a.originalIndex - b.originalIndex; // Maintain film order within same year
  });

  return allStills.map((item, index) => ({
      id: `archive_${index}`,
      url: item.url,
      type: 'film',
      caption: item.title
  }));
};

export const STILLS: StillImage[] = getAllFilmStills();