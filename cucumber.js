module.exports = {
    default: {
        requireModule:["ts-node/register"],
        require:["step-definition/**/*.ts"],
        //paths:["features/**/*.feature"],
        format:["progress"],
        timeout:600000
    }
};