<script lang="ts" setup>
import { h, ref } from "vue";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue";
import { MenuProps } from "ant-design-vue";
const current = ref<string[]>(["mail"]);
const items = ref<MenuProps["items"]>([
  {
    key: "mail",
    icon: () => h(MailOutlined),
    label: "Navigation One",
    title: "Navigation One",
  },
  {
    key: "app",
    icon: () => h(AppstoreOutlined),
    label: "Navigation Two",
    title: "Navigation Two",
  },
  {
    key: "sub1",
    icon: () => h(SettingOutlined),
    label: "Navigation Three - Submenu",
    title: "Navigation Three - Submenu",
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    key: "alipay",
    label: h(
      "a",
      { href: "https://antdv.com", target: "_blank" },
      "Navigation Four - Link"
    ),
    title: "Navigation Four - Link",
  },
]);
</script>

<template>
  <a-layout>
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <div class="logo" />
      <a-menu
        theme="dark"
        v-model:selectedKeys="current"
        mode="horizontal"
        :items="items"
      />
    </a-layout-header>
    <a-layout-content class="layout-content">
      <a-breadcrumb :style="{ margin: '16px 0' }">
        <a-breadcrumb-item>XRKJ</a-breadcrumb-item>
        <a-breadcrumb-item>myblog</a-breadcrumb-item>
        <a-breadcrumb-item>1715009586607.md</a-breadcrumb-item>
      </a-breadcrumb>
      <div class="content">
        <router-view></router-view>
      </div>
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }">
      Online Toolbox ©2024 Created by Xiao Xin
    </a-layout-footer>
  </a-layout>
</template>

<style scoped>
#components-layout-demo-fixed .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
.site-layout .site-layout-background {
  background: #fff;
}

[data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
}

.layout-content {
  padding: 0 50px;
  margin-top: 64px;
  min-height: auto;
  display: flex;
  flex-direction: column;
}

.content {
  background: #fff;
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style>
