<template>
  <div class="quality_title">
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
  .quality_title{
    .quality-page-module:nth-of-type(1),.quality-page-module:nth-of-type(2){
      display: none;
    }
    .quality-page-module {
      margin-top: .3rem;
      .page-module-title {
        background: white;
          padding: 0.52rem 0rem 0rem;
          h2,h3 {
          text-align: center;
        }
        h2 {
          font-weight: bold;
          font-size: 0.36rem;
          color: #333;
          margin: 0.3rem 0;
        }
        h3 {
          font-size: 0.24rem;
          color: #808080;
          padding-bottom: 0.2rem;
        }
      }
      
    }

  }
</style>