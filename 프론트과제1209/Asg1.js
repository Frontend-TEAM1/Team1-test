const a=[1, 2, 3, 5, 8, 4]

function maxValue(value){
    max=value[1]
    for(let i=0;i<value.length;i++){
        if(value[i]<value[i+1]){
            max=value[i+1]
        }
    }
    return max;
}

function sortArr(Arr){
    for(let i=0;i<Arr.length;i++){
        if(Arr[i]>Arr[i+1]){
            let box= Arr[i+1]
            Arr[i+1]=Arr[i]
            Arr[i]=box
        }
    }
    return Arr;
}
// sort하면 첫ㄱ번째값이 가장큰거임
console.log('maxValue: ',maxValue(a))
console.log('sortArr',sortArr(a))