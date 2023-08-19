import * as React from 'react';

type CreateUserProps = {
    closeModal: () => void;
};

const CreateUser: React.FC<CreateUserProps> = ({ closeModal }) => {
    return (
        <>
            <div
                className="modal fade show d-block"
                id="exampleModalLogin"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalDefaultLogin"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h6 className="modal-title m-0" id="exampleModalDefaultLogin">
                                Create User
                            </h6>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                onClick={closeModal}
                            />
                        </div>
                        {/*end modal-header*/}
                        <div className="modal-body">
                            <div className="card-body">
                                <div className="mb-3 row">
                                    <label
                                        htmlFor="example-text-input"
                                        className="col-sm-2 col-form-label text-end">
                                        FullName
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            className="form-control"
                                            type="text"
                                            defaultValue="Artisanal kale"
                                            id="example-text-input"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label
                                        htmlFor="example-text-input"
                                        className="col-sm-2 col-form-label text-end">
                                        Email
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            className="form-control"
                                            type="text"
                                            defaultValue="Artisanal kale"
                                            id="example-text-input"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label
                                        htmlFor="example-text-input"
                                        className="col-sm-2 col-form-label text-end">
                                        UserName
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            className="form-control"
                                            type="text"
                                            defaultValue="Artisanal kale"
                                            id="example-text-input"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label
                                        htmlFor="example-text-input"
                                        className="col-sm-2 col-form-label text-end">
                                        Password
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            className="form-control"
                                            type="text"
                                            defaultValue="Artisanal kale"
                                            id="example-text-input"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label
                                        htmlFor="example-text-input"
                                        className="col-sm-2 col-form-label text-end">
                                        Password
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            className="form-control"
                                            type="text"
                                            defaultValue="Artisanal kale"
                                            id="example-text-input"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 row form-check">
                                    <input
                                        className="col-sm-2 form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        id="flexCheckDefault"
                                    />
                                    <label className="col-sm-10 form-check-label" htmlFor="flexCheckDefault">
                                        Accept Term
                                    </label>
                                </div>
                            </div>
                        </div>
                        {/*end modal-body*/}
                    </div>
                    {/*end modal-content*/}
                </div>
                {/*end modal-dialog*/}
            </div>
            {/*end modal*/}
        </>
    );
};

export default CreateUser;