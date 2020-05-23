var x = 1;
var y = 2.345;
var z = 'hello';

var fnc = function(){
    console.log('hello')
}

x = fnc()
console.log(x)

$(function(){
    console.log('load!!!')
    $('#button01').click(function(){
        console.log('button clicked!')
    })
    console.log('end')
})

console.log('xxx')

// hello, undefined, xxx , load!!! , end , button clicked!