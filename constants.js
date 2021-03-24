
const PI = Math.PI;
const FUNCTION_KEY = "function",
    SET_TIMEOUT_KEY = "setTimeout",
    SET_INTERVAL_KEY = "setInterval",
    CALLBACK_KEY = "callback",
    PROMISE_KEY = "promise";


const visualNodeClasses = `p-2 h-10 w-full mb-1 flex items-center justify-center shadow-2xl capitalize transform-all duration-75 bg-gray-700`;
const visualCallbackNodeClasses = `p-2 h-10 w-full mb-1 flex items-center justify-center shadow-2xl capitalize transform-all duration-75 bg-red-700`
const visualPromiseNodeClasses = `p-2 h-10 w-full mb-1 flex items-center justify-center shadow-2xl capitalize transform-all duration-75 bg-blue-700`
const visualTimeoutNodeClasses = `p-2 h-10 w-full mb-1 flex items-center justify-center shadow-2xl capitalize transform-all duration-75 bg-green-700`