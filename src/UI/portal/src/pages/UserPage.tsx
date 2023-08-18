import React, { useEffect } from 'react';
import dayjs from 'dayjs';
import { StoreState } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../store/thunks/userThunk';

const UserPage: React.FC = () => {
    const userState = useSelector((state: StoreState) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        getUsers()(dispatch);
    }, [dispatch]);

    return (
        <div className="page-wrapper">
            {/* Page Content*/}
            <div className="page-content-tab">
                <div className="container-fluid">
                    {/* Page-Title */}
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="page-title-box">
                                <div className="float-end">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="crm-contacts.html#">Metrica</a>
                                        </li>
                                        {/*end nav-item*/}
                                        <li className="breadcrumb-item">
                                            <a href="crm-contacts.html#">CRM</a>
                                        </li>
                                        {/*end nav-item*/}
                                        <li className="breadcrumb-item active">Contacts</li>
                                    </ol>
                                </div>
                                <h4 className="page-title">Contacts</h4>
                            </div>
                            {/*end page-title-box*/}
                        </div>
                        {/*end col*/}
                    </div>
                    {/* end page title end breadcrumb */}
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <div className="row align-items-center">
                                        <div className="col">
                                            <h4 className="card-title">Contacts Details</h4>
                                        </div>
                                        {/*end col*/}
                                    </div>{" "}
                                    {/*end row*/}
                                </div>
                                {/*end card-header*/}
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Customer Name</th>
                                                    <th>Email</th>
                                                    <th>Phone No</th>
                                                    <th>Lead Score</th>
                                                    <th>Company</th>
                                                    <th>Tags</th>
                                                    <th>Action</th>
                                                </tr>
                                                {/*end tr*/}
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <img
                                                            src="assets/images/users/user-10.jpg"
                                                            alt=""
                                                            className="thumb-sm rounded-circle me-2"
                                                        />
                                                        Donald Gardner
                                                        <small className="badge bg-soft-pink ms-1">New</small>
                                                    </td>
                                                    <td>xyx@gmail.com</td>
                                                    <td>+123456789</td>
                                                    <td>68</td>
                                                    <td>Starbucks coffee</td>
                                                    <td>
                                                        <span className="badge bg-soft-primary">test</span>
                                                        <span className="badge bg-soft-primary">another</span>
                                                    </td>
                                                    <td>
                                                        <a href="crm-contacts.html#">
                                                            <i className="las la-pen text-secondary font-16" />
                                                        </a>
                                                        <a href="crm-contacts.html#">
                                                            <i className="las la-trash-alt text-secondary font-16" />
                                                        </a>
                                                    </td>
                                                </tr>
                                                {/*end tr*/}
                                                <tr>
                                                    <td>
                                                        <img
                                                            src="assets/images/users/user-9.jpg"
                                                            alt=""
                                                            className="thumb-sm rounded-circle me-2"
                                                        />
                                                        Matt Rosales
                                                    </td>
                                                    <td>xyx@gmail.com</td>
                                                    <td>+123456789</td>
                                                    <td>112</td>
                                                    <td>Mac Donald</td>
                                                    <td>
                                                        <span className="badge bg-soft-primary">test</span>
                                                        <span className="badge bg-soft-primary">another</span>
                                                        <span className="badge bg-soft-primary">something</span>
                                                    </td>
                                                    <td>
                                                        <a href="crm-contacts.html#">
                                                            <i className="las la-pen text-secondary font-16" />
                                                        </a>
                                                        <a href="crm-contacts.html#">
                                                            <i className="las la-trash-alt text-secondary font-16" />
                                                        </a>
                                                    </td>
                                                </tr>
                                                {/*end tr*/}
                                                <tr>
                                                    <td>
                                                        <img
                                                            src="assets/images/users/user-8.jpg"
                                                            alt=""
                                                            className="thumb-sm rounded-circle me-2"
                                                        />
                                                        Michael Hill
                                                        <small className="badge bg-soft-blue ms-1">New</small>
                                                    </td>
                                                    <td>xyx@gmail.com</td>
                                                    <td>+123456789</td>
                                                    <td>64</td>
                                                    <td>Life Good</td>
                                                    <td>
                                                        <span className="badge bg-soft-primary">test</span>
                                                        <span className="badge bg-soft-primary">another</span>
                                                    </td>
                                                    <td>
                                                        <a href="crm-contacts.html#">
                                                            <i className="las la-pen text-secondary font-16" />
                                                        </a>
                                                        <a href="crm-contacts.html#">
                                                            <i className="las la-trash-alt text-secondary font-16" />
                                                        </a>
                                                    </td>
                                                </tr>
                                                {/*end tr*/}
                                                <tr>
                                                    <td>
                                                        <img
                                                            src="assets/images/users/user-7.jpg"
                                                            alt=""
                                                            className="thumb-sm rounded-circle me-2"
                                                        />
                                                        Nancy Flanary
                                                    </td>
                                                    <td>xyx@gmail.com</td>
                                                    <td>+123456789</td>
                                                    <td>124</td>
                                                    <td>Flipcart</td>
                                                    <td>
                                                        <span className="badge bg-soft-primary">test</span>
                                                        <span className="badge bg-soft-primary">another</span>
                                                        <span className="badge bg-soft-primary">something</span>
                                                    </td>
                                                    <td>
                                                        <a href="crm-contacts.html#">
                                                            <i className="las la-pen text-secondary font-16" />
                                                        </a>
                                                        <a href="crm-contacts.html#">
                                                            <i className="las la-trash-alt text-secondary font-16" />
                                                        </a>
                                                    </td>
                                                </tr>
                                                {/*end tr*/}
                                                <tr>
                                                    <td>
                                                        <img
                                                            src="assets/images/users/user-6.jpg"
                                                            alt=""
                                                            className="thumb-sm rounded-circle me-2"
                                                        />
                                                        Dorothy Key
                                                    </td>
                                                    <td>xyx@gmail.com</td>
                                                    <td>+123456789</td>
                                                    <td>33</td>
                                                    <td>Adidas</td>
                                                    <td>
                                                        <span className="badge bg-soft-primary">test</span>
                                                        <span className="badge bg-soft-primary">something</span>
                                                    </td>
                                                    <td>
                                                        <a href="crm-contacts.html#">
                                                            <i className="las la-pen text-secondary font-16" />
                                                        </a>
                                                        <a href="crm-contacts.html#">
                                                            <i className="las la-trash-alt text-secondary font-16" />
                                                        </a>
                                                    </td>
                                                </tr>
                                                {/*end tr*/}
                                                <tr>
                                                    <td>
                                                        <img
                                                            src="assets/images/users/user-5.jpg"
                                                            alt=""
                                                            className="thumb-sm rounded-circle me-2"
                                                        />
                                                        Joseph Cross
                                                    </td>
                                                    <td>xyx@gmail.com</td>
                                                    <td>+123456789</td>
                                                    <td>84</td>
                                                    <td>Reebok</td>
                                                    <td>
                                                        <span className="badge bg-soft-primary">test</span>
                                                        <span className="badge bg-soft-primary">another</span>
                                                        <span className="badge bg-soft-primary">something</span>
                                                    </td>
                                                    <td>
                                                        <a href="crm-contacts.html#">
                                                            <i className="las la-pen text-secondary font-16" />
                                                        </a>
                                                        <a href="crm-contacts.html#">
                                                            <i className="las la-trash-alt text-secondary font-16" />
                                                        </a>
                                                    </td>
                                                </tr>
                                                {/*end tr*/}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <button className="btn btn-outline-light btn-sm px-4 ">
                                                + Add New
                                            </button>
                                        </div>
                                        {/*end col*/}
                                        <div className="col-auto">
                                            <nav aria-label="...">
                                                <ul className="pagination pagination-sm mb-0">
                                                    <li className="page-item disabled">
                                                        <a
                                                            className="page-link"
                                                            href="crm-contacts.html#"
                                                            tabIndex={-1}
                                                        >
                                                            Previous
                                                        </a>
                                                    </li>
                                                    <li className="page-item active">
                                                        <a className="page-link" href="crm-contacts.html#">
                                                            1
                                                        </a>
                                                    </li>
                                                    <li className="page-item">
                                                        <a className="page-link" href="crm-contacts.html#">
                                                            2 <span className="sr-only">(current)</span>
                                                        </a>
                                                    </li>
                                                    <li className="page-item">
                                                        <a className="page-link" href="crm-contacts.html#">
                                                            3
                                                        </a>
                                                    </li>
                                                    <li className="page-item">
                                                        <a className="page-link" href="crm-contacts.html#">
                                                            Next
                                                        </a>
                                                    </li>
                                                </ul>
                                                {/*end pagination*/}
                                            </nav>
                                            {/*end nav*/}
                                        </div>{" "}
                                        {/*end col*/}
                                    </div>
                                    {/*end row*/}
                                </div>
                                {/*end card-body*/}
                            </div>
                            {/*end card*/}
                        </div>{" "}
                        {/*end col*/}
                    </div>
                    {/*end row*/}
                </div>
                {/* container */}
                {/*Start Rightbar*/}
                {/*Start Rightbar/offcanvas*/}
                <div
                    className="offcanvas offcanvas-end"
                    tabIndex={-1}
                    id="Appearance"
                    aria-labelledby="AppearanceLabel"
                >
                    <div className="offcanvas-header border-bottom">
                        <h5 className="m-0 font-14" id="AppearanceLabel">
                            Appearance
                        </h5>
                        <button
                            type="button"
                            className="btn-close text-reset p-0 m-0 align-self-center"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        />
                    </div>
                    <div className="offcanvas-body">
                        <h6>Account Settings</h6>
                        <div className="p-2 text-start mt-3">
                            <div className="form-check form-switch mb-2">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="settings-switch1"
                                />
                                <label className="form-check-label" htmlFor="settings-switch1">
                                    Auto updates
                                </label>
                            </div>
                            {/*end form-switch*/}
                            <div className="form-check form-switch mb-2">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="settings-switch2"
                                />
                                <label className="form-check-label" htmlFor="settings-switch2">
                                    Location Permission
                                </label>
                            </div>
                            {/*end form-switch*/}
                            <div className="form-check form-switch">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="settings-switch3"
                                />
                                <label className="form-check-label" htmlFor="settings-switch3">
                                    Show offline Contacts
                                </label>
                            </div>
                            {/*end form-switch*/}
                        </div>
                        {/*end /div*/}
                        <h6>General Settings</h6>
                        <div className="p-2 text-start mt-3">
                            <div className="form-check form-switch mb-2">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="settings-switch4"
                                />
                                <label className="form-check-label" htmlFor="settings-switch4">
                                    Show me Online
                                </label>
                            </div>
                            {/*end form-switch*/}
                            <div className="form-check form-switch mb-2">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="settings-switch5"
                                />
                                <label className="form-check-label" htmlFor="settings-switch5">
                                    Status visible to all
                                </label>
                            </div>
                            {/*end form-switch*/}
                            <div className="form-check form-switch">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="settings-switch6"
                                />
                                <label className="form-check-label" htmlFor="settings-switch6">
                                    Notifications Popup
                                </label>
                            </div>
                            {/*end form-switch*/}
                        </div>
                        {/*end /div*/}
                    </div>
                    {/*end offcanvas-body*/}
                </div>
                {/*end Rightbar/offcanvas*/}
                {/*end Rightbar*/}
                {/*Start Footer*/}
                {/* Footer Start */}
                <footer className="footer text-center text-sm-start">
                    © Metrica{" "}
                    <span className="text-muted d-none d-sm-inline-block float-end">
                        Crafted with <i className="mdi mdi-heart text-danger" /> by Mannatthemes
                    </span>
                </footer>
                {/* end Footer */}
                {/*end footer*/}
            </div>
            {/* end page content */}
        </div>
    );
};

export default UserPage;
