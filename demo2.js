let that

class Tab {
  constructor(id) {
    that = this
    // 获取元素
    this.main = document.querySelector(id)
    this.add = this.main.querySelector(".tabAdd")
    this.ul = this.main.querySelector("header :first-child")
    this.tabcon = this.main.querySelector("main")
    this.init()
  }

  // 初始化
  init() {
    this.updateNode()
    this.add.onclick = this.addTab
    for (let i = 0; i < this.lis.length; i++) {
      this.lis[i].index = i
      this.lis[i].onclick = this.toggleTab
      this.remove[i].onclick = this.removeTab
      this.spans[i].ondblclick = this.editTab
      this.sections[i].ondblclick = this.editTab
    }
  }

  // 获取所有元素
  updateNode() {
    this.lis = this.main.querySelectorAll("li")
    this.sections = this.main.querySelectorAll("section")
    this.remove = this.main.querySelectorAll(".remove")
    this.spans = this.main.querySelectorAll(".nav li span:first-child")
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
    let li = "<li class='active'><span>新选项</span><span class='remove'>x</span></li>"
    let tab = "<section class='conactive'>测试n</section>"
    that.ul.insertAdjacentHTML("beforeend", li)
    that.tabcon.insertAdjacentHTML("beforeend", tab)
    that.init()
  }

  // 删除
  removeTab(e) {
    e.stopPropagation()
    let index = this.parentNode.index
    that.lis[index].remove()
    that.sections[index].remove()
    if (document.querySelector(".active")) return
    index--
    that.lis[index] && that.lis[index].click()
  }

  // 修改
  editTab() {
    let str = this.innerHTML
    window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty()
    this.innerHTML = `<input type='input' value='${str}' />`
    const input = this.children[0]
    input.select()
    input.onblur = function () {
      this.parentNode.innerHTML = this.value
    }
    input.onkeyup = function (e) {
      if (e.keyCode === 13) this.blur()
    }
  }
}

let Tab1 = new Tab("#tab")