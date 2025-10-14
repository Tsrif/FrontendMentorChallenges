<template>
  <div class="bg-[#e1f1e6] w-screen h-screen flex flex-col justify-center items-center">
    <div class="bg-white rounded-2xl shadow-sm p-7 space-y-4">
      <div class="grid grid-cols-2 gap-4">
        <h1 class="font-bold text-2xl">Contact Us</h1>
        <div></div>
        <TextFieldInput :model-value="firstName" label="First Name" :required="true" />
        <TextFieldInput :model-value="lastName" label="Last name" :required="true" />
        <TextFieldInput class="col-span-2" :model-value="emailAddress" label="Email Address" :required="true" />
        <RadioGroup
          label="Query Type"
          :fieldNames="['General Enquiry', 'Support Request']"
          :modelValues="['GeneralEnquiry', 'SupportRequest']"
          v-model="size"
          required
        />
        <TextFieldInput class="col-span-2" :model-value="message" label="Message" :required="true" />
        <div class="flex gap-2 col-span-2">
          <input type="checkbox" id="myCheckbox" :v-model="consentBox" />
          <label for="myCheckbox">I constent to being contacted by the team</label>
        </div>
        <button class="col-span-2 bg-[#0c7d69] rounded-md text-white h-[3rem]">Submit</button>
      </div>
    </div>
    <Link href="https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj">Link to challenge</Link>
  </div>
</template>

<script setup lang="ts">
const firstName = ref('')
const lastName = ref('')
const emailAddress = ref('')
const message = ref('')
const consentBox = ref(false)
const size = ref('m')
</script>
