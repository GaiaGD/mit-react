function NavBar(){
  return(
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">BadBank</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link" href="#/createaccount/">Create Account</a>
              <a class="nav-link" href="#/Login/">Login</a>
              <a class="nav-link" href="#/deposit/">Deposit</a>
              <a class="nav-link" href="#/withdraw/">Withdraw</a>
              <a class="nav-link" href="#/balance/">Balance</a>
              <a class="nav-link" href="#/alldata/">AllData</a>
            </div>
          </div>
        </div>
      </nav>

    </>
  );
}