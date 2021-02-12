import React from 'react';

export const Componenta2=({text1, text2, children,backgroundColor, color})=>{
    
    return (<div style={{"background-color":backgroundColor, color}} >{text1+text2+children}</div>)

}


export const Componenta3= ({text3})=>{
    const listaProduse=[
        {
            titlu:'Ana',
            descriere:'arm',
            culoareProfil:'red'
        },
        {
            titlu:'Ileana',
            descriere:'mic',
            culoareProfil:'blue'
        },
        {
            titlu:'Elena',
            descriere:'mare',
            culoareProfil:'brown'
        },
        {
            titlu:'Maria',
            descriere:'mere',
            culoareProfil:'pink'
        },
        {
            titlu:'Andreea',
            descriere:'acasa',
            culoareProfil:'violet'
        }
    ];

    const ListItem=({titlu, descriere,culoareProfil})=>{
    const style={
                backgroundColor:culoareProfil,
                borderRadius:'50%',
                hight:'25px',
                width:'25px'
                };

        return (
        <div style={{hight:'50px', backgroundColor:'yellowgreen'}}> 
            <span style={style}></span>
            <span>
                <p>{titlu}</p>
                <p>{descriere}</p>
            </span>
        </div>
        )
    }
    const listaA=listaProduse.map((item)=>{
        return <ListItem titlu={item.titlu} descriere={item.descriere} culoareProfil={item.culoareProfil}/>
    })

    return(<div> {listaA}</div>)
}