<script setup lang="ts">
import { ref } from "vue";
import { MdEditor } from "md-editor-v3";
import "md-editor-v3/lib/style.css";

const text = ref("# Hello Editor");
const client_id =
  "250ae102f9d11277e9c0268104e4dc5b7b75c3f697033e88f4c54417d6ddd01c";
const redirect_uri = "https://online-toolbox.vercel.app/authorize";
window.open(
  `https://gitee.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code
`,
  "_blank",
  "width=800,height=600,left=100,top=100"
);
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
</script>

<template>
  <MdEditor v-model="text" />
</template>

<style scoped>
.md-editor {
  flex: 1;
}
</style>
