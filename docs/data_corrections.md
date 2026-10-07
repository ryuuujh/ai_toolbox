# 데이터 수정 기록: URL·요금 검증 (2026-10-07)

## 1. 개요

- 대상: `ai_services.xlsx` 17개 항목의 URL과 사용요금.
- 실제 확인일: 2026-10-07 (모든 항목 동일).
- 확인 방법: 공식 홈페이지·공식 요금 페이지·공식 도움말 본문을 직접 조회했다. 블로그·비교 사이트는 사용하지 않았다.
- 보존 원칙: 원본 엑셀과 `data/ai_services.csv`는 수정하지 않았다. 장점·아쉬운점·직접써본소감은 이번 검증에서 바꾸지 않았다. 원문 `사용요금` 셀은 `pricing_detail`에 그대로 보존하고, 검증 결과는 별도 필드(`pricing_official`)로 분리한다.
- 요금 관련 체험 기록(예: "무료: 인당 30크레딧", "프로-22달러")은 체험 당시 기록으로 유지하며 현재 공식 요금과 구분해서 표시한다.

### 확인 상태 표기

| 표기 | 의미 |
| --- | --- |
| ✅ 확인 | 공식 페이지 본문에서 해당 문구·금액을 직접 확인함 |
| ⚠️ 미확정 | 공식 도메인의 검색 요약에만 있고 본문 인용을 하지 못함. 사이트 표시에서 제외 |
| ❌ 미확인 | 공식 페이지 접근 실패(403 등) 또는 가격이 스크립트로만 렌더링되어 본문에서 추출 불가 |

### 표시 원칙 (사이트 적용 기준)

1. 월간 결제 가격을 기본으로 표시한다. 연간 결제 가격은 "연간 결제 시 월 환산 약 $X"로 별도 표시하고 월 요금처럼 적지 않는다.
2. 첫 달 할인, 신규 가입 할인, 프로모션 가격은 일반 월 요금으로 적지 않는다.
3. ⚠️·❌ 상태의 플랜 가격은 사이트 표시용 요약(`pricing_summary`)에서 제외하고 `가격 확인 필요 · 공식 요금 페이지 참고`로 표시한다. 무료 플랜 존재가 ✅ 확인된 서비스는 `무료+유료` 배지를 유지한다.
4. 통화는 공식 페이지 표기를 따른다. n8n은 EUR, Gemini 한국 페이지는 KRW, 나머지는 USD.
5. 원본 URL은 `source_url`에 보존하고 공식 홈페이지는 `official_url`로 관리한다. 공식 사이트 버튼은 `official_url`을 사용한다.

## 2. URL 수정 비교표

| # | 서비스 | source_url (원본, 보존) | official_url (수정안) | 변경 | 이유 |
| --- | --- | --- | --- | --- | --- |
| 1 | Vidnoz AI | https://www.vidnoz.com/ | https://www.vidnoz.com/ | 없음 | 공식 홈 |
| 2 | DeeVid AI | https://deevid.ai/ko/agent | https://deevid.ai/ | 변경 | 원본은 하위 페이지. 공식 홈으로 통일 |
| 3 | Hey Gen | https://app.heygen.com/onboarding | https://www.heygen.com/ | 변경 | 원본은 로그인 후 온보딩 주소 |
| 4 | Figma | https://www.figma.com/ko-kr/pricing/ | https://www.figma.com/ | 변경 | 원본은 요금 페이지 |
| 5 | V0 | https://v0.app/ | https://v0.app/ | 없음 | 공식 홈 |
| 6 | Google Stitch | https://stitch.withgoogle.com/ | https://stitch.withgoogle.com/ | 없음 | 공식 홈 |
| 7 | Claude Design | https://claude.com/ko/product/design | https://claude.com/product/design | 변경(경로만) | 공식 제품 페이지. 한국어 경로는 source_url에 보존 |
| 8 | n8n | https://n8n.io/ | https://n8n.io/ | 없음 | 공식 홈 |
| 9 | Dify | https://dify.ai/ko | https://dify.ai/ | 변경(경로만) | 공식 홈. 한국어 경로는 source_url에 보존 |
| 10 | Claude (양효선) | https://claude.ai/share/870e432f-255f-450b-bd5c-498136c64bfc | https://claude.ai/ | 변경 | 원본은 공유 대화 링크 |
| 11 | Gamma | https://gamma.app/docs/-s8q26xnq40wly0s | https://gamma.app/ | 변경 | 원본은 개인 문서 링크 |
| 12 | Lovable (러버블) | https://lovable.dev | https://lovable.dev/ | 없음 | 공식 홈 |
| 13 | Cursor (커서) | https://cursor.com | https://cursor.com/ | 없음 | 공식 홈 |
| 14 | Bolt.new (볼트) | https://bolt.new | https://bolt.new/ | 없음 | 공식 홈 |
| 15 | ChatGPT | https://chatgpt.com | https://chatgpt.com/ | 없음 | 공식 홈 |
| 16 | Claude (클로드) | https://claude.ai | https://claude.ai/ | 없음 | 공식 홈 |
| 17 | Gemini (제미나이) | https://gemini.google.com | https://gemini.google.com/ | 없음 | 공식 홈 |

