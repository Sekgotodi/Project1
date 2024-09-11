import React from 'react';
import {FaPlusCircle} from 'react-icons/fa';

const MainContent = () => {
  return (
    <div className="main-content">
      <form className="log-issue-form">
        <h2><FaPlusCircle/>LOG ISSUE</h2>
        <div className='box'>
        
        <label>

          Issue title:

        </label>

        <input type="text" placeholder="Internal Issue" />

        </div>

        <div className='box'>
          
        <label>
          Category:
         
        </label>
        <select>
            <option>Network</option>
            <option>Software</option>
            <option>Hardware</option>
          </select> 
       </div>
       <div className='box'>
        <label>
          Department: 
            <input type="text" name="department" placeholder="Human Resource (HR)" />
        </label>
      </div>
      <div className='box'>
        <label>
          Priority level:
          <select>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </label>
        </div>
     
        <label>
          Description:
          <textarea placeholder="Describe the issue here..." rows="4"></textarea>
       
        </label>
        <div className='box'>
        <label>
          Date:
          <input type="date" name="date"/>
        </label>
      </div>
      <div className='box'>
        <label>
          Location:
        <input type="text" placeholder="TUT Building 18" name="location"/>
          
        </label>
        </div>
        <label>
          Attachments (include screenshots, photos of faulty equipment/documents):
          <input type="file" />
        </label>
        
      
      <div className='box'>
        <label>
        
        </label>
          </div>
          
          <div className='box'>
        <div className="form-buttons">
          <button type="submit">Submit</button>
          <button type="button" className="cancel-button">Cancel</button>
        </div>
        </div>
      </form>
    </div>
  );
};

export default MainContent;
