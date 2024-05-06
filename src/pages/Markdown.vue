<script setup lang="ts">
import { onMounted, ref } from "vue";
import { MdEditor } from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import { getLocalStorageWithExpiry, openWindow } from "../utils";
import { createArticle, refreshToken } from "../utils/request";

const text = ref("# Hello Editor");

onMounted(async () => {
  if (!getLocalStorageWithExpiry("access_token")) {
    openWindow();
  } else {
    await refreshToken();
  }
});

// const onUploadImg = async (files, callback) => {
//   const res = await Promise.all(
//     files.map((file) => {
//       return new Promise((rev, rej) => {
//         const form = new FormData();
//         form.append("file", file);

//         axios
//           .post("/api/img/upload", form, {
//             headers: {
//               "Content-Type": "multipart/form-data",
//             },
//           })
//           .then((res) => rev(res))
//           .catch((error) => rej(error));
//       });
//     })
//   );

//   callback(res.map((item) => item.data.url));
// };

const onSave = async (v: string) => {
  console.log(v);
  await createArticle(v, {
    owner: "xrkj",
    repo: "myblog",
    path: `${Date.now()}.md`,
  });
};
</script>

<template>
  <MdEditor v-model="text" @onSave="onSave" />
</template>

<style scoped>
.md-editor {
  flex: 1;
}
</style>
