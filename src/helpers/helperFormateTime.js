export const convertTime12to24 = (time12h) => {
    const [time, modifier] = time12h.split(' ')
    let [hours, minutes] = time.split(':')
    if (hours === '12') {
        hours = '00'
    }
    if (modifier === 'PM') {
        hours = parseInt(hours, 10) + 12
    }
    hours = `${hours}`.padStart(2, '0')
    minutes = `${minutes}`.padStart(2, '0')
    return `${hours}:${minutes}`
}

export const convertTime24to12 = (hours, minutes) => {
    let hrs = `${hours}`.padStart(2, '0'), min = `${minutes}`.padStart(2, '0')
    return (
        new Date(`1970-01-01T${hrs}:${min}Z`).toLocaleTimeString(
            'en-US',
            { timeZone: 'UTC', hour12: true, hour: '2-digit', minute: '2-digit' }
        )
    )
}