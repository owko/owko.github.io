import axios from "axios";
type ActionNames = {
    [key: string]: string
}
type Actions = {
    [key: string]: (newState: any, action: any) => any
}
const store = {
    state: {
        User_Token: null
    },
    actions: {
        setToken(newState: { User_Token: String }, action: { type: string, val: String }) {
            newState.User_Token = action.val;
            localStorage.setItem('User_Token', JSON.stringify(newState.User_Token));
        },
        deleteToken(newState: { User_Token: String }) {
            newState.User_Token = '';
            localStorage.removeItem('User_Token')
        },
        getToken(newState: { User_Token: String }) {
           return newState.User_Token
        }
    } as Actions,
    asyncActions: {
        handleLogin(val: { username: String, password: Number }) {
            return async (dispatch: Function) => {
              return await axios
                    .post("/adminapi/user/login", { ...val })
                    .then((res) => {
                        if (res.data.code == 200) {
                            console.log(res);
                            dispatch({ type: "setToken", val:res.data.authorization });
                            return 'success'
                        } else {
                            return res.data.error
                        }
                    })
                    .catch((err) => {
                        return err
                    })
            }
        }
    },
    actionNames: {} as ActionNames
}
for (let key in store.actions) {
    store.actionNames[key] = key
}
export default store