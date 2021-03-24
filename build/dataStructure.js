function createQueue() {
    let data = [];
    const get = function () {
        return data;
    }
    const add = function (item) {
        data.push(item);
    }
    const remove = function (index) {
        return data.splice(0, 1)[0];
    }
    const clear = function () {
        data = [];
    }
    return {
        get, add, remove, clear
    };
}

