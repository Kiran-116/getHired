import React from 'react';

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <img src="https://i.postimg.cc/yNzDSmHS/besttt.png" alt="Logo" style={styles.logo} />
        {/* <span style={styles.logoText}>Your Logo</span> */}
      </div>
      {/* Add your navigation links here */}
      <div style={styles.navLinks}>
        <h1 style={styles.link}>Home</h1>
        <h2 style={styles.link}>About</h2>
        <h2 style={styles.link}>Contact</h2>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem',
    background: 'white',
    color:'black',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '150px', // You can adjust the width to make it bigger
    height: '89px', // You can adjust the height to make it bigger
    marginRight: '1rem',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
  },
  link: {
    margin: '0 10px',
    cursor: 'pointer',
  },
};

export default Navbar;

// https://i.postimg.cc/Z52HdD7K/logoo.jpg  align the home contact about in a row
