import React from "react";
import Role from "../../models/role/Role";
import RoleUpdateRequestModel from "../../models/role/RoleUpdateRequestModel";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { updateRole } from "../../store/thunks/roleThunk";
import classNames from "classnames";

type UpdateRoleProps = {
    role: Role;
    closeModal: (isReload?: boolean) => void;
};

const UpdateRole: React.FC<UpdateRoleProps> = ({ role, closeModal }) => {
    const dispatch = useDispatch();
    const [t] = useTranslation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RoleUpdateRequestModel>({
        defaultValues: {
            name: role.name ?? ''
        }
    });

    const onSubmit = async (roleUpdateRequestModel: RoleUpdateRequestModel) => {
        await updateRole(role.id, roleUpdateRequestModel)(dispatch);
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
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h6 className="modal-title m-0" id="exampleModalDefaultLogin">
                                    {t('role.modal.update_role')}
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
                                                {...register('name', { required: true })}
                                            />
                                            <div className={classNames("invalid-feedback", {
                                                "d-inline": errors.name
                                            })}>
                                                <p>{t('user.full_name_is_required')}</p>
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
}

export default UpdateRole;