# 서비스 로고 출처 기록 (2026-10-07)

## 수집 기준

- 각 서비스 공식 홈페이지가 HTML `<link rel="icon">` / `<link rel="apple-touch-icon">`으로 선언한 공식 아이콘 자산만 내려받았다. 외부 이미지 주소를 직접 연결하지 않고 `img/logos/`에 로컬 파일로 저장했다.
- 서비스당 내려받기 시도는 최대 2회로 제한했다. 로고를 임의로 그리거나 다른 서비스 로고를 쓰지 않았다.
- 파일명은 영어 snake_case. SVG·PNG·WebP 원본은 수정하지 않았다. ICO로만 제공된 두 건(HeyGen, n8n)은 브라우저 호환을 위해 ICO 안의 48×48 이미지를 PNG로 변환했다(색상·비율 변경 없음).
- 화면에서는 40×40px 영역에 `object-fit: contain`으로 표시하며, 서비스명이 바로 옆에 있으므로 `alt=""`로 둔다. 파일을 불러오지 못하면 서비스명 첫 글자 대체 아이콘이 표시된다.
- 요금 정보는 이번 작업에서 다시 조회하지 않았다.

## 항목별 출처

| # | 서비스 | 로컬 파일 | 출처 URL (공식) | 형식·크기 | 비고 |
| --- | --- | --- | --- | --- | --- |
| 1 | Vidnoz AI | `img/logos/vidnoz_ai.png` | https://www.vidnoz.com/touch-icon-ios/touch-icon-iphone-retina.png | PNG 180×180 | vidnoz.com 홈의 apple-touch-icon |
| 2 | DeeVid AI | `img/logos/deevid_ai.svg` | https://deevid.ai/app/favicon.svg?v=1 | SVG | deevid.ai 홈의 icon |
| 3 | Hey Gen | `img/logos/heygen.png` | https://www.heygen.com/favicon.ico?favicon.2m321y0geyyfh.ico | ICO(16/32/48) → PNG 48×48 변환 | heygen.com 홈의 icon |
| 4 | Figma | `img/logos/figma.svg` | https://static.figma.com/app/icon/2/favicon.svg | SVG | figma.com 홈의 icon |
| 5 | V0 | `img/logos/v0.svg` | https://v0.app/assets/icon.svg | SVG | v0.app 홈의 icon. SVG 내부 미디어쿼리로 OS 다크 모드에서는 배경·전경색이 반전됨(흰 바탕에서는 두 경우 모두 식별 가능) |
| 6 | Google Stitch | `img/logos/google_stitch.png` | https://www.gstatic.com/labs-code/stitch/favicon-192x192.png | PNG 192×192 | stitch.withgoogle.com 홈의 icon |
| 7 | Claude Design | `img/logos/claude.png` | https://assets.claude.com/95a868946ac8a31e5ff832e2899f294aa368b836.png?w=32&h=32 | PNG 32×32 | 전용 로고 미확인 → Claude 공식 브랜드 아이콘 공유. claude.ai 홈은 HTTP 403으로 더 큰 아이콘 확보 실패(2회 시도 소진) |
| 8 | n8n | `img/logos/n8n.png` | https://n8n.io/favicon.ico | ICO(16/32/48) → PNG 48×48 변환 | n8n.io 홈에 icon 선언이 없어 /favicon.ico 사용 |
| 9 | Dify | `img/logos/dify.svg` | https://dify.ai/favicon.svg | SVG | dify.ai 홈의 icon |
| 10 | Claude (양효선) | `img/logos/claude.png` | 7번과 동일 | PNG 32×32 | Claude 항목 2건이 같은 파일 공유 |
| 11 | Gamma | `img/logos/gamma.svg` | https://static.gamma.app/favicons/favicon_dark.svg | SVG | gamma.app 홈의 icon |
| 12 | Lovable (러버블) | `img/logos/lovable.png` | https://lovable.dev/favicon.ico | PNG 73×74 (확장자는 ico이나 실제 PNG) | lovable.dev 홈이 HTTP 403이라 /favicon.ico 직접 사용 |
| 13 | Cursor (커서) | `img/logos/cursor.svg` | https://cursor.com/marketing-static/favicon.svg | SVG | cursor.com 홈의 icon |
| 14 | Bolt.new (볼트) | `img/logos/bolt_new.svg` | https://bolt.new/static/favicon.svg | SVG | bolt.new 홈의 icon |
| 15 | ChatGPT | `img/logos/chatgpt.webp` | https://chatgpt.com/cdn/assets/favicon-180x180-od45eci6.webp | WebP 180×180 | chatgpt.com 홈의 apple-touch-icon. 1차로 받은 SVG는 OS 다크 모드에서 흰색으로 바뀌는 자산이라 고정 색상인 2차 자산으로 교체 |
| 16 | Claude (클로드) | `img/logos/claude.png` | 7번과 동일 | PNG 32×32 | Claude 항목 2건이 같은 파일 공유 |
| 17 | Gemini (제미나이) | `img/logos/gemini.png` | https://www.gstatic.com/lamda/images/gemini_sparkle_4g_512_lt_f94943af3be039176192d.png | PNG 512×512 | gemini.google.com 홈의 icon |

## 대체 아이콘 사용 항목

- 없음. 17개 항목 모두 공식 자산을 확보했다. 파일 로드 실패 시에만 첫 글자 대체 아이콘이 표시된다.

## 접근 실패 기록

- https://lovable.dev/ 홈 HTML: HTTP 403 (아이콘 선언 확인 불가, /favicon.ico 직접 사용)
- https://claude.ai/ 홈 HTML: HTTP 403 (Claude 큰 아이콘 확보 실패, claude.com 32px 아이콘 사용)
