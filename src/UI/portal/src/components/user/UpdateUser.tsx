import * as React from 'react';
import User from '../../models/User';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../store/thunks/userThunk';
import UserUpdateRequestModel from '../../models/user/UserUpdateRequestModel';

type UpdateUserProps = {
    user: User;
    closeModal: () => void;
};

const UpdateUser: React.FC<UpdateUserProps> = ({ user, closeModal }) => {
    const dispatch = useDispatch();
    const [userUpdateRequestModel, setUserUpdateRequestModel] = React.useState<UserUpdateRequestModel>({
        fullName: '',
        password: '',
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUserUpdateRequestModel({ ...userUpdateRequestModel, [name]: value });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(userUpdateRequestModel);
        await updateUser(user.id, userUpdateRequestModel)(dispatch);
    };

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
                                Update User
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
                                <form onSubmit={handleSubmit}>
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
                                                name="fullName"
                                                onChange={handleInputChange}
                                                value={userUpdateRequestModel.fullName}
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
                                                name="password"
                                                onChange={handleInputChange}
                                                value={userUpdateRequestModel.password}
                                            />
                                        </div>
                                    </div>
                                </form>
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

export default UpdateUser;