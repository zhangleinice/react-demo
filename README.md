## react小书 http://huziketang.mangojuice.top/books/react/lesson30

### 组件化
1，组件化可以帮助我们解决前端结构的复用性问题，整个页面可以由这样的不同的组件组合、嵌套构成  

### state vs props
state 是让组件控制自己的状态，props 是让外部对组件自己进行配置。  

### 状态提升（兄弟组件，通过公共父组件通信）
当某个状态被多个组件依赖或者影响的时候，就把该状态提升到这些组件的最近公共父组件中去管理，用 props 传递数据或者函数来管理这种依赖或着影响的行为。

### ref 和 React.js 中的 DOM 操作
能不用 ref 就不用，避免多余的dom操作

### context(不要使用)
1,如果一个组件设置了 context，那么它的子组件都可以直接访问到里面的内容，它就像这个组件为根的子树的全局变量。任意深度的子组件都可以通过 contextTypes 来声明你想要的 context 里面的哪些状态，然后可以通过 this.context 访问到那些状态。  
2,context 打破了组件和组件之间通过 props 传递数据的规范，极大地增强了组件之间的耦合性。而且，就如全局变量一样，context 里面的数据能被随意接触就能被随意修改，每个组件都能够改 context 里面的内容会导致程序的运行不可预料。  

### redux
1，一个可以被不同模块任意修改共享的数据状态就是魔鬼，一旦数据可以任意修改，所有对共享状态的操作都是不可预料的（纯净）  

2，我们约定，这个数据并不能直接改，你只能执行某些我允许的某些修改，所有对数据的操作必须通过 dispatch 函数  

3,纯函数（Pure Function）  




### 组件的抽象与复用

> ## 在抽象公共功能时，尽可能通用，灵活，高内聚，低耦合。

> 只通过属性输入，避免全局变量
> 设置默认值，使用更简单，不需要传太多参数
> 属性应该使用简单值，避免复杂数据结构，简单属性易于理解维护。
> 健壮性，属性的类型验证，props-type
> 灵活，适用于一切环境。比如不要设置宽度，适用于所有宽度。

> ## 继承 A is B
> 如果两个组件有一部分功能是一样的，那么可以抽象成一个父类，通过继承的方式，解决重复问
> 题。(PureComponent)
> 在项目中，可以创建一个base目录的基类，用于继承

> ## 组合 A has B
> Mixin 只适用于 ES5
> 为了将同样的功能添加到多个组件当中，你需要将这些通用的功能包装成一个mixin，然后导入到你的模块中。相比继承而已，React更喜欢这种组合的方式。
```js
    var SetintervalMixin = {
        componentWillMount: function() {
            this.times = [];
        },
        setInterval: function() {
            this.times.push(setInterval.apply(null, arguments))
        },
        componentWillMount: function() {
            this.intervals.forEach(clearInterval);
        }
    }
    const demo1 = React.createClass({
        mixins: [SetintervalMixin]
    })
```
> ## 高阶组件
高阶组件就是一个函数，传给它一个组件，它返回一个新的组件。  
其实就是为了组件之间的代码复用  
组件可能有着某些相同的逻辑，把这些逻辑抽离出来，放到高阶组件中进行复用。  
高阶组件内部的包装组件和被包装组件之间通过 props 传递数据。  

### Hooks







