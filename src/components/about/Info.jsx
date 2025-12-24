import React from 'react'

const Info = () => {
  return (
    <div className="about_info grid">
        <div className="about_box">
            <h3 className="about_title">Leetcode</h3>
            <span className="about_subtitle">400+ problems</span>

        </div>
        <div className="about_box">
            <h3 className="about_title">GFG</h3>
            <span className="about_subtitle">10+ patterns</span>
        </div>
        <div className="about_box">
            <h3 className="about_title">Worked on</h3>
            <span className="about_subtitle">10+ Projects</span>
        </div>
    </div>
  )
}

export default Info