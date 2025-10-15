<template>
  <div class="flex flex-col">
    <div class="flex items-center pb-2">
      <label v-if="label" class="mr-1" :class="labelTextSize">{{ label }}</label>
      <span v-if="required" class="text-[#033b30]" :class="labelTextSize">*</span>
    </div>
    <input
      :type="type"
      :class="inputStyling"
      class="border border-gray-400 rounded-md px-2 py-1 focus:outline-none focus:border-[#0c7d69] align-text-top"
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
  labelTextSize: {
    type: String,
    default: 'text-xs',
  },
  inputStyling: {
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
