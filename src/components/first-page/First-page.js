import React from 'react';
import './First-page.css';
import { Link } from 'react-router-dom';

function FirstPage() {
  return (
    <div>
     <div className="First">

 <nav id="navbar" class="nav">
   <ul class="nav-list">
     <li>
       <button>
           <Link to="/">
           </Link>
       </button>
     </li>
     <li><Link to="/SecondPage">Work</Link></li>
     <li>
       <a href="#contact">Contact</a>
     </li>
     <li>
       <a href="#contact">Help</a>
     </li>
   </ul>
 </nav>

 <section id="welcome-section" class="welcome-section">
   <h1>Hey I am Shourya dev atrey</h1>
   <p>a Web Developer</p>
</section>


 </div>
</div>
  );
}

export default FirstPage;