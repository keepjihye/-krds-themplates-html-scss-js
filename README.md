📂 src/
├── 📂 pages/                       # 페이지 HTML 파일들
│   └── index.html                  # 메인 페이지 HTML 파일
│   └── sub_02.html                  # 서브 페이지 HTML 파일
├── 📂 resources/                   # 리소스 폴더
│   ├── 📂 css/                     # 전역 CSS 파일들
│   ├── 📂 images/                  # images 파일들
│   ├── 📂 js/                      # JavaScript 파일들
│   │   ├── 📂 component/           # 컴포넌트 관련 JS 파일 (특정한 기능을 수행하는 독립적인 UI요소)
│   │   │   └── ui-script.js        # 컴포넌트 스크립트 (버튼, 모달창, 탭 등)
│   │   ├── 📂 pattern/             # 패턴 관련 JS 파일 (반복적이거나 재사용 가능한 기능적 패턴)
│   │   │   └── ui-pattern-script.js # UI 패턴 스크립트 (스크롤 이벤트, 슬라이드 등)
│   ├── 📂 scss/                    # SCSS 파일들
│   │   ├── 📂 component/           # 컴포넌트 관련 SCSS 파일
│   │   │   ├── 📂 mixins/              # 믹스인 파일들
│   │   │   │   ├── _breakpoints.scss    # 브레이크포인트 믹스인
│   │   │   │   ├── _utils.scss         # 유틸리티 믹스인
│   │   │   ├── _include.scss       # 인클루드 스타일
│   │   │   ├── _reset.scss         # 리셋 스타일
│   │   │   └── _variables.scss     # 변수 정의
│   │   ├── 📂 pattern/             # 패턴 관련 SCSS 파일
│   │   │   ├── _p_include.scss     # 인클루드 스타일
│   │   │   ├── _p_common.scss      # 공통 패턴 스타일
│   │   │   ├── _p_content.scss     # 컨텐츠 관련 패턴 스타일
│   │   │   └── _p_layout.scss      # 레이아웃 패턴 스타일
│   │   └── styles.scss             # 전체 스타일 파일
