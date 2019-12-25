<template>
  <div>
    <div class="container">
      <form action="/blog/create" method="POST" class="tabBox">
        <div class="tab_input">
          <div class="form-group up">
            <input type="text" class="form-control" name="title" placeholder="请输入手机号" />
          </div>
          <div class="form-group">
            <input type="password" class="form-control" name="title" placeholder="请输入验证码" />
          </div>
        </div>
      </form>
      <button type="submit" class="btn btn-default btn-lg btn-block">确认</button>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.container {
  // padding: 0 0.3rem;
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
          font-family: "PingFangSC-Regular";
          padding: 0;
        }
        input:focus {
          border: none !important;
          box-shadow: none;
        }
      }
      .up {
        input {
          border-bottom: 1px solid #eaeaea;
        }
      }
    }
  }
  .btn {
    border-radius: 0;
    background: #ffd444;
    font-size: 0.28rem;
    border: none;
    cursor: pointer;
    height: 0.88rem;
    margin-top: 0.3rem;
  }
}
</style>
