<script setup lang="ts">
import { useRoute } from "vue-router";
import { onMounted } from "vue";
import { authorizationCode } from "../utils/request";

const route = useRoute();

onMounted(async () => {
  const code = route.query.code;
  await authorizationCode(code as string);
});
</script>
