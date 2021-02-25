// import { v4 as uuidv4 } from 'uuid';
// const groupsDefaultState = {
//   groups: [
//     {
//       id:uuidv4(),
//       name: "Redux Practical",
//       image: "logo512.png",
//       desc: "This Is First Group Created With Redux",
//     },
//     {
//       id:uuidv4(),
//       name: "Learning Redux",
//       image: "logo512.png",
//       desc: "This Is First Group Created With Redux",
//     },
//     {
//       id:uuidv4(),
//       name: "React Developers",
//       image: "logo512.png",
//       desc: "This Is First Group Created With Redux",
//     },
//   ],
// };

// export const groupReducer = (state = groupsDefaultState, action) => {
//   switch (action.type) {
//     case "ADD_NEW_GROUP":
//       return { ...state, groups: [...state.groups, action.groups] };
//     default:
//       return state;
//   }
// };

export const groupReducer = (state = groupsDefaultState, action)=>{
         switch (action.type) {
           case "ADD_NEW_GROUP":
             return{ ...state,groups: [...state.groups,action.groups]};
             default:
               return state;
         }
}
const groupsDefaultState = {
  groups:[
    {name:"mazhar", rollno:"01"},
    {name:"saim", rollno:"02"},
    {name:"rafe", rollno:"03"},
  ],
};

