import '../styles/Experience.css';

function Experience({ data, onChange, onDelete, onToggle }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onToggle(data.id);
  };

  if (data.isEditing) {
    return (
      <form className="experience-item-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Company"
          value={data.company}
          onChange={(e) => onChange(data.id, 'company', e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Position"
          value={data.position}
          onChange={(e) => onChange(data.id, 'position', e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={data.description}
          onChange={(e) => onChange(data.id, 'description', e.target.value)}
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
    <div className="experience-item-display" onClick={() => onToggle(data.id)}>
      <div className="exp-main">
        <h3>{data.company || 'Company Name'}</h3>
        <p className="position">{data.position || 'Position Title'}</p>
      </div>
      <div className="exp-meta">
        <p>{data.dateFrom || 'Start Date'} - {data.dateUntil || 'End Date'}</p>
      </div>
      {data.description && (
        <div className="exp-description">{data.description}</div>
      )}
    </div>
  );
}

export default Experience;
