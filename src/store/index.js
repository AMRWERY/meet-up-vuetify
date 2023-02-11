import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      loadedMeetUp: [
        { imageUrl: 'https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900', date: '17-2-2023', id: '1', title: 'Paris' },
        { imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/1200px-New_york_times_square-terabass.jpg', date: '17-5-2023', id: '2', title: 'New York' }
      ],
      user: {
        id: 'sgseuwujsmndshj',
        registeredMeetUp: ['2']
      }
    }
  },

  mutations: {},

  actions: {},

  getters: {
    loadedMeetUps(state) {
      return state.loadedMeetUp.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetUp(state, getters) {
      return getters.loadedMeetUps.slice(0, 5)
    },
    loadedMeetUp(state) {
      return (meetupId) => {
        return state.loadedMeetUps.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
});

export default store;
