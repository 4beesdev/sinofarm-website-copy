<template>
  <div class="container mx-auto px-4 pt-48 pb-10">
    <div class="flex flex-col lg:flex-row lg:justify-between">
      <div
        class="bg-lightBlue px-2 py-10 contact__info rounded-lg mb-10 lg:w-1/4 lg:px-10"
      >
        <h2 class="text-3xl font-bold text-gray font-lato mb-5">
          {{ $t('contactpage.title') }}
        </h2>
        <p class="text-lg font-bold text-gray font-lato mb-5">
          Koste Nađa 31, 11000 Beograd
        </p>
        <div class="flex flex-col">
          <a class="text-lg font-bold text-gray font-lato mb-3" href="tel:123"
            >123 4567</a
          >
          <a
            class="text-lg font-bold text-gray font-lato"
            href="mailto:office@sinofarm.rs"
            >office@sinofarm.rs</a
          >
        </div>
      </div>
      <form action="" class="w-full flex flex-col font-lato text-lg lg:w-2/4">
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
          class="bg-primary w-full text-white p-4 lg:w-64 ml-auto"
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
export default {}
</script>

<style lang="scss" scoped>
.contact__info {
  height: max-content;
}
.contact__map {
  height: 50vh;
}
</style>
