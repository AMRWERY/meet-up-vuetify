import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      loadedMeetUp: [
        {
          imageUrl:
            "https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900",
          date: "17-2-2023",
          id: "1",
          title: "Paris",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/1200px-New_york_times_square-terabass.jpg",
          date: "17-5-2023",
          id: "2",
          title: "New York",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolore eveniet saepe, veritatis hicsequi quaerat cum quibusdam id neque earum, magni qui suscipit nesciunt iure! Alias accusantium a autem!",
        },
      ],
      user: {
        id: "sgseuwujsmndshj",
        registeredMeetUp: ["2"],
      },
    };
  },

  mutations: {
    createMeetUp(state, payload) {
      state.loadedMeetUp.push(payload);
    },
  },

  actions: {
    createMeet({ commit }, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: "wjksjdspudsdjjlk",
      };
      commit("createMeetUp", meetup);
    },
  },

  getters: {
    loadedMeetUps(state) {
      return state.loadedMeetUp.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date;
      });
    },
    featuredMeetUp(state, getters) {
      return getters.loadedMeetUps.slice(0, 5);
    },
    loadedMeetUp(state) {
      return (meetupId) => {
        return state.loadedMeetUp.find((meetup) => {
          return meetup.id === meetupId;
        });
      };
    },
  },
});

export default store;
