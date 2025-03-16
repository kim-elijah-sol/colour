## Preview 기능

생성된 팔레트를 여러 Preview 에 적용<br>
-> 최초엔 간단한 UI Library 제공

## 색상 관련 여러 값 추출

HEX -> CMYK, RGB, HSV, HSL, LAB, 팬톤 등 컬러 팔레트 기반 추천
컬러 채널 조절로 변환은 완료
팬톤 컬러 등 이미 지정된 컬러 추천은 데이터 추출 필요

- 현재 Picker 왔다갔다하면 계산 간 오차로 인해 원래 색상 손실되는 이슈 있음
- HEX Code에 따라 각 Slider State 가 계산되는 방식 개선 필요. (Slider 가 안움직이는 Case 생김)
- Slider 에 min, max 추가로 0~100 range 가 아닌 Slider 로직 개선 필요.

## Contrast 추측 - 완료

와이트톤, 블랙톤에서 대비 값 추측

## Simllar 찾기

비슷한 느낌의 palette 찾기

Shade 를 뽑아주는 정도까지 개발 완료
