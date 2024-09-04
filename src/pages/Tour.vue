<template>
  <transition name="fade" appear>
    <main>
      <div
        v-for="(event, index) in events"
        :key="index"
        class="tour__year-container"
      >
        <h2 class="year__title">{{ event.year }}</h2>
        <ol class="year__events">
          <li class="event" v-for="(event, index) in event.events" :key="index">
            <div class="event__content">
              <span class="event__date">{{ event.date }}</span>
              <img :src="event.photo" alt="Event Photo" class="event__photo" />
            </div>
          </li>
        </ol>
      </div>
    </main>
  </transition>
</template>

<script>
import events from "../assets/json/events"

export default {
  name: "Tour",
  data() {
    return {
      events: events,
    };
  },
};
</script>

<style scoped>
@import url("../assets/css/tour/tourStyle.css");
@import url("../assets/css/transitionsStyle.css");
</style>
