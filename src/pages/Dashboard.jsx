import React from 'react'

const Dashboard = () => {
  return (
    
    <div>Dashboard
      <form>
        <input type="text" placeholder="username" />
        <br/>
        <input type="text" placeholder="email" />
        <br/>
        <input type="text" placeholder="password" />
        <br/>
        <div>
          <label>Gender:</label>
          <input type="radio" name="gender" value="male" /> Male
          <input type="radio" name="gender" value="female" /> Female
         
        </div>
        <br/>
        <textarea type ="text " placeholder='address' />
        <br/>
        <label>Country</label>
        <select>
          <option value="india">india</option>
          <option value="usa">usa</option>
          <option value="uk">uk</option>
          </select>
          <br/>
          <label>File</label>
          <input type ="file"/>
          <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Dashboard