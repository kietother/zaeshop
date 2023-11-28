import { useTranslation } from "react-i18next";
import Role from "../../models/role/Role";
import { useDispatch } from "react-redux";
import { deleteRole } from "../../store/thunks/roleThunk";
import dayjs from "dayjs";

type DeleteRoleProps = {
    role: Role;
    closeModal: (isReload?: boolean) => void;
};

const DeleteRole: React.FC<DeleteRoleProps> = ({ role, closeModal }) => {

    const [t] = useTranslation();
    const dispatch = useDispatch();

    const onDelete = async () => {
        await deleteRole(role.id)(dispatch);
        closeModal(true);
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
                            {t('role.modal.delete_role')}
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
                            <div className="row">
                                <div className="col-lg-3 text-center align-self-center">
                                    <img src={process.env.PUBLIC_URL + "assets/images/small/btc.png"} alt="" className="img-fluid" />
                                </div>
                                {/*end col*/}
                                <div className="col-lg-9">
                                    <h5>{t('user.modal.are_you_sure')}</h5>
                                    <span className="badge bg-soft-secondary">{t('role.modal.delete_role')}</span>
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
                            onClick={() => closeModal()}
                        >
                            {t('user.modal.close')}
                        </button>
                        <button type="submit" className="btn btn-danger btn-sm"
                            onClick={onDelete}>
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

export default DeleteRole;