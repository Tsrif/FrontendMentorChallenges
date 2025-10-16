<template>
  <div class="bg-[#e1f1e6] w-screen h-screen flex flex-col justify-center items-center">
    <form class="bg-white rounded-2xl shadow-sm p-7 space-y-4" novalidate @submit.prevent="onSubmit">
      <div class="grid grid-cols-2 gap-4">
        <h1 class="font-bold text-2xl col-span-2">Contact Us</h1>

        <TextFieldInput
          v-model="form.firstName"
          label="First Name"
          required
          :errorMessage="errors.firstName"
          @blur="touch('firstName')"
        />

        <TextFieldInput
          v-model="form.lastName"
          label="Last name"
          required
          :errorMessage="errors.lastName"
          @blur="touch('lastName')"
        />

        <TextFieldInput
          v-model="form.emailAddress"
          class="col-span-2"
          label="Email Address"
          type="email"
          required
          :errorMessage="errors.emailAddress"
          @blur="touch('emailAddress')"
        />

        <RadioGroup
          label="Query Type"
          class="col-span-2 text-xs"
          :fieldNames="['General Enquiry', 'Support Request']"
          :modelValues="['GeneralEnquiry', 'SupportRequest']"
          v-model="form.queryType"
          required
          :errorMessage="errors.queryType"
          @blur="touch('queryType')"
        />

        <div class="flex flex-col col-span-2">
          <div class="flex items-center pb-2">
            <label class="mr-1 text-xs" :for="ids.message">Message</label>
            <span class="text-[#033b30] text-xs">*</span>
          </div>
          <textarea
            :id="ids.message"
            v-model="form.message"
            rows="6"
            class="border rounded-md px-2 py-1 focus:outline-none focus:border-[#0c7d69] resize-y min-h-28"
            :class="errors.message ? 'border-red-600' : 'border-gray-400'"
            @blur="touch('message')"
            aria-invalid="true"
            :aria-describedby="errors.message ? ids.messageErr : undefined"
          />
          <p v-if="errors.message" :id="ids.messageErr" class="text-[9px] text-red-600 ml-1">
            {{ errors.message }}
          </p>
        </div>

        <label class="flex items-start gap-2 col-span-2 text-xs">
          <input
            type="checkbox"
            v-model="form.consentBox"
            class="accent-[#0c7d69] mt-0.5"
            @blur="touch('consentBox')"
          />
          <span>I consent to being contacted by the team <span class="text-[#033b30]">*</span></span>
        </label>
        <p v-if="errors.consentBox" class="text-[9px] text-red-600 col-span-2 -mt-2">{{ errors.consentBox }}</p>

        <button
          type="submit"
          class="col-span-2 bg-[#0c7d69] rounded-md text-white h-10 text-xs hover:cursor-pointer hover:bg-[#0e584a]"
          :disabled="submitting"
        >
          Submit
        </button>
      </div>
    </form>
    <Link href="https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj">Link to challenge</Link>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import { useToast } from 'vue-toastification'

type Form = {
  firstName: string
  lastName: string
  emailAddress: string
  message: string
  consentBox: boolean
  queryType: '' | 'GeneralEnquiry' | 'SupportRequest'
}

const toast = useToast()
const submitting = ref(false)
const ids = {
  message: 'msg',
  messageErr: 'msg-err',
}

const form = reactive<Form>({
  firstName: '',
  lastName: '',
  emailAddress: '',
  message: '',
  consentBox: false,
  queryType: '',
})

type Errors = Partial<Record<keyof Form, string>>
const errors = reactive<Errors>({})
const touched = reactive<Record<keyof Form, boolean>>({
  firstName: false,
  lastName: false,
  emailAddress: false,
  message: false,
  consentBox: false,
  queryType: false,
})

const rules = {
  firstName: (v: string) => (!!v ? '' : 'First name is required'),
  lastName: (v: string) => (!!v ? '' : 'Last name is required'),
  emailAddress: (v: string) =>
    !v ? 'Email is required' : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Email address is invalid',
  message: (v: string) => (!!v ? '' : 'Message is required'),
  consentBox: (v: boolean) => (v ? '' : 'You must consent to be contacted'),
  queryType: (v: string) => (!!v ? '' : 'Query type is required'),
}

function validateField<K extends keyof Form>(key: K) {
  // @ts-expect-error generic pipe
  const err = rules[key](form[key])
  if (touched[key]) {
    if (err) errors[key] = err
    else delete errors[key]
  }
  return !err
}

function touch<K extends keyof Form>(key: K) {
  touched[key] = true
  validateField(key)
}

Object.keys(form).forEach(k => {
  watch(
    () => (form as any)[k],
    () => validateField(k as keyof Form)
  )
})

function validateAll() {
  ;(Object.keys(rules) as (keyof Form)[]).forEach(k => (touched[k] = true))
  const results = (Object.keys(rules) as (keyof Form)[]).map(validateField)
  return results.every(Boolean)
}

async function onSubmit() {
  if (!validateAll()) {
    toast.error('Please fix the errors in the form', { timeout: 2000 })
    return
  }
  submitting.value = true
  try {
    toast.success('Submit success', { timeout: 2000 })
  } finally {
    submitting.value = false
  }
}
</script>
