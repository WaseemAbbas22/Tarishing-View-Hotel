import React from 'react';

const MapEmbed = () => {
  return (
    <div style={{ width: "100%", height: "500px", marginTop: "2rem" }}>
      <iframe
        title="Hotel Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2347.5203285279176!2d74.43506297408993!3d34.90537407220629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e6cd6a95d4b181%3A0xbf180e226204a1d!2sTarishing%20View%20Hotel!5e1!3m2!1sen!2s!4v1750750670883!5m2!1sen!2s" 
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
