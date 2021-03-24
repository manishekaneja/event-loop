
const clickListener = [{
    element: functionButton,
    action: function () {
        const element = createElement({
            type: "div",
            className: visualNodeClasses
        });
        element.innerText = FUNCTION_KEY;
        element.attachTo(executeBox);
        executionList.add(element);
    },
},
{
    element: setIntervalButton,
    action: function () {
        const element = createElement({
            type: "div",
            className: visualNodeClasses
        });
        element.innerText = SET_INTERVAL_KEY;
        element.attachTo(executeBox);
        executionList.add(element);
    }
},
{
    element: setTimeoutButton, action: function () {
        const element = createElement({
            type: "div",
            className: visualNodeClasses
        });
        element.innerText = SET_TIMEOUT_KEY;
        element.attachTo(executeBox);
        executionList.add(element);
    }
},
{
    element: callbackButton,
    action: function () {
        const element = createElement({
            type: "div",
            className: visualNodeClasses
        });
        element.innerText = CALLBACK_KEY;
        element.attachTo(executeBox);
        executionList.add(element);
    }
}, {
    element: promiseButton,
    action: function () {
        const element = createElement({
            type: "div",
            className: visualNodeClasses
        });
        element.innerText = PROMISE_KEY;
        element.attachTo(executeBox);
        executionList.add(element);
    }
}, {
    element: clearButton,
    action: function () {
        const execList = executionList.get();
        while (execList.length > 0) {
            executionList.remove().delete();
        }

    }
},
{
    element: executeButton,
    action: function () {
        const execList = executionList.get();
        while (execList.length > 0) {
            const item = executionList.remove();
            item.hide(() => {
                if (["settimeout", "setinterval"].includes(item.innerText.toLowerCase())) {
                    item.attachTo(timeoutBox);
                    timeoutList.add(item);
                    const subscription = setInterval(function () {
                        const element = createElement({
                            type: "div",
                            className: visualTimeoutNodeClasses
                        });
                        element.innerText = FUNCTION_KEY;
                        element.attachTo(logBox);
                        logList.add(element);
                        if (item.innerText.toLowerCase() === "settimeout") {
                            clearInterval(subscription);
                            item.delete();
                        }
                    }, 10000);
                    onClick(item, function () {
                        clearInterval(subscription);
                        item.delete();
                    });
                }
                else {
                    item.attachTo(logBox);
                    logList.add(item);
                }
            });
        }
    }
}]

clickListener.forEach((clickToConfigure) => {
    onClick(clickToConfigure.element, clickToConfigure.action)
})
setInterval(() => {
    if (logList.get().length > 0 && excecutionBlock.childNodes.length <= 0) {
        let div = document.createElement("div");
        div.className =
            "w-full h-full bg-red-100 transition-all duration-100 animate";
        const removedNode = logList.remove();
        removedNode.delete();
        div.setAttribute("inPosition", "no");
        div.setAttribute("type", removedNode.innerText.toLowerCase())
        div.attachTo(excecutionBlock);
        div.animate(
            [
                {
                    transform: `translateX(-${excecutionBlock.offsetLeft - excecutionBlock.parentNode.offsetLeft
                        }px) translateY(${excecutionBlock.offsetTop - excecutionBlock.parentNode.offsetTop
                        }px)`,
                },
                {
                    transform: `translateX(0px) translateY(${excecutionBlock.offsetTop - excecutionBlock.parentNode.offsetTop
                        }px)`,
                },
                {
                    transform: `translateX(0px) translateY(0px)`,
                },
            ],
            {
                duration: 2000,
                easing: "linear",
            }
        ).onfinish = function () {
            div.setAttribute("inPosition", "yes")
        };
    }
}, 1000);
