let log = {
    info: function(info){
        console.log(`info : $({info})`)
    },

    warn: function(warn){
        console.log(`warn : $({warn})`)
    },

    error: function(error){
        console.log(`error : $({error})`)
    }
}

module.exports = log

module.exports.display = function(){
    console.log('This is the display method')
}

module.exports.test = function(){
    console.log('This is the test method')
}

// console.log(module.exports)