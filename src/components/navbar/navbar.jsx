import styles from './navbar.module.css';

const Navbar = () => {
    

return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
        <h2>Geekfood</h2>
      </div>
       <div className={styles.headings}>
        <div>Home</div>
        <div>Quotes</div>
        <div>Restaurants</div>
        <div>Home</div>
        <div>Contacts</div>
       </div>
       <div className={styles.btn}><button>Get Started</button></div>
    </div>


)
}
export default Navbar;    // this is the end of the nav.js file