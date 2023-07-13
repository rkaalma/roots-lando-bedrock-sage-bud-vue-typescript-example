<template>
  <div>
    <H1>Example vue app</H1>
    <p v-if="works">Vue app has loaded!</p>
    <p v-else>Loading...</p>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      works: false as boolean,
    };
  },

  mounted() {
    this.startLoading();
  },

  methods: {
    startLoading(): void {
      setTimeout(() => {
        this.works = true;
      }, 3000);
    },
  },
};
</script>
