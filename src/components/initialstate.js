 export const initialState = JSON.parse(window.localStorage.getItem("Vy todos"))|| {
    todos: [
        {
            id: 0,
            title: "Buy Water",
            completed:false,
            important:false,
        },
         {
             id: 1,
             title: "Buy Milk",
             completed: true,
             important: false,
         },
         {
             id: 2,
             title: "Buy Bread",
             completed: false,
             important: true,
         },
         {
             id: 3,
             title: "Buy Tea",
             completed: false,
             important: false,
         },
         {
             id: 4,
             title: "Buy Coffee",
             completed: true,
             important: true,
         },

    ],
};


