<template>
  <div class="container mx-auto px-4 pt-48 pb-10">
    <h2 class="text-3xl font-bold text-gray font-lato mb-5">
      {{ $t('contactpage.title') }}
    </h2>
    <div class="flex flex-col lg:flex-row lg:justify-between relative">
      <div class="w-full lg:w-3/6 lg:mr-5 flex flex-col">
        <div
          v-for="contact in contacts"
          :key="contact.title_sr"
          ref="contactInfo"
          class="bg-lightBlue px-2 py-6 w-full contact__info md:px-6 rounded-lg mb-6 lg:px-8 transform -translate-x-32 opacity-0"
        >
          <!-- Template -->
          <div class="flex flex-col items-center md:items-start">
            <h3 class="text-2xl font-bold text-gray mb-2">
              {{ contact['title_' + returnLang] }}
            </h3>
            <div
              v-if="contact.phones.length > 0"
              class="flex flex-col md:flex-row items-center mb-2"
            >
              <p
                class="text-lg text-center text-gray md:text-left md:mr-3 font-lato font-bold"
              >
                {{ $t('contactpage.info.phone') }}:
              </p>
              <a
                v-for="phone in contact.phones"
                :key="phone.id"
                class="text-normal mt-2 text-gray font-lato font-normal md:mr-4 md:mt-0"
                :href="`tel:${phone.number}`"
                >{{ phone.number }}</a
              >
            </div>
            <div
              v-if="contact.email"
              class="flex flex-col md:flex-row items-center mb-2"
            >
              <p class="text-lg text-gray font-lato font-bold md:mr-3">
                {{ $t('contactpage.info.email') }}:
              </p>
              <a
                class="text-normal mt-2 text-gray font-lato font-normal md:mt-0"
                :href="`mailto:${contact.email}`"
                >{{ contact.email }}</a
              >
            </div>
            <div
              v-if="contact[`location_${returnLang}`]"
              class="flex flex-col md:flex-row items-start"
            >
              <p class="text-lg text-gray font-lato font-bold md:mr-3">
                {{ $t('contactpage.info.location') }}:
              </p>
              <div class="flex flex-col">
                <a
                  class="text-normal mt-2 text-gray font-lato font-normal md:mt-px lg:text-left"
                  :href="`http://maps.google.com/?q=${
                    contact['location_' + returnLang]
                  }`"
                  target="_blank"
                  >{{ contact[`location_${returnLang}`] }}</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <form
        ref="form"
        action=""
        class="w-full flex flex-col font-lato text-lg lg:w-2/4 transform translate-x-32 opacity-0 sticky"
      >
        <Select
          :default="$t('contactpage.market.default')"
          :options="$t('contactpage.market.locations')"
        ></Select>
        <div class="flex flex-col mb-5 lg:flex-row">
          <input
            id=""
            class="border-2 border-lightBlue p-4 rounded-2xl mb-5 focus:outline-none focus:border-primary lg:w-2/4 lg:mb-0 lg:mr-2"
            type="text"
            name=""
            :placeholder="$t('contactpage.input.name')"
            required
          />
          <input
            id=""
            class="border-2 border-lightBlue p-4 rounded-2xl focus:outline-none focus:border-primary lg:w-2/4"
            type="text"
            name=""
            :placeholder="$t('contactpage.input.last')"
            required
          />
        </div>
        <input
          id=""
          class="border-2 border-lightBlue p-4 rounded-2xl mb-5 focus:outline-none focus:border-primary"
          type="email"
          name=""
          :placeholder="$t('contactpage.input.email')"
          required
        />
        <textarea
          id=""
          class="border-2 border-lightBlue p-4 rounded-2xl focus:outline-none focus:border-primary mb-5"
          name=""
          cols="30"
          rows="10"
          :placeholder="$t('contactpage.input.message')"
        ></textarea>
        <input
          class="bg-primary w-full text-white p-4 lg:w-64 ml-auto cursor-pointer"
          type="submit"
          :value="$t('contactpage.input.btn')"
        />
      </form>
    </div>
    <div class="w-full contact__map mt-10 lg:mt-20">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.3647842189253!2d20.534465015406422!3d44.79375397909871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7a062f4f046d%3A0x5097d8952ec119c9!2sSINOFARM%20D.O.O.!5e0!3m2!1sen!2srs!4v1614993906403!5m2!1sen!2srs"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        class="w-full h-full"
      ></iframe>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}
export default {
  computed: {
    contacts() {
      return this.$store.getters.getContacts
    },
    returnLang() {
      return this.$i18n.locale
    },
  },
  mounted() {
    const elements = this.$refs
    for (const el in elements) {
      gsap.to(elements[el], {
        scrollTrigger: {
          trigger: elements[el],
          start: 'center bottom',
        },
        y: 0,
        x: 0,
        opacity: 1,
        duration: 0.5,
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.contact__info {
  height: max-content;
}
.contact__map {
  height: 50vh;
}
</style>
