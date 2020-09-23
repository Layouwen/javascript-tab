class Demo1 {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  sayDemo1(name) {
    console.log(name, this.name, this.age)
  }
}

class Demo2 extends Demo1 {
  constructor(name, age) {
    super(name, age)
  }

  sayDemo2(name) {
    console.log("i am demo 2", name)
    super.sayDemo1("我是super调用")
  }
}

const demo2 = new Demo2("layouwen", 20)

console.log(demo2.name)
console.log(demo2.age)
demo2.sayDemo1("hi")
demo2.sayDemo2("demo2")
