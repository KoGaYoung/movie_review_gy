# 클론코딩 영화평점 웹 서비스 - 프로젝트 연습용


## 따라가며 얻고자 하는 것
### 1) ✅ 하나의 웹 서비스 완성 경험
### 2) ✅ 책의 클래스형 컴포넌트 -> 함수형 컴포넌트들로 Hooks 학습 및 적용
### 3) ✅ 가능하다면 배포까지. 
### 4) ▶️ 완성된 웹 지속적으로 서비스 기능추가(페이지네이션)


## Code structure
![image](https://user-images.githubusercontent.com/36693355/140772370-cb2b3df0-7f47-4bba-8afb-4f94f40d2ea1.png)


++ 리덕스 라이브러리 도입, 젠킨스설정 다할 수 있겠지,,🤔 
 


### 09.15 class component vs Hooks
~~~
2019년 v16.8 부터 함수형 컴포넌트에 리액트 훅(hook)을 지원하여, 현재는 공식 문서에서 함수형 컴포넌트와 훅을 함께 사용할 것을 권장하고있다.

클래스형 컴포넌트의 경우 state 기능 및 라이프 사이클 기능을 사용할 수 있고 임의 메서드를 정의할 수 있다. 
그리고 render 함수가 꼭 있어야 하고, 그 안에서 보여 주어야 할 JSX를 반환해야 한다. 
또한 과거의 prototype을 이용해서 구현하던 클래스 문법을 ES6 문법 부터는 class 문법을 사용하여 구현할 수도 있다. 
(typescript를 이용하면 protoType지정 안해줘도 된다는데 다음프로젝트에서 적용할 예정.)

함수형 컴포넌트는 클래스형 컴포넌트보다 선언하기가 좀 더 편하고, 메모리 자원을 덜 사용한다는 장점이 있다.
과거에는 함수형 컴포넌트에서 state와 라이프사이클 API를 사용할 수 없었는데, 리액트 훅이 도입되면서 해결

* 일반 함수는 자신이 종속된 객체를 this로 가리키며, 화살표 함수는 자신이 종속된 인스턴스를 가리킨다. (https://devowen.com/298) 
* 함수형 컴포넌트든 클래스형 컴포넌트든 state를 직접 조작하는 것이 아닌, setState나 useState와 같은 세터 함수를 반드시 사용하여 조작해야 한다.
* https://codechasseur.tistory.com/98
~~~

## 09.16 Hooks rule
https://ko.reactjs.org/docs/hooks-rules.html

## 09.20 history를 사용하여 리다이렉트 기능 만들기

## 09.27 git npm build 이슈 해결 + git.io 배포 완료
https://kogayoung.github.io/movie_review_gy/#/

## 11.02 페이지네이션 기능 추가작업 진행 중

# Getting Started with Create React App
## 실행명령어 npm start
