import '../styles/GeneralInfo.css';

function GeneralInfo({ data, onChange }) {
  if (data.isEditing) {
    return (
      <div className="general-info-form">
        <input
          type="text"
          placeholder="Full Name"
          value={data.fullName}
          onChange={(e) => onChange('fullName', e.target.value)}
        />
        <input
          type="text"
          placeholder="Professional Title"
          value={data.title}
          onChange={(e) => onChange('title', e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={data.email}
          onChange={(e) => onChange('email', e.target.value)}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={data.phone}
          onChange={(e) => onChange('phone', e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          value={data.location}
          onChange={(e) => onChange('location', e.target.value)}
        />
        <input
          type="url"
          placeholder="LinkedIn / Portfolio"
          value={data.link}
          onChange={(e) => onChange('link', e.target.value)}
        />
      </div>
    );
  }

  return (
    <div className="general-info-display">
      <h1>{data.fullName || 'Your Name'}</h1>
      <p className="title">{data.title || 'Professional Title'}</p>
      <div className="contact-info">
        <div className="contact-item">
          <span className="material-symbols-outlined">mail</span>
          <p>{data.email}</p>
        </div>
        
        <div className="contact-item">
          <span className="material-symbols-outlined">call</span>
          <p>{data.phone}</p>
        </div>

        <div className="contact-item">
          <span className="material-symbols-outlined">location_on</span>
          <p>{data.location}</p>
        </div>

        {data.link && (
          <div className="contact-item">
            <span className="material-symbols-outlined">link</span>
            <a href={data.link} target="_blank" rel="noreferrer">
              {data.link}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default GeneralInfo;
