<template>
  <fieldset class="flex flex-col gap-2">
    <div class="flex items-center">
      <label v-if="label" class="mr-1 text-xs">{{ label }}</label>
      <span v-if="required" class="text-[#033b30] text-xs">*</span>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <label
        v-for="(field, idx) in fieldNames"
        :key="idx"
        class="flex items-center gap-2 border border-gray-400 rounded-md p-2 cursor-pointer select-none hover:border-[#0c7d69] has-[:checked]:border-[#0c7d69]"
      >
        <input
          type="radio"
          :name="groupName"
          class="accent-[#0c7d69] ml-2"
          :value="modelValues[idx]"
          :checked="isChecked(modelValues[idx])"
          @change="onChange(modelValues[idx])"
        />
        <span class="font-medium">{{ field }}</span>
      </label>
    </div>
  </fieldset>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits, onMounted } from 'vue'

const props = defineProps({
  label: { type: String, default: '' },

  fieldNames: {
    type: Array,
    required: true,
    validator: a => Array.isArray(a) && a.length > 0,
  },

  modelValues: {
    type: Array,
    required: true,
    validator: a => Array.isArray(a) && a.length > 0,
  },

  modelValue: {
    type: [String, Number, Boolean, Object],
    default: null,
  },

  asMapKey: {
    type: String,
    default: null,
  },

  name: { type: String, default: '' },

  required: { type: Boolean, default: false },
})

const emit = defineEmits(['update:modelValue', 'change'])

const uid = Math.random().toString(36).slice(2, 9)
const groupName = computed(() => props.name || `rg-${uid}`)

onMounted(() => {
  if (props.fieldNames.length !== props.modelValues.length) {
    console.warn('[RadioGroup] "fieldNames" and "modelValues" should have the same length.')
  }
})

const currentValue = computed(() => {
  if (props.asMapKey && props.modelValue && typeof props.modelValue === 'object') {
    return props.modelValue[props.asMapKey]
  }
  return props.modelValue
})

function isChecked(val: any) {
  return currentValue.value === val
}

function onChange(newVal: any) {
  if (props.asMapKey && props.modelValue && typeof props.modelValue === 'object') {
    emit('update:modelValue', {
      ...props.modelValue,
      [props.asMapKey]: newVal,
    })
  } else if (props.asMapKey && typeof props.modelValue !== 'object') {
    emit('update:modelValue', { [props.asMapKey]: newVal })
  } else {
    emit('update:modelValue', newVal)
  }
  emit('change', newVal)
}
</script>
