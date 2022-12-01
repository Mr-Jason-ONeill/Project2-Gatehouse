const { default: TestRunner } = require("jest-runner");
const { describe, updateLocale } = require("yargs");
const { deflateSync } = require("zlib");

const click = require('./click');

beforeAll(() => {
    let fs = require("fs");
    let fileContent = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContent);
    document.close();
})


//test is just a string that explains what the test is doing.
//the next part is a function, where we add in what we expect to happen.
test('button clicked will display new information' () => {
    expect
})
