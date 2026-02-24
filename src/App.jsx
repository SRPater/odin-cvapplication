import { useState } from 'react';

import Section from './components/Section.jsx';
import GeneralInfo from './components/GeneralInfo.jsx';

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
        />
      </Section>
    </div>
  );
}

export default App;
