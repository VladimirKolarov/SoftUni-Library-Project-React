import "./Tac.css"

export const Tac = ({ tacClickHandler }) => {
    return (

        <div className="Tac-container">
            <article className="Tac-article">

                <h2>Terms and Conditions</h2>

                <div>
                    <p>Last updated: 21.04.2021</p>
                    <p>Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before registering to this website ("Website", "Service") operated by The School library ("us", "we", or "our").</p>
                    <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.</p>
                    <p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</p>
                    <p>If you wish to purchase any product or service made available through the Service ("Purchase"), you may be asked to supply certain information relevant to your Purchase. The Purchases section is for businesses that sell online (physical or digital). For the full disclosure section, create your own Terms and Conditions.</p>
                    <h3>Subscriptions</h3>
                    <p>Some parts of the Service are billed on a subscription basis ("Subscription(s)"). You will be notified in advance before any billing. <br />The Subscriptions section is for SaaS businesses. For the full disclosure section, create your own Terms and Conditions.</p>
                    <h3>Content</h3> <p>Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content").The Content section is for businesses that allow users to create, edit, share, make content on their websites or apps. For the full disclosure section, create your own Terms and Conditions.</p>
                    <h3>Links To Other Web Sites</h3> <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by My Company (change this).<br />My Company (change this) has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that My Company (change this) shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
                    <h3>Changes</h3><p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 (change this) days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
                    <h3>Contact Us</h3><p>If you have any questions about these Terms, please contact us.</p>
                </div>

                <button onClick={tacClickHandler}>Close</button>

            </article>
        </div>
    )
}