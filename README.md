# :: 원티드 프리온보딩 프론트엔드 코스 사전과제
## Assignment 1 - `Login`

- [x] useRef를 사용해 인풋값 관리
- [x] 로그인 시(ID, PW 입력 후 버튼 클릭) onSubmit사용해 로그인 구현
- [x] Local Storage 에 로그인 정보 저장 구현 페이지 새로고침시 로그인상태 유지
- [x] 로그인 완료시 location.reload를 사용해 main페이지로 이동을 구현했습니다.

## Assignment2 - `GNB`

- [x] `sticky` GNB 구현완료
- [x] 모바일 사이즈 Input제거 양옆으로(space-between) 정렬
- [x] 가장 오른쪽 아이콘을 Logout으로 변경

## Assignment3 - `Validation`

- [x] 정규식 으로 유효성 확인 이메일 조건 - `@` , `.` 포함 비밀번호 조건 - 대문자, 숫자, 특수문자 포함 8자리 이상
- [x] 로그인 시 이메일과 비밀번호가 등록되어 있는 것과 일치 여부 확인
- [x] Validation 상태를 CSS로 표현해주세요.
- [x] Email Input
      Validation Check를 통해 Email 형식이 아닌 경우 표시
- [x] Password Input
      Validation Check를 통해 Password 형식이 아닌 경우 표시
- [x] Login Button
      Validation Check가 모두 통과된 경우에만 Button 색상을 진하게 변경
- [x] Validation 함수 분리

## Assignment4 - `Routing`

- [x] 로그인,로그아웃 시 라우팅 로직을 통해 페이지가 이동 되도록 location.reload를 사용해 구현
- [x] 로그인이 완료되면 라우터에서 Main Page로 이동 (history push 사용 X) router v6 useNavigate 미사용
- [x] 로그아웃되면 (Local Storage가 삭제되면) Login Page로 이동(history push 사용 X)

## Assignment5 - `Feeds`

- [x] public/feed 디렉토리에 json형식으로 구성하여 fetch로 data를 요청
- [x] 각각의 Feed에 댓글을 추가할 수 있도록 개발해주세요. (Enter key & 클릭으로 게시 가능하도록)
- [x] Feed는 화면 중앙에 위치 해야하며 모바일 대응이 가능
- [x] 게시 후 Input은 초기화
- [x] Feed의 이미지는 자유롭게 사용하시되 각각 사이즈가 각각 달라야 합니다.
- [x] Feeds의 Image가 로딩된 후 컴포넌트가 로딩 되도록 Loading을 구현해 주세요 (로딩바는 없어도 괜찮습니다. Hint: image.onload)
  - 메인 Page 전체에 반응형 CSS가 적용 되어있는지 평가합니다. (Media Query 사용)

## 배포 주소

https://ji-insta-clone.netlify.app
