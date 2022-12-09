
let message={
    100: ()=>{console.log('전산표와 일치합니다.')},
    101: ()=>{console.log('전산표와 일치하지 않습니다.')}
}

function checkItem(item,number){

    let itemList = {
        야채곱창:5,
        바나나우유:10,
        삼각김밥:15,
        도시락:10,
        샌드위치:10
    }

    let itemNumber=itemList[item];//내가 선택한 아이템의 개수
    
    if(number===itemNumber)
    {
        return message[100]();
    }//전산표와 일치

    if(!itemNumber)
    {
       return console.log('"',item,'"(품목없음)');
    }//undefined에 !붙이면 true뜸 

    if(number!=itemNumber)
    {
        return message[101]();
    }
}

checkItem('불닭',10)