## 3. 서비스별 요금 검증 비교표

각 표의 "원본"은 엑셀 `사용요금` 셀 내용이며 그대로 보존한다. "수정안"은 공식 페이지 본문에서 확인한 내용만 적는다.

### 3-1. Vidnoz AI

| 구분 | 원본 | 수정안 | 상태 |
| --- | --- | --- | --- |
| 무료 플랜 | 소감 열에 "무료: 인당 30크레딧 지급" (체험 기록) | Free $0/mo. 영상당 최대 3분, 720p. 일일 크레딧 수치는 페이지에서 렌더링되지 않음 | ✅ 플랜 존재 확인 |
| 유료 플랜·가격 | 스타터 $19.99 / 비즈니스 $56.99 | Starter: 15크레딧/월, 60분/영상, 1080p, 워터마크 없음. Business: 30크레딧/월, 음성 복제·영상 번역 등. Enterprise: 문의. 단가 표기 "$2/credit" | ✅ 구성 확인 / ❌ 월 금액 미확인 |
| 통화·결제 주기 | 미표기 | USD. "Monthly / Yearly 25% Off" 토글, "25% OFF First Month" 첫 달 할인 | ✅ |
| 연간 월 환산 | 없음 | 미확인 | ❌ |
| 사용량 기준 | 없음 | 크레딧제(Starter 15, Business 30 /월) | ✅ |
| 미확정 정보 | — | 검색 요약: "Starter 최저 $14.99/mo". 본문 인용 불가 | ⚠️ |

- 출처: https://www.vidnoz.com/pricing.html
- 비고: 금액이 스크립트로 채워져 본문에 `$ /mo`로만 표시됨. 원본 $19.99/$56.99는 체험 당시 기록으로 보존.

### 3-2. DeeVid AI

| 구분 | 원본 | 수정안 | 상태 |
| --- | --- | --- | --- |
| 무료 플랜 | 소감·아쉬운점에 "free가 있긴해도…" (체험 기록) | 상시 무료 플랜 없음. 신규 가입 시 1회 20크레딧(약 4개 영상) | ✅ |
| 유료 플랜·가격(월간 결제) | 라이트 $10 / 프로 $25 / 프리미엄 $119 | Lite $14/mo, Pro $35/mo, Premium $159/mo | ✅ |
| 연간 결제 시 월 환산 | — | Lite $120/년(약 $10/월), Pro $300/년(약 $25/월), Premium $1,428/년(약 $119/월). "Yearly 29% off" | ✅ |
| 통화·결제 주기 | 미표기 | USD, 월간/연간 | ✅ |
| 사용량 기준 | 없음 | Lite 200, Pro 600, Premium 3,300 크레딧/월. 크레딧은 구매일로부터 1년 유효 | ✅ |

- 출처: https://deevid.ai/pricing
- 수정 이유: 원본 금액은 연간 결제 시 월 환산액이다. 월간 결제 가격으로 교체하고 연간 환산액은 별도 표기.

### 3-3. Hey Gen

