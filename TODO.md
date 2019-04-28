# lunchpick
점심 메뉴를 랜덤으로 골라주는 서비스

## 목표
### 1차 목표  
- 회원가입 기능  
    - 부가 정보도 입력 받음.(관심 지역(시/구/동), 점심 시간)
- 로그인 기능  
    - AWS Cognito, Google, Facebook, Kakao, Naver  

### 2차 목표  
- 식당 추가, 리스트 관리 기능  
    - 식당을 추가할때는, 다른 사람이 등록한 정보가 있는지 먼저 검색하게 함. 이때, 자연스럽게 미리 식당 주소를 캐치할 수 있다.  
    - 식당 추가시, 카카오맵 연동하여 검색해서 위치를 잡거나 직접 지도에서 핀 찍을 수 있게 함.  
    - '먹고싶은 점심 식당' 리스트를 두고, 식당을 추가한 유저는 자동으로 추가한 식당이 해당 리스트에 들어가고, 다른 사람이 등록한 식당을 '먹고싶은 점심 식당'에 추가할 수 있게 함.  
- 랜덤 런치픽 기능  

### 3차 목표  
- '먹고싶은 점심 식당' 리스트는 리스트형과 지도형으로 보여줌.  
- 지도형은 지도에 '먹고싶은 점심 식당' 위치를 핀으로 표시함.  

### NEXT STEP  
- 무엇을 더 발전 시킬까?  

## 기술 스택  
- Nuxt.js(SPA모드, Pre-render)  
- AWS Amplify  
- AWS(Serverless Back-end - Lambda, API Gateway, DynamoDB)  
- AWS(Hosting - S3, CloudFront, Route53) - Pre-render 방식으로 '서비스 소개'부분은 SEO를 고려함.

## Development TODO list  
- 회원가입 및 로그인 페이지 구현  
- AWS Amplify 설치 및 Auth 기능 구현  
    - 고민사항: Amplify cli로 리소스들을 관리할때, 그 정보를 어떻게 설정 파일에 연결시킬까?  
    - 일반적인 project가 아니고 nuxt.js 프레임워크이기 때문에 설정파일의 위치(plugins 하위가 될듯)를 어떻게 알게할까?  