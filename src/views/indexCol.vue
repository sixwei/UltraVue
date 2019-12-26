<template>
  <div class="layout">
    <Layout :style="{minHeight: '100vh'}">
      <Sider style="width:200px" id="custom-side">
        <Logo />
        <Menu :active-name="actionname" theme="dark" @on-select="changeMenu">
         <side-menu></side-menu>
        </Menu>
      </Sider>
      <Layout class="content-layout">
        <Header :style="{background: '#19193d', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
          <Navbar />
        </Header>
        <Content :style="{margin: '5px 5px 10px 5px'}">
          <router-view></router-view>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import API from "@/api";
import appmenuconfig from "@/utils/AppMenuConfig";
import Cookie from "js-cookie";
import ultrafun from "@/utils/ultrafun";

import { AppMain, Navbar, Logo,SideMenu } from "@/layout";

export default {
  data() {
    return {
      appmenuconfig: appmenuconfig.menu_level_one,
      actionname: "home"
    };
  },
  components: { Logo, Navbar, AppMain,SideMenu },
  mounted() {

     
  },
  methods: {
    changeMenu(active) {
      console.log("active", active);
      this.activename = active;
      this.$router.push({ name: active });
    }
  }
};
</script>
<style lang='less' scoped>
.layout {
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  .ivu-menu {
    .ivu-icon {
      font-size: 18px;
    }
  }
  .ivu-menu.ivu-menu-dark.ivu-menu-vertical{
    width: 200px!important;
  }
  .content-layout{
    flex: 1;
    .ivu-layout-content{
      flex: 1!important;
    }
  }

  .ivu-layout-header {
    height: 60px;
    line-height: 60px;
    font-size: 18px;
    padding: 0 15px;
  }
  .ivu-layout-sider {
    overflow: hidden;
    background: #19193d;
  }
  .logo-img {
    width: 200px;
    height: 60px;
    background: url(/static/logo.png) no-repeat;
  }
  .ivu-menu-dark {
    background: #19193d;
    width: 200px!important;
  }
  
   
  
  .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item {
    color: #fff;
  }
  .ivu-menu-dark.ivu-menu-vertical
    .ivu-menu-item-active:not(.ivu-menu-submenu) {
    background: #2962ba;
  }
}
</style>
