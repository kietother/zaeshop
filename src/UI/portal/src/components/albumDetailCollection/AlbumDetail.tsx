import { useTranslation } from "react-i18next";

const AlbumDetail: React.FC = () => {
    const [t] = useTranslation();

    return (
        <div className="page-wrapper">
            {/* Page Content*/}
            <div className="page-content-tab">
                <div className="container-fluid">
                    {/* Page-Title */}
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="page-title-box">
                                <div className="float-end">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="crm-contacts.html#">Dashboard</a>
                                        </li>
                                        {/*end nav-item*/}
                                        <li className="breadcrumb-item">
                                            <a href="crm-contacts.html#">CMS</a>
                                        </li>
                                        {/*end nav-item*/}
                                        <li className="breadcrumb-item active">Album Detail</li>
                                    </ol>
                                </div>
                                <h4 className="page-title">{t("album.title")}</h4>
                            </div>
                            {/*end page-title-box*/}
                        </div>
                        {/*end col*/}
                    </div>
                    {/* end page title end breadcrumb */}
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <div className="row align-items-center">
                                        <div className="col">
                                            <h4 className="card-title">{t('album_detail.title_detail')}</h4>
                                        </div>
                                        {/*end col*/}
                                        <div className="col-auto">
                                            <button className="btn"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseAlbumDetail"
                                                aria-expanded="true"
                                                aria-controls="collapseAlbumDetail">
                                                <i className="fa-solid fa-arrow-down text-secondary font-16"></i>
                                            </button>
                                        </div>
                                        {/*end col*/}
                                    </div>{" "}
                                    {/*end row*/}
                                </div>
                                {/*end card-header*/}
                                <div className="card-body collapse show" id="collapseAlbumDetail">
                                    <h6 className="card-subtitle font-14 mb-2 font-weight-normal">
                                        This is the card subtitle
                                    </h6>
                                    <p className="card-text text-muted">
                                        Some quick example text to build on the card title and make up the bulk
                                        of the card's content.
                                    </p>
                                    <a href="ui-cards.html#" className="card-link text-primary">
                                        Card link
                                    </a>
                                    <a href="ui-cards.html#" className="card-link text-primary">
                                        Another link
                                    </a>
                                </div>
                                {/*end card-body*/}
                            </div>
                            {/*end card*/}
                        </div>{" "}
                        {/*end col*/}
                    </div>
                    {/*end row*/}
                </div>
                {/* container */}
            </div>
            {/* end page content */}
        </div>
    );
}

export default AlbumDetail;