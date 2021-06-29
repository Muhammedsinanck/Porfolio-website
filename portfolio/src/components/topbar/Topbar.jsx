import "./topbar.scss";
export default function Topbar()
{
    return(
        <div className="topbar">
            <div className="left">
                <div className="links">
                    <a href="#intro">Intro</a>
                    <a href="#education">education</a>
                    <a href="#skills">skills</a>
                    <a href="#contact">contact</a>
                </div> 
            </div>
            <div className="right"></div>
        </div>
    );
}