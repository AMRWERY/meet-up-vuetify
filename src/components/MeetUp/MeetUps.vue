<template>
  <v-container>
    <v-layout v-for="meetup in meetups" :key="meetup.id" class="mb-4">
      <v-row justify="center">
        <v-col-12 cols="6" class="mt-4">
          <v-card width="600" class="bg-purple-lighten-2">
            <v-container fluid>
              <v-layout xs5 sm4 md3>
                <v-col><v-img :src="meetup.imageUrl" />
                </v-col>
                <v-col>
                  <v-card-title>
                    <h3 class="text-black">{{ meetup.title }}</h3>
                    <div>{{ meetup.date }}</div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn variant="outlined" flat router :to="'/meetup/' + meetup.id">
                      <svg-icon type="mdi" :path="path"></svg-icon>
                      Explore Now
                    </v-btn>
                  </v-card-actions>
                </v-col>
              </v-layout>
            </v-container>
          </v-card>
        </v-col-12>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiArrowRightThin } from '@mdi/js';

export default {
  components: {
    SvgIcon
  },

  data() {
    return {
      path: mdiArrowRightThin,
    }
  },

  computed: {
    meetups() {
      return this.$store.getters.loadedMeetUps
    }
  }
}
</script>