| 구분 | 원본 | 수정안 | 상태 |
| --- | --- | --- | --- |
| 무료 플랜 | 아쉬운점에 "무료: 월 3개 영상, 영상당 최대 1분" (체험 기록) | Free $0/mo. 월 3개 영상, 영상당 최대 1분, 커스텀 영상 아바타 1개 | ✅ |
| 유료 플랜·가격(월간 결제) | 크리에이터: 33,000 / 프로: 60,967 (통화 미표기) | Creator $29/mo, Pro $49/mo부터(크레딧 상위 티어 있음), Business $149/mo + 추가 좌석 $20/월, Enterprise 문의 | ✅ |
| 연간 결제 시 월 환산 | — | Creator 약 $24/월 ("$29/month (or $24/month if you pay annually)"). Pro·Business 연간 가격 미확인 | ✅ Creator / ❌ Pro·Business |
| 통화·결제 주기 | 미표기 | USD, 월간/연간 | ✅ |
| 사용량 기준 | 없음 | Creator 600, Pro 1,000, Business 1,500 크레딧/월. 월간 플랜은 미사용 크레딧 1개월 이월 | ✅ |

- 출처: https://www.heygen.com/pricing , https://www.heygen.com/faq
- 수정 이유: 원본은 통화가 없어 단정할 수 없음. 공식 USD 가격으로 교체하고 원본 수치는 `pricing_detail`에 보존.

### 3-4. Figma

| 구분 | 원본 | 수정안 | 상태 |
| --- | --- | --- | --- |
| 무료 플랜 | 아쉬운점에 "무료 플랜은 파일 수가 제한" (체험 기록) | Starter 무료. 무제한 드래프트, AI 크레딧 150/일(최대 500/월). 공동 편집은 최대 3개 파일(파일당 3페이지) | ✅ |
| 유료 플랜·가격(월간 결제) | 풀 20달러 / 데브 15달러 / 콜라보 5달러 | Professional 좌석별 페이지 표시값: Full $16/mo(+AI 3,000/월), Dev $12/mo(+500), Collab $3/mo(+500). 표시값의 결제 주기(월간/연간)를 본문에서 확정하지 못함 | ❌ 월간 결제가 미확인 |
| 연간 결제 시 월 환산 | — | Organization(연간 전용): Full $55, Dev $25, Collab $5 /월. Enterprise(연간 전용): Full $90, Dev $35, Collab $5 /월 | ✅ |
| 통화·결제 주기 | 달러 | USD. Professional은 월간/연간 선택 가능 | ✅ |
| 사용량 기준 | 없음 | AI 크레딧(위 표기). Figma Make는 Professional 이상 | ✅ |
| 미확정 정보 | — | 검색 요약: "Full 좌석 월간 결제 $20, 연간 결제 $16". 본문 인용 불가 | ⚠️ |

- 출처: https://www.figma.com/pricing/ , https://www.figma.com/professional/ , https://www.figma.com/pricing-faq/
- 비고: 원본 20/15/5달러는 월간 결제 가격일 가능성이 있으나 확정하지 않음. 사이트 표시는 `가격 확인 필요`.

### 3-5. V0

| 구분 | 원본 | 수정안 | 상태 |
| --- | --- | --- | --- |
| 무료 플랜 | 아쉬운점에 "무료 크레딧이 금방 줄음(기본 월 5달러)" (체험 기록) | Free $0/mo. 하루 7개 메시지 제한. 신규 계정 1회 $5 상당 | ✅ |
| 유료 플랜·가격(월간 결제) | 플러스 30달러 / 비즈니스 100달러 | Plus $30/인/월, Business $100/인/월, Enterprise 문의. Premium $20/월은 신규 가입 중단 | ✅ |
| 연간 결제 시 월 환산 | — | 연간 결제 옵션 표기 없음(월간 기준) | ✅ |
| 통화·결제 주기 | 달러 | USD, 월간. 세금은 청구지 기준 별도 | ✅ |
| 사용량 기준 | 없음 | Plus·Business: 월 $30 상당 크레딧 + 로그인 시 일 $2 크레딧. 미사용 크레딧 65일 후 만료 | ✅ |

- 출처: https://v0.app/pricing , https://v0.app/docs/pricing
- 비고: 원본 첫 줄 "챗지피티랑 공유가능"은 요금이 아니므로 `pricing_detail`에만 남기고 요약에서 제외.

### 3-6. Google Stitch

| 구분 | 원본 | 수정안 | 상태 |
| --- | --- | --- | --- |
| 무료 플랜 | 무료 | 공식 페이지에 요금제·가격·사용량 한도 표기 없음. Google Labs 실험 제품("experimental") | ❌ 요금 정보 확인 필요 |
| 유료 플랜·가격 | 없음 | 유료 플랜 표기 없음 | — |
| 통화·결제 주기 | — | 해당 없음 | — |

