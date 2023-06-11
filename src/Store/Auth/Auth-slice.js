const { createSlice } = require("@reduxjs/toolkit");

export const authSlice=createSlice({
name:'authSlice',
initialState:{
user:[{username:"test"}]
}

})