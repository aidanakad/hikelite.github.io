const initialState ={
    login:{
        username:'',
        password:'',
    },
    signin:{
        username:'',
        email:'',
        password:'',
        repeatPassword:''
    }
}

export default(state=initialState, action)=>{
    switch(action.type){
        case'CHANGE_FIELD':
            return{
                ...state,
                [action.formName]:{
                    ...state[action.formName],
                    [action.fieldName]: action.value,
                },
            }
        default :
            return state
    }
}