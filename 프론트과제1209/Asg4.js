function solution(arr)
{
    let evenArray = [];
    let oddArray = [];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]%2===0)
        {
            evenArray.push(arr[i]);
        }else
        {
            oddArray.push(arr[i]);
        }
    }
    let result = [evenArray.length, oddArray.length];
    return result;

}


// ex)
// const arr = [1,2,3,4,5]
// const a = solution(arr)
// console.log(a)
const arr = [1,2,3,4,5];
console.log(solution(arr));