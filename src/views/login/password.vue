<template>
  <div>
    <div class="container">
      <form action="/blog/create" method="POST" class="tabBox">
      <div class="tab_input">
        <div class="form-group up">
          <input type="username" class="form-control" id="username" placeholder="请输入用户名">
        </div>
        <div class="form-group">
          <input type="password" class="form-control" id="password" placeholder="请输入密码">
        </div>
      </div>
      </form>
      <button type="submit" class="btn btn-default btn-lg btn-block" @click="handleClick()">确认</button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick(){
      login()
    }
  }
}
function login() {
    var userName = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if(!localStorage.hasOwnProperty(userName)) {
        alert("用户名错误");
        location.href='/login/password'
    } else if(localStorage.getItem(userName) == password) {
        // alert("Welcome, " + userName);
        location.href= '/center'
    } else {
        alert("密码错误");
        // window.open('/login')
        // redirect: "/login/password"
        location.href='/login/password'
    }     
}
</script>
<style lang="scss" scoped>
  .container {
    .tabBox {
      background: white;
      // display: flex;
      // flex-direction: column;
      // justify-content: space-around;
      .tab_input {
        .form-group {
          padding: 0 0.3rem;
          margin: 0;
          input {
            border: none !important;
            border-radius: 0;
            height: 1rem;
            font-size: 0.28rem;
            color: #000;
            font-family: 'PingFangSC-Regular';
            padding: 0;
          }
          input:focus {
            border: none !important;
            box-shadow: none;
          }
        }
        .up {
          input {
            border-bottom: 1px solid #EAEAEA;
          }
        }
      }
    }
      .btn {
        border-radius: 0;
        background: #FFD444;
        font-size: 0.28rem;
        border: none;
        cursor: pointer;
        height: 0.88rem;
        margin-top: 0.3rem;
      }
  }
</style>
