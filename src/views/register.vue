<template>
  <div class="register_wrap">
    <div class="header_other_register">
      <h3>注册</h3>
      <router-link tag="a" to="/login">登录</router-link>
    </div>
    <div class="container">
      <form action="/blog/create" method="POST" class="tabBox" id="signup">
          <div class="form-group up">
            <input type="username" class="form-control" id="username" placeholder="请输入手机号" />
          </div>
          <div class="form-group">
            <input type="password" class="form-control" id="password" placeholder="请输入验证码" />
          </div>
      </form>
      <button type="submit" class="btn btn-default btn-lg btn-block" @click="handleClick()">注册</button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick(){
      signup()
    }
  }
}

   
function signup() {     
    var username = document.getElementById('username').value;    
    var password = document.getElementById('password').value;    
    localStorage.setItem(username, password);
    
    document.getElementById("signup").reset();
    // alert("注册成功"); 
    location.href="/login"   
}
</script>
<style lang="scss" scoped>
.register_wrap {
    height: 4.2rem;
    // display: flex;
    .header_other_register {
      display: flex;
      background: #fff;
      height: 0.88rem;
      align-items: center;
      padding: 0rem 0.2rem 0rem 0.2rem;
      border-bottom: 1px solid #f5f5f5;
      font-size: .28rem;
      // justify-content: center;
      a {
        display: inline-block;
        width: 0.64rem;
        height: 0.64rem;
        line-height: 0.64rem;
        color: #2C3030;
        font-size: .3rem;
      }
      h3 {
        color: #000;
        font-size: 0.34rem;
        font-weight: bold;
        margin: auto; 
        line-height: 0.34rem;
      }
    }
    .container {
      margin-top: .3rem;
      .tabBox {
        background: white;
        // display: flex;
        // flex-direction: column;
        // justify-content: space-around;
        .form-group {
          padding: 0 0.3rem;
          margin: 0;
          input {
            // border-style: none;
            border: none !important;
            border-radius: 0;
            height: 1rem;
            font-size: 0.28rem;
            color: #000;
            font-family: "PingFangSC-Regular";
            padding: 0;
          }
          input:focus {
            border: none !important;
            box-shadow: none;
          }
        }
        // .up {
        //   input {
        //     // border-bottom: 1px solid #eaeaea;
        //   }
        // }
      }
      .btn {
        border-radius: 0;
        background: #ffd444;
        font-size: 0.28rem;
        border: none;
        cursor: pointer;
        height: 0.88rem;
        margin-top: 1.3rem;
      }
  }
}
</style>
