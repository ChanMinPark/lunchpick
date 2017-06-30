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


## webpack-dev-server의 HMR(Hot Module Replacement)
HMR은 내용이 변경된 모듈을 페이지 새로고침 없이 런타임에서 업데이트 하는 기능이다.  
webpack-dev-server는 기본적으로 모듈 내용이 변경되면 웹페이지가 새로고침 되면서 변경사항을 반영한다.  
그러나, 웹페이지 새로고침 없이 내용만 수정하는 방법이 있다.  
내용이 수정되는 모듈 js 파일 하단에 아래 코드를 추가한다.  
```javascript
if(module.hot) {
  module.hot.accept();
}
```

근데 또 React에서 위 방식의 문제는 내용이 변경될 때 state 변수의 값을 유지하지 못한다는 것이다.  

이 문제를 해결할 수 있는 방법이 ```react-hot-loader``` 패키지를 이용하는 것이다.  
패키지를 npm으로 설치하고 위의 if문 사용하지 않은 상태에서,  
webpack.config.js의 loaders 설정을 조금 수정한다.  
```js
module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot-loader', 'babel-loader?'+JSON.stringify({
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                })],
                exclude: /node_modules/
            }
        ]
    },
```
react-hot-loader를 babel-loader 앞에 작성해줘야하고, babel-loader의 query 내용을 적용시키기 위해서  
'babel-loader'라고 쓰지 않고  
```js
'babel-loader?'+JSON.stringify({
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                })
```
라고 작성한다.  

이렇게 react-hot-loader 패키지를 이용하면 실시간으로 페이지 새로고침없이 내용 변경이 반영되면서 state도 유지할 수 있다.  

참고로 create-react-app 패키지를 이용해서 react 프로젝트를 만들면 자동으로 HMR이 적용되어 있다.  