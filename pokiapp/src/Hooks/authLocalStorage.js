const TokenHeaderKey = process.env.REACT_APP_TOKEN_HEADER_KEY;

const setUserToken = (token)=>{
    localStorage.setItem(TokenHeaderKey, JSON.stringify(token));
};
const getUserToken = ()=>{
    console.log('getUserToken',typeof localStorage.getItem(TokenHeaderKey))
    if(localStorage.getItem(TokenHeaderKey)!== 'undefined'){
       return JSON.parse(localStorage.getItem(TokenHeaderKey));
    }else {
        return null
    }

};
const removeUserToken = ()=>{
    localStorage.removeItem(TokenHeaderKey)
    return true;
}

export {
    setUserToken, 
    getUserToken, 
    removeUserToken
}