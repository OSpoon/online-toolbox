<script setup lang="ts">
import axios from "axios";
import { useRoute } from "vue-router";
import { setLocalStorageWithExpiry } from "../utils";

const route = useRoute();
const code = route.query.code;
const redirect_uri = "https://online-toolbox.vercel.app/authorize";

axios
  .post("https://gitee.com/oauth/token", {
    grant_type: "authorization_code",
    code,
    client_id: import.meta.env.VITE_VERCEL_CLIENT_ID,
    client_secret: import.meta.env.VITE_VERCEL_CLIENT_SECRET,
    redirect_uri,
  })
  .then((res) => {
    console.log(res.data);
    const { access_token, refresh_token, created_at, expires_in } = res.data;
    setLocalStorageWithExpiry(
      "access_token",
      access_token,
      created_at,
      expires_in
    );
    setLocalStorageWithExpiry(
      "refresh_token",
      refresh_token,
      created_at,
      expires_in
    );
    window.close();
  });
</script>

<template>
  <div></div>
</template>

<style scoped></style>
