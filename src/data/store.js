import { reactive } from "vue";
export const store = reactive({
  links: ["Home", "Pages", "Courses", "Features", "Blog", "Shop"],

  dropLinks: [
    "Sart here",
    "Sucsses story",
    "About me",
    "About us 1",
    "About us 2",
    "About us 3",
    "Contact us ",
    "Contact me ",
  ],
  enrolledLeaners: "129+",
  finishedSession: "80",
  satisfactionRate: "4%",

  cardComponents: [
    {
      imgCard: "/img/course480x298.jpg",
      price: "$40.00",
      text: "Learning to Write as a prfessional author",
      lessons: "20",
      students: "50",
    },
    {
      imgCard: "/img/course2x480x298.jpg",
      price: "$0.00",
      text: "Customer-centric Info-Tech  Strategies",
      lessons: "24",
      students: "769",
    },

    {
      imgCard: "/img/course3x480x298.jpg",
      price: "$19.00",
      text: "Open Programming Courses for Everyone: Pyton",
      lessons: "17",
      students: "62",
    },
  ],

  cardArtistComponents: [
    {
      imgCard: "/img/artist.jpeg",
      title: "Artist",
      text: "Brush Stokes Energize Trees in Painting",
      date: "May 15,2020",
      views: "688 views",
    },
    {
      imgCard: "/img/course2x480x298.jpg",
      title: "Artist",
      text: "Pocket-Sized Notebooks Hold Miniature Painting",
      date: "May 15,2020",
      views: "603 views",
    },

    {
      imgCard: "/img/course3x480x298.jpg",
      title: "Artist",
      text: "Connection-Between Self- Portraits and Identity",
      date: "May 15,2020",
      views: "397 views",
    },
  ],

  address: [
    "382 NE 191st #87394 Miami, FL 33-179-3899",
    "+1(305) 547-9909 (9am - 5pm EST,Monday - Friday)",
    "Support@maxcoach.com",
  ],
  explore: [
    "Start here",
    "Blog",
    "Aout us",
    "Success story",
    "Courses",
    "Contact us",
  ],
  Information: [
    "Membership",
    "Purchase guide",
    "Privacy policy",
    "Terms of service",
  ],
});
