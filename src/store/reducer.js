const initialState = {
    age:21
};

const reducer = (state=initialState,action) => {
 const newState = {...state};

 if(action.type === 'ADD')
 {
     newState.age++;
 }
 else{
    newState.age--;
 }

 return newState;
};

export default reducer;
