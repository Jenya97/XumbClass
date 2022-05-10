export const reducer=(state=0,action)=>{
   switch(action.type){
       case 'INCREMENT':
        return state+ +action.payload;
           case "DECREMENT":
            return state- +action.payload;
              case 'RESET':
                 return 0
                  default :
                    return state
   }
}

// export function reducer(state=[],action){
//     switch(action.type){
//         case 'ADD':
//            return [
//                ...state,
//                {
//                 id:Date.now(),
//                 name:action.payload
//                }
//             ]
//            default :
//             return state
//     }
// }