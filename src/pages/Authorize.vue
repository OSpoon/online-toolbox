<script setup lang="ts">
import axios from "axios";
import { useRoute } from "vue-router";

const route = useRoute();
const code = route.query.code;
const client_id =
  "250ae102f9d11277e9c0268104e4dc5b7b75c3f697033e88f4c54417d6ddd01c";
const client_secret =
  "3192a206423155e0f779592255c69b1c747283204c3aa7bcfdd44ab6bf85c572";
const redirect_uri = "https://online-toolbox.vercel.app/authorize";

axios
  .post("https://gitee.com/oauth/token", {
    grant_type: "authorization_code",
    code,
    client_id,
    client_secret,
    redirect_uri,
  })
  .then((res) => {
    console.log(res.data);
  });
</script>

<template>
  <div></div>
</template>

<style scoped></style>
