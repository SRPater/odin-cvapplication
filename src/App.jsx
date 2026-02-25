import { useState } from 'react';

import Section from './components/Section.jsx';
import GeneralInfo from './components/GeneralInfo.jsx';
import Education from './components/Education.jsx';
import Experience from './components/Experience.jsx';

import './styles/App.css';

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    fullName: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    link: '',
    isEditing: true,
  });

  const [education, setEducation] = useState([
    {
      id: crypto.randomUUID(),
      school: '',
      degree: '',
      dateFrom: '',
      dateUntil: '',
      isEditing: true,
    }
  ]);

  const [experience, setExperience] = useState([
    {
      id: crypto.randomUUID(),
      company: '',
      position: '',
      description: '',
      dateFrom: '',
      dateUntil: '',
      isEditing: true,
    }
  ]);

  const handleGeneralChange = (field, value) => {
    setGeneralInfo({
      ...generalInfo,
      [field]: value,
    });
  };

  const toggleGeneralEdit = () => {
    setGeneralInfo({
      ...generalInfo,
      isEditing: !generalInfo.isEditing,
    });
  };

  const handleEducationChange = (id, field, value) => {
    setEducation(education.map(edu =>
      edu.id === id ? { ...edu, [field]: value } : edu
    ));
  };

  const toggleEducationEdit = (id) => {
    setEducation(education.map(edu =>
      edu.id === id ? { ...edu, isEditing: !edu.isEditing } : edu
    ));
  };

  const addEducation = () => {
    setEducation([
      ...education,
      {
        id: crypto.randomUUID(),
        school: '',
        degree: '',
        dateFrom: '',
        dateUntil: '',
        isEditing: true,
      },
    ]);
  };

  const deleteEducation = (id) => {
    setEducation(education.filter(edu => edu.id !== id));
  };

  const handleExperienceChange = (id, field, value) => {
    setExperience(experience.map(exp =>
      exp.id === id ? { ...exp, [field]: value } : exp
    ));
  };

  const toggleExperienceEdit = (id) => {
    setExperience(experience.map(exp =>
      exp.id === id ? { ...exp, isEditing: !exp.isEditing } : exp
    ));
  };

  const addExperience = () => {
    setExperience([
      ...experience,
      {
        id: crypto.randomUUID(),
        company: '',
        position: '',
        description: '',
        dateFrom: '',
        dateUntil: '',
        isEditing: true,
      },
    ]);
  };

  const deleteExperience = (id) => {
    setExperience(experience.filter(exp => exp.id !== id));
  };

  return (
    <div className="app-container">
      <h1>CV Application</h1>

      <Section
        title="General Information"
        isEditing={generalInfo.isEditing}
        onToggle={toggleGeneralEdit}
      >
        <GeneralInfo
          data={generalInfo}
          onChange={handleGeneralChange}
          onToggle={toggleGeneralEdit}
        />
      </Section>

      <Section title="Education">
        {education.map((edu) => (
          <Education
            key={edu.id}
            data={edu}
            onChange={handleEducationChange}
            onDelete={deleteEducation}
            onToggle={toggleEducationEdit}
          />
        ))}
        <button type="button" className="add-btn" onClick={addEducation}>
          + Add Education
        </button>
      </Section>

      <Section title="Experience">
        {experience.map((exp) => (
          <Experience
            key={exp.id}
            data={exp}
            onChange={handleExperienceChange}
            onDelete={deleteExperience}
            onToggle={toggleExperienceEdit}
          />
        ))}
        <button type="button" className="add-btn" onClick={addExperience}>
          + Add Experience
        </button>
      </Section>
    </div>
  );
}

export default App;
