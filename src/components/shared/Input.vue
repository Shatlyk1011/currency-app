<template>
  <input :type="type" :value="modelValue" @input="handleInput" />
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
    },
    type: {
      type: String,
      required: false,
      default: "text",
    },
  },

  emits: ["update:modelValue"],
  setup(_, context) {
    const handleInput = (e) => {
      context.emit("update:modelValue", e.target.value)
    }

    return { handleInput }
  },
}
</script>
