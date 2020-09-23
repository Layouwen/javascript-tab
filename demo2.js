let that

class Tab {
  constructor(id) {
    that = this
    // 获取元素
    this.main = document.querySelector(id)
    this.add = this.main.querySelector(".tabAdd")
    this.ul = this.main.querySelector("header :first-child")
    this.tabcon = this.main.querySelector("main")
    console.log(this.tabcon)
    this.init()
  }

  // 初始化
  init() {
    this.updateNode()
    this.add.onclick = this.addTab
    for (let i = 0; i < this.lis.length; i++) {
      this.lis[i].index = i
      this.lis[i].onclick = this.toggleTab
    }
  }

  // 获取所有元素
  updateNode() {
    this.lis = this.main.querySelectorAll("li")
    this.sections = this.main.querySelectorAll("section")
  }

  // 切换
  toggleTab() {
    that.clearClass()
    this.className = "active"
    that.sections[this.index].className = "conactive"
  }

  // 清除
  clearClass() {
    for (let i = 0; i < this.lis.length; i++) {
      this.lis[i].className = ""
      this.sections[i].className = ""
    }
  }

  // 添加
  addTab() {
    that.clearClass()
    let li = "<li class='active'><span>新选项</span><span>x</span></li>"
    let tab = "<section class='conactive'>测试n</section>"
    that.ul.insertAdjacentHTML("beforeend", li)
    that.tabcon.insertAdjacentHTML("beforeend", tab)
    that.init()
  }

  // 删除
  removeTab() {
    console.log("remove")
  }

  // 修改
  editTab() {}
}

let Tab1 = new Tab("#tab")