import './Contacts.css'


function Contacts() {
  return (
    <div className='main-divcontact'>

      <div className='contacts-main-dev'>
        <h1 className='Hiders'>Get in Touch</h1>
        <input  type='Name'  placeholder='Enter Your Name'></input>
        <input type='Email'  placeholder='Enter Your Email'></input>
        <input  type='Number' placeholder='Enter Your Number'></input>
        <input type='Name' placeholder='Your message' className='Contact-in'></input>
        <button>Submit</button>

      </div>
    </div>




  )
}

export default Contacts