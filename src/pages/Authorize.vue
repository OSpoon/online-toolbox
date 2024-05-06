<script setup lang="ts">
import axios from "axios";
import { useRoute } from "vue-router";

const route = useRoute();
const code = route.query.code;
const redirect_uri = "https://online-toolbox.vercel.app/authorize";

axios
  .post("https://gitee.com/oauth/token", {
    grant_type: "authorization_code",
    code,
    client_id: import.meta.env.CLIENT_ID,
    client_secret: import.meta.env.CLIENT_SECRET,
    redirect_uri,
  })
  .then((res) => {
    console.log(res.data);
    window.close();
  });
</script>

<template>
  <div></div>
</template>

<style scoped></style>
