import { DOMAIN, FIREBASE_VAPID_KEY } from '../config/appConfig'

import { createContext, useCallback, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'

import Swal from 'sweetalert2'

import useAuth from '../hooks/useAuth'
// import useToast from '../hooks/useToast'

import useDoctorService from '../services/useDoctorService'

import { getToken, onMessage } from 'firebase/messaging'
import { messaging } from '../firebase'

const NotificationContext = createContext()

export function NotificationProvider({ children }) {

    const history = useHistory()

    const { USER } = useAuth()
    // const { SwalToast } = useToast()

    const doctorService = useDoctorService()

    const notificationSwRef = useRef(null)

    const subscribeToNotifications = useCallback(async (doc_id) => {
        try {
            const notificationPermission = await Notification.requestPermission()
            if (notificationPermission === 'granted') {
                if ('serviceWorker' in navigator) {
                    const notificationSw = await navigator.serviceWorker.register('/Doctor/firebase-messaging-sw.js');
                    const firebaseWebToken = await getToken(messaging, { vapidKey: FIREBASE_VAPID_KEY, serviceWorkerRegistration: notificationSw })
                    if (firebaseWebToken) {
                        onMessage(messaging, (payload) => {
                            console.log('Received message ', payload?.notification);

                            const notificationTitle = payload.notification.title;
                            const notificationOptions = {
                                body: payload.notification.body,
                                icon: `${DOMAIN}Doctor/static/media/icon.585244758c0e174797df.png`,
                            };
                            const notification = new Notification(notificationTitle, notificationOptions);
                            notification.onclick = (event) => {
                                notification.close()
                                history.push('/appointments')
                            }
                            // notificationSw?.showNotification(notificationTitle, notificationOptions);
                        })
                        const doctorProfileResponse = await doctorService.getProfile(doc_id);
                        if (doctorProfileResponse.data.code === '600') {
                            const updateDoctorProfileResponse = await doctorService.putProfile({ ...doctorProfileResponse.data.value, firebaseWebToken })
                            if (updateDoctorProfileResponse.data.code === '600') {
                                // SwalToast({
                                //     icon: 'success', timer: 2000,
                                //     text: 'Successfully subscribed to Push Notifications',
                                // })
                            }
                        }
                    } else {
                    }
                } else {
                    Swal.fire('', 'Notifications are not possible on this device', 'error')
                }
            } else if (notificationPermission === 'denied') {
                Swal.fire('', 'You denied the Notifications', 'warning')
            } else {
            }
        } catch (error) {
            console.error(error.message);
        }
    }, [
        history,
        // SwalToast,
        doctorService
    ])

    useEffect(() => {
        if (!!USER?.ID && !!USER?.DOC_ID && !!USER?.MOBILE_NUMBER && !!USER.ACCESS_TOKEN) {
            subscribeToNotifications(USER.DOC_ID)
        }
        return () => {
            if (!USER) {
                notificationSwRef.current?.unregister()
                notificationSwRef.current = null
            }
        }
    }, [USER, subscribeToNotifications])

    return (
        <NotificationContext.Provider value={{}}>
            {children}
        </NotificationContext.Provider>
    )
}

export default NotificationContext