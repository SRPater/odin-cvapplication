import '../styles/Section.css';

function Section({ title, children, isEditing, onToggle }) {
  return (
    <section className="cv-section">
      <div className="section-header">
        <h2>{title}</h2>
        {onToggle && (
          <button type="button" onClick={onToggle}>
            {isEditing ? 'Save' : 'Edit'}
          </button>
        )}
      </div>
      <div className="section-content">
        {children}
      </div>
    </section>
  );
}

export default Section;
