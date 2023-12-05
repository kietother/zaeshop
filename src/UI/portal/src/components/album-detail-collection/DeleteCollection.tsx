import { useTranslation } from "react-i18next";
import CollectionPagingResponse from "../../models/album-detail-collection/CollectionPagingResponse";
import { toast } from "react-toastify";
import { deleteCollection } from "../../services/album-detail-collection/albumDetailCollectionService";
import dayjsCustom from "../../utils/dayjs/dayjs-custom";
import React from "react";

type DeleteCollectionProps = {
    closeModal: (isReload?: boolean) => void;
    albumId: number;
    collection: CollectionPagingResponse;
};

const DeleteCollection: React.FC<DeleteCollectionProps> = ({ closeModal, collection }: DeleteCollectionProps) => {
    const [t] = useTranslation();

    const onDelete = async () => {
        const toastId = toast.loading(t("toast.please_wait"), {
            hideProgressBar: true
        });

        const response = await deleteCollection(collection.id);
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
                                {t('album_detail.modal.delete_collection')}
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
                                        <span className="badge bg-soft-secondary">{t('album_detail.modal.delete_collection')}</span>
                                        <small className="text-muted ml-2">{dayjsCustom.utc().local().format('DD/MM/YYYY')}</small>
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

export default React.memo(DeleteCollection);