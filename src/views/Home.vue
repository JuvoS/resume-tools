<template>
  <div class="home">
    <h1>This is a home page</h1>
    <InfoComp></InfoComp>
  </div>
</template>

<script>
import InfoComp from "../components/info/";
export default {
  name: "home",
  components: { InfoComp }
};
</script>
