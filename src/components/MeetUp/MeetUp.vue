<template>
  <v-container>
    <v-row justify="center">
      <v-col-12 class="mt-4">
        <v-card width="470">
          <v-card-title>
            <h2 class="mb-4">Meet Up</h2>
            <div class="text-blue">
              {{ meetup.date }} - where it will take place
            </div>
            <v-img height="450px" :src="meetup.imageUrl" />
          </v-card-title>
          <v-card-text>
            <div>
              <h1 class="mb-4 text-red">{{ meetup.title }}</h1>
            </div>
            <div>
              <p>{{ meetup.description }}</p>
            </div>
          </v-card-text>
          <v-spacer></v-spacer>
          <v-card-action>
            <v-btn color="primary" class="float-right mb-4">Register</v-btn>
          </v-card-action>
        </v-card>
      </v-col-12>
    </v-row>
  </v-container>
</template>


<script>
export default {
  name: 'ExploreMeetup',

  props: ['id'],

  computed: {
    meetupId() {
      return this.$route.params.id
    },
    meetup() {
      return this.$store.getters.loadedMeetUp(this.id)
    },
  },
}
</script>
