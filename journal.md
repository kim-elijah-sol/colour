# Col<span style="color:#FF006A">o</span><span style="color:#00F05F">u</span><span style="color:#006BFF">r</span> Journal

# 2025-04-08

BE 의 user api end-point 를 변경했다.<br>
FE 에서 사용되는 sign in, sign up, sign out 에 맞춰 변경했고,<br>
DTO 및 변수명도 변경했다.<br>

FE 는 로그인 및 회원가입 flow 를 정리했다.<br>
1차적으로 모든 api 를 붙혔고, 내일부터는 `토스트 메시지 처리` 및 `조건식 검사`, `토큰 저장`, `엑세스 토큰 재발급 처리`를 진행할 예정이다.<br>

아 맞다 이번 FE http 요청 라이브러리는 `ky` 로 결정했다.<br>

`ky` 가 `axios` 보다 번들 크기도 작고, `axios` success 시 데이터를 추가적으로 `AxiosResponse` 로 래핑 하지만,<br>
`ky` 는 server 에서 응답한 데이터를 그대로 내려주기 때문에 별도의 interceptor 처리가 필요 없기 때문에 써보기로

# 2025-04-07

FE 화면에 로그인 버튼을 그리고 버튼 클릭 시 로그인 모달이 뜨도록 만들었다.<br>

이 모달의 Funnel 은 아래와 같다.

```
1. 이메일 정보를 입력받는다.
2. 이메일이 이미 등록되어 있으면 비밀번호를 입력받아 로그인을 유도한다.
3. 이메일이 등록되지 않았다면 가입을 유도하기 위해 비밀번호를 입력받는다.
4. 인증 메일을 보내고 인증 코드를 입력받는다.
5. 인증 완료 시 가입 완료 안내!
```

여기에 메일이 정상적으로 가지 않았거나 시간 초과 Case 를 해결하기 위해<br>
재전송 버튼을 추가 해야할 것 같다.<br>

위 로직이 가능하게 하기 위해 API 도 수정할 예정이다.

```
[GET]  /check-email  : 가입된 이메일인지 여부 확인
[POST] /sign-in      : 로그인 처리
[POST] /join-request : 회원 가입 요청 및 인증 메일 전송
[POST] /verify       : 인증 메일 확인 및 회원 가입 처리
```

# 2025-04-05

package manager 를 yarn 에서 pnpm 으로 변경하고 monorepo 형태로 구성했다.<br>
be 를 nest-js 로 구성할 생각이라 색상 변환 관련 함수를 공유하고자 monorepo 로 구성했다.<br>
내일부터는 @colour/fx 의 test 코드 작성 및 be 관련 작업 예정

# 2025-04-02

PaletteCard 의 디자인을 바꿨다.<br>
세상 너무 맘에 드는 레퍼런스를 찾아서 바꿀 수 있었다.<br>
추가적으로 Submit CTA Button 도 /create 페이지에 그렸다.

# 2025-03-29

전체적으로 존재하던 shadow 를 좀 죽이고 border 로 영역을 구분했다.<br>
shadow 가 너무 많으니 페이지 자체가 좀 칙칙해지고 너무 정리가 안된 느낌이였다.<br>
내일부터는 PaletteCard 의 Design 을 바꿔볼 예정이다.

# 2025-03-26

Create 페이지에 ColorPicker 를 이식시켰다.<br>
현재 문제는 Shades Tab 에서 색상을 변경했을 때 ColorPicker 에 반영되지 않는 다는 점.<br>
useEffect 를 통해서 해결해야할 것 같다.

# 2025-03-24

Create 페이지 리디자인 중에 있다.<br>
현재 팔레트를 최상단에 보여주고 바로 아래에 색상 정보, 색상 대조 기능까지 붙혔다.<br>
이제 ColorPicker 를 Aside 부분에 잘 녹여내면 될 것 같다.<br>
Aside 우측에는 UI 미리보기를 만들어보는걸로!<br>
Shade 추천 기능은 좀 더 가다듬어야 할 것 같다.

# 2025-03-21

브랜드 컬러를 <b style="color:#006BFF">#006BFF</b> 로 정했다.<br>
파란색 계열로 하고 싶었고, 파란색 중 white, black 의 Contrast 가 거의 비슷한 색상을 찾다가<br>
<b style="color:#006BFF">#006BFF</b> 컬러가 <b>white: 4.62:1</b> , <b>black : 4.55:1</b> 로 결과가 나오길래 바로 fix.<br>
디자인 레퍼런스는 <b>Dribbble</b> 에서 스튜디오 같은 느낌을 찾다가,<br>
<b>스튜디오 느낌</b>도 나면서 <b>Admin Dashboard 느낌</b>도 나는 디자인을 찾아서 화면 구성을 다시 해볼 예정이다.

# 2025-03-20

디자인을 한 번 갈아 엎어야 할 것 같다.<br>
현재 디자인은 너무 정리가 안되어 있고, 깔끔하지도 못한 것 같다.<br>
**Dribbble** 에서 color palette 를 키워드로 검색해보니 많은 레퍼런스가 나오니 참고할 것.<br>
생성 페이지는 좀 더 **스튜디오** 같은 느낌을 줄 예정 ex) **Coolors**, **Toss-Securities**<br>
Primary Color는 내일 개인정비시간에 고민해보는걸로!
