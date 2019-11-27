import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
import "./static/index.scss"
import {Provider} from "react-redux";
import store from "./store"



ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root"),
    () => {
        console.log("渲染成功")
    }
)

/*
    
    react-redux:
        react-redux是redux的一个辅助工具

        cnpm install react-redux -S


        react-redux是由2部分组成
            1、Provider:  底层原理是用的context跨组件传值
                Provider组件由一个属性store值为store



            2、connect:   高阶组件+柯里化函数
                第一个函数中有2个参数
                    mapStateToProps：映射store中state的数据到组件的props身上
                    mapDispatchToProps：映射组件的方法到组件的props身上(主要用来编写组件的业务路基)

                第二个函数的参数是一个组件
                


*/

