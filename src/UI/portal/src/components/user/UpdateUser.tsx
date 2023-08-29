import * as React from 'react';
import User from '../../models/User';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../store/thunks/userThunk';
import UserUpdateRequestModel from '../../models/user/UserUpdateRequestModel';
import { useTranslation } from 'react-i18next';

type UpdateUserProps = {
    user: User;
    closeModal: () => void;
};

const UpdateUser: React.FC<UpdateUserProps> = ({ user, closeModal }) => {
    const dispatch = useDispatch();
    const [t] = useTranslation();
    const [userUpdateRequestModel, setUserUpdateRequestModel] = React.useState<UserUpdateRequestModel>({
        fullName: user.fullName || '',
        password: '',
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUserUpdateRequestModel({ ...userUpdateRequestModel, [name]: value });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await updateUser(user.id, userUpdateRequestModel)(dispatch);
        closeModal();
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
                    <form onSubmit={handleSubmit}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h6 className="modal-title m-0" id="exampleModalDefaultLogin">
                                    {t('user.modal.update_user')}
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
                                </div>
                            </div>
                            {/*end modal-body*/}
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-de-secondary btn-sm"
                                    data-bs-dismiss="modal"
                                    onClick={closeModal}
                                >
                                    Close
                                </button>
                                <button type="submit" className="btn btn-primary btn-sm">
                                    Save changes
                                </button>
                            </div>
                            {/*end modal-footer*/}
                        </div>
                        {/*end modal-content*/}
                    </form>
                </div>
                {/*end modal-dialog*/}
            </div>
            {/*end modal*/}
        </>
    );
};

export default UpdateUser;