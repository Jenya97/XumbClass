import axios from "axios";

const initialState={
    loading:false,
    data:[],
    error:''
}

const REQUEST_LOADING="REQUEST_LOADING";
const REQUEST_SUCCESS="REQUEST_SUCCESS";
const REQUEST_ERROR='REQUEST_ERROR';


////////reducer//////

export const reducer=(state={},action)=>{
    switch(action.type){
      case  REQUEST_LOADING:
          return{
              ...state,
              loading:true,
              data:[],
              error:''
          }
     case REQUEST_SUCCESS:
        return{
            ...state,
            loading:false,
            data:action.payload,
            error:''
        }
        case REQUEST_ERROR:
            return{
                ...state,
                loading:false,
                data:[],
                error:action.payload,
            }
        default:
            return state
    }
}

/////action creator/////
function requestLoading(){
    return{
        type:REQUEST_LOADING
    }
};
function requestSuccess(success){
    return{
        type:REQUEST_SUCCESS,
        payload:success
    }
}

function requestError(error){
    return{
        type:REQUEST_ERROR,
        payload:error
    }
}
///////////


export const fetchUsers=()=>{
    return function(dispatch){
        dispatch(requestLoading())
        axios.get('https://reqres.in/api/users?page=2')
        .then(response=>dispatch(requestSuccess(response.data)))
        .catch(i=>dispatch(requestError(i.response)))
    }
}
