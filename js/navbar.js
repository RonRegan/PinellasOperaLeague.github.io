$(document).ready(function(){
  document.getElementById("navbar").innerHTML = '\
  <!-- Fixed navbar -->\
  <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">\
    <div class="container">\
      <div class="navbar-header">\
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">\
          <span class="sr-only">Toggle navigation</span>\
          <span class="icon-bar"></span>\
          <span class="icon-bar"></span>\
          <span class="icon-bar"></span>\
        </button>\
        <a class="navbar-brand" href="index.html">Pinellas Opera League</a>\
      </div>\
      <div class="navbar-collapse collapse">\
        <ul class="nav navbar-nav">\
          <li id="home"><a href="index.html">Home</a></li>\
          <li id="galleries" class="dropdown">\
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Galleries <b class="caret"></b></a>\
          <ul class="dropdown-menu">\
            <li><a href="dec-14-lunch.html">December 2014 Luncheon</a></li>\
            <li><a href="nov-14-lunch.html">November 2014 Luncheon</a></li>\
            <li><a href="oct-14-lunch.html">October 2014 Luncheon</a></li>\
            <li><a href="apr-lunch.html">April 2014 Luncheon</a></li>\
            <li><a href="cruise.html">Valentines Day Cruise</a></li>\
          </ul>\
          </li>\
          <li id="newsletters" class="dropdown">\
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Newsletters <b class="caret"></b></a>\
          <ul class="dropdown-menu">\
            <li><a href="documents/jan2015.pdf">January 2015</a></li>\
            <li><a href="documents/dec2014.pdf">December 2014</a></li>\
            <li><a href="documents/nov2014.pdf">November 2014</a></li>\
            <li><a href="documents/oct2014.pdf">October 2014</a></li>\
            <li><a href="documents/june2014.pdf">June 2014</a></li>\
            <li><a href="documents/may2014.pdf">May 2014</a></li>\
            <li><a href="documents/april2014.pdf">April 2014</a></li>\
            <li><a href="documents/march2014.pdf">March 2014</a></li>\
            <li><a href="documents/feb2014.pdf">February 2014</a></li>\
            <li><a href="documents/jan2014.pdf">January 2014</a></li>\
            <li><a href="documents/dec2013.pdf">December 2013</a></li>\
          </ul>\
          </li>\
          <li id="contact"><a href="contact.html">Contact</a></li>\
          <li id="local_opera"><a href="local_opera.html">Local Opera</a></li>\
        </ul>\
      </div><!--/.nav-collapse -->\
    </div>\
  </div>'
});

function setActiveNavbar(choice) {
  var list_item = document.getElementById(choice);
  list_item.className += list_item.className ? " active" : "active";
}
