import React from "react";
import { Link, useHistory, useLocation, withRouter } from "react-router-dom";

function App(/* props */) {
  const history = useHistory();
  const location = useLocation();

  console.log("Home", { history, location });
  // console.log("Home", props);

  return (
    <div className="App">
      <Link to="/login">Sign In</Link>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a rhoncus leo. Donec eget
        lorem sit amet magna egestas faucibus nec eu eros. Quisque scelerisque tempus nisl, vitae
        elementum orci. Fusce pretium nulla quis massa dictum, sit amet bibendum enim cursus. In
        eget augue imperdiet, auctor diam in, ornare lectus. Nunc ullamcorper urna eu sem volutpat
        facilisis. Nunc bibendum risus vitae augue vehicula, placerat porttitor nisl sodales. Nam eu
        nibh imperdiet, placerat magna non, fermentum quam. Cras eget lacus ut ex finibus cursus. In
        vitae massa a nisi tristique consectetur ut non neque. Proin viverra aliquet urna, a laoreet
        ante rutrum in. Donec sit amet consequat est. Maecenas sodales sapien in condimentum
        bibendum. Ut elit massa, tempor ullamcorper mi nec, blandit interdum nisl. In consequat
        libero ut velit sollicitudin pharetra. Phasellus nec consectetur arcu, in consequat tortor.
        Ut pretium, massa vitae congue lacinia, est metus venenatis ligula, sit amet vehicula arcu
        nunc a neque. Quisque vel mauris non ex ultricies bibendum. Maecenas et nulla in diam
        porttitor ornare. Sed rhoncus nec tellus in venenatis. Curabitur at rutrum purus, ut tempus
        tellus. Pellentesque sed neque velit. Aenean nibh nisi, aliquam eget interdum eu, faucibus
        ac elit. Donec sed egestas tortor. Fusce sollicitudin finibus tempus.
      </p>
    </div>
  );
}

// export default withRouter(App);
export default withRouter(App);
