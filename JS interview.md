# 프로토타입(Prototype)이란 무엇인가?
~~~
프로토타입은 객체가 부모를 참조하여 상속하는 기능입니다.
~~~
~~~
자바스크립트는 프로토타입기반 언어로 객체지향언어입니다. 
하지만 다른 언어들과 다르게 인터페이스를 통한 상속 기능이 없어 이를 프로토타입으로 구현할 수 있습니다.
아래 코드와 같이 new로 생성 할 경우 [[prototype]] 혹은 __proto__라는 프로퍼티를 가지게 됩니다.
~~~
~~~javascript
function Person(first, last, age) {

  this.first = first;
  this.last = last;
  this.age = age;
}
let person1 = new Person('ko', 'gayoung', 25)

// person1의 __proto__속성은 원형 부모의 prototype 참조
// [[prototype]]인 prototype 객체 내부에는 인스턴스가 사용할 메소드가 저장되어있다.
~~~
~~~
(아래 이미지 참고)js의 모든 객체는 프로토타입이라는 프로퍼티를 갖고있으며 프로토타입 체인(prototype chain)입니다.
모든 프로토타입 체인의 끝은 항상 Object.prototype이고, 종착역인 Object.prototype은 __proto__ 속성이 없습니다.
~~~
![image](https://user-images.githubusercontent.com/36693355/137751282-b480ae38-1563-4d55-9400-07c1c295daef.png)
~~~
프로토타입 체인에서 한 객체의 메소드와 속성들이 다른 객체로 복사되는 것이 아니다. 
위 이미지에서 보시다 시피 체인을 타고 올라가며 접근할 뿐이다.
~~~

~~~
(아래 이미지 참고)
prototype vs __proto__
prototype 은 함수 객체만이 가지는 프로퍼티이고 함수 객체가 생성자로 사용될 때 인스턴스의 부모 역할을 하는 객체를 가리킵니다. ex)Person's prototype 
__proto__ 프로퍼티는 모든 객체가 가지고 있는 속성이며 객체가 생성될 때 자신의 부모 객체인 prototype 을 참조합니다. ex)Person's prototype
~~~
  <img width="957" alt="스크린샷 2021-10-19 오후 8 51 30" src="https://user-images.githubusercontent.com/36693355/137903932-9902c37d-cf63-422b-a3f3-0ee3fae6da5f.png">


# 원시타입 VS 객체
~~~
원시타입: number, string, symbol, undefined, boolean
참조타입: 객체, 배열, 클래스, 함수 ...

원시타입은 원형의 데이터는 수정이 불가능. 재할당만 가능 ex. 
참조타입은 원형의 데이터가 수정이 가능하다
~~~

# Immutable 쓰는 이유
~~~
객체의 불변성을 지키기 위함
~~~
~~~
개발하면서 주로 json형태의 리스트를 다루는데 객체는 immutable로 관리하는게 좋다.
이유는 리액트의 가상돔은 변화를 계산하는데 얕은복사를 하여 계산한다.
얕은복사를 할 경우에는 객체를 다루는 도중 원형이 수정되어
연관된 컴포넌트들이 리랜더링 혹은 원치않는 동작이 일어날 수 있다. (+ 이래서 기능별로 컴포넌트 영역을 잘 나눠야함)
 
자 그럼 이뮤터블하게 개발 안하면 못하나? 그건아니다.
Object.assign등으로 객체를 복사해서 원형에 영향을 미치지 않게 할 수 있는데, 얘도 딥카피는 아니고 스왈로카피라 한계가 존재한다.
~~~
