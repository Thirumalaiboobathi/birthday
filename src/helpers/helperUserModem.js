export const parseUser = user => {
    try {
        return JSON.parse(atob(user));
    } catch (error) {
        return error;
    }
};

export const stringifyUser = user => {
    try {
        return btoa(JSON.stringify(user));
    } catch (error) {
        return error;
    }
};