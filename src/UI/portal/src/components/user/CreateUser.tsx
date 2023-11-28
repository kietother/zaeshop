import * as React from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../../store/thunks/userThunk';
import UserCreateRequestModel from '../../models/user/UserCreateRequestModel';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import { toast } from 'react-toastify';

type CreateUserProps = {
    closeModal: (isReload?: boolean) => void;
};

const CreateUser: React.FC<CreateUserProps> = ({ closeModal }) => {
    const dispatch = useDispatch();
    const [t] = useTranslation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserCreateRequestModel>({
        defaultValues: {
            fullName: '',
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
            isAcceptTerm: false,
        }
    });

    const onSubmit = async (userCreateRequestModel: UserCreateRequestModel) => {
        const toastId = toast.loading(t("toast.please_wait"), {
            hideProgressBar: true
        });
        await createUser(userCreateRequestModel)(dispatch);

        toast.update(toastId, {
            render: t("toast.create_sucessfully"), type: toast.TYPE.SUCCESS, isLoading: false,
            autoClose: 2000
        });
        closeModal(true);
    };

    return (
        <>
            <div
                className="modal fade show d-block"
                id="exampleModalLogin"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalDefaultLogin"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h6 className="modal-title m-0" id="exampleModalDefaultLogin">
                                    {t('user.modal.create_user')}
                                </h6>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    onClick={() => closeModal()}
                                />
                            </div>
                            {/*end modal-header*/}
                            <div className="modal-body">
                                <div className="card-body">

                                    <div className="mb-3 row">
                                        <label
                                            htmlFor="example-text-input"
                                            className="col-sm-2 col-form-label text-end">
                                            {t('user.full_name')}
                                        </label>
                                        <div className="col-sm-10">
                                            <input
                                                className="form-control"
                                                type="text"
                                                defaultValue="Artisanal kale"
                                                id="example-text-input"
                                                {...register('fullName', { required: true })}
                                            />
                                            <div className={classNames("invalid-feedback", {
                                                "d-inline": errors.fullName
                                            })}>
                                                <p>{t('user.full_name_is_required')}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label
                                            htmlFor="example-text-input"
                                            className="col-sm-2 col-form-label text-end">
                                            {t('user.email')}
                                        </label>
                                        <div className="col-sm-10">
                                            <input
                                                className="form-control"
                                                type="text"
                                                defaultValue="Artisanal kale"
                                                id="example-text-input"
                                                {...register('email', { required: true })}
                                            />
                                            <div className={classNames("invalid-feedback", {
                                                "d-inline": errors.email
                                            })}>
                                                <p>{t('user.email_is_required')}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label
                                            htmlFor="example-text-input"
                                            className="col-sm-2 col-form-label text-end">
                                            {t('user.username')}
                                        </label>
                                        <div className="col-sm-10">
                                            <input
                                                className="form-control"
                                                type="text"
                                                defaultValue="Artisanal kale"
                                                id="example-text-input"
                                                {...register('username', { required: true })}
                                            />
                                            <div className={classNames("invalid-feedback", {
                                                "d-inline": errors.username
                                            })}>
                                                <p>{t('user.username_is_required')}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label
                                            htmlFor="example-text-input"
                                            className="col-sm-2 col-form-label text-end">
                                            {t('user.password')}
                                        </label>
                                        <div className="col-sm-10">
                                            <input
                                                className="form-control"
                                                type="password"
                                                defaultValue="Artisanal kale"
                                                id="example-text-input"
                                                {...register('password', { required: true })}
                                            />
                                            <div className={classNames("invalid-feedback", {
                                                "d-inline": errors.password
                                            })}>
                                                <p>{t('user.password_is_required')}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label
                                            htmlFor="example-text-input"
                                            className="col-sm-2 col-form-label text-end">
                                            {t('user.confirm_password')}
                                        </label>
                                        <div className="col-sm-10">
                                            <input
                                                className="form-control"
                                                type="password"
                                                defaultValue="Artisanal kale"
                                                id="example-text-input"
                                                {...register('confirmPassword', {
                                                    required: true,
                                                    validate: (value, formValues) => {
                                                        if (!!value && value !== formValues.password) {
                                                            console.log(1, t('user.password_did_not_match'));
                                                            return t('user.password_did_not_match');
                                                        }
                                                        return true;
                                                    }
                                                })}
                                            />
                                            <div className={classNames("invalid-feedback", {
                                                "d-inline": errors.confirmPassword
                                            })}>
                                                <p>{errors.confirmPassword?.message  || t('user.confirm_password_is_required')}</p>
                                            </div>
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
                                    onClick={() => closeModal()}
                                >
                                    {t('user.modal.close')}
                                </button>
                                <button type="submit" className="btn btn-primary btn-sm">
                                    {t('user.modal.save_changes')}
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

export default CreateUser;