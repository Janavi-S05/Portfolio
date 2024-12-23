import React from 'react'
import leetcode from '../../assets/leetcode.png';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import medium from '../../assets/medium.png';

const Social = () => {
  return (
    <div className="home_social">
        <a href="https://www.linkedin.com/in/janavi-s/" className="home_social-icon" target="_blank"> 
        {/* <i class="uil uil-linkedin-alt"></i> */}
        <img src={linkedin} style={{width: "20px", height: "auto"}}></img>
        </a>

        <a href="https://github.com/Janavi-S05" className="home_social-icon" target="_blank"> 
        {/* <i class="uil uil-github-alt"></i> */}
        <img src={github} style={{width: "20px", height: "auto"}}></img>
        </a>

        <a href="https://leetcode.com/u/janavisivakumar05/" className="home_social-icon" target="_blank"> 
        <img src={leetcode} style={{width: "22px", height: "auto"}}></img>
        </a>

        <a href="https://medium.com/@janavisivakumar05" className="home_social-icon" target="_blank"> 
        <img src={medium} style={{width: "22px", height: "auto"}}></img>
        </a>
    </div>
  )
}

export default Social