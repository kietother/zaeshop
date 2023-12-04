import { useTranslation } from "react-i18next";
import AlbumDetail from "../../components/album-detail-collection/AlbumDetail";
import { useParams } from "react-router-dom";
import AlbumExtraInfo from "../../components/album-detail-collection/AlbumExtraInfo";

const AlbumDetailCollectionPage: React.FC = () => {
    const [t] = useTranslation();
    const { albumId } = useParams();

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
                    <AlbumDetail id={albumId} />
                    <AlbumExtraInfo id={albumId} />
                    {/* container */}
                </div>
                {/* end page content */}
            </div>
        </div>
    );
}

export default AlbumDetailCollectionPage;