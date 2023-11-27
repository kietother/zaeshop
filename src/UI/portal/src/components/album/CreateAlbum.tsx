import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import AlbumRequestModel from "../../models/album/AlbumRequestModel";
import { createAlbum } from "../../services/album/albumService";
import classNames from "classnames";

type CreateAlbumProps = {
    closeModal: () => void;
};

const CreateAlbum: React.FC<CreateAlbumProps> = ({ closeModal }) => {
    const [t] = useTranslation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AlbumRequestModel>({
        defaultValues: {
            title: ''
        }
    });

    const onSubmit = async (albumRequestModel: AlbumRequestModel) => {
        const response = await createAlbum(albumRequestModel);
        if (response.status === 200) {
            closeModal();
        }
    }

    return (
        <>
            <dialog
                className="modal fade show d-block"
                id="exampleModalLogin"
                tabIndex={-1}
                aria-labelledby="exampleModalDefaultLogin"
                aria-hidden="true">
                <html className="modal-dialog">
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
                                            {t('user.full_name')}
                                        </label>
                                        <div className="col-sm-10">
                                            <input
                                                className="form-control"
                                                type="text"
                                                defaultValue="Artisanal kale"
                                                id="example-text-input"
                                                {...register('title', { required: true })}
                                            />
                                            <div className={classNames("invalid-feedback", {
                                                "d-inline": errors.title
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
                                                {...register('description')}
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
                </html>
                {/*end modal-dialog*/}
            </dialog>
            {/*end modal*/}
        </>
    )
}

export default CreateAlbum;