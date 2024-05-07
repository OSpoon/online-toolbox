<script lang="ts" setup>
import { h, ref, onMounted } from "vue";
import { createFromIconfontCN } from "@ant-design/icons-vue";
import { MenuProps } from "ant-design-vue";
import { content, trees } from "./utils/request";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/c/font_4535631_1vmccnee7pe.js",
});

const current = ref<string[]>(["gitee"]);
const items = ref<MenuProps["items"]>();

const onSelectMenuItem = async (menu: any) => {
  const data = await content({
    owner: "xrkj",
    repo: "myblog",
    path: menu.item.originItemValue.label,
  });
  console.log(data);
};

onMounted(async () => {
  const data = await trees({
    owner: "xrkj",
    repo: "myblog",
  });
  console.log("mounted", data);
  items.value = [
    {
      key: "gitee",
      icon: () => h(IconFont, { type: "icon-gitee" }),
      label: "Gitee",
      title: "Gitee",
      children: data.tree.map((i: any) => {
        return {
          key: i.sha,
          label: i.path,
        };
      }),
    },
  ];
});
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
        @select="onSelectMenuItem"
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
  /* padding: 24px; */
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style>
