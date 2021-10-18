# 프로토타입(Prototype)이란 무엇인가?
-> 프로토타입은 객체가 부모를 참조하는 상속 기능
### 자바스크립트는 프로토타입 기반 언어로 객체지향언어입니다.
### 다른 객체지향언어의 클래스와 상속의 기능을 구현한 것.
### 모든 객체는 __proto__ 프로퍼티를 가지고 있는 속성
### reactver.15 [[prototype]] reactver.16 __proto__
~~~
function Person(first, last, age) {

  this.first = first;
  this.last = last;
  this.age = age;
}
let person1 = new Person('ko', 'gayoung', 25)

// person1의 __proto__속성은 원형 부모의 prototype 참조
// prototype 객체 내부에는 인스턴스가 사용할 메소드가 저장되어있다.
~~~

![image](https://user-images.githubusercontent.com/36693355/137751282-b480ae38-1563-4d55-9400-07c1c295daef.png)
### 이런 프로토타입 체인 구조를 가진다.
### 모든 프로토타입 체인의 끝은 항상 Object.prototype이다.
### 그래서 Object.prototype은 __proto__ 속성이 없습니다.
