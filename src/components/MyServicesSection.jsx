import { FaCode, FaCodeBranch, FaComputer, FaFirefoxBrowser, FaServer, FaWebAwesome } from "react-icons/fa6";
import { FirstService, ForthService, ForthServiceTitle, SecondService, SecondServiceTitle, ThirdService, ThirdServiceTitle } from "../constants/texts";
import { FirstServiceTitle } from "../constants/texts";
import {
    FaBiohazard,
    FaDeploydog
} from "react-icons/fa";
import { BsBrowserChrome } from "react-icons/bs";

function ServicesTextBlock()
{
    return (
        <div className="my-services-block">
            <h1>My services</h1>

            <div className="my-services">
                <section className="one-service">
                    <div>
                        <BsBrowserChrome className="my-services-icon"/>
                        <h1>{FirstServiceTitle}</h1>
                    </div>
                    <p>{FirstService}</p>
                </section>
                
                <section className="one-service">
                    <div>
                        <FaCode className="my-services-icon"/>
                        <h1>{SecondServiceTitle}</h1>
                    </div>
                    <p>{SecondService}</p>
                </section>
                
                <section className="one-service">
                    <div>
                        <FaServer className="my-services-icon"/>
                        <h1>{ThirdServiceTitle}</h1>
                    </div>
                    <p>{ThirdService}</p>
                </section>
                
                <section className="one-service">
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