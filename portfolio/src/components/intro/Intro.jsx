import "./intro.scss";
export default function Intro()
{
    return(
        <div className="intro" id="intro">
            <div className="left">
                <div className="crop">
                    <img src="assets/me.jpg" alt=""/>
                </div>
            </div>
            <div className="right">
                <h2 style={{color:"white"}}>hai, there...</h2>
                <h1>I am Muhammed Sinan C k</h1>
                <h2>computer science student</h2>
                <h2>IIT Patna</h2>
            </div>
        </div>
    );
}