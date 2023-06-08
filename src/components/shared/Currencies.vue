<template>
  <div class="currencies">
    <div class="currency" v-for="currency in currencies" :key="currency">
      {{ currency }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  currencies: {
    required: true,
  },
})
</script>

<style lang="scss">
@import "@/globals";
.currencies {
  width: 100%;
  max-height: 30rem;
  overflow-y: scroll;
  font-family: "inter", sans-serif;
  background-color: $color-accent;
  padding: 1rem 1.6rem;
  z-index: 10;
  box-sizing: border-box;
  border-radius: 4px;

  .currency {
    cursor: pointer;
    line-height: 1.2;
    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }
}
</style>
