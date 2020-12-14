import styled  from 'styled-components';
export const Wrapper=styled.div`
max-width:1100px;
background-color:#ebfe;
border-radius: 10px;
border:2px solid green;
padding:20px;
text-align:center;
p{
    font-size:1rem;
}
`
type ButtonWrapperProp={
    correct:boolean;
    userClicked:boolean;
}
export const ButtonWrapperProps=styled.div<ButtonWrapperProp>`
transition:all 0.3s ease;
:hover{
    opacity: 0.8;
}
button{
    cursor: pointer;
    user-select: none;
    width:100%;
    height: 80px;
    margin:5px 0;
    font-size:0.8rem;
    background:${({correct,userClicked})=>
         correct?'linear-gradient(90deg,#56ffa4,#59bc86)':
         !correct && userClicked?'linear-gradient(90deg,#ff5656,#c16868)':
         'linear-gradient(90deg,#56ccff,#6eafb4)'
        
    };
    border:3px solid #fff;
    border-radius:10px;
    color:white;
    
}

`


