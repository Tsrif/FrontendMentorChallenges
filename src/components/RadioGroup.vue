<template>
  <fieldset class="flex flex-col gap-2">
    <legend v-if="label" class="font-medium">
      {{ label }} <span v-if="required" class="text-[#a6c6ba] ml-1">*</span>
    </legend>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <label v-for="(field, idx) in fieldNames" :key="idx" class="block cursor-pointer">
        <input
          type="radio"
          :name="groupName"
          class="peer sr-only"
          :value="modelValues[idx]"
          :checked="isChecked(modelValues[idx])"
          @change="onChange(modelValues[idx])"
        />

        <div
          class="flex items-center gap-3 rounded-lg border px-3 py-2 sm:px-4 sm:py-2.5 border-[#a6c6ba] text-gray-700 transition-colors hover:border-[#0c7d69] peer-checked:border-[#0c7d69] peer-focus-visible:ring-2 peer-focus-visible:ring-[#0c7d69] peer-focus-visible:ring-offset-1"
        >
          <span
            class="h-5 w-5 rounded-full border border-[#a6c6ba] grid place-items-center transition-colors peer-checked:border-[#0c7d69]"
            aria-hidden="true"
          >
            <span
              class="h-2.5 w-2.5 rounded-full bg-[#0c7d69] transform transition-transform duration-150 scale-0 peer-checked:scale-100"
            />
          </span>

          <span class="font-medium">{{ field }}</span>
        </div>
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
