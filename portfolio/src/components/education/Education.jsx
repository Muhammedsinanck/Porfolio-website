import "./education.scss";
export default function Education(){
    const data = [
        {
            id:1,
            institute: "Indian Institute of Technology Patna",
            degree: "Bachelor of Computer Science and engineering",
            featured: true,
        },
        {
            id:2,
            institute: "ST Vincent English Medium School",
            degree: "Higher Secondary",
            featured: false,
        },
        {
            id:3,
            institute: "Ranijai Higher Secondary School",
            degree: "high school",
            feature: false,
        },
    ]
    return(
        <div className="education" id="education">
            <div className="container">
                <h1>Education</h1>
                {
                    data.map((d)=>(
                        <div className={d.featured ? "card featured":"card"} style={{transform:`translateX(${(d.id-2)*(100/3)}vw)`}}>
                            <div className="top">
                                <h1>{d.institute}</h1>
                            </div>
                            <div classNme="middle">
                                <h2>{d.degree}</h2>
                            </div>
                            <div className="bottom">
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}