- 출처: https://stitch.withgoogle.com/ , https://developers.googleblog.com/stitch-a-new-way-to-design-uis/ (2025-05-20) , https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-gemini-3/ (2025-12-10) , https://labs.google/
- 처리: 무료로 확정하지 않는다. 배지 `확인 필요`, 요약 `요금 정보 확인 필요`. 원본 "무료"와 장점의 "완전 무료"는 체험 기록으로 보존.

### 3-7. Claude Design

| 구분 | 원본 | 수정안 | 상태 |
| --- | --- | --- | --- |
| 무료 플랜 | 아쉬운점에 "무료로는 못 씀" (체험 기록) | 유료 플랜 전용. "Claude Design is included in all paid plans." 조직 플랜은 관리자가 설정에서 활성화 필요 | ✅ |
| 유료 플랜·가격(월간 결제) | 클로드요금제에 포함 / 프로-22달러 | 별도 요금 없음. Claude Pro 월 $20 / 연 $200 | ✅ |
| 연간 결제 시 월 환산 | — | Pro 연 $200 → 약 $16.67/월 (공식 페이지는 "$17/month"로 표시) | ✅ |
| 통화·결제 주기 | 달러 | USD, 월간/연간 | ✅ |
| 사용량 기준 | 없음 | 생성물은 플랜 사용량 한도에 포함 | ✅ |

- 출처: https://claude.com/product/design , https://claude.com/pricing
- 비고: 원본 "프로-22달러"는 체험 당시 결제 기록으로 보존하며 공식 가격 $20과 구분 표시.

### 3-8. n8n

| 구분 | 원본 | 수정안 | 상태 |
| --- | --- | --- | --- |
| 무료 플랜 | 아쉬운점에 "14일 체험 후 유료 전환, 무료 유지 시 로컬 설치" (체험 기록) | 상시 무료 클라우드 플랜 없음. 무료 체험 있음(Starter·Pro는 카드 불필요, Business는 카드 필요 14일). 셀프호스팅 Community 에디션은 GitHub에서 무료 | ✅ |
| 유료 플랜·가격(월간 결제) | Starter_€24 / Pro_€60 / Business_€800 | 월간 결제 가격은 본문에서 확인하지 못함 | ❌ |
| 연간 결제 시 월 환산 | — | Starter €20/월, Pro €50/월, Business €667/월 (모두 "billed annually", "Annually (Save 17%)"). Business는 셀프호스팅 전용. Enterprise 문의 | ✅ |
| 통화·결제 주기 | € | EUR, 월간/연간 선택 | ✅ |
| 사용량 기준 | 없음 | 월 워크플로 실행 수 기준: Starter 2.5K, Pro 10K, Business 40K. Assistant 크레딧 Starter 1,600/월, Pro 최대 9,600/월 | ✅ |

- 출처: https://n8n.io/pricing/
- 비고: 원본 €24/€60/€800은 월간 결제 가격으로 보이나 본문에서 확인하지 못해 `pricing_detail`에만 보존. 연간 환산액(€20/€50/€667)을 월간 결제 가격으로 표시하지 않는다.

### 3-9. Dify

| 구분 | 원본 | 수정안 | 상태 |
| --- | --- | --- | --- |
| 무료 플랜 | 무료 _ 200회(메시지 크레딧) | Sandbox 무료. 메시지 크레딧 200(1회성 체험용). 워크스페이스 1, 멤버 1, 앱 5, 지식 문서 50, 저장 50MB. 셀프호스팅 Community 무료 | ✅ |
| 유료 플랜·가격(월간 결제) | Professional_ $59 / Team_ $159 | Professional $59/월, Team $159/월 (워크스페이스당). Enterprise 문의 | ✅ |
| 연간 결제 시 월 환산 | — | Professional $590/년(약 $49.17/월, "Save 17%"), Team $1,590/년(약 $132.50/월) | ✅ |
| 통화·결제 주기 | $ | USD, 월간/연간. 세금 별도 | ✅ |
| 사용량 기준 | 200회 | Professional 5,000, Team 10,000 메시지 크레딧/월. 모델별 소모량 상이. 소진 후 개인 API 키 사용 가능 | ✅ |

- 출처: https://dify.ai/pricing , https://dify.ai/pricing/dify-cloud
- 비고: 원본과 일치. 연간 환산액과 사용량 기준만 추가.

### 3-10. Claude (양효선, 시각화 & 프레젠테이션)

