<template>
  <div class="flex flex-col">
    <div class="flex items-center">
      <label v-if="label" class="mr-1">{{ label }}</label>
      <span v-if="required" class="text-[#a6c6ba]">*</span>
    </div>
    <input
      :type="type"
      class="border border-gray-400 rounded-md px-2 py-1"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  required: {
    type: Boolean,
    default: true,
  },
  label: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])
</script>
