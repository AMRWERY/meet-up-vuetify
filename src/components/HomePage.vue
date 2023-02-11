<template>
  <v-container class="bg-surface-variant">
    <v-layout class="mb-4">
      <v-row justify="center">
        <v-col-6 cols="6" class="d-flex align-center">
          <v-btn class="ma-2 pa-2" color="success" router to="/meet-ups">
            Explore MeetUp
          </v-btn>
        </v-col-6>
        <v-col-6 cols="6">
          <v-btn class="pa-2 ma-2" color="success" router to="/create-meets">
            Organize MeetUp
          </v-btn>
        </v-col-6>
      </v-row>
    </v-layout>
    <v-layout class="mt-2">
      <v-carousel cycle height="400" hide-delimiter-background show-arrows="hover">
        <v-carousel-item v-for="meetup in meetups" :key="meetup" :src="meetup.imageUrl" cover
          @click="onLoadMeetUp(meetup.id)">
        </v-carousel-item>
      </v-carousel>
    </v-layout>
    <div class="mt-4">
      <p xs-12 class="text-center">Join our awesome Meet Up</p>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    justify: [
      'center',
    ]
  }),

  computed: {
    meetups() {
      return this.$store.getters.featuredMeetUp
    }
  },

  methods: {
    onLoadMeetUp(id) {
      this.$router.push('/meet-ups/' + id)
    }
  },
}
</script>