| 구분 | 원본 | 수정안 | 상태 |
| --- | --- | --- | --- |
| 무료 플랜 | 미기재 | Free $0 (웹·데스크톱·모바일, 웹 검색, 파일 생성 등) | ✅ |
| 유료 플랜·가격(월간 결제) | Claude Pro 월 $20 / Claude Max 5x 월 $100, 20x 월 $200 | Pro 월 $20 / 연 $200. Max 5x $100/월, Max 20x $200/월(월간 전용). Team Standard $25/월, Premium $125/월 | ✅ |
| 연간 결제 시 월 환산 | — | Pro 약 $16.67/월(공식 표기 "$17/month"). Max는 연간 결제 없음. Team Standard $20/월, Premium $100/월 | ✅ |
| 통화·결제 주기 | $ | USD, Pro·Team 월간/연간, Max 월간 | ✅ |
| 사용량 기준 | Pro 대비 5배·20배 | Max는 Pro 대비 5배·20배 사용량(5시간 세션 기준) | ✅ |

- 출처: https://claude.com/pricing , https://support.claude.com/en/articles/11049741-what-is-the-max-plan
- 비고: 원본 가격 일치. 무료 플랜과 연간 환산액 추가. 요금 배지는 `유료`에서 `무료+유료`로 수정.

### 3-11. Gamma

| 구분 | 원본 | 수정안 | 상태 |
| --- | --- | --- | --- |
| 무료 플랜 | 미기재 | Free 플랜 있음. 초기 400크레딧(갱신되지 않음), 추천 1건당 200크레딧(최대 2,000) | ✅ |
| 유료 플랜·가격(월간 결제) | Gamma Pro 월 $25 / Gamma Ultra 월 $100 | Plus·Pro·Ultra·Business 플랜 존재. 가격은 본문에서 확인하지 못함(가격 페이지 403) | ❌ 가격 미확인 |
| 연간 결제 시 월 환산 | — | "연간 플랜은 월간과 동일한 월 크레딧을 할인된 요율로 제공". Ultra는 월간 전용 도입가. 금액 미확인 | ❌ |
| 통화·결제 주기 | $ | 미확인 | ❌ |
| 사용량 기준 | Pro 4,000크레딧 / Ultra 20,000크레딧 | Plus 1,000, Pro 4,000, Ultra 20,000 크레딧/월 | ✅ |
| 미확정 정보 | — | 검색 요약: Plus $8, Pro $18, Ultra $100 /월, Business $40/인/월(연간), 연간 28% 할인. 본문 인용 불가 | ⚠️ |

- 출처: https://help.gamma.app/en/articles/8077107-how-can-i-upgrade-my-gamma-subscription , https://help.gamma.app/en/articles/7834324-how-do-credits-work-in-gamma , https://help.gamma.app/en/articles/11048064-is-there-a-one-month-subscription-option-available , https://developers.gamma.app/get-started/access-and-pricing
- 접근 실패: https://gamma.app/pricing , https://gamma.app/ko/pricing (HTTP 403)
- 비고: 원본 크레딧 수치는 공식과 일치. 가격은 `가격 확인 필요`로 표시. 무료 플랜 확인으로 배지 `무료+유료`.

### 3-12. Lovable (러버블)

| 구분 | 원본 | 수정안 | 상태 |
| --- | --- | --- | --- |
| 무료 플랜 | Free: $0/월 | Free 있음. 빌드 크레딧 5/일(월 최대 30), Cloud 크레딧 20/월, AI 크레딧 4/월. 월간 Cloud·AI 지급은 "임시 제공, 변경 가능" | ✅ |
| 유료 플랜·가격(월간 결제) | Pro: $25/월부터 (100 크레딧) / Business: $50/월부터 (100 크레딧) / Enterprise: 별도 문의 | Pro는 월 100 구독 크레딧부터 시작, 크레딧 티어별 가격. Business 티어 있음. Enterprise 문의. 가격 금액은 본문에서 확인하지 못함 | ❌ 가격 미확인 |
| 연간 결제 시 월 환산 | — | 미확인 | ❌ |
| 통화·결제 주기 | USD | USD(추가 구매 가격 기준) | ✅ |
| 사용량 기준 | 100 크레딧 | 크레딧 통합 과금. 추가 구매: Pro $15/50크레딧, Business $30/50크레딧 | ✅ |
| 미확정 정보 | — | 검색 요약: Pro $25/월(연간 결제 시 월 $21), Business $50/월(연간 시 월 $42). 본문 인용 불가 | ⚠️ |

