const newDate = new Date();

newDate.setHours(0, 0, 0, 0);

console.log(newDate);

export const initArray = [
  {
    id: 1,
    name: "water the plants",
    date: newDate,
    isDone: false,
    isShared: false,
    sharedWith: [
      {
        id: 2,
        name: "John Smith",
        profile_pic: "https://htmlcolors.com/color-image/ffffff.png",
        isSharing: true,
      },
    ],
    author: {
      id: 1,
      name: "Simon Farkas",
      profile_pic: "https://htmlcolors.com/color-image/000.png",
    },
  },
  {
    id: 2,
    name: "2",
    date: newDate,
    isDone: false,
    isShared: true,
    sharedWith: [
      {
        id: 1,
        name: "Simon Farkas",
        profile_pic: "https://htmlcolors.com/color-image/000.png",
        isSharing: true,
      },
    ],
    author: {
      id: 2,
      name: "John Smith",
      profile_pic: "https://htmlcolors.com/color-image/ffffff.png",
    },
  },
  {
    id: 3,
    name: "3",
    date: newDate,
    isDone: false,
    isShared: false,
    sharedWith: [
      {
        id: 2,
        name: "John Smith",
        profile_pic: "https://htmlcolors.com/color-image/ffffff.png",
        isSharing: false,
      },
    ],
    author: {
      id: 1,
      name: "Simon Farkas",
      profile_pic: "https://htmlcolors.com/color-image/000.png",
    },
  },
  {
    id: 4,
    name: "4",
    date: newDate,
    isDone: false,
    isShared: false,
    sharedWith: [
      {
        id: 2,
        name: "John Smith",
        profile_pic: "https://htmlcolors.com/color-image/ffffff.png",
        isSharing: false,
      },
    ],
    author: {
      id: 1,
      name: "Simon Farkas",
      profile_pic: "https://htmlcolors.com/color-image/000.png",
    },
  },
  {
    id: 5,
    name: "5",
    date: new Date("2022-12-23T22:00:00.000Z"),

    isDone: false,
    isShared: true,
    sharedWith: [
      {
        id: 1,
        name: "Simon Farkas",
        profile_pic: "https://htmlcolors.com/color-image/000.png",
        isSharing: true,
      },
    ],
    author: {
      id: 2,
      name: "John Smith",
      profile_pic: "https://htmlcolors.com/color-image/ffffff.png",
    },
  },
  {
    id: 6,
    name: "lorem ipsum lorem ipsum",
    date: new Date("2022-10-12T22:00:00.000Z"),
    isDone: false,
    isShared: true,
    sharedWith: [
      {
        id: 1,
        name: "Simon Farkas",
        profile_pic: "https://htmlcolors.com/color-image/000.png",
        isSharing: false,
      },
    ],
    author: {
      id: 2,
      name: "John Smith",
      profile_pic: "https://htmlcolors.com/color-image/ffffff.png",
    },
  },
  {
    id: 1666440344785,
    name: "asdasd",
    date: new Date("2022-10-29T22:00:00.000Z"),
    isDone: false,
    isShared: false,
    sharedWith: [
      {
        id: 2,
        name: "John Smith",
        profile_pic: "https://htmlcolors.com/color-image/ffffff.png",
        isSharing: false,
      },
    ],
    author: {
      id: 1,
      name: "Simon Farkas",
      profile_pic: "https://htmlcolors.com/color-image/000.png",
    },
  },
];
