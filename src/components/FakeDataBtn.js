import React from 'react';
import johnDoe from '../data/johndoe';

function FakeDataBtn(props) {
  const { input, setInput, setSkills, setEducation, setJobs, setReferences } =
    props;

  const { info, skills, education, jobs, references } = johnDoe();

  const addJohnDoe = () => {
    setInput({ ...input, ...info });
    setSkills(skills);
    setEducation(education);
    setJobs(jobs);
    setReferences(references);
  };

  return (
    <div>
      <button className="autofill" onClick={addJohnDoe}>
        Auto-Fill
      </button>
    </div>
  );
}
export default FakeDataBtn;
