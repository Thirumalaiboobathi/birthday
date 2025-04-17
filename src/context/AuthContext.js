import { COOKIE_LABEL, ROLES } from '../config/appConfig'

import { createContext, useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'

import Swal from 'sweetalert2'

import { stringifyUser } from '../helpers/helperUserModem'

import { axiosCookiesAPI } from '../api/axiosAPI'

const AuthContext = createContext()

export function AuthProvider({ children }) {

    const history = useHistory()

    const [USER, setUSER] = useState(null)

    const login = useCallback(async state => {
        const loginInfo = state.loginInfo;
        try {
            const user = {
                ID: loginInfo.id,
                FIRST_NAME: loginInfo.firstName,
                LAST_NAME: loginInfo.lastName ?? '',
                MOBILE_NUMBER: loginInfo.mobileNumber,
                PASSWORD: loginInfo.password,
                TYPE: loginInfo.type,
                DOC_ID: loginInfo.type !== ROLES.STAFF ? loginInfo.id : loginInfo.doctorId,
                ACCESS_TOKEN: loginInfo.accessToken,
                REFRESH_TOKEN: loginInfo.refreshToken,

                FIREBASE_TOKEN: loginInfo?.userInfo?.firebaseToken ?? '',
                FIREBASE_WEB_TOKEN: loginInfo.userInfo?.firebaseWebToken,
                ADHOC_FLAG: loginInfo.userInfo?.adhocFlag,
                IS_ACTIVE: loginInfo.type === ROLES.STAFF ? true : loginInfo.userInfo?.status === 'active',

                ACCESS_CONTROL: loginInfo.type !== ROLES.STAFF ? null : loginInfo.userInfo?.stAccess,
            };
            try {
                const response = await axiosCookiesAPI.get('/setCookies', {
                    headers: {
                        Authorization: `Bearer ${user.ACCESS_TOKEN}`,
                        [COOKIE_LABEL]: stringifyUser(user)
                    },
                    withCredentials: true
                });
                if (response.data !== 'Success') {
                    throw new Error(response);
                }
            } catch (error) {
                console.error(error)
                Swal.fire({
                    icon: 'error', text: 'unable to persist login',
                    showConfirmButton: false, toast: true, timer: 2000, timerProgressBar: true
                });
            } finally {

                history.replace( !!state.from ? state.from :  '/')
                setUSER(user);
            }
        } catch (error) {
            console.error(error)
            setUSER(null)
        }
    }, [history])

    const logout = useCallback(async () => {
        try {
            const response = await axiosCookiesAPI.get('/deleteCookies', { withCredentials: true });
            if (response.data === 'Success') {
                history.push('/');
                setUSER(null);
            } else {
                throw new Error(response.data?.code);
            }
        } catch (error) {
            Swal.fire({
                icon: 'error', text: 'unable to logout',
                showConfirmButton: false, toast: true, timer: 2000, timerProgressBar: true
            });
            console.error(error);
        }
    }, [history])

    const updateUser = useCallback(async data => {
        let updatedUser = null;
        if (data.hasOwnProperty('ID')) {
            updatedUser = data
            setUSER(data)
        } else {
            setUSER(prev => {
                updatedUser = {
                    ...prev,
                    ...(data.hasOwnProperty('ADHOC_FLAG') ? { ADHOC_FLAG: data.ADHOC_FLAG } : {}),
                    ...(data.hasOwnProperty('MOBILE_NUMBER') ? { MOBILE_NUMBER: data.MOBILE_NUMBER } : {}),
                    ...(data.hasOwnProperty('ACCESS_TOKEN') ? { ACCESS_TOKEN: data.ACCESS_TOKEN } : {}),
                    ...(data.hasOwnProperty('REFRESH_TOKEN') ? { REFRESH_TOKEN: data.REFRESH_TOKEN } : {}),
                }
                return updatedUser
            })
        }
        try {
            if (!!updatedUser) {
                const response = await axiosCookiesAPI.get('/setCookies', {
                    headers: {
                        Authorization: `Bearer ${updatedUser.ACCESS_TOKEN}`,
                        [COOKIE_LABEL]: stringifyUser(updatedUser)
                    },
                    withCredentials: true
                });
                if (response.data === 'Success') {
                    setUSER(updatedUser);
                } else {
                    throw new Error(response);
                }
            }
        } catch (error) {
            console.error(error);
        }
    }, [])

    return (
        <AuthContext.Provider value={{ USER, login, logout, updateUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext