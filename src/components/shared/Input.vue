<template>
  <OnClickOutside @trigger="show = false" :key="label">
    <div class="input-wrap">
      <label>{{ label }}</label>
      <input
        @focus="show = true"
        class="input"
        :type="type"
        :value="modelValue"
        @input="handleInput"
      />

      <div class="currencies" v-if="currencies && show">
        <div
          @click="handleSelected(currency), (show = false)"
          class="currency"
          v-for="currency in currencies"
          :key="currency"
        >
          {{ currency }}
        </div>
      </div>
    </div>
  </OnClickOutside>
</template>

<script setup>
import { computed, ref, watch } from "vue"

import { OnClickOutside } from "@vueuse/components"

const props = defineProps({
  modelValue: {
    type: String,
  },
  type: {
    type: String,
    required: false,
    default: "text",
  },

  label: {
    type: String,
    required: true,
  },

  currencies: {
    required: false,
    type: Object,
  },
})

const emit = defineEmits(["update:selected", "update:modelValue"])
const show = ref(false)

const handleInput = (e) => {
  emit("update:modelValue", e.target.value)
}

const handleSelected = (payload) => {
  emit("update:selected", payload, props.label)
}

const currencies2 = computed(() => {
  curr = props.currencies
})
</script>

<style lang="scss">
@import "@/globals";

.input-wrap {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;

  label {
    font-size: 1.4rem;
    font-weight: 500;
  }
  .input {
    all: unset;
    border-radius: 6px;
    padding: 6px;
    border: 1px solid $color-text;

    &:focus {
      border: 1px solid $color-main;
    }
  }

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

    position: absolute;
    top: 6.4rem;

    .currency {
      cursor: pointer;
      line-height: 1.2;
      &:not(:last-child) {
        margin-bottom: 5px;
      }
    }
  }
}
</style>
