import React from 'react';

const MainContent = () => {
  return (
    <div className="main-content">
      <form className="log-issue-form">
        <h2>Log Issue</h2>
        <label>
          Issue title:
          <input type="text" />
        </label>
        <label>
          Department:
          <select>
            <option>Human Resource (HR)</option>
            <option>IT</option>
            <option>Finance</option>
          </select>
        </label>
        <label>
          Category:
          <select>
            <option>Network</option>
            <option>Software</option>
            <option>Hardware</option>
          </select>
        </label>
        <label>
          Priority level:
          <select>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </label>
        <label>
          Description:
          <textarea></textarea>
        </label>
        <label>
          Date:
          <input type="date" />
        </label>
        <label>
          Location:
          <input type="text" />
        </label>
        <label>
          Attachments:
          <input type="file" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MainContent;
