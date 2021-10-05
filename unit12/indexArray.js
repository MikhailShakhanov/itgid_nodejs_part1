module.exports = function (a, b) {
    return a.map( (item) => { return {[item[b]]:item} })
}