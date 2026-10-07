// AI 서비스 도구함 데이터
// 원본: ai_services.xlsx → data/ai_services.csv (17개 항목, 원문 보존)
// URL·요금 수정안: docs/data_corrections.md (확인일 2026-10-07)
// pricing_detail은 조사 당시 원문, pricing_official은 공식 페이지에서 확인한 요금 정보
// 이 파일은 CSV와 수정 기록에서 생성됨. 값은 직접 수정하지 말고 문서를 갱신한 뒤 다시 생성할 것

const SERVICES = [
  {
    "id": "01_vidnoz_ai",
    "category_original": "ai 아바타 버츄얼휴먼",
    "category": "AI 아바타 버츄얼휴먼",
    "name": "Vidnoz AI",
    "description": "AI 아바타 영상 제작 가능, \n사진이나 일러스트에 대사를 입력해 입 모양을 맞춘 영상 제작 가능,\n나만의 아바타 생성 가능(본인 사진이나 영상 기반)",
    "usage": "1. 대시보드에서 Create Video를 누르거나 Avatars 메뉴로 이동\n2. 준비된 아바타를 선택. \n(직접 만든 아바타를 쓰려면 사진 업로드 또는 아바타 생성 옵션을 선택)\n3. 대본을 입력하고, 언어와 음성 선택(음성 속도나 자막도 조정 가능)\n4. Preview로 미리 듣고 확인한 뒤 Generate를 눌러 영상 제작.\n5. 완성된 영상은 계정의 작품 목록에서 확인하고 내려받거나 공유",
    "advantages": "접근이 쉽고, 툴 이용이 어렵지 않다.\n튜토리얼이 표기되어 초심자가 이용하기 좋다\n생성된 영상으로 상업적 이용 가능",
    "limitations": "무료 플랜의 경우 크레딧, 영상 길이, 해상도 제한 O",
    "review": "무료: 인당 30크레딧 지급\n간단한 영상 생성시 2크레딧씩 소모\n이용이 어렵지 않아 처음으로 아바타 작업하는 사람들에게 추천\n\n영상생성 클릭하면 원하는 아바타 디자인 가능,\n 아바타 지정 후 음성과 언어를 선택한 다음 \n텍스트를 입력하면 해당 아바타로 영상 생성 가능",
    "author": "맹민지",
    "pricing_detail": "스타터: $19.99\n비즈니스: $56.99",
    "source_url": "https://www.vidnoz.com/",
    "official_url": "https://www.vidnoz.com/",
    "pricing_type": "무료+유료",
    "pricing_summary": "무료 플랜 있음 · 유료 가격 확인 필요 · 공식 요금 페이지 참고",
    "pricing_status": "미확인",
    "pricing_official": {
      "free": "Free $0/월. 영상당 최대 3분, 720p",
      "paid": [
        "Starter: 15크레딧/월, 영상 최대 60분, 1080p, 워터마크 없음 (월 금액 확인 필요)",
        "Business: 30크레딧/월, 음성 복제·영상 번역 등 (월 금액 확인 필요)",
        "Enterprise: 문의"
      ],
      "annual": "월간/연간(25% 할인) 선택 가능. 연간 환산액 확인 필요. 첫 달 25% 할인은 일반 월 요금이 아님",
      "billing": "USD",
      "usage": "크레딧제. 단가 표기 $2/크레딧",
      "unconfirmed": "Starter·Business 월 금액 (페이지에서 금액이 스크립트로 표시됨)"
    },
    "pricing_sources": [
      "https://www.vidnoz.com/pricing.html"
    ],
    "pricing_checked_at": "2026-10-07",
    "logo": "img/logos/vidnoz_ai.png"
  },
  {
    "id": "02_deevid_ai",
    "category_original": "ai 아바타 버츄얼휴먼",
    "category": "AI 아바타 버츄얼휴먼",
    "name": "DeeVid AI",
    "description": "텍스트, 사진, 영상 드을 입력해 \nAI 영상, 이미지, 아바타, 음성, 음성, 음악을\n 만들고 편집할 수 있는 올인원 콘텐츠 제작 사이트",
    "usage": "텍스트 프롬프트 입력 or 참고할 사진/영상 업로드 \n-> 영상 스타일이나 효과 등 설정 조정\n-> create",
    "advantages": "타깃 영상 링크를 업로드하고 \n프롬프트를 입력하면 그렇게 만들어줌\n(근데 결과물은 모름 왜냐하면 유료이기 때문)",
    "limitations": "free가 있긴해도 프롬프트 입력 후 실제 영상을 제작하려면 모두 유료여야 가능해서 무료로 이용할 수 있는 기능이 거의 없다.",
    "review": "무료: 할 수 있는게 없음\n유료: 이미지/영상 제작부터 나만의 개인 커스텀 아바타 생성 가능\n/ 목소리 삽입 가능/음악 제작 가능",
    "author": "맹민지",
    "pricing_detail": "라이트: $10\n프로: $25\n프리미엄: $119",
    "source_url": "https://deevid.ai/ko/agent",
    "official_url": "https://deevid.ai/",
    "pricing_type": "유료",
    "pricing_summary": "월 $14부터 (Lite) · 가입 시 1회 20크레딧",
    "pricing_status": "확인",
    "pricing_official": {
      "free": "상시 무료 플랜 없음. 신규 가입 시 1회 20크레딧(약 4개 영상)",
      "paid": [
        "Lite: 월 $14 (200크레딧/월)",
        "Pro: 월 $35 (600크레딧/월)",
        "Premium: 월 $159 (3,300크레딧/월)"
      ],
      "annual": "Lite $120/년(월 환산 약 $10), Pro $300/년(약 $25), Premium $1,428/년(약 $119). 연간 29% 할인 표기",
      "billing": "USD, 월간/연간",
      "usage": "크레딧은 구매일로부터 1년 유효",
      "unconfirmed": null
    },
    "pricing_sources": [
      "https://deevid.ai/pricing"
    ],
    "pricing_checked_at": "2026-10-07",
    "logo": "img/logos/deevid_ai.svg"
  },
  {
    "id": "03_hey_gen",
    "category_original": "ai 아바타 버츄얼휴먼",
    "category": "AI 아바타 버츄얼휴먼",
    "name": "Hey Gen",
    "description": "HeyGen은 대본이나 사진을 바탕으로 AI 아바타가 말하는 영상을 만들고, \n기존 영상의 언어와 입 모양을 바꿔 여러 언어로 제작할 수 있는 온라인 AI 영상 플랫폼",
    "usage": "1. 준비된 아바타를 선택하거나 사용할 사진을 업로드\n2. 대본을 입력하고 목소리와 언어를 선택\n3. 영상을 생성한 뒤 발음, 발화 속도, 입 모양을 확인\n4. 필요하면 장면과 자막을 다듬어 내보냅니다.\n\n단순 영상 제작: 아바타/사진 업로드 -> 프롬프트 입력 -> 비디오제작",
    "advantages": "촬영 장비나 편집 경험이 없어도 아바타 발표 영상 제작이 쉬움\n준비된 아바타와 음성을 골라 빠르게 초안을 만들 수 있음\n발표/교육/제품소개/짧은 홍보 콘텐츠 등 활용 범위가 넓고 해당 카테고리를 선택하면 해당 무드 반영이 돼서 프롬프트 입력이 비교적 수월함",
    "limitations": "무료: 월 3개 영상, 영상당 최대 1분(생성량 제한), 맞춤 아바타나 번역 기능의 제공 범위가 달라질 수 있음\n\n음성 복제/실제 인물 아바타 제작은 본인 또는 해당 인물의 동의 필요\n\n본인의 모션과 사진, 음성을 업로드해야하는 일 발생\n\n무료버전에서 제작한 영상 다운 불가능",
    "review": "가입하고 아바타 생성시 개인의 사진 및 모션,\n 음성을 직접 입혀야하는점이 귀찮음\n영상 제작되는데 시간이 오래 걸림(48초 분량의 영상)\n프롬프트를 간략하게 입력해도 영상 구성과 결과물의 퀄리티가 좋음",
    "author": "맹민지",
    "pricing_detail": "크리에이터: 33,000\n프로: 60,967",
    "source_url": "https://app.heygen.com/onboarding",
    "official_url": "https://www.heygen.com/",
    "pricing_type": "무료+유료",
    "pricing_summary": "무료 월 3개 영상 · 유료 월 $29부터 (Creator)",
    "pricing_status": "확인",
    "pricing_official": {
      "free": "Free $0/월. 월 3개 영상, 영상당 최대 1분, 커스텀 영상 아바타 1개",
      "paid": [
        "Creator: 월 $29 (600크레딧/월)",
        "Pro: 월 $49부터 (1,000크레딧/월, 상위 크레딧 티어 있음)",
        "Business: 월 $149 + 추가 좌석 월 $20 (1,500크레딧/월)",
        "Enterprise: 문의"
      ],
      "annual": "Creator 연간 결제 시 월 환산 약 $24. Pro·Business 연간 가격 확인 필요",
      "billing": "USD, 월간/연간",
      "usage": "크레딧제. 월간 플랜은 미사용 크레딧 1개월 이월",
      "unconfirmed": "Pro·Business 연간 가격"
    },
    "pricing_sources": [
      "https://www.heygen.com/pricing",
      "https://www.heygen.com/faq"
    ],
    "pricing_checked_at": "2026-10-07",
    "logo": "img/logos/heygen.png"
  },
  {
    "id": "04_figma",
    "category_original": "웹/UI/UX 디자인",
    "category": "웹/UI/UX 디자인",
    "name": "Figma",
    "description": "바이브코딩 전에 디자인 잡기에 좋다.",
    "usage": "Figma Design-원래 피그마직접 사각형, 글자, 버튼을 배치해서 화면을 디자인하는 도구 Figma Make- AI 기능으로, 말로 설명하면 실제로 동작하는 웹 화면(프로토타입)을 만들어줌\n피그마에서 웹사이트 만들어보기 ) 피그마 메이크에서 프롬포트 입력후에 자동으로 만들어줌",
    "advantages": "피그마 디자인 - 웹 브라우저에서 바로 실행\n실시간 협업 가능\n업계 표준 도구\n커뮤니티 자료 많음\n피그마 메이크-\n말로 설명하면 화면\n실제로 눌러볼 수 있는 결과물\n대화하듯 수정할 수 있음",
    "limitations": "어려움\n( 내가 하나하나 다 건들어야해서 귀찮음이 있다.) \n인터넷 연결이 필요\n무료 플랜은 파일 수가 제한\n피그마 메이크- 디자인이 곧 웹사이트는 아님- Figma Design에서 그린 화면은 그림일 뿐이라, 실제 사이트로 만들려면 따로 코드를 짜야함\n무료 크레딧이 적음\n결과물이 비슷비슷",
    "review": "프롬포트로 만들어주는건 잘 만들어주지만 그 내부를 꾸미려고 하면 공부가 필요하다. 디자인 초보자는 단순하게 글꼴, 색상, 글자 크기 수정정도는 쉽게 할 수 있다.\n바이브코딩 들어가기 전에 디자인 프로토 타입을 만들기 좋음\n세부적으로 디자인잡기가 좋음( 글꼴, 색상, 글자크기 등)\n슬라이드 기능에는 설문조사, 스탬프, 정렬, 프르토 타입같이 실시간 상호작용이 있어서 발표할 때 좋다.",
    "author": "홍은주",
    "pricing_detail": "풀- 20달러\n데브 - 15달러\n콜라보 - 5 달러",
    "source_url": "https://www.figma.com/ko-kr/pricing/",
    "official_url": "https://www.figma.com/",
    "pricing_type": "무료+유료",
    "pricing_summary": "무료 Starter 있음 · 유료 가격 확인 필요 · 공식 요금 페이지 참고",
    "pricing_status": "미확인",
    "pricing_official": {
      "free": "Starter 무료. 무제한 드래프트, AI 크레딧 150/일(최대 500/월), 공동 편집 최대 3개 파일",
      "paid": [
        "Professional: Full·Dev·Collab 좌석별 과금. 월간 결제 가격 확인 필요",
        "Organization·Enterprise: 연간 결제 전용"
      ],
      "annual": "Organization(연간 전용): Full 월 환산 $55, Dev $25, Collab $5. Enterprise(연간 전용): Full $90, Dev $35, Collab $5",
      "billing": "USD. Professional은 월간/연간 선택",
      "usage": "AI 크레딧: Professional Full 3,000/월, Dev·Collab 500/월. Figma Make는 Professional 이상",
      "unconfirmed": "Professional 좌석의 월간 결제 가격 (페이지 표시값 Full $16·Dev $12·Collab $3의 결제 주기를 확정하지 못함)"
    },
    "pricing_sources": [
      "https://www.figma.com/pricing/",
      "https://www.figma.com/professional/",
      "https://www.figma.com/pricing-faq/"
    ],
    "pricing_checked_at": "2026-10-07",
    "logo": "img/logos/figma.svg"
  },
  {
    "id": "05_v0",
    "category_original": "웹/UI/UX 디자인",
    "category": "웹/UI/UX 디자인",
    "name": "V0",
    "description": "홈페이지 제작 부터 배포까지 한번에 가능하다.",
    "usage": "프롬포트를 입력하면 자동으로 웹사이트와 코딩을 만들어주고 바로 배포도 가능하다. 디자인 모드로 들어가서 수정이 가능하다.",
    "advantages": "디자인이 아니라 실제 코드를 만들어줌\n미리보기와 배포가 쉬움- Vercel로 한번에 배포 가능\n대화하듯 수정가능 \n다양한 템플릿이 있음",
    "limitations": "기본이 React 코드사용 (초보자는 헷갈림 )\n무료 크레딧이 금방 줄음( 기본 월 5달러)\n디자인 자유도는 피그마보다 낮음\n한글화가 잘 안 되어 있다.\n코드를 모르면 활용에 한계가 있음",
    "review": "챗지피티랑 연결할 수 있어서 좋았다.\n프롬포트를 넣으면 코드 까지 알아서 짜준다.",
    "author": "홍은주",
    "pricing_detail": "챗지피티랑 공유가능\n플러스 -30달러\n비즈니스- 100달러",
    "source_url": "https://v0.app/",
    "official_url": "https://v0.app/",
    "pricing_type": "무료+유료",
    "pricing_summary": "무료 일 7메시지 · 유료 월 $30/인부터 (Plus)",
    "pricing_status": "확인",
    "pricing_official": {
      "free": "Free $0/월. 하루 7개 메시지",
      "paid": [
        "Plus: 월 $30/인 (월 $30 상당 크레딧 + 로그인 시 일 $2 크레딧)",
        "Business: 월 $100/인 (월 $30 상당 크레딧 + 일 $2 크레딧)",
        "Enterprise: 문의"
      ],
      "annual": "연간 결제 표기 없음",
      "billing": "USD, 월간. 세금 별도",
      "usage": "크레딧제. 미사용 크레딧 65일 후 만료. Premium(월 $20)은 신규 가입 중단",
      "unconfirmed": null
    },
    "pricing_sources": [
      "https://v0.app/pricing",
      "https://v0.app/docs/pricing"
    ],
    "pricing_checked_at": "2026-10-07",
    "logo": "img/logos/v0.svg"
  },
  {
    "id": "06_google_stitch",
    "category_original": "웹/UI/UX 디자인",
    "category": "웹/UI/UX 디자인",
    "name": "Google Stitch",
    "description": "무료로 초보자들도 사용할 수 있는 웹디자인툴.",
    "usage": "프롬포트를 입력하면 자동으로 웹사이트를 만들어 준다. 디자인 모드로 들어가서 수정이 가능하다.",
    "advantages": "완전 무료\n말이나 손그림으로 화면을 만들 수 있음\n여러 디자인 시안을 한 번에 보여줌\n피그마로 내보낼 수 있음\n디자인에 집중한 도구임\n구글 계정만 있으면 바로 시작가능",
    "limitations": "완성된 사이트를 만들어 주진 않음\n실험 단계 서비스\n기능이 자주 바뀜\n세밀한 조정은 어려움\n결과물이 비슷비슷할 수 있음",
    "review": "아직 개발 단계라 예쁘게 나오지는 않지만 초보자도 쉽게 쉽게 수정할 수가 있다.",
    "author": "홍은주",
    "pricing_detail": "무료",
    "source_url": "https://stitch.withgoogle.com/",
    "official_url": "https://stitch.withgoogle.com/",
    "pricing_type": "확인 필요",
    "pricing_summary": "요금 정보 확인 필요 · 공식 페이지에 요금제 표기 없음",
    "pricing_status": "미확인",
    "pricing_official": {
      "free": "공식 페이지에 요금제·가격·사용량 한도 표기 없음",
      "paid": [
        "유료 플랜 표기 없음"
      ],
      "annual": null,
      "billing": "해당 없음",
      "usage": "Google Labs 실험 제품(experimental)",
      "unconfirmed": "요금 정보 전체"
    },
    "pricing_sources": [
      "https://stitch.withgoogle.com/",
      "https://developers.googleblog.com/stitch-a-new-way-to-design-uis/",
      "https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-gemini-3/",
      "https://labs.google/"
    ],
    "pricing_checked_at": "2026-10-07",
    "logo": "img/logos/google_stitch.png"
  },
  {
    "id": "07_claude_design",
    "category_original": "웹/UI/UX 디자인",
    "category": "웹/UI/UX 디자인",
    "name": "Claude Design",
    "description": "클로드가 클로드했다.",
    "usage": "클로드를 구독했다면 그냥 사용 가능",
    "advantages": "추가 비용 없이 쓸 수 있음\n대화로 디자인부터 프로토타입까지 만듬\n수정 방법이 다양\n디자인 이유를 설명해줌\n디자인 이유를 설명해 줌",
    "limitations": "무료로는 못 씀\n사용량이 금방 줄어듬\n베타 서비스임\n피그마 파일로 넘기기는 약함\n아직 상세하게 수정이 불가능해서 별로임(글자바꾸기, 색, 크기, 간격바꾸기 등)",
    "review": "상세한 수정이 불가능해서 아직 기능이 다양하지 않는 듯 귀찮으면 쓰기 좋음",
    "author": "홍은주",
    "pricing_detail": "클로드요금제에 포함\n프로-22달러",
    "source_url": "https://claude.com/ko/product/design",
    "official_url": "https://claude.com/product/design",
    "pricing_type": "유료",
    "pricing_summary": "Claude 유료 플랜에 포함 · Pro 월 $20",
    "pricing_status": "확인",
    "pricing_official": {
      "free": "유료 플랜 전용. 모든 Claude 유료 플랜에 포함, 조직 플랜은 관리자가 설정에서 활성화",
      "paid": [
        "별도 요금 없음. Claude Pro: 월 $20 / 연 $200",
        "Max·Team·Enterprise 플랜에도 포함"
      ],
      "annual": "Pro 연 $200 → 월 환산 약 $16.67 (공식 페이지 표기 $17/월)",
      "billing": "USD, 월간/연간",
      "usage": "생성물은 플랜 사용량 한도에 포함",
      "unconfirmed": null
    },
    "pricing_sources": [
      "https://claude.com/product/design",
      "https://claude.com/pricing"
    ],
    "pricing_checked_at": "2026-10-07",
    "logo": "img/logos/claude.png"
  },
  {
    "id": "08_n8n",
    "category_original": "워크플로우 자동화",
    "category": "워크플로우 자동화",
    "name": "n8n",
    "description": "코딩 없이 직관적인 노드 연결만으로 업무를 자동화할 수 있는 도구",
    "usage": "1. 트리거 설정\n2. 데이터 수집 및 정제\n3. AI 데이터 가공\n4. 데이터베이스 적재",
    "advantages": "- 드래그 앤 드롭 방식의 직관적인 UI로 데이터 흐름 파악 용이\n- Gemini API 등 다양한 외부 서비스와의 손쉬운 연동\n- 클라우드 환경 지원으로 PC를 켜두지 않아도 24시간 자동 실행 가능",
    "limitations": "-클라우드 버전은 14일 체험 후 유료 전환 필요 \n(무료 유지 시 로컬 설치 필요)",
    "review": "코딩 없이 노드를 연결하는 것만으로 AI 요약 데이터가 \n노션에 즉시 들어오는 점이 편리하고 신기했음. \n향후 다른 반복 업무에도 유용하게 활용할 수 있을 것 같음",
    "author": "김 민",
    "pricing_detail": "Starter_€24 \nPro_€60 \nBusiness_€800",
    "source_url": "https://n8n.io/",
    "official_url": "https://n8n.io/",
    "pricing_type": "무료+유료",
    "pricing_summary": "셀프호스팅 Community 무료 · 클라우드 유료 (연간 결제 시 월 €20부터, 월간 가격 확인 필요)",
    "pricing_status": "미확인",
    "pricing_official": {
      "free": "상시 무료 클라우드 플랜 없음. 무료 체험(Starter·Pro 카드 불필요, Business 14일). 셀프호스팅 Community 에디션 무료",
      "paid": [
        "Starter·Pro·Business: 월간 결제 가격 확인 필요",
        "Enterprise: 문의"
      ],
      "annual": "연간 결제 시 월 환산: Starter €20, Pro €50, Business €667 (Business는 셀프호스팅 전용). 연간 17% 할인 표기",
      "billing": "EUR, 월간/연간",
      "usage": "월 워크플로 실행 수: Starter 2.5K, Pro 10K, Business 40K. Assistant 크레딧 Starter 1,600/월, Pro 최대 9,600/월",
      "unconfirmed": "월간 결제 가격"
    },
    "pricing_sources": [
      "https://n8n.io/pricing/"
    ],
    "pricing_checked_at": "2026-10-07",
    "logo": "img/logos/n8n.png"
  },
  {
    "id": "09_dify",
    "category_original": "워크플로우 자동화",
    "category": "워크플로우 자동화",
    "name": "Dify",
    "description": "문서 기반 RAG와 LLM 워크플로우를 노드로 조립해 \n웹/API로 즉시 배포하는 노코드 AI 플랫폼",
    "usage": "- [지식] 메뉴에 PDF나 텍스트 문서 업로드(자동 분할).\n- [스튜디오] → [챗봇] 생성 후 업로드한 문서를 컨텍스트에 연결.\n- 테스트 후 [배포]를 눌러 웹 링크 또는 임베드 코드로 즉시 사용.",
    "advantages": "- 문서 파싱, 청킹, 벡터 검색을 클릭 몇 번으로 자동 처리\n- 별도 프론트엔드 개발 없이 완성형 챗봇 UI 기본 제공",
    "limitations": "- 순수 데이터 처리 및 외부 SaaS 간 자동화 기능은 n8n보다 빈약함.\n- 본격적인 운영 시 개인 API 키 연결 필요.",
    "review": "기존 PDF 파일을 끌어다 놓으면 챗봇과 간단하게 연결할 수 있어 좋았음. 코딩 작업 없이 전용 챗봇을 쉽게 만들 수 있어 신기함. \n-> 진입장벽이 낮다!",
    "author": "김 민",
    "pricing_detail": "무료 _ 200회(메시지 크레딧)\nProfessional_ $59\nTeam_ $159",
    "source_url": "https://dify.ai/ko",
    "official_url": "https://dify.ai/",
    "pricing_type": "무료+유료",
    "pricing_summary": "무료 Sandbox 200크레딧 · 유료 월 $59부터 (Professional)",
    "pricing_status": "확인",
    "pricing_official": {
      "free": "Sandbox 무료. 메시지 크레딧 200(1회성). 앱 5개, 지식 문서 50개. 셀프호스팅 Community 무료",
      "paid": [
        "Professional: 월 $59 (워크스페이스당, 5,000크레딧/월)",
        "Team: 월 $159 (10,000크레딧/월)",
        "Enterprise: 문의"
      ],
      "annual": "Professional $590/년(월 환산 약 $49.17), Team $1,590/년(약 $132.50). 연간 17% 할인",
      "billing": "USD, 월간/연간. 세금 별도",
      "usage": "메시지 크레딧. 모델별 소모량 상이, 소진 후 개인 API 키 사용 가능",
      "unconfirmed": null
    },
    "pricing_sources": [
      "https://dify.ai/pricing",
      "https://dify.ai/pricing/dify-cloud"
    ],
    "pricing_checked_at": "2026-10-07",
    "logo": "img/logos/dify.svg"
  },
  {
    "id": "10_claude",
    "category_original": "시각화 & 프레젠테이션\n(연구자료 분석·구조화 중심)",
    "category": "시각화 & 프레젠테이션",
    "name": "Claude",
    "description": "학술·연구 자료를 읽고 핵심 논리를 구조화한 뒤, 차트·시각화가 포함된 PowerPoint 자료까지 생성할 수 있는 범용 AI",
    "usage": "1) 발표 주제와 대상, 목적을 자연어로 입력\n2) 참고할 논문·PDF·데이터를 첨부하거나 조사 범위를 지정\n3) 발표 구조·핵심 메시지·차트 구성을 요청\n4) PowerPoint(.pptx) 또는 시각화 파일로 생성",
    "advantages": "• 긴 자료와 복잡한 연구 내용을 논리적으로 정리하는 데 강함\n• 문서·데이터 분석과 발표자료 생성을 한 흐름에서 처리 가능",
    "limitations": "• 프레젠테이션 디자인 자체가 핵심인 전문 제작 툴보다 시각적 완성도가 일정하지 않을 수 있음\n• 논문 출처·수치가 중요한 경우 원문 검증이 필요\n• 디자인 방향을 구체적으로 지시하지 않으면 다소 보고서형 결과가 나올 수 있음",
    "review": "동일한 영양 연구 프롬프트를 넣었을 때, ‘왜 이 내용이 중요한지’와 macronutrition·micronutrition의 관계를 논리적으로 정리하는 데 더 적합한 편이다. 학술 발표나 연구 결과 설명처럼 내용의 정확성과 흐름이 중요할 때 유용하다. 다만 처음부터 눈에 띄는 슬라이드 디자인을 뽑는 목적이라면 Gamma보다 추가 디자인 지시가 더 필요할 수 있다.",
    "author": "양효선",
    "pricing_detail": "Claude Pro\n월 $20. 사용량 확대, Claude Code·Projects·Research 및 다양한 모델 지원.\nClaude Max\n5x 월 $100 / 20x 월 $200. Pro 대비 사용량 5배·20배, 출력 한도 확대 및 신규 기능 우선 이용.",
    "source_url": "https://claude.ai/share/870e432f-255f-450b-bd5c-498136c64bfc",
    "official_url": "https://claude.ai/",
    "pricing_type": "무료+유료",
    "pricing_summary": "무료 플랜 있음 · Pro 월 $20 · Max 월 $100/$200",
    "pricing_status": "확인",
    "pricing_official": {
      "free": "Free $0",
      "paid": [
        "Pro: 월 $20 / 연 $200",
        "Max 5x: 월 $100 (월간 전용)",
        "Max 20x: 월 $200 (월간 전용)",
        "Team: Standard 월 $25, Premium 월 $125 (좌석당)"
      ],
      "annual": "Pro 연 $200 → 월 환산 약 $16.67 (공식 표기 $17/월). Team 연간 결제 시 Standard $20, Premium $100. Max는 연간 결제 없음",
      "billing": "USD",
      "usage": "Max는 Pro 대비 5배·20배 사용량",
      "unconfirmed": null
    },
    "pricing_sources": [
      "https://claude.com/pricing",
      "https://support.claude.com/en/articles/11049741-what-is-the-max-plan"
    ],
    "pricing_checked_at": "2026-10-07",
    "logo": "img/logos/claude.png"
  },
  {
    "id": "11_gamma",
    "category_original": "시각화 & 프레젠테이션\n(자동 디자인·슬라이드 생성 중심)",
    "category": "시각화 & 프레젠테이션",
    "name": "Gamma",
    "description": "주제나 프롬프트만으로 발표 흐름, 카드형 슬라이드, 이미지·레이아웃을 한 번에 구성하는 AI 프레젠테이션 전문 도구",
    "usage": "1) Gamma에서 Create/Generate 선택\n2) 주제·목적·대상·원하는 슬라이드 수를 프롬프트로 입력\n3) AI가 제안한 개요를 확인\n4) 테마·이미지 스타일을 선택해 전체 자료 생성\n5) 필요 시 PPTX/PDF로 내보내기",
    "advantages": "• 프롬프트에서 곧바로 슬라이드 구조와 디자인까지 자동 생성\n• 이미지·레이아웃·카드 구성이 빠르고 시각적 완성도가 높음",
    "limitations": "• 학술 자료를 깊게 분석하거나 출처의 신뢰도를 검증하는 능력은 별도 확인이 필요\n• 자동 디자인이 강한 대신 세부 내용이 요약되거나 단순화될 수 있음\n• 동일한 스타일이 반복되면 자료가 다소 템플릿처럼 보일 수 있음\n• PPTX 내보내기 후 일부 폰트·레이아웃 차이가 생길 수 있음",
    "review": "같은 영양 연구 프롬프트를 넣었을 때, 결과를 ‘발표자료처럼 보이게 만드는 속도’와 시각적 정리는 매우 강한 편이다. macronutrition과 micronutrition을 카드·이미지·핵심 포인트로 빠르게 나누어 보여주기 좋다. 반면 학술 발표라면 인용한 연구와 수치가 정확한지 별도로 확인해야 한다.",
    "author": "양효선",
    "pricing_detail": "Gamma Pro\n월 $25, 4,000크레딧. 프리미엄 AI 이미지·맞춤 브랜딩·상세 분석·API 지원.\nGamma Ultra\n월 $100, 20,000크레딧. 고급 AI 모델·신기능 우선 이용·맞춤 도메인 최대 100개 지원.",
    "source_url": "https://gamma.app/docs/-s8q26xnq40wly0s",
    "official_url": "https://gamma.app/",
    "pricing_type": "무료+유료",
    "pricing_summary": "무료 플랜 있음 · 유료 가격 확인 필요 · 공식 요금 페이지 참고",
    "pricing_status": "미확인",
    "pricing_official": {
      "free": "Free 플랜 있음. 초기 400크레딧(갱신 없음), 추천 1건당 200크레딧(최대 2,000)",
      "paid": [
        "Plus (1,000크레딧/월): 가격 확인 필요",
        "Pro (4,000크레딧/월): 가격 확인 필요",
        "Ultra (20,000크레딧/월, 월간 전용 도입가): 가격 확인 필요",
        "Business: 별도 안내"
      ],
      "annual": "연간 플랜은 월간과 같은 월 크레딧을 할인 요율로 제공 (금액 확인 필요)",
      "billing": "확인 필요",
      "usage": "크레딧제",
      "unconfirmed": "모든 유료 플랜 가격 (가격 페이지 접근 불가)"
    },
    "pricing_sources": [
      "https://help.gamma.app/en/articles/8077107-how-can-i-upgrade-my-gamma-subscription",
      "https://help.gamma.app/en/articles/7834324-how-do-credits-work-in-gamma",
      "https://help.gamma.app/en/articles/11048064-is-there-a-one-month-subscription-option-available",
      "https://developers.gamma.app/get-started/access-and-pricing"
    ],
    "pricing_checked_at": "2026-10-07",
    "logo": "img/logos/gamma.svg"
  },
  {
    "id": "12_lovable",
    "category_original": "바이브 코딩",
    "category": "바이브 코딩",
    "name": "Lovable (러버블)",
    "description": "원하는 기능을 자연어로 설명하면 웹사이트와 웹앱을 만들어주는 AI 개발 도구",
    "usage": "회원가입 후 빌드 입력창에 원하는 기능과 디자인을 입력한다. 생성된 화면에서 기능을 확인하고, 같은 대화창에서 추가 기능이나 수정을 요청한다.",
    "advantages": "한국어로 요청한 기능을 잘 반영한다. 코드를 직접 작성하지 않아도 작동하는 웹페이지를 만들 수 있고, 추가 기능도 대화로 요청할 수 있어 편리하다.",
    "limitations": "이번 간단한 투두리스트 제작에서는 특별한 불편함을 느끼지 못했다. 복잡한 기능 구현 능력은 이번 체험에서 확인하지 못했다.",
    "review": "취업 준비용 투두리스트를 제작했는데 요청을 잘 반영해주어 매우 만족스러웠다. 새로고침 후에도 완료 상태가 유지됐고, 우선순위 기능도 요청대로 추가됐다. 특별히 불편한 점은 없었다.",
    "author": "유정현",
    "pricing_detail": "월간 결제 기준 (USD)\nFree: $0/월\nPro: $25/월부터 (100 크레딧)\nBusiness: $50/월부터 (100 크레딧)\nEnterprise: 별도 문의\n확인일: 2026-10-07\nhttps://lovable.dev/pricing",
    "source_url": "https://lovable.dev",
    "official_url": "https://lovable.dev/",
    "pricing_type": "무료+유료",
    "pricing_summary": "무료 일 5크레딧 · 유료 가격 확인 필요 · 공식 요금 페이지 참고",
    "pricing_status": "미확인",
    "pricing_official": {
      "free": "Free 있음. 빌드 크레딧 5/일(월 최대 30), Cloud 크레딧 20/월, AI 크레딧 4/월",
      "paid": [
        "Pro: 월 100 구독 크레딧부터, 크레딧 티어별 과금 (가격 확인 필요)",
        "Business: 크레딧 티어별 과금 (가격 확인 필요)",
        "Enterprise: 문의"
      ],
      "annual": "확인 필요",
      "billing": "USD",
      "usage": "통합 크레딧. 추가 구매 Pro $15/50크레딧, Business $30/50크레딧",
      "unconfirmed": "Pro·Business 가격, 연간 환산액"
    },
    "pricing_sources": [
      "https://docs.lovable.dev/introduction/credits-and-usage",
      "https://docs.lovable.dev/introduction/faq",
      "https://lovable.dev/blog/simplifying-billing"
    ],
    "pricing_checked_at": "2026-10-07",
    "logo": "img/logos/lovable.png"
  },
  {
    "id": "13_cursor",
    "category_original": "바이브 코딩",
    "category": "바이브 코딩",
    "name": "Cursor (커서)",
    "description": "자연어 요청으로 코드와 파일을 생성하고 수정할 수 있는 AI 코드 편집기",
    "usage": "PC에 설치하고 회원가입·로그인한다. 대화 입력창에 필요한 기능과 디자인을 입력한다. 생성된 index.html 파일을 브라우저에서 열어 작동을 확인하고, 기존 대화에서 수정을 요청한다.",
    "advantages": "한국어 요청으로 실행 가능한 HTML 파일을 생성했다. 할 일 추가·완료·삭제·필터·브라우저 저장 기능이 모두 정상 작동했으며, 파일을 여는 방법도 안내했다.",
    "limitations": "생성 대기 시간이 길게 느껴졌고, 초기 디자인 만족도가 낮았다. 우선순위 추가 요청 단계에서 무료 사용량 한도에 도달해 수정 기능을 충분히 체험하지 못했다.",
    "review": "한국어 요청으로 취업 준비용 투두리스트를 제작했고, 할 일 추가·완료·삭제·필터·새로고침 후 저장 유지 기능이 정상 작동했다. 다만 초기 디자인과 생성 속도는 아쉬웠다. 우선순위를 추가하려 할 때 사용량 제한이 나와 추가 수정은 진행하지 못했다.",
    "author": "유정현",
    "pricing_detail": "월간 결제 기준 (USD, 세금 별도)\nHobby: $0/월\nPro: $20/월\nPro+: $60/월\nUltra: $200/월\nTeams Standard: $40/인·월\nTeams Premium: $120/인·월\nEnterprise: 별도 문의\n확인일: 2026-10-07\nhttps://cursor.com/pricing\nhttps://prod.cursor.com/help/account-and-billing/pricing",
    "source_url": "https://cursor.com",
    "official_url": "https://cursor.com/",
    "pricing_type": "무료+유료",
    "pricing_summary": "무료 Hobby · 유료 월 $20부터 (Pro)",
    "pricing_status": "확인",
    "pricing_official": {
      "free": "Hobby 무료. 카드 불필요, 제한된 Agent 요청",
      "paid": [
        "Pro: 월 $20",
        "Pro+: 월 $60",
        "Ultra: 월 $200",
        "Teams: Standard 월 $40/인, Premium 월 $120/인",
        "Enterprise: 문의"
      ],
      "annual": "연간 결제 옵션 있음, 금액 확인 필요",
      "billing": "USD, 월간",
      "usage": "모델별 사용량 풀 + 추가 사용 과금",
      "unconfirmed": "연간 결제 가격"
    },
    "pricing_sources": [
      "https://cursor.com/pricing",
      "https://cursor.com/help/account-and-billing/pricing"
    ],
    "pricing_checked_at": "2026-10-07",
    "logo": "img/logos/cursor.svg"
  },
  {
    "id": "14_bolt_new",
    "category_original": "바이브 코딩",
    "category": "바이브 코딩",
    "name": "Bolt.new (볼트)",
    "description": "자연어 대화로 웹사이트와 웹앱을 생성·수정하고 공개할 수 있는 AI 개발 도구",
    "usage": "웹사이트에서 가입·로그인한 뒤 대화창에 기능과 디자인을 한국어로 요청한다. 생성된 화면에서 기능을 확인하고 같은 대화에서 추가 수정을 요청한다. 공유 링크에 공개하려면 Publish를 실행하며, 수정 내용도 다시 Publish해 반영한다.",
    "advantages": "약 2분 미만에 취업 준비용 투두리스트를 생성했다. 할 일 추가·완료·삭제·필터·새로고침 후 저장 유지 기능이 모두 정상 작동했고, 추가로 요청한 우선순위 선택·변경 및 저장 기능도 잘 구현했다.",
    "limitations": "디자인은 평범하게 느껴졌다. 공유 링크에서 결과를 확인하려면 Publish가 필요했고, 수정 후에도 다시 Publish해야 최신 내용이 반영되는 과정이 번거로웠다.",
    "review": "한국어 요청으로 취업 준비용 투두리스트를 만들었으며 약 2분 미만에 완성됐다. 기본 기능이 모두 정상 작동했고, 추가 요청한 우선순위 기능도 잘 반영되어 새로고침 후에도 유지됐다. 기능 면에서는 만족스러웠지만 디자인은 평범했고, 수정할 때마다 다시 Publish해야 하는 과정이 번거로웠다.",
    "author": "유정현",
    "pricing_detail": "월간 결제 기준 (USD)\nFree: $0/월\nPro: $25/월부터\nTeams: $30/인·월부터\nEnterprise: 별도 문의\n확인일: 2026-10-07\nhttps://bolt.new/pricing",
    "source_url": "https://bolt.new",
    "official_url": "https://bolt.new/",
    "pricing_type": "무료+유료",
    "pricing_summary": "무료 플랜 있음 · 유료 월 $25부터 (Pro)",
    "pricing_status": "확인",
    "pricing_official": {
      "free": "Free $0. 일 30만 토큰, 월 100만 토큰",
      "paid": [
        "Pro: 월 $25부터 (월 1,000만 토큰부터, 상위 티어 있음)",
        "Teams: 월 $30/인",
        "Enterprise: 문의"
      ],
      "annual": "연간 결제 최대 28% 할인 표기, 금액 확인 필요 (지원 문서 예시: Pro 10M 연 $216)",
      "billing": "USD, 월간/연간",
      "usage": "토큰제. 유료 미사용 토큰 1개월 이월",
      "unconfirmed": "연간 정식 환산액"
    },
    "pricing_sources": [
      "https://bolt.new/pricing",
      "https://support.bolt.new/account-and-subscription/billing"
    ],
    "pricing_checked_at": "2026-10-07",
    "logo": "img/logos/bolt_new.svg"
  },
  {
    "id": "15_chatgpt",
    "category_original": "LLM / 글쓰기 및 전반적인 작업",
    "category": "LLM / 글쓰기 및 전반적인 작업",
    "name": "ChatGPT",
    "description": "자연어 대화로 글 작성·수정·요약과 다양한 작업을 돕는 AI 서비스",
    "usage": "웹사이트나 앱에 로그인한 뒤 목적·조건·출력 형식을 입력한다. 같은 대화에서 문체나 분량 수정을 요청하고 결과를 확인한다. 이번에는 납품 일정 변경 이메일 작성과 공백 포함 150자 이내 수정 요청을 체험했다.",
    "advantages": "이번 이메일 작성에서 날짜·변경 사유·사과·양해·변경 가능 여부 확인을 반영했고, 후속 요청에 따라 본문을 150자 이내로 줄였다. 조사한 특징: 메모리를 통한 관련 맥락 활용과 개인화 기능을 제공한다.",
    "limitations": "첫 답변에 요청하지 않은 번역·이메일 연결 안내가 덧붙었다. 조사한 한계: 메모리는 모든 대화의 세부 내용을 기억하지 않으며, 필요한 맥락이 누락될 수 있다.",
    "review": "업무 이메일 작성과 분량 축소 요청을 잘 반영해 만족스러웠다. 평소 내 프로젝트와 선호를 공유해온 덕분에 배경을 반복해서 설명하는 수고가 적어 주로 사용한다. 다만 첫 답변의 추가 안내는 불필요하게 느껴질 수 있었다.",
    "author": "유정현",
    "pricing_detail": "개인용 월간 결제 기준 (USD)\nFree: $0/월\nGo: $8/월 (미국 기준)\nPlus: $20/월\nPro 100: $100/월\nPro 200: $200/월\nPro 500: $500/월\n지역·세금·결제 경로에 따라 달라질 수 있음\n확인일: 2026-10-07\nhttps://chatgpt.com/pricing\nhttps://help.openai.com/en/articles/9793128-about-chatgpt-pro-tiers",
    "source_url": "https://chatgpt.com",
    "official_url": "https://chatgpt.com/",
    "pricing_type": "무료+유료",
    "pricing_summary": "무료 플랜 있음 · 유료 가격 확인 필요 · 공식 요금 페이지 참고",
    "pricing_status": "미확인",
    "pricing_official": {
      "free": "무료 플랜 있음",
      "paid": [
        "Go: 가격 확인 필요 (지역별 가격 상이)",
        "Plus: 가격 확인 필요",
        "Pro: 가격 확인 필요 (Pro $100 티어 항목 확인)",
        "Business·Enterprise: 별도"
      ],
      "annual": "개인 플랜 연간 결제 표기 없음",
      "billing": "월간",
      "usage": "확인 필요",
      "unconfirmed": "Go·Plus·Pro 금액 (공식 페이지 접근 불가 또는 금액 미표시)"
    },
    "pricing_sources": [
      "https://chatgpt.com/pricing"
    ],
    "pricing_checked_at": "2026-10-07",
    "logo": "img/logos/chatgpt.webp"
  },
  {
    "id": "16_claude",
    "category_original": "LLM / 글쓰기 및 전반적인 작업",
    "category": "LLM / 글쓰기 및 전반적인 작업",
    "name": "Claude (클로드)",
    "description": "대화로 글 작성·편집과 문서 이해·분석을 돕는 AI 서비스",
    "usage": "웹사이트나 앱에 로그인한 뒤 목적·조건·출력 형식을 입력한다. 같은 대화에서 문체나 분량 수정을 요청하고 결과를 확인한다. 이번에는 납품 일정 변경 이메일 작성과 공백 포함 150자 이내 수정 요청을 체험했다.",
    "advantages": "이번 이메일은 문장을 나눠 읽기 편하게 구성했고 제목에 변경 전후 날짜를 표시했다. 후속 수정에서도 필수 내용을 유지하며 150자 제한을 충족했다. 조사한 특징: 여러 형식의 문서 업로드·분석 기능을 제공한다.",
    "limitations": "첫 답변에 본문 외 서명 안내와 글자 수 설명이 추가됐다. 이번 체험은 짧은 이메일 작성·수정에 한정되어 장문 분석이나 다른 작업의 성능은 확인하지 못했다.",
    "review": "정중한 업무 이메일을 읽기 편하게 작성해주었고, 수정 요청에서도 필요한 내용을 유지하며 분량을 줄였다. 이번 글쓰기 체험은 만족스러웠다. 장문 문서 분석 등 다른 기능은 직접 체험하지 않았다.",
    "author": "유정현",
    "pricing_detail": "개인용 월간 결제 기준 (USD, 세금 별도)\nFree: $0/월\nPro: $20/월\nMax 5x: $100/월\nMax 20x: $200/월\n웹 구독 기준, 모바일 가격은 다를 수 있음\n확인일: 2026-10-07\nhttps://claude.com/pricing",
    "source_url": "https://claude.ai",
    "official_url": "https://claude.ai/",
    "pricing_type": "무료+유료",
    "pricing_summary": "무료 플랜 있음 · Pro 월 $20 · Max 월 $100/$200",
    "pricing_status": "확인",
    "pricing_official": {
      "free": "Free $0",
      "paid": [
        "Pro: 월 $20 / 연 $200",
        "Max 5x: 월 $100 (월간 전용)",
        "Max 20x: 월 $200 (월간 전용)",
        "Team: Standard 월 $25, Premium 월 $125 (좌석당)"
      ],
      "annual": "Pro 연 $200 → 월 환산 약 $16.67 (공식 표기 $17/월). Team 연간 결제 시 Standard $20, Premium $100. Max는 연간 결제 없음",
      "billing": "USD",
      "usage": "Max는 Pro 대비 5배·20배 사용량",
      "unconfirmed": null
    },
    "pricing_sources": [
      "https://claude.com/pricing",
      "https://support.claude.com/en/articles/11049741-what-is-the-max-plan"
    ],
    "pricing_checked_at": "2026-10-07",
    "logo": "img/logos/claude.png"
  },
  {
    "id": "17_gemini",
    "category_original": "LLM / 글쓰기 및 전반적인 작업",
    "category": "LLM / 글쓰기 및 전반적인 작업",
    "name": "Gemini (제미나이)",
    "description": "글 작성·수정과 정보 정리 및 Google 서비스 연계를 지원하는 AI 서비스",
    "usage": "웹사이트나 앱에 로그인한 뒤 목적·조건·출력 형식을 입력한다. 같은 대화에서 문체나 분량 수정을 요청하고 결과를 확인한다. 이번에는 납품 일정 변경 이메일 작성과 공백 포함 150자 이내 수정 요청을 체험했다.",
    "advantages": "이번 이메일에서는 별도 부연 없이 정중한 본문을 제시했고, 후속 요청에서도 날짜와 사유 등 필수 내용을 유지하며 150자 제한을 충족했다. 조사한 특징: Google 앱 연결과 개인화 기능을 제공한다.",
    "limitations": "평소 사용에서는 의도를 충분히 반영하지 못한다고 느낀 경우가 있어 답변의 일관성이 아쉬웠다(개인적 경험). 이번 이메일 체험에서는 뚜렷한 오류가 없었으며, 이 결과만으로 전반적인 성능을 단정하기 어렵다.",
    "review": "이번 납품 일정 변경 이메일 작성과 수정 요청은 잘 수행했고, 불필요한 부연 없이 결과를 보여줬다. 다만 평소 사용에서는 원하는 의도와 다른 답변을 받았다고 느낀 경우가 있어, 답변의 일관성에는 아쉬움이 있다.",
    "author": "유정현",
    "pricing_detail": "개인용 월간 결제 기준 (공식 USD 표시)\nFree: $0/월\nGoogle AI Plus: $7.99/월\nGoogle AI Pro: $19.99/월\nGoogle AI Ultra 20x: $249.99/월\nUltra 하위 구성 가격은 공식 페이지 표시 오류로 확인 불가\n한국 가격·세금·프로모션은 결제 화면 확인\n확인일: 2026-10-07\nhttps://gemini.google/as/subscriptions/",
    "source_url": "https://gemini.google.com",
    "official_url": "https://gemini.google.com/",
    "pricing_type": "무료+유료",
    "pricing_summary": "무료 플랜 있음 · 유료 월 $4.99부터 (Google AI Plus)",
    "pricing_status": "확인",
    "pricing_official": {
      "free": "Free $0 (Google 계정)",
      "paid": [
        "Google AI Plus: 월 $4.99 (한국 ₩7,500)",
        "Google AI Pro: 월 $19.99 (원화 가격 확인 필요)",
        "Google AI Ultra: 월 $99.99 (Pro 대비 5배)부터, 월 $199.99 (20배). 한국 ₩119,000 / ₩300,000"
      ],
      "annual": "영어 페이지에 연간 가격 표기 없음. 한국 페이지의 AI Pro 연간 40% 할인(2026-10-31까지)은 프로모션",
      "billing": "USD(영문 페이지) / KRW(한국 페이지), 월간",
      "usage": "Plus 무료 대비 2배, Pro 4배, Ultra는 Pro 대비 5배·20배",
      "unconfirmed": "Google AI Pro 원화 가격, 연간 금액"
    },
    "pricing_sources": [
      "https://gemini.google/intl/en/subscriptions/",
      "https://gemini.google/kr/subscriptions/",
      "https://one.google.com/intl/ko/about/google-ai-plans/"
    ],
    "pricing_checked_at": "2026-10-07",
    "logo": "img/logos/gemini.png"
  }
];
