import React from "react";

const GoogleMapEmbed: React.FC = () => (
    <div style={{width: "100%", height: "450px"}}>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d720.30996319914!2d77.20231413375822!3d28.55611905448634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce273aefc9451%3A0x585521d70d54537e!2sABL%20workspaces!5e0!3m2!1sen!2sin!4v1747765362476!5m2!1sen!2sin"
            width="100%"
            height="100%"
            frameBorder={0}
            style={{border: 0}}
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
            title="Google Map Location"
        />
    </div>
);

export default GoogleMapEmbed;
