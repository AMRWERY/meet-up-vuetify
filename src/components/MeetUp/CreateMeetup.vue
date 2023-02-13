<template>
  <v-container>
    <v-layout>
      <v-col xs12 sm6 offset-sm3>
        <h2 class="text-center text-red">Create New Meetup</h2>
      </v-col>
    </v-layout>
    <v-card>
      <v-form @submit.prevent="onCreateMeetUp">
        <v-layout>
          <v-col xs12 sm6 offset-sm3>
            <v-text-field v-model="title" name="title" label="Title" required />
          </v-col>
        </v-layout>
        <v-layout>
          <v-col xs12 sm6 offset-sm3>
            <v-text-field v-model="location" name="location" label="Location" required />
          </v-col>
        </v-layout>
        <v-layout>
          <v-col xs12 sm6 offset-sm3>
            <v-text-field label="Image URL" v-model="imageUrl" required></v-text-field>
          </v-col>
        </v-layout>
        <v-layout>
          <v-col xs12 sm6 offset-sm3>
            <v-img :src="imageUrl" />
          </v-col>
        </v-layout>
        <v-layout>
          <v-col xs12 sm6 offset-sm3>
            <v-textarea v-model="description" name="description" label="Description" required />
          </v-col>
        </v-layout>
        <v-layout>
          <v-col xs12 sm6 offset-sm3>
            <v-btn class="float-right mb-2" color="primary" type="submit" :disabled="!formIsValid">Create Meetup</v-btn>
          </v-col>
        </v-layout>
      </v-form>
    </v-card>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      title: '',
      location: '',
      imageUrl: '',
      description: ''
    }
  },

  computed: {
    formIsValid() {
      return this.title !== '' && this.location !== '' && this.imageUrl !== '' && this.description !== '';
    }
  },

  methods: {
    onCreateMeetUp() {
      const meetup = {
        title: this.title,
        location: this.location,
        imageUrl: this.imageUrl,
        description: this.description,
        date: new Date()
      }
      this.$store.dispatch('createMeet', meetup)
      this.$router.push('/meet-ups')
    }
  },
}
</script>
