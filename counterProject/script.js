let c=0;
const para=document.getElementById('count')
const odd=document.getElementById('even')
const print=document.getElementById('print')
function incr()
{
    if(c<25)
    {
        ++c
        para.textContent=c;
        checkOdd(c);
        print.textContent=''
    }
    else
    {
        print.textContent='Counter will work 0 to 25 only'
    }
}
function decr()
{
    if(c>0)
    {
        --c
        para.textContent=c;
        checkOdd(c); 
        print.textContent=''
    }
    else
    {
        print.textContent='Counter will work 0 to 25 only'
    } 
}
function reset()
{
    c=0;
    para.textContent=c;
    odd.textContent="EVEN"
}
function checkOdd(x)
{
    if(x%2==0)
        {
            odd.textContent="EVEN"
        }
    else{
        odd.textContent="ODD"
    }
}