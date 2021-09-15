# 클론코딩 영화평점 웹 서비스 - 프로젝트 연습용

## 실행명령어 npm start

## 따라가며 얻고자 하는 것
### 1) 하나의 웹 서비스 완성 경험
### 2) 책의 클래스형 컴포넌트 -> 프로젝트 Hooks 학습 및 적용
### 3) 가능하면 타입스크립트 적용
### 4) 가능하다면 배포까지
 
 


### class component vs Hooks
2019년 v16.8 부터 함수형 컴포넌트에 리액트 훅(hook)을 지원해 주어서 현재는 공식 문서에서 함수형 컴포넌트와 훅을 함께 사용할 것을 권장
컴포넌트는 데이터가 주어졌을 때 이에 맞추어 UI를 만들어 주는 기능, 라이프 사이클 API를 통해 컴포넌트가 화면에 나타날 때, 사라질 때, 변할 때 작업들을 수행할 수도 있다. 
컴포넌트의 목적에 따라 프리젠테이션(presentational) / 컨테이너(container) 컴포넌트로 나누기도 한다.

클래스형 컴포넌트의 경우 state 기능 및 라이프 사이클 기능을 사용할 수 있고 임의 메서드를 정의할 수 있다는 점이다. 
그리고 render 함수가 꼭 있어야 하고, 그 안에서 보여 주어야 할 JSX를 반환해야 한다. 
또한 과거의 prototype을 이용해서 구현하던 클래스 문법을 ES6 문법 부터는 class 문법을 사용하여 구현할 수도 있다. 
typescript를 이용하면 protoType지정 안해줘도 된다는데 적용해보고싶다.

함수형 컴포넌트는 클래스형 컴포넌트보다 선언하기가 좀 더 편하고, 메모리 자원을 덜 사용한다는 장점이 있다.
과거에는 함수형 컴포넌트에서 state와 라이프사이클 API를 사용할 수 없었는데, 리액트 훅이 도입되면서 해결

*일반 함수는 자신이 종속된 객체를 this로 가리키며, 화살표 함수는 자신이 종속된 인스턴스를 가리킨다. (https://devowen.com/298)
*함수형 컴포넌트든 클래스형 컴포넌트든 state를 직접 조작하는 것이 아닌, setState나 useState와 같은 세터 함수를 반드시 사용하여 조작해야 한다.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
