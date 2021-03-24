// Buttons to Interact in Call Box
const functionButton = getEle("function");
const setTimeoutButton = getEle("setTimeout");
const setIntervalButton = getEle("setInterval");
const callbackButton = getEle("callback");
const promiseButton = getEle("promise");
const executeButton = getEle("execute");
const clearButton = getEle("clear");

// Visual Representaion Boxes
const excecutionBlock = getEle("excecutionBlock");
const executeBox = getEle("executeBox");
const logBox = getEle("functionLogBox");
const promiseBox = getEle("promiseBox");
const timeoutBox = getEle("timeoutBox");

// Queue to Manage The action Elements
const executionList = createQueue();
const logList = createQueue();
const timeoutList = createQueue();
const promiseList = createQueue();
