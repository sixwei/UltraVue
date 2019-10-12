<template>
  <div class="navbar">
    <div class="navbar-title">vue模板定制演示项目</div>
    <div class="user-operate">
      <div class="user-logo">
        <Icon type="ios-contact" size="30" />
      </div>
      <div class="user-name">admin</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {},
  methods: {}
};
</script>

<style lang="less" scoped>
.navbar {
  height: 60px;
  width: 100%;
  overflow: hidden;
  display: flex;
  color: white;
  .navbar-title{
    flex: 1;
    font-weight: bolder;
  }
  .user-operate{
    flex:0 0 30px;
    margin-right: 10px;
    display: inherit;
  }

}
</style>
