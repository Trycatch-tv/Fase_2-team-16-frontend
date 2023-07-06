import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		isLoggedIn: false,
		id: '',
		accessToken: '',
		name: '',
		lastname: '',
		username: '',
		email: '',
		roles: '',
		emailReset: '',
		emailRegister: '',
		isRegister: false,
		login_in: false,
		login_user: '',
		tokenResetPassword: '',
		sendEmailResetPassword: false,
		tokenRegister: '',
		isValidChangePassword: false,
	},
	reducers: {
		setUser: (state, action) => {
			state.email = action.payload.email;
			state.id = action.payload.id;
			state.lastname = action.payload.lastname;
			state.name = action.payload.name;
			state.roles = action.payload.roles;
			state.username = action.payload.username;
		},
		getEmailRegister: (state, action) => {
			state.emailRegister = action.payload;
		},
		getIsRegsiter: (state, action) => {
			state.isRegister = action.payload;
		},
		setEmailResetPassword: (state, action) => {
			state.emailReset = action.payload;
		},
		sendEmailResetPassword: (state, action) => {
			state.sendEmailResetPassword = action.payload;
		},
		getTokenResetPassword: (state, action) => {
			state.tokenResetPassword = action.payload;
		},
		setIsValidChangePassword: (state, action) => {
			state.isValidChangePassword = action.payload;
		},
		getTokenRegister: (state, action) => {
			state.tokenRegister = action.payload;
		},
		logOutUser: (state, action) => {
			state.email = action.payload.email;
			state.id = action.payload.id;
			state.lastname = action.payload.lastname;
			state.name = action.payload.name;
			state.roles = action.payload.roles;
			state.username = action.payload.username;
		},
	},
});
export const refreshAccessToken = createSlice({
	name: 'refreshAccessToken',
	initialState: {
		refreshToken: '',
	},
	reducers: {
		getCredentials: (state, action) => {
			state.refreshToken = action.payload;
		},
	},
});

export const {
	getCredentials,
	setUser,
	logOutUser,
	setEmailResetPassword,
	getTokenRegister,
	getTokenResetPassword,
	sendEmailResetPassword,
	getIsRegsiter,
	getEmailRegister,
	setIsValidChangePassword,
} = authSlice.actions;
export const { getRefreshToken } = refreshAccessToken.actions;

export default authSlice.reducer;
