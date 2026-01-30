let pl_sc=document.getElementById('pl-sc');
pl_sc.innerText=0;

let comp_sc=document.getElementById('comp-sc');
comp_sc.innerText=0;

let reset=document.querySelector('.rst');

let choice=document.querySelectorAll('.choice');
let comp_choice=document.querySelector('.comp-choice');

const chooseOne = ()=>{
    let options=["rock","paper","scissor"];
    let index= Math.floor(Math.random() * 3);
    return options[index];
};

const rst=()=>{
    pl_sc.innerText=0;
    comp_sc.innerText=0;
    comp_choice.innerText="";
}
reset.addEventListener('click',()=>{
    rst();
});

choice.forEach((value)=>{
    value.addEventListener('click',()=>{
        let select=value.getAttribute('id');
        // console.log(select);
        
        let arr=chooseOne();
        // console.log(arr);
        if(select===arr){
            comp_choice.innerText=`It's a Draw`;
        }
        else if((select==='rock'&&arr==='scissor')||(select==='paper'&&arr==='rock')||(select==='scissor'&&arr==='paper'))
            {
                pl_sc.innerText=Number(pl_sc.innerText)+1;   
                comp_choice.innerText=`You Win`;
            }
            else if((select==='rock'&&arr==='paper')||(select==='paper'&&arr==='scissor')||(select==='scissor'&&arr==='rock')){
                comp_sc.innerText=Number(comp_sc.innerText)+1;
                comp_choice.innerText=`Computer Win`;
        }
        
    });
});
