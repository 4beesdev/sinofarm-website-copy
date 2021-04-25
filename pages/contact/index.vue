<template>
  <div class="container mx-auto px-4 pt-48 pb-10">
    <h2 class="text-3xl font-bold text-gray font-lato mb-5">
      {{ $t('contactpage.title') }}
    </h2>
    <div class="flex flex-col lg:flex-row lg:justify-between relative">
      <div class="w-full lg:w-3/6 lg:mr-5 flex flex-col">
        <div
          ref="contactInfo"
          class="bg-lightBlue px-2 py-6 w-full contact__info md:px-6 rounded-lg mb-6 lg:px-8 transform -translate-x-32 opacity-0"
        >
          <div class="flex flex-col items-center md:items-start">
            <h3 class="text-2xl font-bold text-gray mb-2">
              SINOFARM SRBIJA D.O.O.
            </h3>
            <div class="flex flex-col md:flex-row items-center mb-2">
              <p
                class="text-lg text-center text-gray md:text-left md:mr-3 font-lato font-bold"
              >
                {{ $t('contactpage.info.phone') }}:
              </p>
              <a
                class="text-normal mt-2 text-gray font-lato font-normal md:mr-4 md:mt-0"
                href="tel:+381113431061"
              >
                +381 (11) 343 1061</a
              >
              <a
                class="text-normal mt-2 text-gray font-lato font-normal md:mt-0 md:mb-0"
                href="tel:+381113425934"
              >
                +381 (11) 342 5934</a
              >
            </div>
            <div class="flex flex-col md:flex-row items-center mb-2">
              <p class="text-lg text-gray font-lato font-bold md:mr-3">
                {{ $t('contactpage.info.email') }}:
              </p>
              <a
                class="text-normal mt-2 text-gray font-lato font-normal md:mt-0"
                href="mailto:office@sinofarm.rs"
                >office@sinofarm.rs</a
              >
            </div>
            <div class="flex flex-col md:flex-row items-center">
              <p class="text-lg text-gray font-lato font-bold md:mr-3">
                {{ $t('contactpage.info.location') }}:
              </p>
              <div class="flex flex-col">
                <a
                  class="text-normal mt-2 text-gray font-lato font-normal md:mt-0 lg:text-left"
                  href="http://maps.google.com/?q=Koste Nađa 31, 11160 Beograd, Srbija"
                  target="_blank"
                >
                  Koste Nađa 31, 11160 Beograd, Srbija
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- Germany -->
        <div
          ref="contactInfo2"
          class="bg-lightBlue px-2 py-6 w-full contact__info md:px-6 rounded-lg mb-6 lg:px-8 transform -translate-x-32 opacity-0"
        >
          <div class="flex flex-col items-center md:items-start">
            <h3 class="text-2xl font-bold text-gray mb-2">
              SINOFARM GERMANY GmbH
            </h3>
            <div class="flex flex-col md:flex-row items-center mb-2">
              <p class="text-lg text-gray font-lato font-bold md:mr-3">
                {{ $t('contactpage.info.email') }}:
              </p>
              <a
                class="text-normal mt-2 text-gray font-lato font-normal md:mt-0"
                href="mailto:office@sinofarm.de"
                >office@sinofarm.de</a
              >
            </div>
            <div class="flex flex-col md:flex-row items-center mb-2">
              <p class="text-lg text-gray font-lato font-bold md:mr-3">
                {{ $t('contactpage.info.company') }}:
              </p>
              <div class="flex flex-col">
                <a
                  class="text-normal mt-2 text-gray font-lato font-normal md:mt-0"
                  href="http://maps.google.com/?q=Alte Reichsstr 6, 66424 Homburg"
                  target="_blank"
                >
                  Alte Reichsstr 6, 66424 Homburg
                </a>
              </div>
            </div>
            <div class="flex flex-col md:flex-row items-center">
              <p class="text-lg text-gray font-lato font-bold md:mr-3">
                {{ $t('contactpage.info.warehouse') }}:
              </p>
              <div class="flex flex-col">
                <a
                  class="text-normal mt-2 text-gray font-lato font-normal md:mt-0 lg:text-left"
                  href="http://maps.google.com/?q=Ringstrase 2, 66459 Kirkel-Limbach"
                  target="_blank"
                >
                  Ringstrase 2, 66459 Kirkel-Limbach
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- Austria -->
        <div
          ref="contactInfo3"
          class="bg-lightBlue px-2 py-6 w-full contact__info md:px-6 rounded-lg mb-6 lg:px-8 transform -translate-x-32 opacity-0"
        >
          <div class="flex flex-col items-center md:items-start">
            <h3 class="text-2xl font-bold text-gray mb-2">
              SINOFARM AUSTRIA GmbH
            </h3>
            <div class="flex flex-col md:flex-row items-center mb-2">
              <p class="text-lg text-gray font-lato font-bold md:mr-3">
                {{ $t('contactpage.info.email') }}:
              </p>
              <a
                class="text-normal mt-2 text-gray font-lato font-normal md:mt-0"
                href="mailto:office@sinofarm.at"
                >office@sinofarm.at</a
              >
            </div>
            <div class="flex flex-col md:flex-row items-center mb-2">
              <p class="text-lg text-gray font-lato font-bold md:mr-3">
                {{ $t('contactpage.info.location') }}:
              </p>
              <div class="flex flex-col">
                <a
                  class="text-normal mt-2 text-gray font-lato font-normal md:mt-0 lg:text-left"
                  href="http://maps.google.com/?q=Bloch Bauer Promenade, 24/1/8, 1100 Wien"
                  target="_blank"
                >
                  Bloch Bauer Promenade, 24/1/8, 1100 Wien
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- Romania -->
        <div
          ref="contactInfo4"
          class="bg-lightBlue px-2 py-6 w-full contact__info md:px-6 rounded-lg mb-6 lg:px-8 transform -translate-x-32 opacity-0"
        >
          <div class="flex flex-col items-center md:items-start">
            <h3 class="text-2xl font-bold text-gray mb-2">
              SINOFARM ROMANIA S.R.L.
            </h3>
            <div class="flex flex-col md:flex-row items-center mb-2">
              <p class="text-lg text-gray font-lato font-bold md:mr-3">
                {{ $t('contactpage.info.email') }}:
              </p>
              <a
                class="text-normal mt-2 text-gray font-lato font-normal md:mt-0"
                href="mailto:office@sinofarm.ro"
                >office@sinofarm.ro</a
              >
            </div>
            <div
              class="flex flex-col items-center md:flex-row md:items-start mb-2"
            >
              <p class="text-lg text-gray font-lato font-bold md:mr-3">
                {{ $t('contactpage.info.location') }}:
              </p>
              <div class="flex flex-col">
                <a
                  class="text-normal mt-2 text-center text-gray font-lato font-normal md:mt-0 lg:text-left"
                  href="http://maps.google.com/?q=Sat Giroc, Comuna Giroc, Strada Destinului, Nr. 3, Ap. 2, Judet Timis, Timisoara"
                  target="_blank"
                >
                  Sat Giroc, Comuna Giroc, Strada Destinului, Nr. 3, Ap. 2,
                  Judet Timis, Timisoara
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- Montenegro -->
        <div
          ref="contactInfo5"
          class="bg-lightBlue px-2 py-6 w-full contact__info md:px-6 rounded-lg mb-6 lg:px-8 transform -translate-x-32 opacity-0"
        >
          <div class="flex flex-col items-center md:items-start">
            <h3 class="text-2xl font-bold text-gray mb-2">
              SINOFARM MONTENEGRO D.O.O
            </h3>
            <div class="flex flex-col md:flex-row items-center mb-2">
              <p class="text-lg text-gray font-lato font-bold md:mr-3">
                {{ $t('contactpage.info.email') }}:
              </p>
              <a
                class="text-normal mt-2 text-gray font-lato font-normal md:mt-0"
                href="mailto:interpharm@interpharm.me"
                >interpharm@interpharm.me</a
              >
            </div>
            <div
              class="flex flex-col md:flex-row items-center md:items-start mb-2"
            >
              <p class="text-lg text-gray font-lato font-bold md:mr-3">
                {{ $t('contactpage.info.location') }}:
              </p>
              <div class="flex flex-col">
                <a
                  class="text-normal mt-2 text-gray font-lato text-center lg:text-left font-normal md:mt-0"
                  href="http://maps.google.com/"
                  target="_blank"
                >
                  Bulevar JNA - Preko puta hotela "Sidro" 85000 Bar, Crna Gora
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- China -->
        <div
          ref="contactInfo6"
          class="bg-lightBlue px-2 py-6 w-full contact__info md:px-6 rounded-lg mb-6 lg:px-8 transform -translate-x-32 opacity-0"
        >
          <div class="flex flex-col items-center md:items-start">
            <h3 class="text-2xl font-bold text-gray mb-2">
              Head of China office Sinofarm
            </h3>
            <div class="flex flex-col md:flex-row items-center mb-2">
              <p class="text-lg text-gray font-lato font-bold md:mr-3">
                {{ $t('contactpage.info.email') }}:
              </p>
              <a
                class="text-normal mt-2 text-gray font-lato font-normal md:mt-0"
                href="mailto:interpharm@interpharm.me"
                >sinogroupcn@outlook.com</a
              >
            </div>
            <div
              class="flex flex-col md:flex-row items-center md:items-start mb-2"
            >
              <p class="text-lg text-gray font-lato font-bold md:mr-3">
                {{ $t('contactpage.info.location') }}:
              </p>
              <div class="flex flex-col">
                <a
                  class="text-normal mt-2 text-gray font-lato text-center lg:text-left font-normal md:mt-0"
                  href="http://maps.google.com/?q=Rm.207, Building B, No.6 Kangding Street, YiZhuang Economic
                  Development Area, Beijing, China. 100176"
                  target="_blank"
                >
                  Rm.207, Building B, No.6 Kangding Street, YiZhuang Economic
                  Development Area, Beijing, China. 100176
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- bosna -->
        <div
          ref="contactInfo7"
          class="bg-lightBlue px-2 py-6 w-full contact__info md:px-6 rounded-lg mb-6 lg:px-8 transform -translate-x-32 opacity-0"
        >
          <div class="flex flex-col items-center md:items-start">
            <h3 class="text-2xl font-bold text-gray mb-2">
              SINOFARM BOSNA I HERCEGOVINA
            </h3>
            <!-- <div class="flex flex-col md:flex-row items-center mb-2">
              <p class="text-lg text-gray font-lato font-bold md:mr-3">
                {{ $t('contactpage.info.email') }}:
              </p>
              <a
                class="text-normal mt-2 text-gray font-lato font-normal md:mt-0"
                href="mailto:interpharm@interpharm.me"
                >interpharm@interpharm.me</a
              >
            </div>
            <div class="flex flex-col md:flex-row items-start mb-2">
              <p class="text-lg text-gray font-lato font-bold md:mr-3">
                {{ $t('contactpage.info.location') }}:
              </p>
              <div class="flex flex-col">
                <a
                  class="text-normal mt-2 text-gray font-lato font-normal md:mt-0"
                  href="http://maps.google.com/"
                  target="_blank"
                >
                  Bulevar JNA - Preko puta hotela "Sidro" 85000 Bar, Crna Gora
                </a>
              </div>
            </div> -->
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
