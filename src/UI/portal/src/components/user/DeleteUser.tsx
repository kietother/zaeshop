import dayjs from 'dayjs';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import User from '../../models/User';
import { deleteUser } from '../../store/thunks/userThunk';

type DeleteUserProps = {
    user: User;
    closeModal: () => void;
};

const DeleteUser: React.FC<DeleteUserProps> = ({ user, closeModal }) => {

    const [t] = useTranslation();
    const dispatch = useDispatch();

    const onDeleteUser = async () => {
        await deleteUser(user.id)(dispatch);
        closeModal();
    }

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
                                {t('user.modal.delete_user')}
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
                                <div className="row">
                                    <div className="col-lg-3 text-center align-self-center">
                                        <img src={process.env.PUBLIC_URL + "assets/images/small/btc.png"} alt="" className="img-fluid" />
                                    </div>
                                    {/*end col*/}
                                    <div className="col-lg-9">
                                        <h5>{t('user.modal.are_you_sure')}</h5>
                                        <span className="badge bg-soft-secondary">{t('user.modal.delete_user')}</span>
                                        <small className="text-muted ml-2">{dayjs().format('DD/MM/YYYY')}</small>
                                    </div>
                                    {/*end col*/}
                                </div>
                                {/*end row*/}
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
                                {t('user.modal.close')}
                            </button>
                            <button type="submit" className="btn btn-danger btn-sm"
                                onClick={onDeleteUser}>
                                {t('user.modal.delete')}
                            </button>
                        </div>
                        {/*end modal-footer*/}
                    </div>
                    {/*end modal-content*/}
                </div>
                {/*end modal-dialog*/}
            </div>
            {/*end modal*/}
        </>
    );
}

export default DeleteUser;