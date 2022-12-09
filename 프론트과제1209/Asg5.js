
function car(distance)
{
    
    let message = 
    {
        101: ()=>{console.log('"시동이 걸렸습니다."');},
        102: ()=>{console.log('"시동이 꺼졌습니다."');},
        103: ()=>{console.log('"안전 위험으로 시동을 종료했습니다."');},
        104: ()=>{console.log('"주행이 완료되었습니다."');}
    }
    message[101];
    for(let i=0;i<distance;i++)
    {
        if(i>=40)
        { message[103]
             break
        }
        
        if(i<40)
        {
            remainDist=distance-i;
            console.log('최종거리까지',remainDist,'km 만큼 남았습니다.')
            console.log('주행거리까지',40-remainDist,'km 만큼 남았습니다.')
            if(remainDist===0)
            {
                message[101]
                break;
            }
        }
        
    }

}