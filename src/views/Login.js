import React from 'react';
import {Link} from 'react-router-dom'

export default class Login extends React.Component{
    constructor(){
        super();
        this.state={
            meituanLogin:true,
            mobileLogin:false
        }
        this.meituanHandle=this.meituanHandle.bind(this);
        this.mobileHandle=this.mobileHandle.bind(this);
    }
    render(){
        return(
            <div className="page-wrap">
                <header>
                    <Link className="goback" to="/">返回</Link>
                    <h1>猫眼电影</h1>
                </header>
                <main>
                    <section className="login-wrap">
                        <div>
                            <span onClick={this.meituanHandle}>美团账号登录</span> |
                            <span onClick={this.mobileHandle}>手机验证登录</span>
                        </div>
                        <div className="meituan-login" style={this.state.meituanLogin?{display:"flex"}:{display:"none"}}>
                            <input type="text" placeholder="账户名/手机号/邮箱" ref="userName"/>
                            <input type="text" placeholder="密码"/>
                        </div>
                        <div className="mobile-login" style={this.state.mobileLogin?{display:"flex"}:{display:"none"}}>
                            <div>
                                <input type="text"placeholder="请输入手机号" ref="phoneNum"/>
                                <input type="button" value="获取验证码"/>
                            </div>
                            <input type="text" placeholder="请输入验证码"/>
                        </div>
                        <input type="button" value="登录" onClick={this.handleClick.bind(this)}/>
                    </section>
                </main>
            </div>
        )
    }
    handleClick(){
        const userName=this.refs.userName.value;
        const phoneNum=this.refs.phoneNum.value;
        localStorage.userName=userName || phoneNum;
        if(localStorage.userName){
            this.props.history.go(-1)
        }
    }
    meituanHandle(){
        this.setState({
            meituanLogin:true,
            mobileLogin:false
        })
    }
    mobileHandle(){
        this.setState({
            meituanLogin:false,
            mobileLogin:true
        })
    }
}