- 출처: https://docs.lovable.dev/introduction/credits-and-usage , https://docs.lovable.dev/introduction/faq , https://lovable.dev/blog/simplifying-billing (2026-06-13, "플랜 가격 변동 없음")
- 접근 결과: https://lovable.dev/pricing 는 가격이 스크립트로 렌더링되어 본문 추출 불가
- 비고: 원본 가격(작성자 2026-10-07 확인)과 검색 요약이 일치하지만 본문 인용을 못 해 사이트 요약에서는 `가격 확인 필요`.

### 3-13. Cursor (커서)

| 구분 | 원본 | 수정안 | 상태 |
| --- | --- | --- | --- |
| 무료 플랜 | Hobby: $0/월 | Hobby 무료. 카드 불필요, 제한된 Agent 요청 | ✅ |
| 유료 플랜·가격(월간 결제) | Pro $20 / Pro+ $60 / Ultra $200 / Teams Standard $40/인 / Teams Premium $120/인 / Enterprise 문의 | Pro $20/월, Pro+ $60/월, Ultra $200/월, Teams Standard $40/인/월, Teams Premium $120/인/월, Enterprise 문의. (인도 한정 Start ₹649/월) | ✅ |
| 연간 결제 시 월 환산 | — | 연간 결제 옵션은 있으나 금액 미표시 | ❌ |
| 통화·결제 주기 | USD, 세금 별도 | USD, 월간(연간 옵션 있음) | ✅ |
| 사용량 기준 | 없음 | 유료 플랜은 모델별 사용량 풀 + 추가 사용 과금 | ✅ |

- 출처: https://cursor.com/pricing , https://cursor.com/help/account-and-billing/pricing
- 비고: 원본과 일치.

### 3-14. Bolt.new (볼트)

| 구분 | 원본 | 수정안 | 상태 |
| --- | --- | --- | --- |
| 무료 플랜 | Free: $0/월 | Free $0. 일 30만 토큰, 월 100만 토큰 한도, Bolt 브랜딩 | ✅ |
| 유료 플랜·가격(월간 결제) | Pro: $25/월부터 / Teams: $30/인·월부터 / Enterprise: 별도 문의 | Pro $25/월부터("billed monthly", 월 1,000만 토큰부터, 상위 티어 있음), Teams $30/인/월("billed monthly"), Enterprise 문의. 별도 Lite $9/월 상품 언급 | ✅ |
| 연간 결제 시 월 환산 | — | 연간 결제 "최대 28% 할인" 토글 있으나 금액 미표시. 지원 문서 예시: Pro 10M 연간 $216/년, Pro 26M 연간 $540/년 | ❌ 정식 환산액 미확인 |
| 통화·결제 주기 | USD | USD, 월간/연간 | ✅ |
| 사용량 기준 | 없음 | 토큰 기준. 유료 미사용 토큰 1개월 이월(최대 2개월 유효) | ✅ |

- 출처: https://bolt.new/pricing , https://support.bolt.new/account-and-subscription/billing
- 비고: 원본과 일치.

### 3-15. ChatGPT

| 구분 | 원본 | 수정안 | 상태 |
| --- | --- | --- | --- |
| 무료 플랜 | Free: $0/월 | 무료 플랜 있음(요금 페이지 본문: 무료 제공 + 유료 플랜 Go·Plus·Pro·Business·Enterprise) | ✅ |
| 유료 플랜·가격(월간 결제) | Go $8(미국) / Plus $20 / Pro 100 $100 / Pro 200 $200 / Pro 500 $500 | Go·Plus·Pro 플랜 존재, Go·Plus·Pro는 월간 플랜. "Pro $100" 티어 항목 확인. 금액 본문 미확인(가격이 변수로 치환됨) | ❌ 금액 미확인 |
| 연간 결제 시 월 환산 | — | 개인 플랜 연간 결제 표기 없음(Business·Enterprise만 연간) | ✅ |
| 통화·결제 주기 | USD | 월간. Go는 지역별 가격 변형 존재 | ✅ |
| 사용량 기준 | 없음 | 미확인 | ❌ |
| 미확정 정보 | — | 검색 요약(openai.com, help.openai.com): Go $8/월, Plus $20/월, Pro $200/월. 본문 인용 불가 | ⚠️ |

