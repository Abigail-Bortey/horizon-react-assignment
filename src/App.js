import React from 'react'; 
import './App.css';

function App() {
  return (
    
<div>
<div class="container-fluid">
  <div class="row">
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">

  <ol class="carousel-indicators">
    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
  </ol>

  
  <div class="carousel-inner" role="listbox">
    <div class="item active">
      <img src="IMAGES/naa 2.jpg" alt="..." />
      <div class="carousel-caption">
      </div>
    </div>
    <div class="item">
      <img src="IMAGES/office 1.jpg" alt="..." />
      <div class="carousel-caption">
  
      </div>
    </div>
  </div>

  
  <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
  	
  </div>
  </div>
  
<br/>

<div class="container a">
	<h3 class="text-center">PLANS</h3>
		<div class="col-md-3">
    <div class="thumbnail">
      <img src="IMAGES/office 1.jpg" alt="..." />
      <div class="caption">
      	<h3>VIRTUAL OFFICE</h3>
        <p>Our virtual offices allow your
      business to get our location address,
      phone services and also you become
        a member of our community with
          benefits such as access to our
                meeting rooms.</p>
       </div>
       </div>
		</div>



		<div class="col-md-3">
			<div class="thumbnail">
      <img src="IMAGES/photo-8.jpg" alt="..." />
      <div class="caption">
        <h3>CUSTOMIZED OFFICES</h3>
        <p>Our customized offices offer a great
           location fpr your business and you
          can customize your office to suit your
             preferences.Also, you become a 
               member of our community with
               benefits such as access to our
                       meeting rooms.</p>
                   </div>
                </div>
		     </div>


		<div class="col-md-3">
			<div class="thumbnail">
      <img src="IMAGES/photo-10.jpg" alt="..." />
      <div class="caption">
        <h3>SERVICED OFFICES</h3>
        <p>Our serviced offices offer a great
           location for your business and we
           provide services such as internet,
           utilities and offers from our partners.
           Also you becomea member of our
             communiyt with benefits such as
               access to our meeting rooms.</p>
  </div>
</div>
		</div>

		<div class="col-md-3">
			<div class="thumbnail">
      <img src="IMAGES/photo-5.jpg" alt="..." />
      <div class="caption">
        <h3>MEETING ROOMS</h3>
        <p>Our meeting room offer a great
           location for your meeting with your
             client or business partners.We
           provide presentation equipment and
           coffee. Also you become a member
           of our community with benefits such
              as access to our meeting rooms.</p>
              </div>
           </div>
		</div>
    </div>
	<br/>

		<div class="container-fluid">
			<div class="row">
				<div class="col-md-4 Abi">
					<h4>VISIT US IN KENYA</h4>
					<h5 class="y">Nairobi.Kenya</h5>
					<p class="a">belgravia center,14 riverside drive drive<br/>4th floor
					;off riverside drive.<b/>6th floor,off riverside</p>
				</div>

				<div class="col-md-4 Abi">
					<h4>VISIT US IN GHANA</h4>
				<h5 class="y">Accra-Ghana</h5>
					<p class="a">Stelling Bank Building</p>
          <p class="a">One Airport Square. Airport city<br/>8th floor</p>
        </div>

        <div class="col-md-4 Abi">
         <p><h4>VISIT US IN NIGERIA</h4></p>
          <h5 class="y">Lagos-Nigeria</h5>
          <p class="a">Stelling Bank Building</p>
          <p class="a">One Airport Square. Airport city<br/>8th floor</p>
				</div> 
			</div>

</div>
</div>

  );
}

export default App;
