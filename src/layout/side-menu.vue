<template>
  <div class="side-menu-wrapper">
    <slot></slot>
    <Menu
      ref="menu"
      :active-name="actionname"
      theme="dark"
      v-show="!collapsed"
      @on-select="handleSelect"
    >
      <template v-for="item in menuList">
        <template v-if="item.item">
          <Submenu :key="item.name" :name="item.link">
            <template slot="title">
              <Icon :custom="'iconfont '+item.icon" />
              <span class="layout-text">{{ item.name }}</span>
            </template>
            <template v-for="child in item.item">
              <MenuItem v-if="child.show" :key="child.id" :name="child.link">
                <Icon :custom="'iconfont '+item.icon" />
                {{ child.name }}
              </MenuItem>
            </template>
          </Submenu>
        </template>
        <template v-else>
          <menu-item :key="item.id" :name="item.link">
            <Icon :custom="'iconfont '+item.icon" />
            <span>{{item.name}}</span>
          </menu-item>
        </template>
      </template>
    </Menu>
    <!-- <div class="menu-collapsed" v-show="collapsed" :list="menuList">
      <template v-for="item in menuList">
        <collapsed-menu v-if="item.children && item.children.length > 1" @on-click="handleSelect" hide-title :root-icon-size="rootIconSize" :icon-size="iconSize" :theme="theme" :parent-item="item" :key="`drop-menu-${item.name}`"></collapsed-menu>
        <Tooltip transfer v-else :content="showTitle(item.children && item.children[0] ? item.children[0] : item)" placement="right" :key="`drop-menu-${item.name}`">
          <a @click="handleSelect(getNameOrHref(item, true))" class="drop-menu-a" :style="{textAlign: 'center'}"><common-icon :size="rootIconSize" :color="textColor" :type="item.icon || (item.children && item.children[0].icon)"/></a>
        </Tooltip>
      </template>
    </div>-->
  </div>
</template>
<script>
import appmenuconfig from "@/utils/AppMenuConfig";

// import SideMenuItem from "./side-menu-item.vue";
// import CollapsedMenu from './collapsed-menu.vue'

export default {
  name: "SideMenu",
  components: {
    // SideMenuItem
    // CollapsedMenu
  },
  props: {},
  data() {
    return {
      actionname:"home",
      collapsed: false,
      menuList: appmenuconfig.menu_level_one
    };
  },
  methods: {
    handleSelect() {}
  },
  watch: {},
  mounted() {}
};
</script>
<style lang="less" scoped>
.layout {
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.ivu-menu {
  .ivu-icon {
    font-size: 18px;
  }
}
.ivu-menu.ivu-menu-dark.ivu-menu-vertical {
  width: 200px !important;
}
.content-layout {
  flex: 1;
  .ivu-layout-content {
    flex: 1 !important;
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
  width: 180px;
  height: 60px;
  background: url("../../static/logo.png") no-repeat;
}
.ivu-menu-dark {
  background: #19193d;
  width: 200px !important;
}

.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item {
  color: #fff;
}
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
  background: #2962ba;
}
</style>
