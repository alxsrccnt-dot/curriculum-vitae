import { 
    FirstServiceTitle, FirstService,
    SecondServiceTitle, SecondService,
    ThirdServiceTitle, ThirdService,
    ForthServiceTitle, ForthService
} from "../constants/texts";
import { FaCode, FaCodeBranch, FaGlobe, FaServer } from "react-icons/fa6";

function ServicesTextBlock()
{
    return (
        <div className="my-services-block">
            <h2>What I Do Best</h2>

            <div className="services-colection">
                <section className="rounded-border one-service">
                    <div>
                        <FaGlobe className="my-services-icon"/>
                        <h2>{FirstServiceTitle}</h2>
                    </div>
                    <p>{FirstService}</p>
                </section>

                
                <section className="rounded-border one-service">
                    <div>
                        <FaCode className="my-services-icon"/>
                        <h1>{SecondServiceTitle}</h1>
                    </div>
                    <p>{SecondService}</p>
                </section>
                
                <section className="rounded-border one-service">
                    <div>
                        <FaServer className="my-services-icon"/>
                        <h1>{ThirdServiceTitle}</h1>
                    </div>
                    <p>{ThirdService}</p>
                </section>
                
                <section className="rounded-border one-service">
                    <div>
                        <FaCodeBranch className="my-services-icon"/>
                        <h1>{ForthServiceTitle}</h1>
                    </div>
                    <p>{ForthService}</p>
                </section>
            </div>
        </div>
    );
}

export default ServicesTextBlock;