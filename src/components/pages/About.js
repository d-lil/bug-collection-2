import React from 'react';
import me from '../images/me.png';

export default function About() {
  return (
    <div style={{ marginTop: 30 }}>
      <img src={me} alt="me" />
      <h1>About Page</h1>
      <p>
        I'm a full stack web developer with a background in customer service. I learned coding through the University of Denver Bootcamp program. I'm currently living in the Denver Metro area, and I'm looking for a position where I can use my skills to help a company grow and succeed. I'm a hard worker, and I'm always looking for ways to improve myself and my work. I learn quickly, and like seeking new tools and technologies to use.
      </p>
    </div>
  );
}
