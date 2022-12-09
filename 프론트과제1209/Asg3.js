
function plusNcheckArr(arr,integer)
{
    for(let i=0; i<arr.length; i++)
    {
        arr[i]=arr[i]+10;
    }
    

    const originLength=arr.length;
    let matchNumber;
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i]===integer)
        {
            matchNumber=i;
            arr.splice(i, 1);
        }
    }
    
    if(originLength!=arr.length)
    {
        return arr;
    }else
    {
        console.log('"결과값이 없습니다." (값 없음)');
        return;
    }
}
// ex) 
// const arr = [1,2,3,4,5]
// const a =함수명(arr, 11)
// console.log (a)
const array=[1, 2, 3, 4, 5];
const a = plusNcheckArr(array, 11);
console.log(a);