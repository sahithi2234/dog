

function choice(m)
{
    return m[Math.floor(Math.random()*m.length)+1];
}

function  remove(m,item)
{
    let b=[];
    let x1=0;
    for(let v1=0;v1<m.length;v1++)
    {
       
        if(m[v1]===item)
        {
            continue;
        }
        else
        {
            b[x1]=m[v1];
            x1++;
        }
    }
    return(b.length);
}

export {choice,remove};