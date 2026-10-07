/* =========================================================
   AI 서비스 도구함 - 목록 렌더링, 검색, 분야 필터, 상세 모달
   데이터: js/services.js 의 SERVICES (17개 항목)
   원문 문자열은 textContent로만 삽입한다 (innerHTML 미사용).
   ========================================================= */
(function () {
  "use strict";

  if (typeof SERVICES === "undefined" || !Array.isArray(SERVICES)) {
    console.error("SERVICES 데이터를 불러오지 못했습니다. js/services.js 경로를 확인하세요.");
    return;
  }

  var ALL = "전체";
  var EMPTY_TEXT = "정보 없음";

  var state = { category: ALL, query: "" };

  var els = {
    categoryList: document.getElementById("category_list"),
    grid: document.getElementById("card_grid"),
    emptyState: document.getElementById("empty_state"),
    resetButton: document.getElementById("reset_button"),
    searchForm: document.getElementById("search_form"),
    searchInput: document.getElementById("search_input"),
    searchClear: document.getElementById("search_clear"),
    resultStatus: document.getElementById("result_status"),
    menuButton: document.getElementById("menu_button"),
    sidebar: document.getElementById("sidebar"),
    sidebarClose: document.getElementById("sidebar_close"),
    sidebarOverlay: document.getElementById("sidebar_overlay"),
    backdrop: document.getElementById("modal_backdrop"),
    modal: document.getElementById("modal"),
    modalCategory: document.getElementById("modal_category"),
    modalTitle: document.getElementById("modal_title"),
    modalLogo: document.getElementById("modal_logo"),
    modalBadges: document.getElementById("modal_badges"),
    modalBody: document.getElementById("modal_body"),
    modalOfficial: document.getElementById("modal_official"),
    modalClose: document.getElementById("modal_close"),
    modalCloseBottom: document.getElementById("modal_close_bottom")
  };

  /* ---------- 유틸 ---------- */
  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined && text !== null) node.textContent = text;
    return node;
  }

  function clear(node) {
    while (node.firstChild) node.removeChild(node.firstChild);
  }

  function normalize(text) {
    return String(text || "").toLowerCase().trim();
  }

  function valueOrEmpty(text) {
    var t = String(text == null ? "" : text).trim();
    return t ? t : EMPTY_TEXT;
  }

  function isHttpUrl(url) {
    if (!url) return false;
    try {
      var u = new URL(url);
      return u.protocol === "http:" || u.protocol === "https:";
    } catch (e) {
      return false;
    }
  }

  // 줄바꿈을 보존해 문단으로 렌더링. 빈 줄은 간격으로 처리.
  function renderMultiline(container, text) {
    clear(container);
    container.classList.add("multiline");
    var value = String(text == null ? "" : text).trim();
    if (!value) {
      container.appendChild(el("p", "", EMPTY_TEXT));
      return container;
    }
    var lines = value.split(/\r?\n/);
    lines.forEach(function (line) {
      if (line.trim() === "") {
        container.appendChild(el("div", "line_gap"));
      } else {
        container.appendChild(el("p", "", line.trim()));
      }
    });
    return container;
  }

  // 장식용 이모지 (aria-hidden). 분야명은 표시용 category 값 기준.
  var CATEGORY_ICONS = {
    "전체": "🧰",
    "AI 아바타 버츄얼휴먼": "👤",
    "웹/UI/UX 디자인": "🎨",
    "워크플로우 자동화": "⚙️",
    "시각화 & 프레젠테이션": "📊",
    "바이브 코딩": "💻",
    "LLM / 글쓰기 및 전반적인 작업": "💬"
  };
  var SECTION_ICONS = {
    "사용방법": "📝",
    "장점": "👍",
    "아쉬운 점": "🔎",
    "직접 써본 소감": "💭",
    "상세 요금": "💳"
  };

  function makeEmoji(symbol, className) {
    var span = el("span", className || "emoji", symbol || "");
    span.setAttribute("aria-hidden", "true");
    return span;
  }

  var BADGE_CLASS = {
    "무료": "badge_free",
    "유료": "badge_paid",
    "무료+유료": "badge_mixed",
    "확인 필요": "badge_check"
  };

  function makeBadge(type) {
    var cls = BADGE_CLASS[type] || "badge_check";
    var badge = el("span", "badge " + cls, type || "확인 필요");
    badge.setAttribute("title", "요금 구분: " + (type || "확인 필요"));
    return badge;
  }

  // 서비스 로고 (img/logos/ 로컬 파일). 없으면 서비스명 첫 글자 대체 아이콘.
  // 서비스명이 바로 옆에 있으므로 img alt는 빈 값으로 둔다.
  function makeLogo(service) {
    var box = el("span", "logo_box");
    box.setAttribute("aria-hidden", "true");
    var name = valueOrEmpty(service.name);
    function fallback() {
      clear(box);
      box.classList.add("logo_fallback");
      box.textContent = name.trim().charAt(0).toUpperCase() || "?";
    }
    if (service.logo) {
      var img = document.createElement("img");
      img.className = "logo_img";
      img.alt = "";
      img.loading = "lazy";
      img.decoding = "async";
      img.width = 40;
      img.height = 40;
      img.addEventListener("error", fallback);
      img.src = service.logo;
      box.appendChild(img);
    } else {
      fallback();
    }
    return box;
  }

  function externalIcon() {
    var svgNS = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("class", "button_icon");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "2");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");
    svg.setAttribute("aria-hidden", "true");
    var path = document.createElementNS(svgNS, "path");
    path.setAttribute("d", "M14 4h6v6M20 4l-9 9M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5");
    svg.appendChild(path);
    return svg;
  }

  /* ---------- 분야 목록 ---------- */
  function buildCategories() {
    var order = [];
    var counts = {};
    SERVICES.forEach(function (s) {
      var c = s.category || "기타";
      if (!counts[c]) { counts[c] = 0; order.push(c); }
      counts[c] += 1;
    });
    return { order: order, counts: counts };
  }

  var categories = buildCategories();

  function renderCategoryNav() {
    clear(els.categoryList);
    var items = [{ name: ALL, count: SERVICES.length }].concat(
      categories.order.map(function (c) { return { name: c, count: categories.counts[c] }; })
    );
    items.forEach(function (item) {
      var li = el("li");
      var button = el("button", "category_button");
      button.type = "button";
      button.dataset.category = item.name;
      // 아이콘 영역은 항상 같은 너비로 유지 (매핑이 없는 분야도 빈 칸을 둠)
      button.appendChild(makeEmoji(CATEGORY_ICONS[item.name] || "", "emoji category_icon"));
      button.appendChild(el("span", "category_name", item.name === ALL ? "전체 목록" : item.name));
      button.appendChild(el("span", "category_count", String(item.count)));
      if (item.name === state.category) {
        button.classList.add("is_active");
        button.setAttribute("aria-current", "true");
      }
      button.addEventListener("click", function () {
        state.category = item.name;
        updateCategoryActive();
        renderList();
        closeSidebar();
      });
      li.appendChild(button);
      els.categoryList.appendChild(li);
    });
  }

  function updateCategoryActive() {
    var buttons = els.categoryList.querySelectorAll(".category_button");
    Array.prototype.forEach.call(buttons, function (b) {
      var active = b.dataset.category === state.category;
      b.classList.toggle("is_active", active);
      if (active) b.setAttribute("aria-current", "true");
      else b.removeAttribute("aria-current");
    });
  }

  /* ---------- 필터링 ---------- */
  function getFiltered() {
    var q = normalize(state.query);
    return SERVICES.filter(function (s) {
      if (state.category !== ALL && s.category !== state.category) return false;
      if (!q) return true;
      return normalize(s.name).indexOf(q) !== -1 || normalize(s.description).indexOf(q) !== -1;
    });
  }

  /* ---------- 카드 ---------- */
  function createCard(service) {
    var li = el("li");
    var card = el("article", "card");
    card.setAttribute("aria-labelledby", "card_title_" + service.id);

    var top = el("div", "card_top");
    top.appendChild(el("span", "card_category", service.category || EMPTY_TEXT));
    top.appendChild(makeBadge(service.pricing_type));
    card.appendChild(top);

    var heading = el("div", "card_heading");
    heading.appendChild(makeLogo(service));
    var title = el("h2", "card_title", valueOrEmpty(service.name));
    title.id = "card_title_" + service.id;
    heading.appendChild(title);
    card.appendChild(heading);

    var desc = el("p", "card_description", valueOrEmpty(service.description));
    desc.title = valueOrEmpty(service.description);
    card.appendChild(desc);

    var pricing = el("div", "card_pricing");
    pricing.appendChild(el("p", "card_pricing_text", valueOrEmpty(service.pricing_summary)));
    card.appendChild(pricing);

    var actions = el("div", "card_actions");

    var detailButton = el("button", "button button_secondary", "상세보기");
    detailButton.type = "button";
    detailButton.dataset.detailFor = service.id;
    detailButton.addEventListener("click", function (event) {
      event.stopPropagation();
      openModal(service, detailButton);
    });
    actions.appendChild(detailButton);

    var officialLink = createOfficialLink(service, "button button_outline");
    actions.appendChild(officialLink);

    card.appendChild(actions);

    // 카드 영역 클릭 시 상세보기 (버튼·링크 클릭은 제외)
    card.addEventListener("click", function (event) {
      if (event.target.closest("a, button")) return;
      openModal(service, detailButton);
    });

    li.appendChild(card);
    return li;
  }

  function createOfficialLink(service, className) {
    var url = service.official_url;
    var valid = isHttpUrl(url);
    var link;
    if (valid) {
      link = el("a", className);
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.setAttribute("aria-label", valueOrEmpty(service.name) + " 공식 사이트 (새 탭)");
      link.addEventListener("click", function (event) { event.stopPropagation(); });
    } else {
      link = el("span", className);
      link.setAttribute("aria-disabled", "true");
      link.title = "유효한 공식 URL이 없습니다";
    }
    link.appendChild(document.createTextNode("공식 사이트"));
    link.appendChild(externalIcon());
    return link;
  }

  /* ---------- 목록 렌더링 ---------- */
  function renderList() {
    var list = getFiltered();
    clear(els.grid);
    var fragment = document.createDocumentFragment();
    list.forEach(function (s) { fragment.appendChild(createCard(s)); });
    els.grid.appendChild(fragment);

    var empty = list.length === 0;
    els.emptyState.hidden = !empty;
    els.grid.hidden = empty;

    renderStatus(list.length);
  }

  function renderStatus(count) {
    clear(els.resultStatus);
    var label = state.category === ALL ? "전체" : state.category;
    els.resultStatus.appendChild(el("strong", "", label));
    els.resultStatus.appendChild(document.createTextNode(" · " + count + "개"));
    var q = state.query.trim();
    if (q) {
      els.resultStatus.appendChild(document.createTextNode(" · 검색어 "));
      els.resultStatus.appendChild(el("span", "status_keyword", q));
    }
  }

  /* ---------- 검색 ---------- */
  els.searchInput.addEventListener("input", function () {
    state.query = els.searchInput.value;
    els.searchClear.hidden = state.query.trim() === "";
    renderList();
  });

  els.searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    renderList();
  });

  els.searchClear.addEventListener("click", function () {
    els.searchInput.value = "";
    state.query = "";
    els.searchClear.hidden = true;
    renderList();
    els.searchInput.focus();
  });

  els.resetButton.addEventListener("click", function () {
    state.category = ALL;
    state.query = "";
    els.searchInput.value = "";
    els.searchClear.hidden = true;
    updateCategoryActive();
    renderList();
    els.searchInput.focus();
  });

  /* ---------- 모바일 사이드바 ---------- */
  function openSidebar() {
    els.sidebar.classList.add("is_open");
    els.sidebarOverlay.hidden = false;
    els.menuButton.setAttribute("aria-expanded", "true");
    var first = els.sidebar.querySelector(".category_button");
    if (first) first.focus();
  }

  function closeSidebar() {
    if (!els.sidebar.classList.contains("is_open")) return;
    els.sidebar.classList.remove("is_open");
    els.sidebarOverlay.hidden = true;
    els.menuButton.setAttribute("aria-expanded", "false");
  }

  els.menuButton.addEventListener("click", function () {
    if (els.sidebar.classList.contains("is_open")) closeSidebar();
    else openSidebar();
  });
  els.sidebarClose.addEventListener("click", function () {
    closeSidebar();
    els.menuButton.focus();
  });
  els.sidebarOverlay.addEventListener("click", closeSidebar);

  /* ---------- 상세 모달 ---------- */
  var lastFocused = null;
  var FOCUSABLE = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

  function section(titleText) {
    var wrap = el("section", "modal_section");
    var h = el("h3", "modal_section_title");
    if (SECTION_ICONS[titleText]) {
      h.appendChild(makeEmoji(SECTION_ICONS[titleText], "emoji section_icon"));
    }
    h.appendChild(document.createTextNode(titleText));
    wrap.appendChild(h);
    return wrap;
  }

  function buildPricingOfficial(service) {
    var info = service.pricing_official || {};
    var block = el("div", "pricing_block");

    var title = el("p", "pricing_block_title");
    title.appendChild(document.createTextNode("공식 확인 요금"));
    if (service.pricing_checked_at) {
      title.appendChild(el("span", "badge badge_status", "확인일 " + service.pricing_checked_at));
    }
    if (service.pricing_status) {
      title.appendChild(el("span", "badge badge_status", "상태: " + service.pricing_status));
    }
    block.appendChild(title);

    var list = el("div", "pricing_official_list");

    function addItem(label, value) {
      if (value === undefined || value === null || value === "") return;
      var item = el("div", "pricing_official_item");
      item.appendChild(el("span", "item_label", label));
      if (Array.isArray(value)) {
        var ul = el("ul");
        value.forEach(function (v) { ul.appendChild(el("li", "", v)); });
        item.appendChild(ul);
      } else {
        item.appendChild(el("span", "", value));
      }
      list.appendChild(item);
    }

    addItem("무료 플랜", info.free);
    addItem("유료 플랜 · 월간 결제 가격", info.paid);
    addItem("연간 결제 시 월 환산", info.annual);
    addItem("통화 · 결제 주기", info.billing);
    addItem("사용량 · 크레딧 기준", info.usage);
    block.appendChild(list);

    if (info.unconfirmed) {
      block.appendChild(el("p", "pricing_unconfirmed", "미확인: " + info.unconfirmed));
    }

    if (Array.isArray(service.pricing_sources) && service.pricing_sources.length) {
      var srcItem = el("div", "pricing_official_item");
      srcItem.style.marginTop = "12px";
      srcItem.appendChild(el("span", "item_label", "출처 (공식 페이지)"));
      var ul = el("ul", "source_list");
      service.pricing_sources.forEach(function (u) {
        var li = el("li");
        if (isHttpUrl(u)) {
          var a = el("a", "", u);
          a.href = u;
          a.target = "_blank";
          a.rel = "noopener noreferrer";
          li.appendChild(a);
        } else {
          li.textContent = u;
        }
        ul.appendChild(li);
      });
      srcItem.appendChild(ul);
      block.appendChild(srcItem);
    }

    block.appendChild(el("p", "pricing_block_note", "공식 페이지에서 확인한 시점의 정보이며 최신 가격이 아닐 수 있습니다. 월간 결제 가격이 기준이고, 연간 결제·프로모션 가격은 별도로 표시했습니다."));
    return block;
  }

  function buildPricingOriginal(service) {
    var block = el("div", "pricing_block");
    var title = el("p", "pricing_block_title");
    title.appendChild(document.createTextNode("조사 당시 기록 (원문)"));
    if (service.author) title.appendChild(el("span", "badge badge_status", "작성자 " + service.author));
    block.appendChild(title);
    block.appendChild(renderMultiline(el("div"), service.pricing_detail));
    block.appendChild(el("p", "pricing_block_note", "작성자가 조사 당시 기록한 내용을 그대로 표시합니다. 확인일은 원문에 적힌 경우에만 포함됩니다."));
    return block;
  }

  function fillModal(service) {
    els.modalCategory.textContent = service.category || EMPTY_TEXT;
    els.modalTitle.textContent = valueOrEmpty(service.name);
    clear(els.modalLogo);
    els.modalLogo.appendChild(makeLogo(service));

    clear(els.modalBadges);
    els.modalBadges.appendChild(makeBadge(service.pricing_type));
    if (service.pricing_summary) {
      els.modalBadges.appendChild(el("span", "badge badge_status", service.pricing_summary));
    }

    clear(els.modalBody);

    var intro = section("소개");
    intro.appendChild(renderMultiline(el("div", "modal_description"), service.description));
    els.modalBody.appendChild(intro);

    var usage = section("사용방법");
    usage.appendChild(renderMultiline(el("div"), service.usage));
    els.modalBody.appendChild(usage);

    var adv = section("장점");
    adv.appendChild(renderMultiline(el("div"), service.advantages));
    els.modalBody.appendChild(adv);

    var lim = section("아쉬운 점");
    lim.appendChild(renderMultiline(el("div"), service.limitations));
    els.modalBody.appendChild(lim);

    var review = section("직접 써본 소감");
    review.appendChild(renderMultiline(el("div"), service.review));
    els.modalBody.appendChild(review);

    var author = section("작성자");
    author.appendChild(el("p", "", valueOrEmpty(service.author)));
    els.modalBody.appendChild(author);

    var pricing = section("상세 요금");
    pricing.appendChild(buildPricingOriginal(service));
    pricing.appendChild(buildPricingOfficial(service));
    els.modalBody.appendChild(pricing);

    var meta = section("조사 정보");
    var dl = el("dl", "meta_list");
    dl.appendChild(el("dt", "", "원문 분야"));
    dl.appendChild(el("dd", "", valueOrEmpty(service.category_original).replace(/\s*\n\s*/g, " ")));
    dl.appendChild(el("dt", "", "공식 사이트"));
    var ddOfficial = el("dd");
    if (isHttpUrl(service.official_url)) {
      var a1 = el("a", "", service.official_url);
      a1.href = service.official_url; a1.target = "_blank"; a1.rel = "noopener noreferrer";
      ddOfficial.appendChild(a1);
    } else {
      ddOfficial.textContent = EMPTY_TEXT;
    }
    dl.appendChild(ddOfficial);
    dl.appendChild(el("dt", "", "조사 당시 링크"));
    var ddSource = el("dd");
    if (isHttpUrl(service.source_url)) {
      var a2 = el("a", "", service.source_url);
      a2.href = service.source_url; a2.target = "_blank"; a2.rel = "noopener noreferrer";
      ddSource.appendChild(a2);
      if (service.source_url !== service.official_url) {
        ddSource.appendChild(document.createTextNode(" (원본 기록, 공식 홈과 다름)"));
      }
    } else {
      ddSource.textContent = EMPTY_TEXT;
    }
    dl.appendChild(ddSource);
    meta.appendChild(dl);
    els.modalBody.appendChild(meta);

    // 하단 공식 사이트 버튼
    if (isHttpUrl(service.official_url)) {
      els.modalOfficial.href = service.official_url;
      els.modalOfficial.removeAttribute("aria-disabled");
      els.modalOfficial.removeAttribute("tabindex");
      els.modalOfficial.setAttribute("aria-label", valueOrEmpty(service.name) + " 공식 사이트 (새 탭)");
    } else {
      els.modalOfficial.removeAttribute("href");
      els.modalOfficial.setAttribute("aria-disabled", "true");
      els.modalOfficial.setAttribute("tabindex", "-1");
    }
  }

  function openModal(service, trigger) {
    lastFocused = trigger || document.activeElement;
    fillModal(service);
    els.backdrop.hidden = false;
    document.body.classList.add("modal_open");
    els.modalBody.scrollTop = 0;
    // 제목 또는 첫 조작 요소로 포커스 이동
    els.modal.focus();
    document.addEventListener("keydown", onModalKeydown);
  }

  function closeModal() {
    if (els.backdrop.hidden) return;
    els.backdrop.hidden = true;
    document.body.classList.remove("modal_open");
    document.removeEventListener("keydown", onModalKeydown);
    if (lastFocused && typeof lastFocused.focus === "function" && document.contains(lastFocused)) {
      lastFocused.focus();
    } else {
      els.searchInput.focus();
    }
    lastFocused = null;
  }

  function onModalKeydown(event) {
    if (event.key === "Escape" || event.key === "Esc") {
      event.preventDefault();
      closeModal();
      return;
    }
    if (event.key !== "Tab") return;
    var focusable = Array.prototype.filter.call(
      els.modal.querySelectorAll(FOCUSABLE),
      function (node) { return node.offsetParent !== null && node.getAttribute("aria-disabled") !== "true"; }
    );
    if (!focusable.length) { event.preventDefault(); els.modal.focus(); return; }
    var first = focusable[0];
    var last = focusable[focusable.length - 1];
    var active = document.activeElement;
    if (event.shiftKey) {
      if (active === first || active === els.modal) { event.preventDefault(); last.focus(); }
    } else {
      if (active === last) { event.preventDefault(); first.focus(); }
    }
  }

  els.modalClose.addEventListener("click", closeModal);
  els.modalCloseBottom.addEventListener("click", closeModal);
  els.backdrop.addEventListener("mousedown", function (event) {
    // 바깥 영역(배경) 클릭 시 닫기. 모달 내부에서 시작된 드래그는 무시.
    if (event.target === els.backdrop) {
      var onUp = function (upEvent) {
        document.removeEventListener("mouseup", onUp);
        if (upEvent.target === els.backdrop) closeModal();
      };
      document.addEventListener("mouseup", onUp);
    }
  });
  els.backdrop.addEventListener("touchend", function (event) {
    if (event.target === els.backdrop) closeModal();
  });

  // Escape로 모바일 메뉴 닫기 (모달이 열려 있지 않을 때)
  document.addEventListener("keydown", function (event) {
    if ((event.key === "Escape" || event.key === "Esc") && els.backdrop.hidden) {
      if (els.sidebar.classList.contains("is_open")) {
        closeSidebar();
        els.menuButton.focus();
      }
    }
  });

  // 데스크톱 폭으로 돌아오면 모바일 메뉴 상태 초기화
  var mq = window.matchMedia("(min-width: 901px)");
  function onViewportChange() { if (mq.matches) closeSidebar(); }
  if (mq.addEventListener) mq.addEventListener("change", onViewportChange);
  else if (mq.addListener) mq.addListener(onViewportChange);

  /* ---------- 초기화 ---------- */
  renderCategoryNav();
  renderList();
})();
