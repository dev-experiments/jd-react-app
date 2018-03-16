class Storage {

    static setInLocal(key, token) {
        localStorage.setItem(key, token)
    }
    static getFromLocal(key, token) {
        return localStorage.getItem(key);
    }
    static removeFromLocal(key) {
        localStorage.removeItem(key);
    }
    static clearAllLocal() {
        localStorage.clear();
    }
    static setInSession(key, token) {
        sessionStorage.setItem(key, token)
    }
    static getFromSession(key) {
        return sessionStorage.getItem(key);
    }
    static removeFromSession(key) {
        sessionStorage.removeItem(key);
    }
    static clearAllSession() {
        sessionStorage.clear();
    }
}
export default Storage;