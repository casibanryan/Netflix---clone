import React from 'react'

function Header() {
  return (
    <React.Fragment>
        	<header className="header">
			<div className="container">
				<div className="header-area">
					<div className="logo">
						<a href="#"><img src="assets/img/logo.png" alt="logo" /></a>
					</div>
					<div className="header-right">
						<form action="#">
							<select>
								<option value="Movies">Movies</option>
								<option value="Movies">Movies</option>
								<option value="Movies">Movies</option>
							</select>
							<input type="text"/>
							<button><i className="icofont icofont-search"></i></button>
						</form>
						<ul>
							<li><a href="#">Welcome Guest!</a></li>
							<li><a href="#">Logout</a></li>
						</ul>
					</div>
				</div>
			</div>
		</header>
    </React.Fragment>
  )
}

export default Header;