- 출처: https://chatgpt.com/pricing (구조만 확인)
- 접근 실패(HTTP 403): https://openai.com/chatgpt/pricing/ , https://openai.com/index/introducing-chatgpt-go/ , https://help.openai.com/en/articles/9793128-about-chatgpt-pro-tiers , https://help.openai.com/en/articles/6950777-what-is-chatgpt-plus , https://chatgpt.com/plans/go/ , https://chatgpt.com/plans/plus/ , https://chatgpt.com/plans/pro/
- 비고: 원본 가격(작성자 2026-10-07 확인)은 보존. 사이트 요약은 `가격 확인 필요`.

### 3-16. Claude (클로드, 유정현)

| 구분 | 원본 | 수정안 | 상태 |
| --- | --- | --- | --- |
| 무료 플랜 | Free: $0/월 | Free $0 | ✅ |
| 유료 플랜·가격(월간 결제) | Pro $20 / Max 5x $100 / Max 20x $200 | 동일. Pro 월 $20 / 연 $200 | ✅ |
| 연간 결제 시 월 환산 | — | Pro 약 $16.67/월(공식 표기 "$17/month"). Max 월간 전용 | ✅ |
| 통화·결제 주기 | USD, 세금 별도, 웹 구독 기준 | USD | ✅ |

- 출처: https://claude.com/pricing , https://support.claude.com/en/articles/11049741-what-is-the-max-plan
- 비고: 원본과 일치. 연간 환산액만 추가.

### 3-17. Gemini (제미나이)

| 구분 | 원본 | 수정안 | 상태 |
| --- | --- | --- | --- |
| 무료 플랜 | Free: $0/월 | Free $0 (Google 계정) | ✅ |
| 유료 플랜·가격(월간 결제) | Google AI Plus $7.99 / Pro $19.99 / Ultra 20x $249.99 / Ultra 하위 구성 확인 불가 | 영어 페이지(USD): Plus $4.99/월, Pro $19.99/월, Ultra $99.99/월(Pro 대비 5배)부터, $199.99/월(20배). 한국 페이지(KRW): Plus ₩7,500/월, Ultra ₩119,000/월·₩300,000/월. Pro 원화 가격은 본문에서 미확인 | ✅ USD / ❌ Pro KRW |
| 연간 결제 시 월 환산 | — | 영어 페이지에 연간 가격 표기 없음. 한국 Google One 페이지에 "AI Pro 연간 요금제 40% 할인, 2026-10-31까지" 프로모션 문구만 확인(금액 미표시) | ✅ 문구 / ❌ 금액 |
| 통화·결제 주기 | USD 표시 | USD(영문) / KRW(한국). 월간 | ✅ |
| 사용량 기준 | 없음 | Plus 무료 대비 2배, Pro 4배, Ultra Pro 대비 5배·20배. Flow 크레딧 Plus 200, Pro 1,000, Ultra 10,000~25,000 | ✅ |

- 출처: https://gemini.google/intl/en/subscriptions/ , https://gemini.google/kr/subscriptions/ , https://one.google.com/intl/ko/about/google-ai-plans/
- 수정 이유: 원본 Plus $7.99와 Ultra 20x $249.99는 영어 공식 페이지 표기($4.99, $199.99)와 다르다. 원본은 체험 당시 기록으로 보존하고 공식 USD 가격으로 교체. 프로모션 가격은 월 요금으로 적지 않는다.

## 4. 사이트 표시용 요약 수정안

