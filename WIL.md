# WIL (What I Learned)

## React 프로젝트 생성
손수 파일과 설정들을 만들며 프로젝트를 생성할 수 있지만,  
이러한 수고를 덜어주는 create-react-app 패키지가 있다.  
```
// 설치
npm install -g create-react-app
```
node 버전이 6 이상이어야 사용 가능하다.  

React 프로젝트 생성도 간단하다.  
```
create-react-app 프로젝트_이름
```

명령을 실행하면 프로젝트 이름으로 된 폴더가 생기고 그 안에 필요한 파일구조가 만들어진다.  

프로젝트가 생성되면 아래 명령어 중 하나로 dev server(webpack dev server)를 열수 있다.  
http://localhost:3000 으로 접속 가능하다.  
명령어를 입력하면 자동으로 웹브라우저가 하나 열린다.  
```
npm start
  or
yarn start
```


## React.PropTypes
propTypes는 react v16부터 별도 패키지로 분리되었다. (prop-types 패키지)  
cdn : https://unpkg.com/prop-types/prop-types.min.js  
그래서 React.PropTypes로 안쓰고 그냥 PropTypes로 쓴다.  

```
import PropTypes from 'prop-types';

...

Codelab.propTypes = {
  value : PropTypes.string,
  secondValue: PropTypes.number,
  thirdValue: PropTypes.any.isRequired
}
```
