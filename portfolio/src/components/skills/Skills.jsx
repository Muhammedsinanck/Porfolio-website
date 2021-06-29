import "./skills.scss";
import {useState} from "react";
export default function Skills(){
    const [currentSlide, setCurrentSlide]=useState(0);
    const data =[
        {
            id:"1",
            name:"Data Structures and algorithms",
            description:"Dynamic programming,sortings,greedygraph algorithms,bitmasking",
        },
        {
            id:"2",
            name:"Problem solving",
            description:"",
        },
        {
            id:"3",
            name:"Abacus",
            description:"Can multiply 4 digit * 4 digit in mind",
        },
        {
            id:"4",
            name:"Web Devolopment basics",
            description:"html css javascript react basics",
        }
    ];
    const handleClick=(way)=>{
        way==="left"
            ? setCurrentSlide(currentSlide>0 ? currentSlide-1:2) 
            : setCurrentSlide(currentSlide< data.length-1 ? currentSlide+1:0)
    }
    return(
        <div className="skills" id="skills">
            <div className="title"><h1>Skills</h1></div>
            <div className="slider"  style={{transform:`translateX(-${100*currentSlide}vw)`}}>
                {data.map((d)=>(
                    <div className="container">
                        <div className="item">
                            <h1>{d.name}</h1>
                            <h2>
                                {d.description}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick("right")}/>
        </div>  
    );
}
