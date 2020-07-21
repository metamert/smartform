import React from "react";
import { Helmet } from "react-helmet";
import { login } from "./_services/user.service";

class AdminLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      loading: false,
      error: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  // USING METHOD TO SUMBIT FORM DETAILS TO SERVER
  handleSubmit(e) {
    e.preventDefault();
    const { username, password } = this.state;

    // stop here if form is invalid
    if (!(username && password)) {
      return;
    }

    this.setState({ loading: true });
    this.props.history.push("/admin/dashboard");

    // login(username, password).then(
    //   (response) => {
    //     // IF GETTING RESPONSE TRUE THEN SHOULD BE LOGIN AND REDIRCT
    //     if (response.success) {
    //       this.props.history.push("/profile");
    //     } else {
    //       this.setState({ loading: false });
    //     }
    //   },
    //   (error) => this.setState({ error, loading: false })
    // );
  }

  render() {
    const { username, password, loading, error } = this.state;
    return (
      <div>
        <Helmet>
          <title>RestWork-Admin</title>
          {/* <!-- core:css --> */}
          <link
            rel="stylesheet"
            href={
              process.env.PUBLIC_URL + "/admin-assets/vendors/core/core.css"
            }
          />
          {/* <!-- endinject --> */}
          {/* <!-- plugin css for this page --> */}
          <link
            rel="stylesheet"
            href={
              process.env.PUBLIC_URL +
              "/admin-assets/vendors/bootstrap-datepicker/bootstrap-datepicker.min.css"
            }
          />
          {/* <!-- end plugin css for this page --> */}
          {/* <!-- inject:css --> */}
          <link
            rel="stylesheet"
            href={
              process.env.PUBLIC_URL +
              "/admin-assets/fonts/feather-font/css/iconfont.css"
            }
          />
          <link
            rel="stylesheet"
            href={
              process.env.PUBLIC_URL +
              "/admin-assets/vendors/flag-icon-css/css/flag-icon.min.css"
            }
          />
          {/* <!-- endinject --> */}
          {/* <!-- Layout styles -->   */}
          <link
            rel="stylesheet"
            href={process.env.PUBLIC_URL + "/admin-assets/css/style.css"}
          />
          {/* <!-- End layout styles --> */}

          {/* <!-- core:js --> */}
          <script
            src={process.env.PUBLIC_URL + "/admin-assets/vendors/core/core.js"}
          ></script>
          {/* <!-- endinject --> */}
          {/* <!-- plugin js for this page --> */}
          <script
            src={
              process.env.PUBLIC_URL +
              "/admin-assets/vendors/chartjs/Chart.min.js"
            }
          ></script>
          <script
            src={
              process.env.PUBLIC_URL +
              "/admin-assets/vendors/jquery.flot/jquery.flot.js"
            }
          ></script>
          <script
            src={
              process.env.PUBLIC_URL +
              "/admin-assets/vendors/jquery.flot/jquery.flot.resize.js"
            }
          ></script>
          <script
            src={
              process.env.PUBLIC_URL +
              "/admin-assets/vendors/bootstrap-datepicker/bootstrap-datepicker.min.js"
            }
          ></script>
          <script
            src={
              process.env.PUBLIC_URL +
              "/admin-assets/vendors/apexcharts/apexcharts.min.js"
            }
          ></script>
          <script
            src={
              process.env.PUBLIC_URL +
              "/admin-assets/vendors/progressbar.js/progressbar.min.js"
            }
          ></script>
          {/* <!-- end plugin js for this page --> */}
          {/* <!-- inject:js --> */}
          <script
            src={
              process.env.PUBLIC_URL +
              "/admin-assets/vendors/feather-icons/feather.min.js"
            }
          ></script>
          <script
            src={process.env.PUBLIC_URL + "/admin-assets/js/template.js"}
          ></script>
          {/* <!-- endinject --> */}
          {/* <!-- custom js for this page --> */}
          <script
            src={process.env.PUBLIC_URL + "/admin-assets/js/dashboard.js"}
          ></script>
          <script
            src={process.env.PUBLIC_URL + "/admin-assets/js/datepicker.js"}
          ></script>
          {/* <!-- end custom js for this page --> */}
        </Helmet>

        <div className="main-wrapper">
          <div className="page-wrapper full-page">
            <div className="page-content d-flex align-items-center justify-content-center">
              <div className="row w-100 mx-0 auth-page">
                <div className="col-md-8 col-xl-6 mx-auto">
                  <div className="card">
                    <div className="row">
                      <div className="col-md-5 pr-md-0">
                        <div className="auth-left-wrapper"></div>
                      </div>
                      <div className="col-md-7 pl-md-0">
                        <div className="auth-form-wrapper px-4 py-5">
                          <a href="#" className="logo d-block mb-2">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/admin-assets/images/logo.svg"
                              }
                            />
                          </a>
                          <h5 className="text-muted font-weight-normal mb-4">
                            Welcome back! Log in to your account.
                          </h5>
                          <form
                            className="forms-sample"
                            method="post"
                            onSubmit={this.handleSubmit}
                          >
                            <div className="form-group">
                              <label htmlFor="exampleInputEmail1">
                                Email address
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                placeholder="Email"
                                name="username"
                                value={username}
                                onChange={this.handleChange}
                                required
                                autoFocus
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="exampleInputPassword1">
                                Password
                              </label>
                              <input
                                type="password"
                                className="form-control"
                                name="password"
                                id="exampleInputPassword1"
                                autoComplete="current-password"
                                placeholder="Password"
                                value={password}
                                onChange={this.handleChange}
                                required
                                autoFocus
                              />
                            </div>
                            <div className="form-check form-check-flat form-check-primary">
                              <label className="form-check-label">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                />
                                Remember me
                              </label>
                            </div>

                            <div className="form-group">
                              <button
                                className="btn btn-primary w-100"
                                disabled={loading}
                              >
                                {loading ? "Login....." : "Login"}
                              </button>
                            </div>

                            {/* <a href="#" className="d-block mt-3 text-muted">
                              Not a user? Sign up
                            </a> */}
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminLogin;
