import { FirstService } from "../constants/texts";
import { FirstServiceTitle } from "../constants/texts";
import {
    FaBiohazard
} from "react-icons/fa";

function ServicesTextBlock()
{
    return (
        <div className="my-services-block">
            <h1>My services</h1>

            <div className="my-services">
                <section className="one-service">
                    <div>
                        <FaBiohazard className="my-services-icon"/>
                        <h1>{FirstServiceTitle}</h1>
                    </div>
                    <p>{FirstService}</p>
                </section>
                
                <section className="one-service">
                    <div>
                        <FaBiohazard className="my-services-icon"/>
                        <h1>{FirstServiceTitle}</h1>
                    </div>
                    <p>{FirstService}</p>
                </section>
                
                <section className="one-service">
                    <div>
                        <FaBiohazard className="my-services-icon"/>
                        <h1>{FirstServiceTitle}</h1>
                    </div>
                    <p>{FirstService}</p>
                </section>
                
                <section className="one-service">
                    <div>
                        <FaBiohazard className="my-services-icon"/>
                        <h1>{FirstServiceTitle}</h1>
                    </div>
                    <p>{FirstService}</p>
                </section>
            </div>
        </div>
    );
}

export default ServicesTextBlock;