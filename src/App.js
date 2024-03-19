import './App.css';
import about from './assests/about1.png'
import img1 from './assests/1.jpg'
import img2 from './assests/2.jpg'
import img3 from './assests/3.jpg'
import img4 from './assests/4.jpg'
import img5 from './assests/5.jpg'
import img6 from './assests/6.jpg'
import img7 from './assests/7.jpg'
import img8 from './assests/8.jpg'
import img9 from './assests/9.jpg'
import img10 from './assests/10.jpg'
import img11 from './assests/11.jpg'
import img12 from './assests/12.jpg'
function App() {
  var images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12]
  return (
    <div className='App'>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark" id='navbar'>
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">SPICES</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-expanded="false" aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#product">Product</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
            </ul>
            <button className='btn p-2 my-2'>Sign In</button>
          </div>
        </div>
      </nav>
      {/* Home */}
      <section id="home">
        <h1 className='text-center'>ORGANIC SPICES</h1>
        <p className='text-center'>There is no sincerer love than the love of food...</p>
        <div className='row'>
          <div className='col input-group'>
            <input type='text' className='form-control' placeholder='Email Address' />
            <button className='btn signin'>Get Started</button>
          </div>
        </div>
      </section>
      {/* Product */}
      <section id="product">
        <div className='container m-5'>
          <h1 className='text-center my-5'>OUR PRODUCTS</h1>
          <div className='row'>
            {
              images?.map((it,i) => (
                <div className='col-lg-4 col-md-4 col-12 mb-3'>
                  <div class="card">
                    <img src={it} class="card-img-top" alt={`food${i+1}`} />
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <button className="btn signin">Add to cart</button>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
      {/* About */}
      <section id="about">
        <div className='container-fluid'>
          <div className='row p-2'>
            <div className='col-lg-6 col-md-6 col-12 text-center'>
              <img src={about} alt='aboutimg' className="img-fluid my-2" />
            </div>
            <div className='col-lg-6 col-md-6 col-12 text-center'>
              <h1>ABOUT US</h1>
              <p>Food safety is a scientific discipline describing handling, preparation, and storage of food in ways that prevent food borne. This includes a number of routines that should be followed to avoid potentially severe health hazards. In this way food safety often overlaps with food defense to prevent harm to consumers.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
