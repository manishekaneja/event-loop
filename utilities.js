function createElement({ type, className }) {
    if (
        !className instanceof Array ||
        (className instanceof Array &&
            !className.every((singleClass) => typeof singleClass === "string")) ||
        typeof className !== "string"
    ) {
        throw new Error("Invalid classname");
    } else {
        let element = document.createElement(type);
        element.className = className;
        return element;
    }
};

function getEle(id) {
    return document.getElementById(id);
}
function onClick(element, callback) {
    element.addEventListener("click", callback);
}