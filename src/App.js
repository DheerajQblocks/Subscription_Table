import Subscription from './SubscriptionPlan'
import './App.css';
function App() {
    return (
        < >
            <div className="Price_Table">

                {Subscription ? Subscription.map((ele) => {
                    return <div className="Section" key={ele.Tag}>
                        <div className="Section_First">

                            <p className='Section_tag'>{ele.Tag}</p>
                            <h1 className='Section_heading'>{ele.Credit}</h1>
                            <div className="Section_Price_Duration">
                                <span className='Section_price'>{ele.price}</span >
                                <p className='Section_subDuration'>/{ele.planDuration}</p>

                            </div>
                            <p>{ele.SubHeading1}</p>
                            <h3>{ele.SubHeading2}</h3>
                        </div>
                        <a href="/"><button class="Section_btn bn632-hover bn27">{ele.PlanName}</button></a>

                        <div className="Section_includes">
                            <p style={{ fontWeight: "bold" }}>Includes:</p>
                            {ele.includes && ele.includes.length > 0 ? ele.includes.map((bullet) => {
                                return <ul>☑ {bullet}</ul>
                            }) : ""}

                        </div>
                    </div>
                }) : ""}
            </div>
        </>
    );
}

export default App;
