import NavBar from "../Shared/NavBar/NavBar";


const FAQ = () => {
    return (

        <div className="mt-20 ">
            <NavBar></NavBar>
            <div className="collapse collapse-arrow bg-base-200 mt-4 ">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                    How far in advance should I book your services for my event?
                </div>
                <div className="collapse-content">
                    <p>It's recommended to book our services at least 3-6 months in advance to ensure availability and ample time for event planning and coordination.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mt-4">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    What types of events do you specialize in managing?
                </div>
                <div className="collapse-content">
                    <p>We specialize in managing a diverse range of events, including concerts, festivals, corporate parties, weddings, and private gatherings. Our experienced team can tailor our services to suit various event types.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mt-4">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Can you assist with securing entertainment acts for our event?
                </div>
                <div className="collapse-content">
                    <p>Absolutely! We have a network of talented performers and entertainers. Whether you're looking for live bands, DJs, or unique acts, we can help you secure the perfect entertainment to elevate your event.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mt-4">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    How do you handle unforeseen circumstances or emergencies during an event?
                </div>
                <div className="collapse-content">
                    <p>Our team is well-equipped to handle unexpected situations. We have contingency plans in place and work closely with vendors to ensure a seamless experience. Our priority is to address any issues swiftly to minimize impact on your event.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mt-4">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    What is your cancellation and refund policy?
                </div>
                <div className="collapse-content">
                    <p>Our cancellation policy varies based on the type of event and services booked. We understand that circumstances may change, and we strive to be flexible. Please refer to our terms and conditions or contact our customer support for specific details regarding cancellations and refunds.</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;