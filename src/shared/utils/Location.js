class Location {
    constructor() {
        this.urlParameters = '';
    }
    URL() {
        return window.location.href;
    }
    GET(key) {
        //return 
    }
    GETALL() {
        return this.paramsAsJson();
    }

    paramsAsJson() {
        if (!this.urlParameters) {
            this.urlParameters = window.location.search.substr(1).split('&').reduce((prev, tokenVal, index) => {
                let tempArr = tokenVal.split('=');
                let tempOb = { [tempArr[0]]: decodeURIComponent(tempArr[1]) };
                return { ...prev, ...tempOb };
            }, {});
            //console.log(urlTokens);
        } 
        return this.urlParameters;
    }
}
export default new Location();