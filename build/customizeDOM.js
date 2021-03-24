"use strict";
const customProperties = [{
    key: "hide",
    action: function (callback = () => { }) {
        this.animate(
            [
                {
                    opacity: 1,
                    height: "2.5rem"
                },
                {
                    opacity: 0,
                    height: "0px"
                },
            ],
            200
        ).onfinish = callback.bind(this);
    }
}, {
    key: "show",
    action: function (callback = () => { }) {
        this.animate(
            [{
                opacity: 0,
                height: "0px"

            }, {
                opacity: 1,
                height: "2.5rem"
            }],
            200
        ).onfinish = callback.bind(this);
    },
}, {
    key: "delete",
    action: function () {
        this.hide(function () {
            if (this.parentNode) {
                this.parentNode.removeChild(this);
            }
        });
    }
}, {
    key: "clearChildren",
    action: function () {
        while (this.firstChild) this.lastChild.delete();
    },
}, {
    key: "attachTo",
    action: function (parentElement) {
        parentElement.append(this);
        this.show();
    }
}]

customProperties.forEach(property => {
    if (typeof Element.prototype[property.key] === "undefined") {
        Object.defineProperty(Element.prototype, property.key, {
            configurable: false,
            enumerable: false,
            value: property.action,
        });
    }
})