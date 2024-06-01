
function change(){
    const randomNumber = '#'+Math.floor(Math.random()*10000000).toString(16)
    const random1 = '#'+ Math.floor(Math.random()*10000000).toString(16)
    document.body.style.background = `linear-gradient(${randomNumber},${random1})`

}
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
function Reset()
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