| # | 서비스 | pricing_type (배지) | pricing_summary (카드 표시) |
| --- | --- | --- | --- |
| 1 | Vidnoz AI | 무료+유료 | 무료 플랜 있음 · 유료 가격 확인 필요 · 공식 요금 페이지 참고 |
| 2 | DeeVid AI | 유료 | 월 $14부터 (Lite) · 가입 시 1회 20크레딧 |
| 3 | Hey Gen | 무료+유료 | 무료 월 3개 영상 · 유료 월 $29부터 (Creator) |
| 4 | Figma | 무료+유료 | 무료 Starter 있음 · 유료 가격 확인 필요 · 공식 요금 페이지 참고 |
| 5 | V0 | 무료+유료 | 무료 일 7메시지 · 유료 월 $30/인부터 (Plus) |
| 6 | Google Stitch | 확인 필요 | 요금 정보 확인 필요 · 공식 페이지에 요금제 표기 없음 |
| 7 | Claude Design | 유료 | Claude 유료 플랜에 포함 · Pro 월 $20 |
| 8 | n8n | 무료+유료 | 셀프호스팅 Community 무료 · 클라우드 유료 (연간 결제 시 월 €20부터, 월간 가격 확인 필요) |
| 9 | Dify | 무료+유료 | 무료 Sandbox 200크레딧 · 유료 월 $59부터 (Professional) |
| 10 | Claude (양효선) | 무료+유료 | 무료 플랜 있음 · Pro 월 $20 · Max 월 $100/$200 |
| 11 | Gamma | 무료+유료 | 무료 플랜 있음 · 유료 가격 확인 필요 · 공식 요금 페이지 참고 |
| 12 | Lovable | 무료+유료 | 무료 일 5크레딧 · 유료 가격 확인 필요 · 공식 요금 페이지 참고 |
| 13 | Cursor | 무료+유료 | 무료 Hobby · 유료 월 $20부터 (Pro) |
| 14 | Bolt.new | 무료+유료 | 무료 플랜 있음 · 유료 월 $25부터 (Pro) |
| 15 | ChatGPT | 무료+유료 | 무료 플랜 있음 · 유료 가격 확인 필요 · 공식 요금 페이지 참고 |
| 16 | Claude (클로드) | 무료+유료 | 무료 플랜 있음 · Pro 월 $20 · Max 월 $100/$200 |
| 17 | Gemini | 무료+유료 | 무료 플랜 있음 · 유료 월 $4.99부터 (Google AI Plus) |

- 요약에 적는 금액은 모두 월간 결제 가격이다. 연간 환산액·첫 달 할인·프로모션은 상세 모달의 공식 요금 영역에만 표시한다.
- 상세 모달의 요금 영역은 두 블록으로 나눈다: `조사 당시 기록(원문)` = `pricing_detail`, `공식 확인 요금(2026-10-07)` = `pricing_official`. 체험 소감 안의 요금 언급은 소감 영역에 그대로 둔다.

## 5. 남은 미확인 항목

| 서비스 | 미확인 내용 | 사유 |
| --- | --- | --- |
| Vidnoz AI | Starter·Business 월 금액, 연간 환산액 | 금액이 스크립트로 렌더링됨 |
| Hey Gen | Pro·Business 연간 결제 가격 | 본문에 미표시 |
| Figma | Professional 좌석 월간 결제 가격과 연간 환산액의 구분 | 토글 상태를 본문에서 확정 못 함 |
| n8n | Starter·Pro·Business 월간 결제 가격 | 본문에는 연간 결제 기준만 표시 |
| Gamma | 모든 유료 플랜 가격 | 가격 페이지 HTTP 403 |
| Lovable | Pro·Business 가격, 연간 환산액 | 가격이 스크립트로 렌더링됨 |
| Cursor | 연간 결제 가격 | 본문에 미표시 |
| Bolt.new | 연간 결제 정식 환산액 | 토글 금액 미표시, 지원 문서 예시만 확인 |
| ChatGPT | Go·Plus·Pro 금액, 사용량 기준 | openai.com·help.openai.com HTTP 403, chatgpt.com 금액 변수 치환 |
| Gemini | Google AI Pro 원화 가격, 연간 결제 금액 | 한국 페이지 본문 미표시 |
| Google Stitch | 요금 정보 전체 | 공식 요금 페이지 없음 |

## 6. 접근에 실패했거나 본문 추출이 불가능했던 URL

- HTTP 403: https://gamma.app/pricing , https://gamma.app/ko/pricing , https://openai.com/chatgpt/pricing/ , https://openai.com/index/introducing-chatgpt-go/ , https://help.openai.com/en/articles/9793128-about-chatgpt-pro-tiers , https://help.openai.com/en/articles/6950777-what-is-chatgpt-plus , https://chatgpt.com/plans/go/ , https://chatgpt.com/plans/plus/ , https://chatgpt.com/plans/pro/
- HTTP 404: https://cursor.com/docs/account/plans-and-usage , https://kr.vidnoz.com/pricing.html
- 본문에 금액 미포함(스크립트 렌더링): https://www.vidnoz.com/pricing.html , https://lovable.dev/pricing , https://one.google.com/intl/ko/about/google-ai-plans/ , https://stitch.withgoogle.com/
