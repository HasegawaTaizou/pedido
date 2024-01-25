<template>
  <main>
    <div class="tour__year-container">
      <h2 class="year__title">2023</h2>
      <ol class="year__events">
        <li class="event">
          <div class="event__content">
            <span class="event__title"
              >Lorem ipsum dolor sit amet consectetur</span
            >
            <span class="event__date">06/09/2023</span>
            <div class="event__place-container">
              <span class="place__title">Local:</span>
              <p class="place__text">Lorem ipsum dolor sit amet</p>
            </div>
            <div class="event__context-container">
              <span class="context__title">Contexto:</span>
              <p class="context__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                lobortis justo non sapien lobortis, quis bibendum eros
                scelerisque. Fusce molestie pellentesque mauris, non dictum
                magna condimentum quis. Maecenas id nibh lacinia, laoreet sapien
                ut, convallis elit.
              </p>
            </div>
          </div>
          <div class="event__photo">
            <span class="photo__title">Nenhuma foto</span>
            <span class="photo__subtitle">Apenas recordações em memória...</span>
            <img src="../assets/img/tour-no-photo-image.png" alt="Photo Image" class="photo__image">
          </div>
        </li>
      </ol>
    </div>
  </main>
</template>

<script>
import events from "../assets/json/events.json";

export default {
  name: "Tour",
  data() {
    return {
      events: events,
    };
  },
  mounted() {
    console.log(events);
  },
};
</script>

<style scoped>
@import url("../assets/css/tour/tourStyle.css");
</style>
