# Col<span style="color:#FF006A">o</span><span style="color:#00F05F">u</span><span style="color:#006BFF">r</span> Journal

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
