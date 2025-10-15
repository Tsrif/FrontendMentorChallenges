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
          class="col-span-2 text-xs"
          :fieldNames="['General Enquiry', 'Support Request']"
          :modelValues="['GeneralEnquiry', 'SupportRequest']"
          v-model="queryType"
          required
        />
        <div class="flex flex-col col-span-2">
          <div class="flex items-center pb-2">
            <label class="mr-1 text-xs">Message</label>
            <span class="text-[#033b30] text-xs">*</span>
          </div>
          <textarea
            v-model="message"
            rows="6"
            class="border border-gray-400 rounded-md px-2 py-1 focus:outline-none focus:border-[#0c7d69] resize-y min-h-28"
          ></textarea>
        </div>
        <div class="flex gap-2 col-span-2">
          <input type="checkbox" id="myCheckbox" :v-model="consentBox" class="accent-[#0c7d69]" />
          <label for="myCheckbox" class="text-xs pl-2">I constent to being contacted by the team</label>
          <span class="text-[#033b30] text-xs">*</span>
        </div>
        <button
          class="col-span-2 bg-[#0c7d69] rounded-md text-white h-10 text-xs hover:cursor-pointer hover:bg-[#0e584a]"
        >
          Submit
        </button>
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
const queryType = ref('')
</script>
