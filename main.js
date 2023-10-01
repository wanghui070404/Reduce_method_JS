// Tính tổng số coin của khoá học
var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 0
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 1
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 2
    },
    {
        id: 4,
        name: 'C++',
        coin: 3
    }
]
var i = 0;

function coinHandler(accumulator, currentValue, currentIndex, originalArray)
{
    return accumulator + currentValue.coin;   
}

var totalCoin = courses.reduce(coinHandler, 0);
console.log(totalCoin);