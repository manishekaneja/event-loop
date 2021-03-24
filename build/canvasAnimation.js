function init() {
    window.requestAnimationFrame(draw);
}

const getCounter = (function () {
    let count = 0;
    return function () {
        count += PI / 400;
        if (count >= PI * 2) {

            // Event Loop logic to handle Nodes
            if (excecutionBlock.childNodes.length > 0) {
                const node = excecutionBlock.childNodes[0];
                if (node.getAttribute("inPosition") === "yes") {
                    node.delete();
                }
                if (node.getAttribute("type").toLowerCase() === "callback") {
                    const element = createElement({
                        type: "div",
                        className: visualCallbackNodeClasses
                    });
                    element.innerText = FUNCTION_KEY;
                    element.attachTo(logBox);
                    logList.add(element);
                }
                else if (node.getAttribute("type").toLowerCase() === "promise") {
                    const revealElement = createElement({
                        type: "div",
                        className: visualNodeClasses
                    });
                    revealElement.innerText = 'Resolve';
                    revealElement.attachTo(promiseBox);
                    promiseList.add(revealElement);
                    onClick(revealElement, function () {
                        const element = createElement({
                            type: "div",
                            className: visualPromiseNodeClasses
                        });
                        element.innerText = FUNCTION_KEY;
                        element.attachTo(logBox);
                        logList.add(element);
                        revealElement.delete();
                    });
                }
            }
            count = 0;
        }
        return count;
    };
})();


var ctx = document.getElementById("canvas").getContext("2d");
ctx.globalCompositeOperation = "destination-over";

function draw() {
    ctx.clearRect(0, 0, 500, 500);
    ctx.lineWidth = "50";
    ctx.strokeStyle = "rgba(22, 22, 255)";
    ctx.beginPath();
    ctx.arc(
        250,
        250,
        200,
        (-2 * PI) / 36 + getCounter(),
        (2 * PI) / 36 + getCounter()
    );
    ctx.stroke();
    ctx.strokeStyle = "rgba(225, 223, 255)";
    ctx.beginPath();
    ctx.arc(250, 250, 200, 0, PI * 2);
    ctx.stroke();
    window.requestAnimationFrame(draw);
}

window.addEventListener('load', init);
