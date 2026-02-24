import '../styles/Education.css';

function Education({ data, onChange, onDelete, onToggle }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onToggle(data.id);
  };

  if (data.isEditing) {
    return (
      <form className="education-item-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="School / University"
          value={data.school}
          onChange={(e) => onChange(data.id, 'school', e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Degree / Course"
          value={data.degree}
          onChange={(e) => onChange(data.id, 'degree', e.target.value)}
        />
        <input
          type="text"
          placeholder="From (e.g. August 2020)"
          value={data.dateFrom}
          onChange={(e) => onChange(data.id, 'dateFrom', e.target.value)}
        />
        <input
          type="text"
          placeholder="Until (e.g. July 2024 or Present)"
          value={data.dateUntil}
          onChange={(e) => onChange(data.id, 'dateUntil', e.target.value)}
        />
        <div className="item-actions">
          <button type="submit" className="save-btn">Save</button>
          <button
            type="button"
            className="delete-btn"
            onClick={() => onDelete(data.id)}
          >
            Delete
          </button>
        </div>
      </form>
    );
  }

  return (
    <div className="education-item-display" onClick={() => onToggle(data.id)}>
      <div className="edu-main">
        <h3>{data.school || 'School Name'}</h3>
        <p className="degree">{data.degree || 'Degree/Field of Study'}</p>
      </div>
      <div className="edu-meta">
        <p>{data.dateFrom || 'Start Date'} - {data.dateUntil || 'End Date'}</p>
      </div>
    </div>
  )
}

export default Education;
