
// 把组件的 DOM 元素插入页面，并且在 setState 的时候更新页面
const mount = (component, wrapper) => {
    wrapper.appendChild(component._renderDOM())
    component.onStateChange = (oldEl, newEl) => {
      wrapper.insertBefore(newEl, oldEl)
      wrapper.removeChild(oldEl)
    }
}

class Component {

    // 允许传递props属性
    constructor(props = {}){
        this.props = props;
    }

    // change state
    setState (state) {
      const oldEl = this.el
      this.state = state
      // state改变，重新render
      this._renderDOM();
      // 插入新dom，删除旧dom
      if (this.onStateChange) this.onStateChange(oldEl, this.el);
    }

    _renderDOM () {
      this.el = this.render();
      if (this.onClick) {
        this.el.addEventListener('click', this.onClick.bind(this), false);
      }
      return this.el;
    }
  }

export  default {
    Component, mount
}