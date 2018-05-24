class RoomClass {
    constructor() {
        this.adults = [];
        this.childrens = [];
    }


    Adult(age = null) {
        return {
            age: age
        }
    }

    Children(age = null) {
        return {
            age: age
        }
    }

    addAdult(age) {
        this.adults.push(this.Adult(age));
    }

    removeAdult() {
        this.adults.shift();
    }

    addChild(age) {
        this.childrens.push(this.Children(age));
    }

    removeChild(age) {
        this.childrens.shift();
    }

}

export default RoomClass;