import axios from "axios";

import * as types from "./actionTypes";



export const getData=(params)=>(dispatch)=>{

dispatch({type:types.GET_DATA_REQUEST});


return  axios
.get("https://opentdb.com/api.php", params)
.then((r)=>dispatch({type:types.GET_DATA_SUCCESS , payload:r.data.results}))
.catch((e)=>dispatch({type:types.GET_DATA_FAILURE}))

}







