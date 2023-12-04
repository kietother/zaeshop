import { useTranslation } from "react-i18next";

const AlbumExtraInfo: React.FC = () => {
    const [t] = useTranslation();

    return (
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-header">
                        <div className="row align-items-center">
                            <div className="col">
                                <h4 className="card-title">{t('album_detail.extra_info')}</h4>
                            </div>
                            {/*end col*/}
                            <div className="col-auto">
                                <button className="btn"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseAlbumExtraInfo"
                                    aria-expanded="true"
                                    aria-controls="collapseAlbumExtraInfo">
                                    <i className="fa-solid fa-arrow-down text-secondary font-16"></i>
                                </button>
                            </div>
                            {/*end col*/}
                        </div>{" "}
                        {/*end row*/}
                    </div>
                    {/*end card-header*/}
                    <div className="card-body collapse" id="collapseAlbumExtraInfo">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="mb-3 row">
                                    <label
                                        className="col-sm-2 col-form-label text-end"
                                    >
                                        {t('album.modal.title')}
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
                                        className="col-sm-2 col-form-label text-end"
                                    >
                                        {t('album.modal.description')}
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            className="form-control"
                                            type="email"
                                            defaultValue="bootstrap@example.com"
                                            id="example-email-input"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-3 row">
                                    <label
                                        className="col-sm-2 col-form-label text-end"
                                    >
                                        {t('album.modal.alert_message')}
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
                                        className="col-sm-2 col-form-label text-end"
                                    >
                                        {t('album.modal.content_types')}
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            className="form-control"
                                            type="email"
                                            defaultValue="bootstrap@example.com"
                                            id="example-email-input"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*end card-body*/}
                    </div>
                    {/*end card*/}
                </div>{" "}
                {/*end col*/}
            </div>
            {/*end row*/}
        </div>
    );
}

export default AlbumExtraInfo;