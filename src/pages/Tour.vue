<template>
  <main>
    <div class="tour__year-container">
      <h2 class="year__title">2023</h2>
      <ol class="year__events">
        <li
          class="event"
          v-for="(event, index) in events.events"
          :key="index"
          @click="handleEventClick(index)"
        >
          <div
            class="event__content"
            :class="{
              'event-content-hidden': showEvent && index == selectedIndex,
            }"
          >
            <span class="event__title">{{ event.title }}</span>
            <span class="event__date">{{ event.date }}</span>
            <div class="event__place-container">
              <span class="place__title">Local:</span>
              <p class="place__text">{{ event.place }}</p>
            </div>
            <div class="event__context-container container">
              <span class="context__title">Contexto:</span>
              <p class="context__text">
                {{ event.context }}
              </p>
            </div>
          </div>
          <div
            class="event__photo"
            :class="{ 'event-photo-hidden': showEvent && index == selectedIndex }"
          >
            <span class="photo__title">Nenhuma foto</span>
            <span class="photo__subtitle"
              >Apenas recordações em memória...</span
            >
            <img
              src="../assets/img/tour-no-photo-image.png"
              alt="Photo Image"
              class="photo__image"
            />
          </div>
          <div class="event__bar"></div>
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
      showEvent: false,
      selectedIndex: 0,
    };
  },
  methods: {
    handleEventClick(index) {
      if(this.selectedIndex != index) {
        this.showEvent = false;
      }
      this.selectedIndex = index;
      this.showEvent = !this.showEvent;
    },
  },
};
</script>

<style scoped>
@import url("../assets/css/tour/tourStyle.css");
</style>
