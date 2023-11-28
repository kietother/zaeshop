import React from "react";
import { useTranslation } from "react-i18next";
import dayjs from "../../utils/dayjs/dayjs-custom";
import { deleteAlbum } from "../../services/album/albumService";
import AlbumPagingResponse from "../../models/album/AlbumPagingResponse";
import { toast } from "react-toastify";

interface DeleteAlbumProps {
    album: AlbumPagingResponse;
    closeModal: (isReload?: boolean) => void;
}

const DeleteAlbum: React.FC<DeleteAlbumProps> = ({ album, closeModal }) => {
    const [t] = useTranslation();

    const onDeleteAlbum = async () => {
        const toastId = toast.loading(t("toast.please_wait"), {
            hideProgressBar: true
        });

        const response = await deleteAlbum(album.id);
        if (response.status === 200) {
            toast.update(toastId, {
                render: t("toast.delete_sucessfully"), type: toast.TYPE.SUCCESS, isLoading: false,
                autoClose: 2000
            });

            closeModal(true);
            return;
        }
        toast.done(toastId);
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
                                {t('album.modal.delete_album')}
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
                                        <img src={process.env.PUBLIC_URL + "/assets/images/small/btc.png"} alt="" className="img-fluid" />
                                    </div>
                                    {/*end col*/}
                                    <div className="col-lg-9">
                                        <h5>{t('user.modal.are_you_sure')}</h5>
                                        <span className="badge bg-soft-secondary">{t('album.modal.delete_album')}</span>
                                        <small className="text-muted ml-2">{dayjs.utc().local().format('DD/MM/YYYY')}</small>
                                    </div>
                                    {/*end col*/}
                                </div>
                                {/*end row*/}
                            </div>
                            {/*end card-body*/}
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
                                onClick={onDeleteAlbum}>
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
};

export default DeleteAlbum;
