import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (restId) => {
  const [resInfo, setResInfo] = useState(null);


  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu =  () => {
    // const data = await fetch(MENU_URL + restId);

    // const json = await data.json();

    // console.log("json",json);

//  const resInfo = {
//   card: [
//     {
//       card: {
//         card: {
//           info: {
//             name: "Food Palace",
//             cuisines: ["Indian", "Chinese"],
//             costForTwoMessage: "₹300 for two",
//           },
//         },
//       },
//     },
//     {},
//     {
//       groupCard: {
//         cardsGroupMap: {
//           REGULAR: {
//             cards: [
//               {},
//               {
//                 card: {
//                   itemCards: [
//                     {
//                       card: {
//                         info: {
//                           id: "101",
//                           name: "Chicken Biryani",
//                           price: 29900,
//                         },
//                       },
//                     },
//                     {
//                       card: {
//                         info: {
//                           id: "102",
//                           name: "Paneer Butter Masala",
//                           defaultPrice: 24900,
//                         },
//                       },
//                     },
//                   ],
//                 },
//               },
//             ],
//           },
//         },
//       },
//     },
//   ],
// };

// const resInfo = {
//   card: [
//     {
//       card: {
//         card: {
//           info: {
//             name: "Roti-Wala",
//             cuisines: ["North Indian", "Home Food"],
//             costForTwoMessage: "₹200 for two",
//           },
//         },
//       },
//     },
//     {},
//     {
//       groupCard: {
//         cardsGroupMap: {
//           REGULAR: {
//             cards: [
//               {},
//               {
//                 card: {
//                   card: {
//                     "@type":
//                       "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
//                     title: "Recommended",
//                     itemCards: [
//                       {
//                         card: {
//                           info: {
//                             id: "201",
//                             name: "Chicken Thali",
//                             price: 29900,
//                             description:
//                               "A wholesome meal with butter chicken, dal, rice, roti and salad.",
//                           },
//                         },
//                       },
//                       {
//                         card: {
//                           info: {
//                             id: "202",
//                             name: "Paneer Thali",
//                             defaultPrice: 24900,
//                             description:
//                               "Delicious paneer curry served with dal, rice, roti and pickle.",
//                           },
//                         },
//                       },
//                     ],
//                   },
//                 },
//               },
//               {
//                 card: {
//                   card: {
//                     "@type":
//                       "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
//                     title: "Biryani",
//                     itemCards: [
//                       {
//                         card: {
//                           info: {
//                             id: "301",
//                             name: "Chicken Biryani",
//                             price: 32900,
//                             description:
//                               "Aromatic basmati rice cooked with tender chicken and spices.",
//                           },
//                         },
//                       },
//                       {
//                         card: {
//                           info: {
//                             id: "302",
//                             name: "Veg Biryani",
//                             price: 24900,
//                             description:
//                               "Flavorful biryani with fresh vegetables and fragrant spices.",
//                           },
//                         },
//                       },
//                     ],
//                   },
//                 },
//               },
//               {
//                 card: {
//                   card: {
//                     "@type":
//                       "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
//                     title: "Desserts",
//                     itemCards: [
//                       {
//                         card: {
//                           info: {
//                             id: "401",
//                             name: "Gulab Jamun",
//                             price: 9900,
//                             description:
//                               "Soft milk-solid dumplings soaked in sugar syrup.",
//                           },
//                         },
//                       },
//                       {
//                         card: {
//                           info: {
//                             id: "402",
//                             name: "Rasgulla",
//                             price: 8900,
//                             description:
//                               "Spongy cottage cheese balls in light sugar syrup.",
//                           },
//                         },
//                       },
//                     ],
//                   },
//                 },
//               },
//             ],
//           },
//         },
//       },
//     },
//   ],
// };

const resInfo = {
  card: [
    {
      card: {
        card: {
          info: {
            name: "Roti-Wala",
            cuisines: ["North Indian", "Home Food"],
            costForTwoMessage: "₹200 for two",
          },
        },
      },
    },
    {},
    {
      groupCard: {
        cardsGroupMap: {
          REGULAR: {
            cards: [
              {},

              // ✅ Recommended
              {
                card: {
                  card: {
                    "@type":
                      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                    title: "Recommended",
                    itemCards: [
                      {
                        card: {
                          info: {
                            id: "201",
                            name: "Chicken Thali",
                            price: 29900,
                            imageId: "thali_chicken_dummy",
                            description:
                              "A wholesome meal with butter chicken, dal, rice, roti and salad.",
                          },
                        },
                      },
                      {
                        card: {
                          info: {
                            id: "202",
                            name: "Paneer Thali",
                            defaultPrice: 24900,
                            imageId: "thali_paneer_dummy",
                            description:
                              "Delicious paneer curry served with dal, rice, roti and pickle.",
                          },
                        },
                      },
                    ],
                  },
                },
              },

              // ✅ Biryani
              {
                card: {
                  card: {
                    "@type":
                      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                    title: "Biryani",
                    itemCards: [
                      {
                        card: {
                          info: {
                            id: "301",
                            name: "Chicken Biryani",
                            price: 32900,
                            imageId: "biryani_chicken_dummy",
                            description:
                              "Aromatic basmati rice cooked with tender chicken and spices.",
                          },
                        },
                      },
                      {
                        card: {
                          info: {
                            id: "302",
                            name: "Veg Biryani",
                            price: 24900,
                            imageId: "biryani_veg_dummy",
                            description:
                              "Flavorful biryani with fresh vegetables and fragrant spices.",
                          },
                        },
                      },
                    ],
                  },
                },
              },

              // ✅ Desserts
              {
                card: {
                  card: {
                    "@type":
                      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                    title: "Desserts",
                    itemCards: [
                      {
                        card: {
                          info: {
                            id: "401",
                            name: "Gulab Jamun",
                            price: 9900,
                            imageId: "e33e1e67f3c7b6b28b5cfc9b9f8f8b24",
                            description:
                              "Soft milk-solid dumplings soaked in sugar syrup.",
                          },
                        },
                      },
                      {
                        card: {
                          info: {
                            id: "402",
                            name: "Rasgulla",
                            price: 8900,
                            imageId: "rasgulla_dummy",
                            description:
                              "Spongy cottage cheese balls in light sugar syrup.",
                          },
                        },
                      },
                    ],
                  },
                },
              },
            ],
          },
        },
      },
    },
  ],
};


    // setResInfo(json.data);
    setResInfo(resInfo);
  };
  
  return resInfo;
};

export default useRestaurantMenu;
