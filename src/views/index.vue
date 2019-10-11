<template>
  <dir>
   

    <div class="page-wrapper">
      <header id="header" class="clearfix">
        <div class="ant-row">
          <Menu mode="horizontal" theme="dark" :active-name="active" @on-select="changeMenu">
            <div class="layout-logo">
              <img class="Img" :src="logopath" v-if="logopath" />
            </div>
            <template v-for="item in appmenuconfig">
              <MenuItem v-if="!item.item&&item.show=='1'" :key="item.id" :name="item.link">
                <!-- <Icon :type="item.icon" :key="item.id" ></Icon> -->
                {{ item.name }}
              </MenuItem>

              <Submenu v-if="item.item&&item.show=='1'" :name="item.link" :key="item.name">
                <template slot="title">
                  <!-- <Icon :type="item.icon"></Icon> -->
                  <span class="layout-text">{{ item.name }}</span>
                </template>
                <template v-for="child in item.item">
                  <MenuItem
                    :name="child.link"
                    :key="child.id"
                    v-if="child.show=='1'"
                    class="ivu-select-dropdown"
                  >
                    <!-- <Icon :type="child.icon" :key="child.name"></Icon> -->
                    {{ child.name }}
                  </MenuItem>
                </template>
              </Submenu>
            </template>
            <div class="user">
              <div class="user-icon">
                <!-- <Icon type="ios-contact" size="30" v-on:click="changePwd" style="cursor:pointer"/> -->
                <Icon type="ios-contact" size="30" />
              </div>
              <div class="user-name">{{userName}}</div>
              <a v-on:click="logout">注销</a>
            </div>
          </Menu>
        </div>
      </header>
    </div>
    <router-view></router-view>
  </dir>
</template>
<script>
import API from "@/api";
import appmenuconfig from "../utils/AppMenuConfig";
import Cookie from "js-cookie";
import axios from "axios";
import store from "@/store";
import ultrafun from "../utils/fun";

console.log("########", appmenuconfig.menu_level_one);
export default {
  data() {
    return {
      appmenuconfig: appmenuconfig.menu_level_one,
      active: "home",
      userName: "sixwei",
      mvtoken: true,
      logopath: API.nmswPath + "/logo.png"
    };
  },
  mounted() {
    // this.initAppMenu();
  },
  methods: {
    //现在设置的token
    getToken() {
      let dataparams = {
        username: username,
        password: Cookie("ipvalue")
      };
      console.log("参数是TTTTTTTTTTTTTTTTTTTTTTT", dataparams);
      axios.post(API.login.getToken, dataparams).then(res => {
        console.log("请求token的结果是", res);
        if (res.token) {
          store.state.app.mvtoken = res.token;
          this.mvtoken = true;
          this.getUser();
          this.initAppMenu();
        } else {
          this.$Message.info("获取用户权限失败，请重新登陆");
        }
      });
    },

    //appmenuconfig.menu_level_one
    // 初始化菜单
    initAppMenu() {
      let queryparams = {
        account: username,
        appName: "NMS"
      };
      this.axios
        .get(API.index.getmapresouce, { params: queryparams })
        .then(res => {
          let appMenu = res;

          //组织数据
          console.log("遍历后的数据是", appMenu);
          let newAppMenu = appmenuconfig.menu_level_one.map(levelone => {
            if (appMenu[levelone.id] == true) {
              levelone.show = "1";
            }
            if (levelone.hasOwnProperty("item")) {
              levelone.item.map(leveltwo => {
                if (appMenu[leveltwo.id] == true) {
                  leveltwo.show = "1";
                }
              });
            }
            return levelone;
          });
          this.appmenuconfig = newAppMenu;
        });
    },
    changeMenu(active) {
      console.log("active", active);
      //this.$emit("on-change", active);
      if (active == "bigView") {
        this.toBigView();
      } else {
        this.$router.push({ name: active });
      }
    },
    getUser() {
      this.userName = Cookie.get("user");
      console.log("@@@@", this.$route.name);
      this.active = this.$route.name;
    },
    logout() {
      console.log("登出");
      let date = Date.parse(new Date());
      Cookie.remove("user");
      Cookie.remove("userName");
      if (ultrafun.isValidIP(API.hostname) == false) {
        //域名访问;
        window.open(
          `${API.pasmUrl}` +
            "/ucas/logout?service=" +
            `${API.nmswPath}` +
            "/logout.jsp?timestamp=" +
            date,
          "_self"
        );
      } else {
        //内网设备
        window.open(
          `${API.pasmUrl}` +
            "/ucas/logout?service=" +
            `${API.nmswPath}` +
            "/index.html?timestamp=" +
            date,
          "_self"
        );
      }
    },
    changePwd() {
      console.log("点击我了");
      window.open(API.pasmUrl + "/pasm/userConf/pasmSelfHelpInfo.htm", "_self");
    },

    toBigView() {
      let query = {
        user: username
      };
      let bgurl = this.$router.resolve({
        path: "../bigView",
        query: query
      });

      window.open(bgurl.href, "_blank");
    }
  }
};
</script>
<style lang='less'>


.layout-logo {
  flex: 1;
  height: 30px;
  float: left;
  position: relative;
  margin-top: 13px;
  padding-left: 25px;
}


.user {
  display: flex;
  float: right;
  margin-right: 50px;
  margin-left: 25px;
}

.user-icon {
  margin-top: 5px;
}

.user-name {
  margin-left: 5px;
  margin-right: 20px;
}
</style>

